# Privacy Policy

**Effective date:** 27 May 2026
**Last updated:** 27 May 2026

This Privacy Policy explains how the **Gym Partner Pro** Android app ("the App") handles personal information. The App is published on Google Play by **Kasun Gunathilaka**, an individual developer based in Sri Lanka ("we", "us", "the developer"). Contact: **kasungunathilaka1991@gmail.com**.

Please read this together with the Terms and Conditions.

---

## 1. Two Kinds of Data — Read This First

The App handles two different sets of data, and it is important not to confuse them:

**A. Your data (the App user's data)**
You are the gym owner, manager or staff member who installed the App. The App handles a small amount of data **about you** — for example, the Google account you sign in with for cloud sync, and technical data sent to Firebase Crashlytics and Analytics.

**B. Your members' data (the gym members' data)**
The App is a tool you use to record information about your gym members. **You** decide what to enter, and **you** are the data controller for that information. The developer does not have direct access to this data on your device. If you turn on cloud sync, the data goes to a Firebase Firestore database under **your** Google account — not under a database we control.

This Privacy Policy describes how the App handles both kinds of data, but the responsibility for member data sits primarily with you.

---

## 2. What Data the App Handles

### 2.1 Member data you enter into the App

For each gym member, you may record:

- **Identity data:** full name, government-issued identity number (e.g. national ID, passport number, driver's licence, or any other ID the gym operator uses to uniquely identify a member), age, birthday, blood type
- **Contact data:** phone number, email address, home address
- **Profile photo:** a photo captured by the device camera or chosen from device storage, stored as a BLOB in the local database
- **Medical information:** medical conditions, allergies, blood pressure readings, free-text notes
- **Emergency contact:** name and phone number of an emergency contact
- **Subscription data:** plan name, duration, price, start date, end date, freeze status, lifecycle status
- **Body measurements:** weight, height, BMI, body fat percentage, chest, waist, hips, arms

Some of these fields — **identity numbers, medical conditions, allergies, blood pressure, and profile photos** — are sensitive. The App is set up to store them so you can do your job as a gym operator, but the responsibility to collect them lawfully and keep them secure on the device sits with you.

### 2.2 Data about you as the App user

- **Google account information** if you turn on cloud sync — your name, email address and Google account ID, as provided by Google Sign-In via Firebase Auth
- **In-app purchase status** — whether you have purchased the Lite or Pro tier, returned to the App through Google Play Billing
- **App settings and preferences** — for example notification settings, dark mode, sync preferences

### 2.3 Data collected automatically

- **Crash reports** via Firebase Crashlytics (release builds only) — device model, OS version, app version, the stack trace and state at the moment of the crash
- **Usage analytics** via Firebase Analytics (release builds only) — events such as screens opened, features used, app opens and time of use; device model, OS version, language, country (derived from IP, not stored as precise location), and an app-instance identifier
- **Remote Config values** via Firebase Remote Config — the App fetches feature flags and update settings from Firebase
- **Ad data** via Google AdMob (free tier only) — see Section 4.6

We do **not** collect your GPS location. We do **not** read your contacts. We do **not** access your SMS messages.

---

## 3. Why We Use Each Type of Data

| Data | Why it is used | Where it lives |
|---|---|---|
| Member profile, medical info, emergency contacts, subscriptions, measurements, photos | So you can manage your gym members | Local SQLite database on your device. Also Firestore under your Google account **if** you turn on cloud sync |
| Phone number of a member | So you can send SMS reminders via your device's SMS app | Local database (and Firestore if synced) |
| Member birthday / subscription end date | So the App can show you local notifications | Local database (and Firestore if synced) |
| Your Google account details | To sign you in for cloud sync | Firebase Auth (managed by Google) |
| In-app purchase status | To unlock paid features | Google Play Billing (managed by Google), plus a local flag |
| Crash reports | To find and fix bugs | Firebase Crashlytics (Google) |
| Usage analytics | To understand which features are used | Firebase Analytics (Google) |
| Remote Config values | To control feature flags and in-app updates | Firebase Remote Config (Google) |
| Ad identifiers | To show ads (free tier) | Google AdMob |

---

## 4. Third-Party Services Used by the App

### 4.1 Firebase Crashlytics (release builds only)
Collects crash reports including device model, OS version, app version and the technical context of the crash. Used to fix bugs. Google's privacy policy applies: https://policies.google.com/privacy

### 4.2 Firebase Analytics (release builds only)
Collects usage events, device info, approximate country, language, and an app-instance ID. Used to understand which features people use. Google's privacy policy applies.

### 4.3 Firebase Remote Config
The App periodically asks Firebase for configuration values (feature flags, in-app update flags). Google's privacy policy applies.

### 4.4 Firebase Authentication (Google Sign-In)
Used only if you turn on cloud sync. Firebase Auth stores your name, email and Google account ID. Google's privacy policy applies.

### 4.5 Firebase Firestore (cloud sync)
Used only if you turn on cloud sync. Your gym data is uploaded to a Firestore database **under your own Google account**. We do not run a separate server. Firestore stores all the member data fields listed in Section 2.1 above. Google's privacy and security policies apply: https://firebase.google.com/support/privacy

### 4.6 Google AdMob (free tier only)
Shows ads in the free tier. AdMob may collect the Android Advertising ID, IP address, device info, basic event data and (depending on user consent) data used for personalised ads. You can reset or limit your Advertising ID in Android Settings → Privacy → Ads. Google's ad policy applies: https://policies.google.com/technologies/ads

Buying the Lite or Pro tier turns off ads and AdMob is not loaded.

### 4.7 Google Play Billing
Handles in-app purchases. Google receives your payment information, not us. Google's Play terms apply.

We do **not** use any other third-party analytics, ad networks, or tracking services.

---

## 5. Where Your Data Is Stored and How to Delete It

### 5.1 Local storage (always)
All member data you enter is stored in an SQLite database on your device. Photos are stored as BLOBs inside that database.

To delete this data:
- Use the in-app delete buttons to remove individual members, measurements, emergency contacts, etc., or
- Clear the App's storage (Android Settings → Apps → Gym Partner Pro → Storage → Clear data), or
- Uninstall the App

Each of these removes the local database. Uninstalling does **not** delete cloud data.

### 5.2 Cloud storage (only if you turn on cloud sync)
If you turn on cloud sync, the same data is mirrored to Firestore under your Google account. To delete this data:
- Use the in-app member delete actions (which delete the corresponding document from Firestore), **or**
- Email us at **kasungunathilaka1991@gmail.com** from the Google account used to sign in and ask us to remove the Firestore data for that account — we will delete it within 30 days

### 5.3 Firebase technical data
Crashlytics, Analytics and Remote Config data is held by Google for the retention periods set in Firebase. You can reduce future collection by uninstalling the App.

### 5.4 In-app purchase records
Held by Google Play under your Google account. We cannot delete these.

---

## 6. Who We Share Data With

We do **not sell** any data. We do **not share** member data with marketers, data brokers, or anyone else.

The App talks to these parties only:

- **Google / Firebase** — Crashlytics, Analytics, Auth, Firestore, Remote Config (as described in Section 4)
- **Google AdMob** — only in the free tier, for ads
- **Google Play Billing** — for in-app purchases
- **Your device's SMS app** — when you choose to send an SMS reminder, the App opens the SMS app with a pre-filled message. The developer is not involved in the SMS itself

We will share data with law enforcement only if legally required and only to the extent legally required.

---

## 7. Permissions the App Asks For

- **INTERNET, ACCESS_NETWORK_STATE** — to talk to Firebase, AdMob and Google Play Billing
- **CAMERA** — to capture a member's profile photo; only used when you tap the camera button
- **READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE** (Android 9 and below) and **READ_MEDIA_IMAGES** (Android 13+) — to let you choose an existing photo from the device gallery
- **POST_NOTIFICATIONS** (Android 13+) — to show local notifications for birthdays, expiry reminders and SMS reminder prompts
- **RECEIVE_BOOT_COMPLETED** — to reschedule notification reminders after your device restarts

You can revoke any of these permissions in Android Settings → Apps → Gym Partner Pro → Permissions at any time.

---

## 8. Data Retention

| Data | Retention |
|---|---|
| Local member data | Until you delete it, clear app data, or uninstall the App |
| Cloud-synced member data | Until you delete it (per Section 5.2) |
| Firebase Auth account | Until you ask us to delete it or you delete your Google account |
| Crashlytics data | As set by Firebase (currently 90 days for stack traces) |
| Analytics data | As set by Firebase (generally up to 14 months for user-level data) |
| AdMob data | As set by Google AdMob's policies |
| Google Play purchase records | Kept by Google for as long as Google retains purchase records |

---

## 9. International Data Transfers

The developer is based in **Sri Lanka**. Google's Firebase and AdMob services run on servers in multiple countries, including the **United States** and other regions Google operates in. By using cloud sync, analytics, crash reporting and ad services, you understand that data may be transferred to and processed on Google's servers outside your home country.

---

## 10. Your Rights

Depending on where you are, you may have legal rights over personal data about you, including the right to access, correct, delete, or object to its use.

To exercise any of these rights for **your own** data (Google account info, Firestore data under that account), email us at **kasungunathilaka1991@gmail.com** from the Google account you used. We will respond within **30 days**.

If you are a **gym member** whose data has been entered by a gym, your first point of contact is your gym — they are the data controller. We may not know your data exists. We will, however, support gyms in honouring valid member requests where we can.

---

## 11. Security

We take reasonable steps to protect the App and the data it handles:

- All network traffic uses HTTPS / TLS
- Firebase services use Google's security infrastructure, including encryption at rest and in transit
- The App does not transmit member data anywhere except to Firebase under your own account (and only if you turn on cloud sync)
- No data is sent to any server operated by the developer

If we become aware of a security issue in the App that affects your data, we will tell you as soon as reasonably possible through an in-app notice, Google Play update notes, or email where we have one.

---

## 12. Children

The App is **not intended for children under 13**. It is a business tool for gym operators. If you record a member who is under 13, you must have permission from that child's parent or guardian and comply with the children's data protection rules of your country.

---

## 13. Changes to This Policy

We may update this Privacy Policy from time to time. If we make material changes, we will tell you through an in-app notice before the change takes effect and update the "Last updated" date at the top.

---

## 14. Contact

Kasun Gunathilaka
Email: **kasungunathilaka1991@gmail.com**
Country: Sri Lanka
