---
sidebar_position: 2
sidebar_label: "Enabling Semantics"
title: "Flutter Semantics — Required for QApilot"
---

# Enabling Flutter Semantics

:::danger Required step
QApilot **cannot identify or interact with Flutter widgets** unless Semantics are explicitly enabled. This is the most common reason Flutter automation fails with no obvious error message.
:::

---

## What Are Semantics?

Flutter's `Semantics` widget annotates UI elements with metadata (label, role, enabled/focusable state) that is written into the platform's native accessibility tree. QApilot reads this tree to discover, tap, type into, and assert against elements.

Without Semantics, your Flutter widgets are rendered as raw pixels on a canvas — invisible to QApilot's automation engine.

---

## Minimum Required Configuration

Every widget that QApilot needs to interact with must have **both** of the following properties set:

| Property    | Required Value | Purpose                                         |
|-------------|----------------|-------------------------------------------------|
| `enabled`   | `true`         | Marks the element as active/usable              |
| `focusable` | `true`         | Tells the accessibility system it can be focused|

---

## How to Enable Semantics

### Option 1 — Wrap individual widgets (explicit)

Use this when you need fine-grained control over a specific widget:

```dart
Semantics(
  enabled: true,
  focusable: true,
  label: 'Login Button',
  child: ElevatedButton(
    onPressed: () {
      // handle login
    },
    child: const Text('Login'),
  ),
)
```

The `label` value becomes the element's identifier in QApilot's recorder. Use clear, consistent labels.

### Option 2 — Use Material / Cupertino widgets (recommended)

Most standard Material and Cupertino widgets include Semantics **by default**:

- `ElevatedButton`, `TextButton`, `OutlinedButton`
- `TextField`, `TextFormField`
- `Checkbox`, `Switch`, `Radio`
- `DropdownButton`
- `ListTile`

As long as you are not explicitly suppressing or overriding Semantics, these widgets will be visible to QApilot automatically.

:::warning Watch out for `ExcludeSemantics`
If any part of your widget tree is wrapped in `ExcludeSemantics(excluding: true, ...)`, those elements will be hidden from QApilot. Remove or conditionally disable this for any elements you need to automate.
:::

### Option 3 — Enable Semantics globally for the entire app

You can force the Flutter engine to produce a full semantics tree for all widgets by calling:

```dart
void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SemanticsBinding.instance.ensureSemantics();
  runApp(const MyApp());
}
```

This is the lowest-effort approach but may have a small performance overhead. It is acceptable for test builds.

---

## Verifying Semantics Are Working

Use Flutter's built-in `SemanticsDebugger` to visually confirm which elements are semantics-enabled before uploading to QApilot.

Wrap your app's root widget temporarily:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    SemanticsDebugger(
      child: MyApp(),
    ),
  );
}
```

When you run the app with this wrapper, an overlay will show all elements that have semantic annotations. Any interactive element you want QApilot to use **must appear in this overlay**.

:::tip Remove before building for QApilot
`SemanticsDebugger` is a development tool only. Remove the wrapper (or wrap it in a `kDebugMode` check) before building your Profile APK for upload.
:::

---

## What Happens Without Semantics

| Symptom | Root Cause |
|---------|------------|
| Elements not visible in QApilot recorder | Semantics not enabled on those widgets |
| Recorded steps fail during execution | Semantics present in debug build but stripped in release |
| No error message in QApilot | The automation engine silently skips elements it cannot identify |
| Random elements are recorded but not the one you tapped | Only some widgets have Semantics enabled |

---

## Next Step

Once Semantics are enabled, ensure your APK is built correctly:

→ [APK Build Requirements](./apk-build)
