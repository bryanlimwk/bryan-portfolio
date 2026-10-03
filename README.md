# Bryan Lim Portfolio — V3.20 ShopBack Self-Contained Fix

Fixes the V3.19 rendering issue.

Root cause:
- `shopback-connect.html` was a legacy standalone page with its own inline stylesheet.
- The new V3.19 ShopBack classes were only added to the shared `styles.css`, but the page does not load that stylesheet.
- Result: the new HTML rendered almost unstyled.

Fix:
- Added the complete ShopBack Connect case-study styles directly into `shopback-connect.html`.
- Removed the obsolete legacy interaction script.
- No dependency on the shared stylesheet for the case-study layout.
- Preserves the approved visual direction and reconstructed imagery.
