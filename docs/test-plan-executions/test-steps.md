---
sidebar_position: 13
sidebar_label: "Test Steps"
title: "Test Steps"
---

### Step Ordering

1. Steps within a test case can be reordered by dragging them to the desired position. The updated sequence is saved automatically and reflected during execution.
2. Alternatively, user can click on the left of each row and enter the digit where the step need to be moved. On the right, user can also click on option and also choose "Update Order".

![](https://docs.qapilot.io/files/qurC20kIi9tRJq8U1xUA)

![](https://docs.qapilot.io/files/TFzm82MNJanlsu9mH4dM)

### OS Filtering

1. For Flutter projects, QApilot uses a two-layer OS tagging system, at the Test Case level and the Test Step level. 
2. Tagging a test case as Android, iOS, or Both determines whether it runs during a test plan execution. Within a "Both"-tagged test case, individual steps can further be tagged per platform, allowing platform-specific flows to coexist in a single test case. 
3. For Native (Android-only or iOS-only) projects, tagging works at the test case level and all steps follow the project's OS.

   ![](https://docs.qapilot.io/files/uflUofoavMHOnYeR8tyT)

   ![](https://docs.qapilot.io/files/DVf0H37GVU9Lli8oEcQX)
4. Here's a example: Login scenario in a Flutter app - a Test Plan with a case called "Login to the app" tagged as Both (iOS & Android). It has 4 steps:

<table data-header-hidden><thead><tr><th width="76.91015625"></th><th></th><th></th></tr></thead><tbody><tr><td>Step</td><td>Action</td><td>Tag</td></tr><tr><td>1</td><td>Find the email input field</td><td>Both</td></tr><tr><td>2</td><td>Tap "Sign in with Google" button</td><td>Android</td></tr><tr><td>3</td><td>Tap "Sign in with Apple" button</td><td>iOS</td></tr><tr><td>4</td><td>Verify home screen loads</td><td>Both</td></tr></tbody></table>

When the test plan runs on Android: Steps 1, 2, and 4 execute. Step 3 is skipped.

When the test plan runs on iOS: Steps 1, 3, and 4 execute. Step 2 is skipped.

This means you only need one test case to cover both platforms - QApilot handles the branching automatically at runtime based on the OS tag on each step.

## **Clone a Step**

Each step in the test case steps listing now has a "Clone" option.

* Cloning a step creates an exact copy of it, inheriting all configurations: page, element selection, step name, and any associated parameters.
* This can be done in both the recording screen and test case management screen
* The cloned step is inserted immediately after the source step.
* All subsequent steps are automatically re-indexed to reflect the new order.
* A maximum of 5 test steps can be cloned at a time.

## **Step Editing - Navigation View**

The default view for test steps in Test Case Management has been updated from a text list to a screenshot-based navigation view.

**Default View**

* Each step displays its associated screenshot as the primary visual.
* Step details and intent are shown beneath the image.
* Step-level options (edit, disable, delete, history) are accessible by clicking on the screenshot.

**Switching Views**

* The traditional text-based list remains available as an alternate view toggle.

**Editing an Element from the Step View**

* Hover over or click any element in the screenshot to highlight it.
* A dedicated tab lists all OCR-identified text elements on that screen.
* All detected page elements and their XPaths are listed, following the same logic as the Recorder.
* Clicking "Update" creates a new page element and automatically updates the step to reference it - using the stored page source, without requiring a new recording session.