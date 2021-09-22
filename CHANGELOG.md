# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2021-09-22
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
