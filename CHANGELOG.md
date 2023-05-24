# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] -  
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
