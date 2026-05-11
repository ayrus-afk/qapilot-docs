---
sidebar_position: 20
sidebar_label: "Troubleshooting"
title: "Troubleshooting & FAQ"
---

# Troubleshooting & FAQ

Use this guide to diagnose common issues with QApilot. If your issue is not listed here, contact [QApilot support](https://qapilot.io).

---

## Element Recognition Issues

### Elements not visible in the recorder

| Possible Cause | Check | Fix |
|---------------|-------|-----|
| Flutter Semantics not enabled | Run app with `SemanticsDebugger` wrapper | [Enable Semantics](./framework-guides/flutter/semantics) |
| Split APK uploaded | Check APK filename — if it contains architecture (e.g. `arm64-v8a`) it's a split APK | [Rebuild as universal APK](./framework-guides/flutter/apk-build) |
| App built in Release mode (Flutter) | Check build command used | Rebuild with `--profile` |
| ExcludeSemantics wrapper present | Check widget tree for `ExcludeSemantics` | Remove or conditionally disable |

### Recording works but execution fails on Flutter elements

This usually means Semantics are present in your debug build but stripped or altered in the build uploaded to QApilot.

- Ensure you're using **Profile mode**, not Release mode
- Verify Semantics are not conditionally enabled only in debug mode

### App installs but nothing is interactable

Run the app with `SemanticsDebugger` enabled — if you see no overlay annotations on any element, Semantics are globally disabled or suppressed.

Call `SemanticsBinding.instance.ensureSemantics()` in your app's `main()` to force the full semantics tree.

---

## App Upload Issues

### Upload rejected immediately

- You may be uploading a split APK. Check that the filename does not contain an architecture suffix like `arm64-v8a`, `armeabi-v7a`, or `x86_64`.
- Rebuild with: `flutter build apk --profile --target-platform android-x64`

### Upload succeeds but the app crashes on the device

- The APK target platform may not match the test device architecture.
- Try a fat APK: `flutter build apk --profile` (no `--target-platform` flag).

---

## Device / Connection Issues

### "No devices found" during recording

- Ensure the **QApilot Local Agent** is installed and running on the machine connected to the device.
- Check the [Local Agent setup guide](./setup/local-agent).
- Verify the device is connected via USB and has **USB debugging enabled**.
- On Android 14+, also enable **Wireless debugging** as a fallback.

### Device connected but recording session won't start

- Restart the Local Agent.
- Revoke and re-authorise USB debugging on the device.
- Try a different USB cable or port.

---

## Execution Issues

### Test passes in recording but fails in execution

- Check if the app state differs between recording and execution (e.g., a logged-in session vs. a fresh install).
- Review the execution video in [Reports](./reports/index.md) to see at which step the failure occurs.
- If using dynamic data, verify the test data source is configured correctly.

### Steps execute on wrong platform (cross-platform tests)

- Use the **OS filter** on individual test steps to restrict steps to Android or iOS only.
- See [Test Steps](./test-plan-executions/test-steps.md) for details on OS-level filtering.

---

## Common Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| "Element not found" | QApilot could not locate the target element | Check Semantics; verify element label matches |
| "App did not launch" | Installation failed or app crashed on start | Check APK compatibility; verify device architecture |
| "Session timeout" | Recording or execution session exceeded time limit | Reduce test length; check network stability |
| "Invalid APK format" | Uploaded file is not a valid APK | Ensure you're uploading the correct build output |
