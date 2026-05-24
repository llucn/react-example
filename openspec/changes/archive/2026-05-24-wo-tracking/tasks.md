## 1. Scaffolding & Mock Data

- [x] 1.1 Create directory `src/app/pages/work-orders/`
- [x] 1.2 Create `src/app/pages/work-orders/mockData.ts` exporting a `WorkOrder` TypeScript interface (id, title, description, status, statusDate, asset, assetDetails, location, createdBy, createdAt, tasks[], attachments[], history[]) and a `sampleWorkOrder` instance populated with the Figma sample values (`#1027`, `Water Treatment For Cooling Tower`, status `Assigned` @ `4/25/24 11:49 AM`, asset `10263`, asset details `XXXXXXXXXXXXXXX`, location `Garden St 20`, created by `Gregory K` @ `8/31/23 11:49 AM`, 4 task entries, 2 attachment entries, history array)
- [x] 1.3 Define a `WorkOrderTaskItem` shape (title plus six label/value fields) inside `mockData.ts` and populate 4 sample tasks

## 2. Page Sub-Components

- [x] 2.1 Create `WorkOrderHeader` sub-component (back-arrow button, centered title `Work Order Tracking`, kebab menu button) under `src/app/pages/work-orders/WorkOrderHeader.tsx`; wire back-arrow to `navigate(-1)`
- [x] 2.2 Create `WorkOrderActionBar` sub-component with `Action 1`, `Action 2`, `Action 3` outlined `Button`s, an overflow `Button` (`...` icon), and a primary `Update Work` button aligned to the right
- [x] 2.3 Create `WorkOrderSummary` sub-component rendering `#<id>`, title, and the six labeled rows (`Description`, `Status`, `Asset#`, `Asset Details`, `Location Details`, `Created by…`) with right-aligned secondary timestamps on the `Status` and `Created by…` rows
- [x] 2.4 Create `WorkOrderTaskCard` sub-component that renders one title row plus six label/value pairs arranged in a 2-column, 3-row grid
- [x] 2.5 Create `WorkOrderTabs` sub-component using Ant Design `Tabs` (items API) with tabs `Tasks`, `Attachments`, `History`, `Tab label`, `Tab label`; `Tasks` and `Attachments` labels include an Ant `Badge` showing the respective counts

## 3. Page Composition

- [x] 3.1 Create `src/app/pages/WorkOrderTrackingPage.tsx` exporting a named `WorkOrderTrackingPage` component
- [x] 3.2 Compose the page from `WorkOrderHeader`, `WorkOrderActionBar`, `WorkOrderSummary`, and `WorkOrderTabs`, feeding all data from `sampleWorkOrder`
- [x] 3.3 Render the Tasks panel by mapping `sampleWorkOrder.tasks` to `WorkOrderTaskCard` entries; render placeholder content (e.g. empty state text) for Attachments / History / placeholder tabs
- [x] 3.4 Apply existing CSS conventions (`page-header`, `card`, `card-body`, `meta-grid` where appropriate); add any new utility classes to `src/index.css` only if existing classes do not cover the layout

## 4. Routing & Navigation Integration

- [x] 4.1 In `src/App.tsx`, import `WorkOrderTrackingPage` and add `<Route path="/work-orders" element={<WorkOrderTrackingPage />} />` inside the existing `<Routes>` block
- [x] 4.2 In `src/app/layouts/AppLayout.tsx`, import an appropriate icon from `@ant-design/icons` (try `ProfileOutlined`, `FileDoneOutlined`, or `ScheduleOutlined` and pick the one that reads best)
- [x] 4.3 In `src/app/layouts/AppLayout.tsx`, insert `{ key: '/work-orders', icon: <ChosenIcon />, label: 'Work Order Tracking' }` into the `menuItems` array between the `Issues` entry and the `Profile` entry — verify the order is `Home, Publish, Issues, Work Order Tracking, Profile, Device`

## 5. Verification

- [x] 5.1 Run `npm run lint` and resolve any new warnings/errors introduced by this change
- [x] 5.2 Run `npm run build` and confirm the TypeScript + Vite production build succeeds
- [x] 5.3 Run `npm run dev` and verify in a browser that: the new menu item appears between Issues and Profile in both topbar and mobile sidebar; clicking it routes to `/work-orders`; the page renders all summary fields, action bar, and Tasks tab cards matching the Figma; switching tabs swaps panel content; the back arrow returns to the prior page
- [x] 5.4 Confirm no `npx cap sync` or native rebuild is required (no Capacitor plugin changes were made)
