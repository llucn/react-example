### Requirement: Top-Level Navigation Entry
The application SHALL expose a `Work Order Tracking` entry in the top-level navigation, displayed in both the topbar menu and the mobile sidebar, positioned immediately after the existing `Issues` entry and before `Profile`.

#### Scenario: Menu ordering on desktop topbar
- **WHEN** a user views the application at a viewport width that renders the desktop topbar
- **THEN** the visible menu order is `Home`, `Publish`, `Issues`, `Work Order Tracking`, `Profile`, `Device`

#### Scenario: Menu ordering in mobile sidebar
- **WHEN** a user opens the hamburger sidebar on a narrow viewport
- **THEN** the listed menu items appear in the order `Home`, `Publish`, `Issues`, `Work Order Tracking`, `Profile`, `Device`

#### Scenario: Selecting the entry navigates to the tracking route
- **WHEN** a user clicks or taps the `Work Order Tracking` menu item
- **THEN** the application navigates to the route `/work-orders` AND the `Work Order Tracking` item is rendered as selected in the active menu

### Requirement: Work Order Tracking Route
The application SHALL register a route at the path `/work-orders` that renders the `WorkOrderTrackingPage` inside the existing `AppLayout`.

#### Scenario: Direct navigation to the route
- **WHEN** a user loads the URL path `/work-orders` directly in the browser
- **THEN** the application renders `WorkOrderTrackingPage` inside `AppLayout` without redirecting

#### Scenario: Topbar remains visible on the new page
- **WHEN** the `/work-orders` route is active
- **THEN** the global topbar, theme toggle, and user avatar continue to render and remain interactive

### Requirement: Page Header with Title and Affordances
The `WorkOrderTrackingPage` SHALL display a page header containing a back-navigation control on the left, the localized title `Work Order Tracking` centered, and a menu (kebab/hamburger) affordance on the right, matching the Figma frame `725:2960`.

#### Scenario: Header renders required elements
- **WHEN** the page first renders
- **THEN** a back arrow icon button is visible on the left, the heading text `Work Order Tracking` is visible, and a menu icon button is visible on the right

#### Scenario: Back arrow returns to previous history entry
- **WHEN** a user clicks or taps the back-arrow control
- **THEN** the browser navigates to the previous history entry

### Requirement: Action Bar with Action Buttons and Update Work
The `WorkOrderTrackingPage` SHALL display a horizontal action bar with three outlined action buttons labeled `Action 1`, `Action 2`, `Action 3`, an overflow (`…`) button, and a primary filled `Update Work` button aligned to the right.

#### Scenario: Action buttons render and are interactable
- **WHEN** the page first renders
- **THEN** five controls are present in the action bar in the order `Action 1`, `Action 2`, `Action 3`, overflow (`…`), `Update Work` AND each control responds to click/tap without throwing

#### Scenario: Update Work is visually primary
- **WHEN** the action bar is rendered
- **THEN** the `Update Work` control uses a filled primary visual style distinct from the outlined action buttons

### Requirement: Work Order Summary Block
The `WorkOrderTrackingPage` SHALL display a summary block sourced from mock data, containing the work order ID prefixed with `#`, the work order title, and a label/value list with the rows `Description`, `Status`, `Asset#`, `Asset Details`, `Location Details`, `Created by…`. The `Status` and `Created by…` rows SHALL each show a secondary timestamp aligned to the right of the primary value.

#### Scenario: Sample mock work order is shown
- **WHEN** the page renders with the supplied sample data
- **THEN** the summary shows `#1027`, `Water Treatment For Cooling Tower`, status `Assigned` with timestamp `4/25/24 11:49 AM`, asset `10263`, location `Garden St 20`, and creator `Gregory K` with timestamp `8/31/23 11:49 AM`

#### Scenario: All summary rows render
- **WHEN** the page renders
- **THEN** every label in the set `{Description, Status, Asset#, Asset Details, Location Details, Created by…}` is present in the DOM in the listed order

### Requirement: Tabbed Detail Section
The `WorkOrderTrackingPage` SHALL display a tab bar below the summary with the tabs `Tasks`, `Attachments`, `History`, and two additional placeholder tabs (labeled `Tab label`), defaulting to the `Tasks` tab being active on first render. The `Tasks` and `Attachments` tab labels SHALL each include a badge showing the count of items in their underlying mock collections.

#### Scenario: Default active tab
- **WHEN** the page first renders
- **THEN** the `Tasks` tab is shown as active AND the `Tasks` panel content is visible

#### Scenario: Badge counts reflect mock data
- **WHEN** the mock data contains 4 tasks and 2 attachments
- **THEN** the `Tasks` tab label shows the badge `4` AND the `Attachments` tab label shows the badge `2`

#### Scenario: Switching tabs updates the visible panel
- **WHEN** a user clicks the `Attachments` tab
- **THEN** the `Attachments` panel content becomes visible AND the `Tasks` panel content is no longer visible

### Requirement: Tasks Tab Renders Card List from Mock Data
When the `Tasks` tab is active, the page SHALL render one card per task in the mock collection. Each card SHALL display a title row and six label/value field pairs arranged in two columns.

#### Scenario: One card per mock task
- **WHEN** the mock collection contains N tasks
- **THEN** the Tasks panel renders exactly N task cards in the same order as the collection

#### Scenario: Card layout matches the design
- **WHEN** a task card renders
- **THEN** the card shows a single title row at the top followed by six label/value pairs in three rows of two columns

### Requirement: Mock Data Module
The page SHALL source all displayed content from a single in-repo TypeScript module exporting a typed `WorkOrder` shape and a `sampleWorkOrder` instance. No network call SHALL be made by the page on render.

#### Scenario: No network activity on render
- **WHEN** the page mounts
- **THEN** no `fetch` or axios request is issued by the page or its descendants

#### Scenario: Mock data is the single source of values
- **WHEN** the mock module's exported sample is edited (e.g. title changed) and the page is re-rendered
- **THEN** the rendered summary, tab badges, and task cards reflect the edited values without any other code change
