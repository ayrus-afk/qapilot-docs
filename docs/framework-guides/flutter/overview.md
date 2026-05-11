---
sidebar_position: 1
sidebar_label: "Flutter Overview"
title: "Flutter Integration Guide"
---

# Flutter Integration Guide

QApilot supports automated testing of Flutter applications on Android and iOS. However, Flutter's rendering engine requires a small amount of one-time setup in your app before QApilot can identify and interact with your UI elements.

This guide covers everything you need to do **before** uploading a Flutter app to QApilot.

---

## Why Flutter Requires Extra Setup

Flutter renders its UI using its own **Skia / Impeller** rendering engine. Unlike native Android or iOS apps, Flutter does **not** use the platform's native accessibility tree to draw its widgets.

QApilot's automation engine uses the platform accessibility tree to discover, label, and interact with elements. When Flutter bypasses this tree, QApilot cannot "see" any widgets — unless you explicitly expose them using Flutter's **Semantics** API.

```
Native Android / iOS
    └── Platform Accessibility Tree ← QApilot reads this
            └── Buttons, TextFields, Labels …

Flutter App (without Semantics)
    └── Skia Canvas ← QApilot cannot read this
            └── Widgets rendered as pixels only
```

When Semantics are enabled, Flutter writes widget information into the platform accessibility tree, making every labelled widget visible to QApilot.

---

## Checklist Before Uploading a Flutter App

- [ ] All interactable widgets have `Semantics(enabled: true, focusable: true)`
- [ ] App is built in **Profile mode** (`flutter build apk --profile`)
- [ ] APK is a **universal build**, NOT `--split-per-abi`
- [ ] Target platform is `android-x64` or a fat binary
- [ ] Developer options are enabled on the test device

See the detailed guides below for each requirement:

- [Enabling Semantics](./semantics) — required for element recognition
- [APK Build Requirements](./apk-build) — required for correct app upload
