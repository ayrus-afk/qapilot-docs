---
sidebar_position: 1
sidebar_label: "What's New"
title: "What's New?"
---

Recent Highlights on QApilot

### OS Filter for Test Steps

OS-level filtering for individual test steps - enabling precise platform-specific execution control within a single test case.

In cross-platform test cases configured to run on both Android and iOS, all steps would previously execute on both platforms regardless of relevance. This made it difficult to handle platform-specific flows without duplicating entire test cases.

With this capability, users can assign an OS type to individual steps directly within the test case editor. During execution, steps with a specific OS assigned are only triggered for the matching platform and skipped for the other. Steps left at the default "Both" setting continue to execute across all platforms as before. 

OS settings applied to a functional block affect only its usage in that context - the block itself remains unmodified and fully reusable across other test cases.It is now possible to manage platform-specific logic within a single test case, eliminating the need for duplicate flows and reducing maintenance overhead.

***

### Biometric Authentication Support on LambdaTest

Fingerprint authentication can now be bypassed during recording and execution on LambdaTest, enabling test flows that include fingerprint-gated screens to run end-to-end without manual intervention.

Previously, any fingerprint authentication prompt in the app would block test execution, requiring manual handling or workarounds that broke automation continuity. With this capability, every fingerprint authentication trigger in the app flow renders a dummy screen, allowing the test to proceed seamlessly. 

The LambdaTest session is initialised with "enableBiometricAuthentication": true, activating the bypass at the device level. No changes are needed to the test steps themselves.\
It is now possible to automate complete flows through fingerprint-protected screens on LambdaTest, without interruption.