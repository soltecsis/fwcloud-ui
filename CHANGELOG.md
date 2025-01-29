# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## unreleased
### Fixed 
- `import backup` button must be visible when there is not any backup available.
- `close` button was disabled when exporting backups, now is enabled.
- Problem with `login` panel, when there is login data stored in Chrome browsers. `Username` and `password` float-labels were not moving to their right position.
- `Customer` field in login panel now has `1` as a default value.


## [2.0.10] - 2025-01-12
### Fixed 
- Problem when copy/paste objects between positions and item right-clicked highlighting functionality.
- Problem when removing a node from cluster, error message was disappearing too quick and was not possible to see the information properly.


## [2.0.9] - 2024-12-04
### Fixed
- An issue where nested `confirmationService` dialogs failed to display properly, ensuring the dialog remains visible for user interaction.
Reported in the FWCloud forum: https://forum.fwcloud.net/threads/unable-to-remove-node-from-cluster.138/


## [2.0.7] - 2024-11-27
### Fixed
- Menus in the grid now display correctly even when no element is selected.
- Added `resetVisibleRulePositions` method to address drag-and-drop state issues in Firefox, clearing properties and CSS classes specific to the browser.
- Solved problem with a translation that is showing a message but Firewall name is not appearing in Firewall installation panel.
- Improved display of rules in relation to viewport and screen resolution.
- Solved problem when the fwcloud import failed it did not show the panel informing about the error.
- Updated Node.js packages to the latest versions.


## [2.0.6] - 2024-11-11
### Fixed
- `Negate position` menu option is not shown.
- Display problems with a policy with a lot of groups. 


## [2.0.5] - 2024-11-07
### Fixed
- Display error of cluster icons.


## [2.0.4] - 2024-11-07
### Fixed
- Updated Node.js packages to the latest versions.
- Temporarily fixed primeng colorpicker error. The resource images are corrupted in the package (17.18.11).
- Visual problem with the creation of rules when starting from a rule and creating a script rule or vice-versa.
- Solved scroll related issues in policy grids.
- Solved contextmenu position after calculate heights.
- Solved contextmenu working properly in small size screens.
- Adaptation of the comment editing cell to the rule size.
- Solved several system policy grids related issues.
- Interface IP editing bug.
- Display of icons and information in icon/object labels within policy rule.
- Dropdown arrow from Action/Apply visibility issue.
- `force update` menu option in manual updates.
- Solved several plugin install panel related issues.
- `+info` button issue when cluster is created with import wizard.
- Solved Sync CCD files related issues.

### Added
- Routing compilation block rules with empty object inside them.
- Warning in policy routing when add an object without data.
- ContextMenu option to manually update version of FWCloud.
- New OpenVPN options.


## [2.0.3] - 2024-10-02 
### Fixed
- Removed misplaced character in update panels.
- Comment editing cell displaying properly within a policy rule.
- Improved performance of contextmenu inside a policy grid for small size screens.
- Button sizes adjusted when adding nodes to a cluster in the Import Wizard panel.
- Modified styles in the Where Used panel (expand/collapse firewall arrows and the number of found rules).


## [2.0.2] - 2024-09-29 
### Added
- To install System policies, it has been added a panel to do that.
- Added Systemctl menu as an independent panel to manage systemctl actions for OpenVPN, DHCP, Keepalived and HAProxy.
- DHCP, Keepalived and HAProxy added to the tree as policy nodes, with their own policy grids and all the functionality which it entails.
- Added button in Firewall and Cluster editing panel, getting firewall host extra information.
- Added HAProxy plugin.

### Changed
- ESLint package properly configured into the project.
- Fresh_build_start script added in order to make clean installations easier whenever we need it.
- Upgrade version from PrimeNG and using PrimeFlex for GridCSS system. 
- OpenPGP module upgraded as well. 
- Removed not used dependencies such as jqx-splitter .
- Upgraded dependency packages versions to the last version.
- Upgraded Angular to the last Version(v18).
- Upgraded IntegralUI interface package to the new version.


## [1.9.2] - 2023-06-07
### Fixed
- Compilation error.


## [1.9.1] - 2023-06-07
### Added
- In a DEB/RPM packages based installation notify when new packages releases are available.
 
### Fixed
- After installing policy in a firewall, if we wait one minutes and install again (the same or other firewall) a `Continue process` button appear and we must press it for continue with the process. This button should not appear.
- If it is not possible to connect with the FWCloud-API instead of an `Authentication error` message generate a more meaningful error message. Now a`Connection error` message is shown with the detail: `The FWCloud-API server couldn't be reached` 


## [1.9.0] - 2023-05-12 
### Added
- Automatically generated packages by means of GitHub Actions for `deb` and `rpm` based Linux distributions.


### [1.8.1] - 2023-05-04 
### Fixed
- Error building the Angular application in the GitHub Actions CI.

### Changed
- Use Node.js 16 in the GitHub Actions workflow for generate the angular application.


### [1.8.0] - 2023-05-04 
### Added
- Automatically generated packages by means of GitHub Actions for `deb` and `rpm` based Linux distributions.


### [1.7.0] - 2023-01-30
### Added
- Firewalls/clusters menu option for direct access to `Plugins` and `NGFW tabs`.
- ISC Bind9 plugin.
- ISC DHCP plugin.
- NGFW tools tab.


### [1.6.3] - 2023-01-30 
### Fixed
- NullInjectorError in the access to the VPN management section.


### [1.6.1] - 2023-01-30 
### Added
- Context menu for the title of the FIREWALLS, OBJECTS and SERVICES boxes. This is useful if, for example, we can not retrieve the OBJECTS tree. We can use the repair tree menu option in order to solve the problem.

### Fixed
- Solved problems with the display of the checking for updates dialog.


### [1.6.0] - 2022-11-18
### Added
- Keepalived plugin.
- Suricata plugin.
- Zeek plugin.
- Elasticsearch plugin.
- Kibana plugin.
- Logstash plugin.
- Filebeat plugin.
- Web Safety Proxy plugin.
- DNS Safety plugin.
- CrowdSec plugin.
- NtopNG plugin.
  
### Fixed
- Avoid the accumulation of `EVENT_PLUGIN_PANEL_CLOSED` events.


### [1.5.5] - 2022-10-18
### Fixed
- Bug when creating a firewall/cluster by means of the import wizard.


### [1.5.4] - 2022-10-10
### Fixed
- Error in new release deploy.


### [1.5.3] - 2022-10-10
### Fix
- Allow `config` API call only after authentication.


### [1.5.2] - 2022-10-07
### Fix
- Bug that doesn't allows the creation of new firewalls/clusters with SSH communication even if th SSH communication is allowed in the API.


### [1.5.1] - 2022-10-06
### Added
- Be aware of when communication with firewalls by means of SSH protocol is disabled in the API.
- Manage messages related with the limits in the amount of FWClouds that can be created and, into each fwcloud, the amount of firewalls, clusters and nodes within a cluster.

### Fix
- Scroll in the plugin enable/disable log


### [1.5.0] - 2022-09-22
### Added
- Country and continent objects for use in the source and destination positions of a policy rule.
- Compile option for a routing policy rule.
- Check websocket communication before run websocket dependent API calls.
- Use of the websocket with the API for realtime output of scripts run in firewalls.
- Tab for OpenVPN history archiver.
- Tab for plugins manager.
- 2FA Support.
- CA and CRT comments can be modified.
- Allow the option apply to for routes and routing policy.
- Download and view the policy scripts of each firewall or cluster.

### Changed
- Improvements in communications timeout errors management.
- Allow the modification of CA an CERT comment.

### Fix
- Display problems in objects globe info with lot of items.
- Several bugs in timeout errors management.
- Syntax error in country info globe.
- The button to export backups.
- Compile option is already shown in the policy routing rules menu.
- Icons that failed after updating the icon pack are displayed correctly.
- Display correctly objects when we have lot of items in the info globe.
- URL redirection.


### [1.4.0] - 2022-04-28
### Added
- Options for enable/disable Docker, CrowdSec and Fail2Ban compatibility.
- New special Hook script rule.
- New special CrowdSec compatibility rule for IPTables/NFTables CrowdSec firewall bouncer.
- New special Fail2Ban compatibility rule.
- Button for disable object info tooltip.

### Changed
- Search by ip in openvpn server and client.
- Bottom panel of the VPN section disabled.
- Hook script rule affects column layout for SNAT and DNAT grids fixed.
- Hook Script edit panel improved.
- Firewall flag options panel redesigned.
- Cluster flag options panel redesigned.
- Short VPNs by name.

### Fix
- Fix comment persistence logic.
- Warning about circular dependency in code compilation.
- Bug in GitHub CI.


### [1.3.7] - 2022-03-24 
### Fix
- Fix component versions listing only available components


### [1.3.6] - 2022-03-18
### Added
- Generate self signed TLS certificates for Docker image.
- Enable HTTPS access in the Docker image.


### [1.3.5] - 2022-03-10
### Fixed
- Fix `fwcAppDocsURL` default config parameter.


## [1.3.4] - 2022-03-07
### Fixed
- Docker workflow optimizations. 


## [1.3.3] - 2022-03-07
### Fixed
- Bug in `fwcloud-ui` repository docker workflow. 


## [1.3.2] - 2022-03-07
### Added
- Disable/Enable update checking using configuration
- Added `Dockerfile`.


## [1.3.1] - 2022-02-11
### Added
- OpenVPNs lists are sorted by its name.
- Button for disable/enable info tooltip.
- Changed documentation directory.
- Added grid settings in order to customize columns visibility.

### Fixed
- Bug in GitHub actions script. Remove old fwcloud-ui repository content before adding the new one.
  

## [1.3.0] - 2021-12-02
### Added
- Included firewall options in order to enable FWCloud-Agent communication.
- Detect FWCloud-Agent and SSH communication errors.
- Included OpenVPN history statistics views. This feature is only available in firewalls managed with FWCloud-Agent.


## [1.2.0] - 2021-09-22
### Added
- New theming system with light/dark support
- Add support for the "Where used" functionality for routing rules and routes
- Support for keyboard shortcuts to cut/copy/paste/move/delete rules from the grid
- New support for routing policies and routing tables
- Add support for multiple compilers on firewalls, clusters and rule compilation
- Support progress bar instead of full log for the long operations
- Add socket messages support for long operations (restore snapshots, import fwclouds)
- Add rule hooks scripts management from the rule editing panel
- New dialog management, improvements on dock (minimized dialogs) component
- Add Block/Unblock VPN connection options
- Enable tree search by object name, TCP/UDP port and IP Address

### Fixed
- Improve the compile/install flag management
- Fix a bug in the view update after modifying an object
- Improve error management process
- Improved UI messages
- Fix a bug in the drag & drop system that prevented the info tooltip to appear when hovering the grid items
- Correct the styling of the FwcMessage component
- Remove incorrect context menu options
- Fix bug in dynamic panel management that prevented it to be destroyed once closed
- Fix a bug in the exported cloud file name in the export functionality
- Non controlled error when pressing the ENTER key in the item panel component
- Modify the compilation/installation flags of the firewall/cluster when one of its rules is modified (f.i. checking an option or adding a hook script)
- Bugfixes in object restrictions management


## [1.0.0] - 2021-03-18
### Added
- Update online documentation
- Add "force" deletion of FWClouds, even when they are not empty
- Add new VPN client configuration naming wizard
- Add new virtual grid component
- Add context help
- Add new 'Firewall/cluster import wizard'.
- Add 'View changes' button in the updates panel.
- Allow retyping user/password on credentials errors.
- Renew the session each 5 minutes while the user is logged.
- Start support for new error responses.
- Support cancellable requests in the iptables-save component.
- Add support for progress bar in the message component.
- Improve iptables-save component.
- New iptables-save import/export component.
- Add CHANGELOG.md file.

### Fixed
- Substitute the log component to enable virtual scrolling for a better performance when having lots of messages
- Fix a bug in the 'Duplicate' context menu option
- Replace the error message component to avoid a bug that didn't show the message after restoring a minimized dialog
- Fix VPN status component interface to fit better on screen
- Fix a bug that redirected to the cloud selection page upon socket disconnection
- Fix a bug in the logout process
- Improve file upload component
- Improve long duration api calls management
- Disable polling in socket io transports (to avoid disconnections when debugging)
- Fix bug in updating cluster nodes installation data in the batch operations manager component
- UI/icons tweaks.
- Fix wrong translations.
- Fix a bug that allowed to press the "Login" button for a few tenths of a second after having logged in successfully.
- Manage timeout on iptables-save import operation.
- Close dynamic dialogs that remained open when logging out due to outdated session.
- Deactivate unneeded VPN mesh wizard component.
- Changes in socket management.
