---
sidebar_position: 6
sidebar_label: "App Upload Requirements"
title: "App Upload Requirements"
---

# App Upload Requirements

Before uploading your app to QApilot, verify your build meets the requirements below. Uploading an incompatible build is the most common cause of element recognition failures and upload errors.

:::warning Flutter users
If you are testing a **Flutter app**, complete the [Flutter Integration Guide](../framework-guides/flutter/overview) **before** proceeding. Flutter has additional requirements beyond what is listed here.
:::

---

## Android (APK)

| Requirement | Supported | Notes |
|-------------|-----------|-------|
| Universal APK (all ABIs) | Yes | Recommended |
| x64 targeted APK | Yes | Recommended (`--target-platform android-x64`) |
| Fat APK | Yes | Acceptable |
| Split APK (per ABI) | **No** | Not supported — upload will fail or behave unpredictably |
| Debug build | Use with caution | Works but slower; not recommended for automation |
| Profile build | Yes | **Recommended**, especially for Flutter |
| Release build | Yes | Standard for native Android apps |
| Minimum Android API level | 21+ | Lower versions are untested |
| Maximum file size | 500 MB | Contact support for larger apps |

### Getting the right APK

**For Flutter apps:**
```bash
flutter build apk --profile --target-platform android-x64
# Upload: build/app/outputs/flutter-apk/app-profile.apk
```

**For native Android apps:**
```bash
./gradlew assembleRelease
# Upload the generated APK from build/outputs/apk/release/
```

---

## iOS (IPA)

| Requirement | Supported | Notes |
|-------------|-----------|-------|
| Ad hoc distribution IPA | Yes | Recommended |
| Development distribution IPA | Yes | Acceptable |
| App Store distribution IPA | **No** | Cannot be installed on test devices |
| Debug build | Use with caution | Works but not recommended |
| Profile build | Yes | Recommended for Flutter |
| Release build | Yes | Standard for native iOS apps |
| Minimum iOS version | 13+ | Lower versions are untested |

### Getting the right IPA

**For Flutter apps:**
```bash
flutter build ipa --profile
# Export as ad hoc or development IPA from Xcode Organizer
```

**For native iOS apps:**
- Archive in Xcode → Export → Ad Hoc or Development

---

## Framework-Specific Requirements

### Flutter
Requires two additional steps before any APK/IPA will work correctly:
- [Enabling Semantics](../framework-guides/flutter/semantics) — all interactive widgets must have `enabled: true` and `focusable: true`
- [APK Build Requirements](../framework-guides/flutter/apk-build) — must use Profile mode and a universal APK

### React Native
No special build requirements beyond the general Android/iOS requirements above. Ensure accessibility labels (`accessibilityLabel` props) are set on interactive elements for reliable element identification.

### Native Android / iOS
No framework-specific requirements. Follow the general build guidelines above.

### Xamarin / MAUI
Accessibility APIs must be wired up. Contact QApilot support for guidance.

---

## Troubleshooting Upload Issues

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Upload rejected immediately | Split APK uploaded | Rebuild without `--split-per-abi` |
| Upload succeeds but recorder shows no elements | Semantics not enabled (Flutter) | See [Flutter Semantics guide](../framework-guides/flutter/semantics) |
| App installs but crashes on launch | Wrong architecture or incompatible build | Check APK target platform |
| Upload succeeds but execution fails | Release build strips diagnostics | Rebuild in Profile mode |
