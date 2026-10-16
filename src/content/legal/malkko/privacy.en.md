---
title: Privacy Policy
type: privacy
status: draft
lastUpdated: 2026-10-15
---

**smulsmul**, represented by Beomjun Kang, Business Registration No. 815-31-01725 (“Operator”), explains how **Malkko** handles personal data. The privacy contact is **Beomjun Kang / smulsmul2020@gmail.com**.

This is a **pre-launch draft** based on current features and the planned launch architecture. The launch version will use a business AI API. Its provider, processing agreement, international transfers, and retention and deletion procedures must be finalised before an effective date is set. The current development AI connection is not being represented as the launch arrangement.

## 1. Scope and principles

This policy covers Malkko accounts, English learning, support, and this introduction and policy website. We process the minimum information necessary for the service. Reading this policy or visiting a page is not consent. Where consent is required, we provide the relevant notice and obtain it separately.

Accounts are currently created by an administrator for invited users. Email addresses, telephone numbers, and national identification numbers are not account registration fields. Sending a support email does disclose your address and message.

## 2. Data, purposes, and grounds

| Category | Data | Purpose and grounds |
|---|---|---|
| Account | Internal user ID, login username, display name, password hash and salt, role, account status, creation and update times | Account creation, authentication, and administration necessary to enter into and perform the service contract |
| Authentication and abuse prevention | Session token hash, creation, expiry and last-use times, last login, failed attempts and lock status, request counts and time windows | Contract performance and service security. Any separate legitimate-interest ground requires an assessment of necessity, proportionality, and individual rights |
| Learning input | Assessment answers, practice attempts and revisions, coaching and free-conversation text, saved words and context | Delivering requested assessments, exercises, feedback, conversations, and reviews |
| Learning results | AI responses and summaries, estimated level, learning type, scores and error categories, plans and progress, memory cards and review times, streaks, learning events, related conversation identifiers | Personalised learning and continuity, as necessary for the service contract |
| Support | Sender email, account identifiers, messages and attachments supplied by the user, handling records | Responding to requests, verifying ownership, and resolving disputes, on the relevant request or legal ground |
| Connection and operations | Request times, errors and processing status, and technical connection data such as IP addresses | Communication, troubleshooting, and security. Final hosting and log settings must establish the exact fields and retention before this policy takes effect |

Passwords are processed for authentication; the account database stores hashes and salts rather than the original passwords. This does not mean that all stored data is encrypted.

Learning assessments may be generated automatically. They are not official decisions about employment, admission, or qualifications. You may request an explanation, correction of inaccurate records, or a review through the contact below.

## 3. Collection and information to avoid

Information is obtained through account requests to the administrator, login, learning input, records generated during service use, and support emails.

Use fictional names and situations for practice. Do not enter identification numbers, passwords, health or financial information, other people's personal data, or workplace secrets. Personal information included in your text may become part of learning records and AI processing.

The current app does not include advertising, behavioural analytics, or third-party crash analytics SDKs. Audio recording, microphone conversations, contacts, photos, and precise-location collection are not current features. Relevant notices, permissions, and consent procedures must precede any such additions.

## 4. Leaderboard visibility

**The current leaderboard shows active learners' display names, estimated levels, learning types, overall assessment scores, progress, completed-unit counts, streaks, and ranks to other signed-in users.** It does not provide those users with individual answers, passwords, or full conversations.

There is currently no separate participation switch. Use a nickname rather than your real name and contact us about visibility requests. **Before public launch, we must establish a lawful ground and participation and refusal process, or stop this sharing, then reflect the outcome in the final policy and interface.** Posting this draft does not obtain consent to disclosure.

## 5. AI, processors, and international transfers

Malkko sends your learning text, relevant prior conversation, assessment summaries, and related learning context to external AI services to generate exercises and responses. Keeping the main learning database on an Operator-managed server **does not mean that all processing happens on your device or within Korea**.

The launch version is planned to use a **business AI API**. The provider, product, and processing locations are not final. We therefore do not assert a particular recipient, country, retention period, or promise that an AI provider never uses data for model training. Any fallback provider must undergo the same review and disclosure.

Before providing the production AI features, we will verify the actual contract and settings, publish the following specific details, and complete the required notices and consent:

| Required detail | Information to finalise |
|---|---|
| Processor and work | Contracting legal entity and contact, inference, hosting and log processing, and subprocessors |
| Data | Exact personal data and learning context transferred |
| Countries, timing, method | Actual destination countries, when requests are transmitted, and encrypted network transmission |
| Purposes and periods | Feedback generation, retention of inputs, outputs and safety logs, deletion and training settings |
| Grounds and rights | Applicable transfer ground, refusal procedure and effects on service availability |

Until those details are final, this document **must not be used as a completed international-transfer notice or consent mechanism**. If you do not want further AI transfers, stop submitting learning text and request suspension or deletion. AI learning features may be unavailable without these transfers; this does not prevent you from exercising rights over existing data.

We do not sell personal data. Disclosures beyond the leaderboard and properly disclosed processing and transfers require a lawful basis or separate consent where required. A broad reference to service improvement does not authorise unlimited use of learning conversations for advertising or separate model training.

## 6. Retention and deletion

The following are **proposed launch retention rules**. The preparation build does not implement automated deletion for every category. Operational procedures and actual deletion must be verified before these rules take effect.

| Data | Proposed rule |
|---|---|
| Account and learning records | While necessary for the account and learning service; delete without delay after withdrawal, a valid deletion request, or fulfilment of the purpose, except specific legally retained records |
| Authentication sessions | Server-side login validity is 12 hours. Expiry, logout, or password reset invalidates access. A periodic cleanup procedure for expired records must be finalised before launch |
| Rate-limit records | Valid through at most the next window after the relevant request window. Requests clean up expired records; periodic cleanup must also be added before launch |
| Separate security and error logs | A proposed maximum of 90 days from creation, using only necessary fields. Any separate incident preservation must identify its basis, scope, and duration |
| General support | A proposed maximum of one year after closure, unless a specific statutory complaint or dispute retention period applies |
| Backups | A proposed rotation maximum of 30 days, with verified isolation, access control and expiry, and deletion requests reapplied after restoration |

Account **deactivation is not deletion**. Removing the app or signing out does not erase server-side learning records.

Records subject to separate statutory retention, such as applicable personal-data system access logs, must be identified by legal ground, fields, and duration. The proposed 90-day rule for ordinary security and error logs does not shorten a longer legal retention period.

If future sales create applicable statutory retention duties, transaction records are kept separately: contract and withdrawal records and payment and supply records for five years, consumer complaint and dispute records for three years, and advertising records for six months. This does not justify retaining all learning conversations for the same periods.

Unneeded electronic files are deleted in a manner intended to prevent recovery; paper is shredded or otherwise destroyed. External AI retention and deletion must be specified after the review in section 5. Deleting our server copy does not guarantee immediate removal of every external copy.

## 7. Cookies, device storage, and this website

- The web app uses the **gyeol_session** session cookie for login. The server enforces a maximum validity of 12 hours after issue. Blocking or deleting it may prevent login.
- Mobile apps store the login session in app storage. Devices may also retain a server address, sound and haptic preferences, an in-progress assessment identifier, and some recent coaching messages. Logout includes cleanup of that coaching cache; it does not erase all server records.
- This website stores your language choice in browser storage as **smulsmul-lang**, potentially until you clear site data. That item does not contain learning conversations.
- The introduction and policy pages use GitHub Pages. GitHub may process technical connection data such as an IP address. Malkko account and learning databases are not published on this static website. See the [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

Use device or browser controls to clear local data. To request deletion of server records, use the following contact process.

## 8. Your rights

You or an authorised representative may request access, correction, deletion, restriction of processing, or withdrawal of consent, as provided by applicable law.

Email **smulsmul2020@gmail.com** with the subject “Malkko privacy request,” your username, and the type of request. Do not send passwords, session cookies, or a full identification document. We use proportionate ownership or authority checks and provide the result, or any lawful limitation and objection procedure, within the applicable deadline.

The app currently has no dedicated account-deletion or export screen. Requests are handled through the Operator's contact process under applicable law; we do not represent automatic deletion or instant download as existing features.

## 9. Security and incidents

Current code includes password hashing, session validation, administrator authorisation, user-level data access checks, and rate limiting. Production access, transport security, logs, backups, and the operating device must be checked against the actual deployment.

We investigate service outages separately from personal data breaches. If a breach or security incident occurs, we assess its scope and meet applicable reporting, user notification, and remedy duties. An external attack does not automatically remove these duties or legal liability.

## 10. Age

The initial launch is intended for **adults aged 19 or older**. This is not a claim that public registration or age verification is already implemented. A suitable account-issuance check must be established. If we discover data from a child under 14 processed without the required legal procedure, we restrict access and take necessary deletion and protective measures.

## 11. Changes

Changes and their effective date will be posted here. Material changes affecting user rights will be clearly notified in advance. Updating this policy or continued use does not replace consent where separate consent is legally required.

## 12. Contact and redress

- Operator and privacy contact: **smulsmul / Beomjun Kang**
- Email: **smulsmul2020@gmail.com**
- Privacy complaints: [KISA Privacy Complaint Center](https://privacy.kisa.or.kr), 118 within Korea
- Mediation: [Personal Information Dispute Mediation Committee](https://www.kopico.go.kr)

This English version describes the same processing as the Korean version. Translation differences will not be used to reduce user rights.
