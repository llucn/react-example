## Context

The mobile app (Vite + React 19 + Ant Design 6, with Capacitor for native packaging) currently exposes five top-level pages through `AppLayout.tsx`: Home, Publish, Issues, Profile, and Device. Routing is centralized in `src/App.tsx` using `react-router-dom` v7. Work-order workflows are not yet represented anywhere in the UI, but the supplied Figma frame (`725:2960`) shows a fully designed `Work Order Tracking` detail screen — header summary, action bar, tabbed body — that needs to be brought into the codebase as the first step. No backend exists yet for work orders, so the screen will be populated from in-file mock data.

## Goals / Non-Goals

**Goals:**
- Add a `Work Order Tracking` entry to the navigation menu in the exact position requested (immediately after `Issues`) without disturbing the order of other items.
- Implement a `WorkOrderTrackingPage` whose layout, content blocks, and interaction targets visually match the Figma frame at the mobile widths the app already supports.
- Keep all displayed values driven by a single, easily editable mock-data module so a future swap to a real API requires changing only one file.
- Reuse existing Ant Design primitives (`Layout`, `Tabs`, `Button`, `Tag`, `Card`, icons) and existing CSS conventions (`.page-header`, `.card`, `.meta-grid`, etc.) so the new page feels native to the codebase.

**Non-Goals:**
- Building a work-order list / index screen — the Figma supplied only shows the detail view, and the requirement is just to add this one page.
- Wiring any real API call, auth scope, or persistence; `fetchIssues`-style client code is intentionally not extended.
- Implementing real behavior for the action buttons (`Action 1/2/3`, `…`, `Update Work`) or for tab switching beyond rendering the correct panel content. These are visual stubs.
- Pixel-perfect parity at desktop breakpoints — the design is a tablet/mobile mockup; we follow it at mobile width and let Ant Design's responsive containers handle larger screens.

## Decisions

**Decision 1 — Route path: `/work-orders` (plural).**
Matches the existing convention used by `/issues` and `/issues/:id`. Even though the first implementation only shows one mock record, the plural keeps the door open for a future list/detail split (`/work-orders/:id`). Alternative considered: `/wo` — rejected as opaque to users reading deep-link URLs.

**Decision 2 — Single page component, no nested routes yet.**
The Figma frame is a single screen; introducing `/work-orders/:id` now would require fabricating a list page that isn't in the design. We keep the route shape simple and reorganize when a list view is added.

**Decision 3 — Mock data lives in `src/app/pages/work-orders/mockData.ts`.**
A typed `WorkOrder` interface (id, title, description, status, statusDate, asset, assetDetails, location, createdBy, createdAt, tasks[], attachments[], history[]) plus a single `sampleWorkOrder` export. Centralizing makes the future API swap mechanical. Alternative considered: inline-in-component — rejected because the tabbed task cards repeat the same shape three times in the Figma and benefit from `.map()` over an array.

**Decision 4 — Tabs via Ant Design `Tabs` with badge counts via `Badge` in the tab label.**
The Figma shows a count chip on `Tasks (4)` and `Attachments (2)`. Ant's `Tabs.items[].label` accepts a `ReactNode`, so we render `<span>Tasks <Badge count={4} /></span>`. Alternative considered: hand-rolled tab bar with the visual chip from Figma exactly — rejected because the Ant version is already themable and keeps keyboard accessibility for free.

**Decision 5 — Page composition split into small co-located sub-components.**
`WorkOrderTrackingPage` composes `WorkOrderHeader`, `WorkOrderActionBar`, `WorkOrderSummary`, `WorkOrderTabs`, and `WorkOrderTaskCard`, all living under `src/app/pages/work-orders/`. Keeps the page file readable and makes each Figma block individually replaceable. Alternative considered: one monolithic file — rejected as the page has ~5 distinct visual zones.

**Decision 6 — Menu insertion strategy: edit the `menuItems` array in `AppLayout.tsx` directly.**
There is no plugin registry; the menu is a literal array. We add the entry with `key: '/work-orders'` and `icon: <ProfileOutlined />` (closest semantic icon already imported elsewhere or freely importable from `@ant-design/icons`). The chosen icon will be confirmed during implementation by trying a couple of candidates against the existing dark/light themes.

**Decision 7 — No new dependencies.**
Everything is achievable with `antd` v6 primitives plus existing icon library. Avoids package-lock churn and Capacitor rebuild concerns.

## Risks / Trade-offs

- **[Mock data drifts from future API shape]** → Mitigation: define the `WorkOrder` TypeScript interface up-front in `mockData.ts` so the contract is reviewable; future API client maps server responses into the same type.
- **[Ant Design 6 `Tabs` API differences from older docs]** → Mitigation: use the `items` prop form (current API), not the deprecated `<TabPane>` children form. Verify against the version pinned in `package.json` (`antd ^6.3.6`).
- **[Navigation order regression]** → Mitigation: the change is a single array-element insertion; covered explicitly by a spec scenario asserting `Work Order Tracking` appears between `Issues` and `Profile`.
- **[Figma desktop-width layout doesn't translate to phone]** → Mitigation: rely on the same responsive `card` / `meta-grid` CSS the existing pages already use; verify by running `npm run dev` and resizing the browser before declaring done.
- **[Capacitor native builds out of sync]** → Mitigation: no native plugin changes are introduced, so no `npx cap sync` is required; call this out in tasks.md so no one runs unnecessary native rebuilds.

## Migration Plan

Not applicable — this is a pure additive UI change with no schema, no API, and no persisted state. Rollback is `git revert` on the merge commit; no data cleanup needed.

## Open Questions

- Which `@ant-design/icons` glyph best represents "Work Order Tracking" in the topbar? Implementation will pick from `ProfileOutlined`, `FileDoneOutlined`, or `ScheduleOutlined` and choose the one that reads cleanly at both icon-only (mobile sidebar) and icon+label (topbar) sizes.
- Should the page's back-arrow (top-left in the Figma) navigate to `/issues` or browser-history back? Default to `navigate(-1)` for now; revisit when a list page lands.
