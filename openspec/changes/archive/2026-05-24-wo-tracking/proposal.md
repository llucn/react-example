## Why

Field technicians need a dedicated view in the mobile app to track the state of an individual work order — its summary fields, related tasks, attachments, and history — so they can act on assignments without leaving the app. The current navigation only exposes Home, Publish, Issues, Profile, and Device; there is no entry point for work-order workflows.

## What Changes

- Add a top-level navigation entry **Work Order Tracking** to the topbar / mobile sidebar, placed immediately after **Issues**.
- Add a new route `/work-orders` that renders a `WorkOrderTrackingPage`, implementing the layout from the supplied Figma design (header summary, action bar with `Update Work`, and a tabbed section showing `Tasks`, `Attachments`, `History`, plus two additional tab placeholders).
- Display a single sample work order populated from in-file mock data (no API call, no backend dependency).
- Render a Tasks tab list of card items using mock data, with badge counts on the `Tasks` and `Attachments` tabs.

## Capabilities

### New Capabilities
- `work-order-tracking`: Mobile-friendly screen for viewing a work order's summary, action affordances, and tabbed detail sections (Tasks, Attachments, History) sourced from mock data.

### Modified Capabilities
<!-- None — no existing specs in openspec/specs/ to amend. -->

## Impact

- `src/app/layouts/AppLayout.tsx` — add a new menu item entry between Issues and Profile.
- `src/App.tsx` — register the `/work-orders` route.
- `src/app/pages/WorkOrderTrackingPage.tsx` — new page component (Figma node `725:2960`).
- `src/app/pages/work-orders/` (new folder) — mock data module and supporting sub-components (header card, action bar, tab panels, task card).
- `src/index.css` — minor additions if new utility classes are needed for the page layout.
- No backend, API client, or auth changes. No new runtime dependencies (uses existing `antd`, `@ant-design/icons`, `react-router-dom`).
