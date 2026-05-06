# PlanKept Website Source Map

This file keeps the website copy tied to the real PlanKept app. When app behavior
changes in `/Users/alekj/Documents/GitHub/plan enforcer`, update the matching
website files here instead of hunting through the repo from memory.

## Website Files To Update

- `src/config/site.ts`: global PlanKept positioning, launch-stage CTA, support
  links, SEO description, and AI discovery summary.
- `src/config/planKeptContent.ts`: answer pages, comparison pages, update posts,
  FAQ copy, example queries, and the short category sentence used across the site.
- `src/components/landing/sections/PlanKeptHeroSection.astro`: first-screen copy,
  visual proof flow, proof examples, and hero buttons.
- `src/components/landing/sections/PlanKeptDiscoverySection.astro`: links to
  answer, comparison, and update hubs on the product page.
- `src/lib/structuredData.ts`: SoftwareApplication schema and feature list.
- `src/lib/discovery.ts`: sitemap and LLM-discovery page inventory when routes
  are added, removed, renamed, or substantially repurposed.
- `src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts`,
  `src/pages/robots.txt.ts`, and `src/pages/sitemap.xml.ts`: generated discovery
  outputs that should stay aligned through `src/lib/discovery.ts`.

## App Sources Of Truth

| Website topic | App repo source |
| --- | --- |
| High-level product model | `AGENTS.md`, `Docs/AppDirection.md`, `Docs/Architecture.md` |
| Enforcement families | `Packages/PlanEnforcerCore/Sources/Domain/PlanEnforcement.swift` |
| Full app blocks and minute caps | `Packages/PlanEnforcerCore/Sources/Domain/PlanEnforcement.swift`, `AppControlEnforcementTemplate.md` |
| Recurrence, opportunities, and quotas | `Packages/PlanEnforcerCore/Sources/Domain/CycleTemplate.swift`, `RecurrenceEnforcementTemplate.md`, `Docs/UseCases.md` |
| Proof review behavior | `ProofReviewConversationTemplate.md`, `ProofConversationSystem.swift`, `CompletePlanTool.swift` |
| Automatic Health proof | `AutomaticProofReview.swift`, `AutomaticProofReviewSystem.swift`, `HealthProofService.swift` |
| Photo and screenshot evidence | `ConversationImageSupport.swift`, `AppleVisionImageObservationService.swift` |
| Screen Time/device activity proof state | `DeviceActivityProofService.swift`, `LoadDeviceActivityTool.swift` |
| Local storage and privacy model | `PlanEnforcerAppCompositionRoot.swift`, `FileBackedPlansRepository.swift`, `FileJSONBlobStore.swift`, `SettingsView.swift` |
| Family Controls and App Store readiness | `Docs/AppStoreExportChecklist.md` |
| Legal configuration | `PlanKeptLegalConfiguration.swift` plus website legal pages |

## Current Website Assumptions

- The public site describes PlanKept as a local-first iPhone app that turns one
  written plan into reminders, recurrence, app blocks or usage limits, quotas,
  and proof-based follow-through.
- The site says PlanKept can use full blocks or minute caps, but App Store and
  Family Controls readiness should be checked before making stronger launch
  claims.
- Apple Health steps and workouts can support automatic proof when the user
  allows the needed permissions.
- Photos and screenshots can support proof review; they are evidence for review,
  not guaranteed deterministic automatic completion.
- Device activity proof should be described as allowed phone or Screen Time
  state, not as unrestricted historical usage totals.
- The updates area is for users: launch notes, product changes, use cases,
  privacy explanations, and practical proof examples. It is not an internal
  publishing scratchpad.
- At launch, put the App Store URL in `planKeptAppStoreHref` inside
  `src/config/site.ts`; the main CTA switches from "Join the wish list" to
  "Get the app" through `planKeptPrimaryCta`.
