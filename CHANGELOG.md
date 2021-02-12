# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
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