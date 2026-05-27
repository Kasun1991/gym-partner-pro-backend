const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://kasun1991.github.io',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    const url = new URL(request.url);

    if (url.pathname === '/support') {
      return handleSupport(request, env);
    }
    if (url.pathname === '/feature') {
      return handleFeature(request, env);
    }

    return json({ error: 'Not found' }, 404);
  }
};

async function handleSupport(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { name, email, subject, message, website } = body;

  if (website) return json({ success: true }, 200); // honeypot

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return json({ error: 'Missing required fields: name, email, subject, message' }, 400);
  }

  const safeSubject = sanitiseTitle(subject);
  const issueTitle = `[Support] ${safeSubject}`;
  const issueBody = [
    `**From:** ${escMd(name.trim())}`,
    `**Email:** ${escMd(email.trim())}`,
    `**Subject:** ${escMd(subject.trim())}`,
    '',
    '**Message:**',
    escMd(message.trim()),
  ].join('\n');

  return createIssue(env, issueTitle, issueBody, ['support', 'new']);
}

async function handleFeature(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { name, email, title, description, useCase, website } = body;

  if (website) return json({ success: true }, 200); // honeypot

  if (!name?.trim() || !email?.trim() || !title?.trim() || !description?.trim()) {
    return json({ error: 'Missing required fields: name, email, title, description' }, 400);
  }

  const safeTitle = sanitiseTitle(title);
  const issueTitle = `[Feature] ${safeTitle}`;
  const parts = [
    `**From:** ${escMd(name.trim())}`,
    `**Email:** ${escMd(email.trim())}`,
    `**Feature:** ${escMd(title.trim())}`,
    '',
    '**Description:**',
    escMd(description.trim()),
  ];
  if (useCase?.trim()) {
    parts.push('', '**Use case:**', escMd(useCase.trim()));
  }
  const issueBody = parts.join('\n');

  return createIssue(env, issueTitle, issueBody, ['feature-request', 'new']);
}

async function createIssue(env, title, body, labels) {
  const apiUrl = `https://api.github.com/repos/${env.GITHUB_REPO_OWNER}/${env.GITHUB_REPO_NAME}/issues`;

  let res;
  try {
    res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'gym-partner-worker',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body, labels }),
    });
  } catch (err) {
    return json({ error: 'Failed to reach GitHub API' }, 502);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return json({ error: `GitHub API error: ${res.status}`, detail: text }, 502);
  }

  const issue = await res.json();
  return json({ success: true, issueUrl: issue.html_url }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function sanitiseTitle(str) {
  return str.trim().replace(/[\r\n]+/g, ' ').slice(0, 120);
}

function escMd(str) {
  return str.replace(/[`]/g, "'");
}