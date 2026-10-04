# Bryan Lim Portfolio — V3.28 SALLY Scorecard Drawer

Built from V3.27.

- Adds a persistent `VIEW SCORECARD` button throughout the SALLY demo.
- Opens a right-side drawer without leaving the current workflow step.
- Uses a fictional 6-competency Creative Strategist scorecard created for the public portfolio demo.
- Explicitly states that it is not Maneuver Marketing's internal scorecard.
- Ratings are blank before evaluation.
- After `Run SALLY Evaluation`, the same scorecard populates with demo ratings and evidence notes.
- Transcript, Spar, Decide and Submit flows are otherwise preserved.


## V3.29
Selected SALLY side tab now uses a much clearer iOS-style raised pill/bubble treatment with stronger contrast, shadow, slight outward shift, and a status dot.


## V3.33 — Subtle Main Navigation
- Reverted the main website sidebar to its pre-navigation-experiment design.
- No dark sidebar, no width changes and no layout changes.
- Only the current page gets a soft floating cream pill, teal selection dot and subtle shadow.
- Inactive Home / Work / Experience / About links remain plain text.
- Hovering an inactive link adds a very light temporary pill and a 3px nudge to signal clickability.
- SALLY demo refinements from V3.29 are retained.


## V3.34 — Navigation + Layout Repair
- Restores the full shared `styles.css` that was accidentally omitted from recent navigation packages.
- This re-synchronizes Home, Work, Experience and About with the intended layout and prevents the pages from collapsing toward the center.
- Keeps the original narrow cream sidebar.
- Refines the selected-page pill so the teal dot has dedicated spacing and no longer overlaps the label.
- Inactive links remain plain text with only a subtle hover affordance.


## V3.35 — Width + Navigation Alignment
- Active navigation dot is now part of the flex row with the label, so it is vertically centred with the word instead of floating over it.
- Sidebar grows slightly from the original footprint to 108px, giving `Experience` more breathing room before the divider.
- Main page margin follows the sidebar variable, so the wider rail does not overlap content.
- Removes legacy max-width constraints from Work, Experience and About on desktop.
- Inner pages now use the available browser width rather than collapsing into a narrow centre/left column.
- Home composition remains otherwise unchanged.


## V3.36 — Sidebar Spacing
- Sidebar widened from 108px to 122px.
- Divider moves further right so `Experience` no longer touches it.
- Active dot alignment and selected-pill styling are preserved.
- Main page margin continues to follow the same sidebar variable, preventing overlap.


## V3.37 — iOS-style Active Tab
- Removes green status dots from the main navigation.
- Active page now uses a rounded highlighted border around the word, inspired by iPhone toggle/selection styling.
- Adds subtle fill plus inner/outer shadow so the active tab feels selected without looking bulky.
- Sidebar width from V3.36 is preserved.


## V3.38 — Experience Pill Fix
- Active navigation pill now sizes to its label content rather than inheriting a constrained width.
- `Experience` is fully enclosed by the selected border.
- Sidebar receives a small additional width increase to preserve clearance from the divider.


## V3.39 — SALLY Candidate Overview
- Restores a compact fictional candidate context card above the transcript.
- Shows Alex Morgan's name, demo role, location, experience level, DTC background and interview stage.
- Adds a short note explaining why the profile is useful for the demo.
- Transcript, scorecard drawer and evaluation flow remain unchanged.
