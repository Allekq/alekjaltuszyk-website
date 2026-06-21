# AI App Legal and Privacy Audit

Research date: 2026-06-19

This is a practical engineering and product-risk audit, not legal advice. It is
meant to identify likely traps before U.S. launch work, especially for a solo
developer with local-first apps, AI features, photos, audio, journals, location,
ads, purchases, and support flows.

## Scope

Apps and public legal surfaces reviewed:

- Root site: `src/content/legal/site-privacy-policy.md`,
  `src/content/legal/site-terms.md`
- PlanKept: `src/content/legal/plankept-privacy-policy.md`,
  `src/content/legal/plankept-terms-of-service.md`
- Voice of Self: `src/pages/apps/VoiceOfSelf/privacy-policy/index.md`,
  `src/pages/apps/VoiceOfSelf/terms-of-service/index.md`,
  `src/pages/apps/VoiceOfSelf/how-voice-of-self-uses-ai/index.astro`,
  plus mirrored source copies under `src/voice-of-self/`
- OverLit: `src/content/legal/overlit-privacy-policy.md`,
  `src/content/legal/overlit-terms-of-use.md`
- Take Me Somewhere:
  `src/content/legal/take-me-somewhere-privacy-policy.md`,
  `src/content/legal/take-me-somewhere-terms-of-service.md`
- Related route/discovery files: `src/config/routes.ts`,
  `src/lib/discovery.ts`, legal manifests, sitemap, robots, and LLM discovery
  outputs

Background app-repo spot checks:

- PlanKept app repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- Voice of Self app repo: `/Users/alekj/Documents/GitHub/closure-app`
- OverLit app repo: `/Users/alekj/Documents/GitHub/OverLit-app`

Internet research focused on Apple App Review, App Store privacy labels,
account deletion, U.S. privacy/health/biometric laws, FTC AI/health privacy
enforcement, COPPA, ads/SDK disclosure, and provider logging/retention traps.

## Executive Summary

Your legal copy is already better than the average solo AI app. The policies do
not look like generic templates, and they usually distinguish local data,
provider data, support email data, Apple purchase data, AI provider data, and
retained backend metadata. That is the right instinct.

The main remaining risk is not that the policies are empty. The risk is that a
few strong phrases could be read too broadly:

- "local-first"
- "fully local"
- "zero retention"
- "no logging"
- "no personal data"
- "no tracking"
- "not health care"
- "does not collect"

Those are safe only when every app layer, SDK, backend log, cloud provider,
AI provider, App Store label, privacy manifest, support flow, and marketing
claim matches the same story.

The highest priority before a U.S. Voice of Self launch is to harden four areas:

1. U.S. mental-health/wellness privacy posture, especially Washington My Health
   My Data Act risk.
2. Third-party AI disclosure and explicit consent, including evidence that
   Bedrock/Groq/Firebase logging settings match the privacy text.
3. App Store Connect privacy-label alignment for each app, not just the public
   privacy policy.
4. Apple individual-developer risk for sensitive or regulated services.

For PlanKept, the biggest easy win is adding very explicit photo/audio/biometric
language: photos and audio can contain faces, documents, location metadata,
voices, or other sensitive information, but PlanKept does not create face
templates, voiceprints, speaker IDs, or biometric identifiers, and photos stay
local unless the user intentionally chooses an off-device route or sends them to
support.

## Primary External Rules To Keep Pinned

- Apple requires App Store privacy answers to cover data collected by the app
  and third-party partners, and says developers must keep those answers accurate
  as practices change:
  https://developer.apple.com/app-store/app-privacy-details/
- Apple says privacy policies must identify data collected, uses, third-party
  sharing, retention/deletion, and deletion/consent revocation. It also now
  calls out personal-data sharing with third-party AI and explicit permission:
  https://developer.apple.com/app-store/review/guidelines/
- Apple says apps with account creation must let users initiate account deletion
  in-app and delete associated personal data, with subscription billing handled
  clearly:
  https://developer.apple.com/support/offering-account-deletion-in-your-app/
- FTC health privacy guidance warns that privacy promises must be true, security
  must fit the sensitivity of the data, and the Health Breach Notification Rule
  can apply to non-HIPAA health apps:
  https://www.ftc.gov/business-guidance/privacy-security/health-privacy
- FTC AI enforcement guidance shows there is no "AI exception" to ordinary
  deception/unfairness rules, especially for unsupported professional-service
  substitution claims:
  https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes
- Washington My Health My Data Act can affect out-of-state services that target
  Washington consumers and process consumer health data, including mental health
  status and health inferences:
  https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy
- California CCPA/CPRA likely will not apply at current solo-developer scale
  unless thresholds are met, but the thresholds and rights should be monitored:
  https://cppa.ca.gov/faq.html
- COPPA applies to child-directed services or services with actual knowledge of
  users under 13:
  https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy
- Illinois BIPA is the biometric class-action trap: voiceprints and scans of
  face geometry count; raw photographs are excluded, but extracting biometric
  templates is the danger zone:
  https://law.justia.com/codes/illinois/chapter-740/act-740-ilcs-14/
- Amazon Bedrock says model providers do not have access to Bedrock customer
  prompts/completions, but Bedrock model invocation logging can log request and
  response data if enabled. It is disabled by default:
  https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html
  and
  https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html
- Google Play Data Safety is only relevant if/when Android versions launch, but
  it is a useful mental model because it places responsibility for SDK behavior
  on the developer:
  https://support.google.com/googleplay/android-developer/answer/10787469?hl=en

## Cross-App Traps

### 1. The Privacy Label Trap

The public policy can be correct while the App Store Connect privacy label is
wrong. Apple privacy labels care about what is transmitted off device and
accessible to the developer or third-party partners for longer than real-time
request servicing.

Action:

- Build one data inventory per app that maps each data category to:
  on-device only, Apple framework/service, developer backend, third-party SDK,
  AI provider, support email, or ad network.
- Compare that inventory to App Store Connect privacy labels and each
  `PrivacyInfo.xcprivacy` file.
- Do not rely on `PrivacyInfo.xcprivacy` alone. Apple's privacy manifest is not
  the same as App Store privacy-label answers.

### 2. The "Zero Retention" Trap

"Zero retention" needs to be scoped. It can mean:

- app database does not store raw content
- Firebase function does not log raw request bodies
- Cloud Logging excludes raw bodies
- AI provider does not train on content
- AI provider does not retain prompts/completions
- abuse-monitoring logs are disabled or unavailable
- model invocation logging is disabled
- support emails do not contain user content

Those are not the same claim.

Action:

- Replace broad claims with layer-specific claims.
- Keep a dated evidence bundle for provider settings:
  Bedrock model invocation logging disabled, Cloud Logging filters, Firebase
  logging redactions, Groq data-retention settings or contract language,
  RevenueCat/Firebase data-retention settings, and support inbox retention.
- If a provider guarantee is not contractually clear, say "configured to
  minimize retention" or "we do not intentionally store readable content" rather
  than "zero retention" at every layer.

### 3. The Third-Party AI Consent Trap

Apple now explicitly says apps must clearly disclose where personal data is
shared with third parties, including third-party AI, and obtain explicit
permission before doing so.

Action:

- Voice of Self should have a clear in-app consent step before managed AI use,
  with a link to the AI explainer and privacy policy.
- PlanKept should have a clear user choice before any external or
  user-configured model route receives plans, photos, proof, transcripts, or
  other content.
- The consent copy should identify provider categories or names and what is
  sent: prompts, transcripts, photos, attachments, AI outputs, account IDs,
  usage metadata, and approximate timing.

### 4. The Biometrics Trap

Photos and audio are not automatically biometric identifiers. The risk appears
when the app or provider creates a face template, voiceprint, speaker ID, or
similar identifier used to recognize a person.

Action:

- Add explicit "no biometric identification" language wherever photos, camera,
  audio, voice, speech, or recordings are in scope.
- Do not add face recognition, speaker recognition, voice authentication, or
  person identification without a separate biometric-consent workflow and a
  public retention/destruction policy.

Suggested plain language:

> The app does not use photos, videos, audio, recordings, or speech content to
> identify people, create face templates, create voiceprints, perform speaker
> recognition, or build biometric identifiers.

### 5. The Mental-Health/Washington Trap

Voice of Self is positioned as self-reflection, not therapy. That helps, but
U.S. health privacy risk can still attach to apps that process mental-health
status, wellness reflections, crisis language, mood, anxiety, grief, self-harm,
or health inferences.

Washington's My Health My Data Act is the most important near-term issue
because it covers consumer health data outside HIPAA and can reach out-of-state
services targeted to Washington consumers.

Action:

- Before U.S. launch, decide whether Voice of Self will be made available in
  Washington immediately.
- If yes, have counsel review whether a separate Consumer Health Data Privacy
  Policy is required.
- Prepare a separate Voice of Self consumer-health-data notice if the safest
  path is to comply rather than argue noncoverage.
- Keep "not therapy, not healthcare, not crisis support" copy consistent across
  App Store metadata, screenshots, onboarding, website, policy, and terms.

### 6. The Individual Developer Trap

Apple says apps providing highly regulated services or requiring sensitive user
information should be submitted by a legal entity, not an individual developer.
Voice of Self uses sensitive journal/audio/reflection data and has
mental-wellness adjacency. Even with good disclaimers, this is a real launch
posture issue.

Action:

- Consider forming/using a legal entity and Apple organization developer account
  before a U.S. Voice of Self launch.
- If staying on an individual developer account, avoid regulated-service
  positioning. Do not describe Voice of Self as therapy, treatment, healthcare,
  clinical mental health, diagnosis, crisis monitoring, or medical support.

### 7. The Health Breach Trap

Even if HIPAA does not apply, the FTC Health Breach Notification Rule may matter
for health-adjacent apps. A breach involving health or wellness content,
account-linked journals, transcripts, or derived reflections could require
notices.

Action:

- Keep no-read/no-log architecture for Voice of Self.
- Create a tiny incident-response note: what systems can contain account data,
  usage metadata, logs, support emails, RevenueCat/Firebase records, provider
  records, and local-only data.
- Do not add analytics, ad SDKs, or marketing pixels to Voice of Self.

### 8. The Children/Teen Trap

All current apps avoid under-13 users. Voice of Self is 16+. That is good.

Action:

- Keep apps out of Kids Category unless you build a COPPA-grade child workflow.
- Avoid marketing OverLit or Take Me Somewhere as child-directed.
- If support emails reveal actual under-13 use, have a deletion/refusal path.
- For Voice of Self, keep 16+ in onboarding, terms, App Store age metadata, and
  crisis/mental-health copy.

### 9. The Support Email Trap

Support emails are collection events. A user can paste screenshots, journals,
photos, logs, mental-health details, precise location, or other sensitive data.

Action:

- Add a short warning to support pages and policies:
  "Please do not send sensitive journal entries, health information, photos,
  recordings, location history, or third-party personal data unless needed for
  support."
- State support messages are retained only as long as needed for support, legal,
  security, and recordkeeping.

### 10. The UGC/Public Upload Trap

Current apps do not appear to host public user-generated content. That avoids a
large amount of moderation, DMCA, and abuse-reporting risk.

Action:

- Do not add public sharing, public galleries, social feeds, comments, public AI
  character sharing, or community content without a separate moderation/reporting
  design.
- If public or semi-public user uploads are ever added, add UGC terms, reporting,
  blocking, moderation, takedown, abuse contact, and likely DMCA agent work.

## App-by-App Findings

## PlanKept

Current posture:

- Strong local-first policy.
- No custom backend for app data.
- No developer analytics SDK, ad SDK, crash SDK, telemetry pipeline, or app
  account server.
- Purchases are Apple-handled.
- Plans, proof, enforcement settings, Health proof/check data, Screen Time
  state, local analytics, AI diagnostics, and optional images are described as
  local unless the user chooses a route that sends them elsewhere.
- Privacy policy already warns that images can contain faces, documents,
  addresses, health details, and location metadata.
- Terms already say users keep rights in plans, proof, attachments, and content.

Likely missing or worth hardening:

1. Photos and biometrics:
   The policy warns that photos can include faces, but it should also say
   PlanKept does not create face templates, identify people, infer identity, or
   perform biometric recognition.

2. Audio/speech:
   If PlanKept uses microphone, speech recognition, proof audio, dictated input,
   or voice-like content anywhere, add the matching "no voiceprint/speaker ID"
   clause.

3. External model routes:
   The policy mentions external or user-configured AI/model routes. Add a very
   visible consent boundary: local/on-device routes do not send content to you;
   external routes send only what the user chooses to that selected provider
   under that provider's terms/settings.

4. Content license:
   Terms say the user keeps rights. Add a limited service-provider license for
   content the user intentionally sends off-device or to support. This avoids the
   trap where the terms do not technically authorize processing the photo,
   proof, prompt, transcript, or attachment through a provider.

5. HealthKit and consumer health data:
   PlanKept's Health proof/check use is local and limited, which is good. If any
   Health-derived signal ever leaves the device, treat it as high risk and update
   the policy before launch.

Suggested PlanKept privacy addition:

```md
PlanKept does not use photos, pasted images, camera content, audio, speech,
plans, or proof attachments to identify people, create face templates, create
voiceprints, perform speaker recognition, or build biometric identifiers.
```

Suggested PlanKept external-processing addition:

```md
When PlanKept uses an on-device route, your selected content stays on your
device. If you intentionally choose an external or user-configured model route,
the app may send the specific prompt, proof, image, attachment, transcript, or
related context needed for that request to the provider you selected. That
provider may process the content under its own terms and privacy settings.
```

Suggested PlanKept terms addition:

```md
You keep ownership of your plans, proof, photos, attachments, prompts,
transcripts, and other content. When you choose to process content through an
external model route or send it to support, you give PlanKept and the relevant
service providers a limited permission to transmit, process, secure, and
troubleshoot that content only for the feature or support request you initiated.
```

App Store label audit notes:

- Local-only photos, Health, Screen Time, plans, and reminders should not be
  marked as collected merely because they exist on device.
- If any external model route is first-party integrated and not purely
  user-configured, review whether user content, photos/videos, audio data,
  health data, or other user content must be disclosed.
- Support email can sometimes fit Apple's optional disclosure category, but only
  if it is infrequent, optional, user-initiated, and not part of primary app
  functionality.

## Voice of Self

Current posture:

- Strongest legal surface of the apps.
- Clearly states account/subscription/managed AI require backend services.
- Distinguishes local journal content from Firebase/RevenueCat/account records
  and retained usage/accounting metadata.
- States normal managed-AI content is zero-retention by backend/provider routes.
- Names Firebase/Google, RevenueCat, Apple, Amazon Bedrock/AWS, and Groq if
  configured.
- Says no ad SDKs, no tracking pixels, no custom audiences, no sale, and no
  third-party analytics SDK.
- Has strong not-therapy, not-crisis, not-professional-advice terms.
- Includes 988, emergency services, and crisis disclaimers.
- Says no voiceprints.
- Has account deletion language.

Likely missing or worth hardening before U.S. launch:

1. Washington My Health My Data readiness:
   Voice of Self is not medical care, but journal/reflection/repair/safety
   content can easily reveal mental-health status or mental-health inferences.
   For U.S. launch, especially Washington, treat this as a real review item.

2. "Zero retention" evidence:
   The policy is specific, but strong. Keep proof that model invocation logging,
   Firebase logging, function logs, Cloud Logging, and provider settings do not
   store readable request/response bodies.

3. AI provider consent:
   Ensure in-app consent is explicit before managed AI. It should not be hidden
   only in terms. Apple specifically calls out third-party AI sharing.

4. Apple individual-developer posture:
   Voice of Self handles sensitive journal/audio/mental-wellness-adjacent data.
   If sold in the U.S. as an individual developer, Apple guideline 5.1.1(ix) is
   a potential review and risk issue. Consider a legal entity/organization
   account before launch.

5. App Store metadata consistency:
   The strongest terms will not help if App Store screenshots or copy say
   "therapy", "healing treatment", "clinical", "diagnose", "mental health care",
   "crisis companion", or "always safe". Keep copy in the reflection/journaling
   lane.

6. Account deletion implementation:
   Verify app behavior matches policy: delete Firebase auth/account records,
   backend usage records, RevenueCat customer data where available, Cloud
   Storage user prefix, overrides, extension events, and revoke Sign in with
   Apple tokens if used. Also show subscription cancellation/refund path, because
   deleting an account does not cancel Apple billing.

7. Health breach runbook:
   Even if raw content is not retained, account-linked usage metadata, support
   emails, Firebase/RevenueCat IDs, and logs can still matter. Create an
   incident-response note for what to inspect after a security event.

Recommended Voice of Self actions:

- P0: Get a lawyer or privacy specialist to review Washington My Health My Data
  Act coverage before U.S. launch.
- P0: Preserve screenshots/exports of Bedrock model invocation logging disabled
  and Firebase/Groq logging/retention settings.
- P0: Verify in-app third-party AI consent screen and copy.
- P0: Audit App Store Connect privacy labels against actual retained backend
  metadata.
- P1: Add a separate consumer-health-data notice if counsel says Washington
  coverage is plausible or if you want the conservative route.
- P1: Add the Voice AI explainer to the root legal hub and discovery outputs so
  it is easy for users, Apple reviewers, and LLM crawlers to find.

Suggested conservative Voice policy addition:

```md
Voice of Self is a self-reflection and journaling tool. It is not healthcare,
therapy, diagnosis, treatment, crisis monitoring, or a substitute for a licensed
professional. Some entries, transcripts, reflections, or AI outputs may contain
or imply sensitive information about mood, grief, relationships, identity,
health, or mental state. We use that content only to provide the features you
choose and do not use it for advertising, tracking, or model training.
```

Suggested managed-AI consent text:

```md
Managed AI sends the text, transcript, prompt, selected context, and related
request metadata needed for the feature to Voice of Self's backend and the
current AI provider route. These providers process the request to generate the
response. Voice of Self does not intentionally store readable request or
response content after the request is completed, but it keeps limited account,
subscription, security, usage, token, workflow, duration, and cost metadata.
```

Consumer-health-data option:

```md
If Voice of Self is offered to Washington residents, publish a separate Consumer
Health Data Privacy Policy or obtain counsel's written view that it is not
required. The safe version should describe categories of consumer health data,
purposes, sources, sharing, processors, rights, deletion, consent withdrawal,
and contact details, and it should be linked separately from the homepage if
required.
```

App Store label audit notes:

- Likely labels to review: User ID, email address if used, purchases/subscription
  status, product interaction or usage data, diagnostics/performance/security
  metadata, and possibly other usage data.
- Content labels such as Other User Content and Audio Data depend on whether
  transmitted content is retained beyond real-time request servicing by you or
  third-party partners. If any readable content enters logs, support systems,
  storage, or provider retention, labels likely change.
- Local recordings/journals are not "collected" merely because they remain on
  device, but derived metadata sent to the backend must be analyzed separately.

## OverLit

Current posture:

- Clear no-account, no-backend, no-chat, no-cloud-sync, no-camera/photos/location
  posture.
- Clearly discloses Google Mobile Ads SDK, UMP privacy messages, ATT/IDFA where
  allowed, ad events, identifiers, coarse location from IP, diagnostics, and
  performance data.
- Full Version purchase removes normal ads and stores local entitlement cache.
- Not directed to children under 13 and uses Teen-oriented ad posture.

Likely missing or worth hardening:

1. No-sale/no-share precision:
   With AdMob, be careful with any broad "we do not sell/share" phrase. Under
   California-style rules, personalized advertising can create "sharing" even if
   you never sell a list. The policy should keep saying Google/AdMob may process
   ad identifiers and ad interaction data, and UMP/ATT choices matter.

2. App Store labels:
   OverLit should not be labeled as "data not collected" if AdMob, ATT, IDFA,
   ad impressions, product interaction, diagnostics, or ad identifiers are
   present.

3. Children:
   Avoid Kids Category and child-directed marketing unless the ad stack and
   privacy posture are rebuilt for COPPA/Kids requirements.

4. Discovery gap:
   The repo has an OverLit legal manifest route file, but it is not centralized
   in `src/config/routes.ts`, not linked from the root legal hub, and not present
   in discovery/sitemap lists.

Recommended OverLit actions:

- P0: Verify App Store privacy labels match AdMob and UMP behavior.
- P1: Add OverLit legal manifest route to `src/config/routes.ts`, legal hub, and
  discovery/sitemap outputs.
- P1: Check OverLit app-side legal version constants remain aligned if website
  legal versions are bumped.

## Take Me Somewhere

Current posture:

- No account, no backend, no background tracking, no ads, no custom analytics,
  no managed AI.
- Uses while-using location for route creation/following.
- Discloses Apple MapKit/Local Search/Maps and OpenStreetMap-derived/Overpass
  services.
- Strong route-safety terms: not emergency navigation, not professional
  navigation, user must obey conditions and laws.
- Future AI addition is explicitly gated by policy updates.

Likely missing or worth hardening:

1. Third-party map/location provider distinction:
   Apple says developers are not responsible for disclosing data collected by
   Apple frameworks/services, but OpenStreetMap/Overpass or other non-Apple
   route providers are different. If precise coordinates or destination queries
   go to a non-Apple endpoint, review App Store labels and policy text.

2. Search history/location retention:
   The policy says recent destination identifiers may be local. Keep that true.
   If any search history, route history, or precise coordinates become backend
   logged, update before launch.

3. Stale route folder:
   Empty `src/pages/apps/TakeMeSomewhere/terms-and-conditions/` can be removed
   or repurposed later. It is not a legal risk by itself, but it is clutter.

Recommended Take Me Somewhere actions:

- P0: Verify whether any non-Apple provider receives precise coordinates,
  destination queries, routes, or IP-address-linked requests directly from the
  app. If yes, reflect that in App Store labels and policy.
- P1: Confirm App Store privacy labels distinguish Apple MapKit collection from
  developer/third-party collection.
- P2: Remove empty stale terms directory.

## Root Site and Discovery Surface

Current posture:

- Static public site.
- No accounts, forms, comments, dashboards, chat, or first-party analytics.
- Support/legal/app-directory role is clear.
- App-specific policies are linked.

Gaps found:

- OverLit legal manifest exists but is missing from centralized routes, the root
  legal hub, and discovery/sitemap.
- Voice of Self AI explainer exists and is versioned but is missing from the
  root legal hub and root discovery/sitemap.
- Root discovery includes Voice, Take Me Somewhere, and OverLit support pages,
  but not PlanKept support.
- Root `robots.txt` points to sitemap but does not advertise `LLMs:` the way the
  Voice subtree robots file does.

Recommended root actions:

- P1: Add OverLit legal manifest to `src/config/routes.ts`, legal hub, sitemap,
  and LLM discovery.
- P1: Add Voice of Self AI explainer and Voice legal manifest to root legal hub
  and discovery/sitemap.
- P1: Add PlanKept support to the main discovery page list if it should be
  indexable.
- P2: Add root `LLMs:` robots line if the site-level discovery strategy wants
  parity with Voice of Self.

## Fix Plan

### P0: Before Voice of Self U.S. Launch

1. Get legal review for Washington My Health My Data Act and Voice of Self.
   Decide whether to publish a separate Consumer Health Data Privacy Policy.

2. Decide individual vs entity posture for Voice of Self. If staying individual,
   be extra conservative with App Store category, screenshots, copy, and claims.
   If possible, use a legal entity and Apple organization account.

3. Verify provider-retention claims:
   Bedrock model invocation logging disabled, Cloud/Firebase logs redacted,
   Groq retention route current, no raw AI request/response bodies in logs, no
   personal-content training, no support email auto-ingestion into AI tools.

4. Verify Voice in-app consent for managed AI:
   explicit permission, provider route disclosure, data categories, retention
   summary, links to policy and AI explainer.

5. Audit App Store Connect privacy labels for all apps:
   PlanKept, Voice of Self, OverLit, Take Me Somewhere.

6. Verify Voice account deletion implementation:
   app path, Firebase Auth deletion, user storage prefix, backend records,
   RevenueCat customer deletion/request, Sign in with Apple token revocation if
   used, subscription cancellation guidance, deletion confirmation.

### P1: Legal Copy Updates

1. PlanKept privacy:
   add no-biometric-identification clause for photos/images/audio/speech.

2. PlanKept privacy:
   sharpen external AI/model route disclosure and user consent boundary.

3. PlanKept terms:
   add limited content-processing license for external model routes and support.

4. Voice of Self privacy/AI explainer:
   ensure zero-retention language is layer-specific and provider-backed.

5. Voice of Self:
   add or prepare separate consumer-health-data notice if needed.

6. Support pages:
   add short "do not send sensitive content unless necessary" warning for all
   apps, especially Voice, PlanKept, and Take Me Somewhere.

7. Discovery and legal hub:
   fix OverLit manifest, Voice AI explainer, Voice legal manifest, and PlanKept
   support omissions.

### P2: Operational Safety

1. Create a private data inventory for each app:
   data category, source, local/backend/provider/support/ad/purchase path,
   retention, deletion mechanism, App Store label category, policy section.

2. Create a provider evidence folder:
   screenshots or exports of privacy settings, logging settings, and retention
   contracts.

3. Create a tiny incident-response runbook:
   what systems to inspect, who to notify, what data categories can exist, and
   how to handle health/wellness-adjacent data.

4. Avoid adding analytics, ads, retargeting, crash SDKs, or marketing pixels to
   Voice of Self unless the whole policy, consent, and App Store label posture is
   updated first.

5. If Android versions launch later, run a separate Google Play Data Safety,
   account deletion, health-app, generated-AI, and ads review.

## Specific Traps To Avoid In Marketing Copy

Avoid or heavily qualify:

- "completely anonymous"
- "we never collect personal data"
- "we never store anything"
- "zero logging" without identifying which logs
- "fully local" if any selected feature sends data off device
- "private" if ads/SDKs/AI providers process data
- "therapy", "treatment", "diagnosis", "clinical", "medical", "mental health
  care"
- "crisis support" or "emergency support"
- "AI replacement for a professional"
- "HIPAA compliant" unless counsel and architecture prove it
- "no sale/share" in ad-supported apps without checking personalized ads and
  state opt-out meaning

Safer patterns:

- "local by default"
- "stored on your device unless you choose a feature that sends it elsewhere"
- "not used for advertising or model training"
- "not a medical, therapeutic, legal, financial, or emergency service"
- "configured so normal AI request content is not retained as readable backend
  content after fulfillment"
- "we retain limited account, purchase, security, usage, token, workflow,
  duration, and cost metadata"

## Suggested Next Patch Sequence

When ready to edit live legal pages, follow the repo legal flow first:
`skills/legal-update-sync/CHECKLIST.md`.

Recommended patch order:

1. Update PlanKept privacy and terms with photo/audio/biometric and external
   model-route language.
2. Update Voice of Self privacy/AI explainer only after confirming provider
   retention evidence. If U.S./Washington launch is imminent, add a separate
   consumer-health-data notice or route.
3. Update support pages with sensitive-support-email warnings.
4. Update route/discovery/legal-hub gaps for OverLit, Voice AI explainer, Voice
   manifest, and PlanKept support.
5. Bump legal versions and effective dates in `site.config.mjs` only when live
   legal pages change.
6. Mirror Voice legal changes to `/Users/alekj/Documents/GitHub/closure-app`
   external legal copies if those are still bundled fallback sources.
7. Mirror OverLit legal version changes to `/Users/alekj/Documents/GitHub/OverLit-app`
   if its app-side legal acceptance/version checks depend on them.
8. Run `npm run check` and `npm run build` after website/legal route changes.

## Bottom Line

There are no obvious "the policies are fake templates" problems. The strongest
next move is precision: every claim should name the exact data, exact layer,
exact provider, exact retention, exact deletion path, and exact exception.

For developer safety, Voice of Self deserves the most conservative treatment
before U.S. launch because it combines accounts, subscriptions, AI providers,
audio/transcripts, journal/reflection content, mental-wellness adjacency, and a
solo-developer posture. PlanKept's main missed trap is simpler: photos and
possibly audio need explicit biometric/non-identification language and a clearer
external-model consent boundary.
