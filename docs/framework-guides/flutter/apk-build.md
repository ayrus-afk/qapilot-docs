---
sidebar_position: 3
sidebar_label: "APK Build Requirements"
title: "Flutter APK Build Requirements"
---

# Flutter APK Build Requirements

:::danger Two requirements — both are mandatory
1. Build in **Profile mode** (not debug, not release)
2. Use a **universal APK** — do NOT use `--split-per-abi`

Uploading the wrong build type causes silent failures or unpredictable element identification errors.
:::

---

## Build Mode: Use Profile

Flutter has three build modes. Only **Profile** mode is recommended for QApilot automation.

| Build Mode | Command | Use For | QApilot Compatible? |
|------------|---------|---------|---------------------|
| Debug | `flutter build apk --debug` | Development only — includes hot reload overlay, is slower | Not recommended |
| **Profile** | `flutter build apk --profile` | Performance testing, automation | **Recommended** |
| Release | `flutter build apk --release` | Production app store distribution | Works, but may strip diagnostics |

### Why Profile Mode?

- **Debug mode** includes a performance overlay and runs slower. It can cause timing-sensitive automation steps to behave differently.
- **Release mode** applies aggressive optimisations that can strip Dart diagnostic information and sometimes alter Semantics behaviour.
- **Profile mode** mirrors release performance characteristics while keeping diagnostic and Semantics data intact — the ideal balance for automation.

---

## APK Type: Universal (Not Split per ABI)

### What is Split per ABI?

When you run `flutter build apk --split-per-abi`, Flutter produces **separate APK files** for each CPU architecture:

```
build/app/outputs/flutter-apk/
├── app-armeabi-v7a-profile.apk   ← 32-bit ARM
├── app-arm64-v8a-profile.apk     ← 64-bit ARM
└── app-x86_64-profile.apk        ← x64
```

Each file only runs on its target architecture. **QApilot cannot accept split APKs.** The upload may appear to succeed but will fail or behave unpredictably during test execution.

### Correct Build Commands

**Option A — Target x64 architecture (recommended):**

```bash
flutter build apk --profile --target-platform android-x64
```

Output: `build/app/outputs/flutter-apk/app-profile.apk`

**Option B — Fat APK (all architectures in one file):**

```bash
flutter build apk --profile
```

Output: `build/app/outputs/flutter-apk/app-profile.apk`

A fat APK is slightly larger but covers all device architectures. Either option is accepted by QApilot.

### What NOT to Do

```bash
# DO NOT use this — produces split APKs, not supported by QApilot
flutter build apk --split-per-abi
```

---

## Finding the Correct APK File

After building, the APK to upload is always:

```
build/app/outputs/flutter-apk/app-profile.apk
```

:::note Not `app-arm64-v8a-profile.apk`
If you see architecture-specific filenames (e.g., `app-arm64-v8a-profile.apk`), you have built a split APK. Rebuild using the commands above.
:::

---

## Full Build Command (Recommended)

Combining both requirements into a single command:

```bash
flutter build apk --profile --target-platform android-x64
```

Then upload: `build/app/outputs/flutter-apk/app-profile.apk`

---

## Quick Pre-Upload Checklist

- [ ] Built with `--profile` flag
- [ ] Did **not** use `--split-per-abi`
- [ ] APK filename is `app-profile.apk` (not architecture-specific)
- [ ] [Semantics are enabled](./semantics) on all interactable widgets
- [ ] Developer options enabled on the target test device

---

## iOS (IPA) Notes

For iOS Flutter apps:
- Build using `flutter build ipa --profile`
- Use an `.ipa` file exported for **ad hoc distribution** or **development**
- Do not upload App Store distribution builds

See [App Upload Requirements](../../setup/app-upload-requirements) for the full matrix.
