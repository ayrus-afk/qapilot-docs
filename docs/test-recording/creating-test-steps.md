---
sidebar_position: 9
sidebar_label: "Creating Test Steps"
title: "Creating Test Steps Using Test Recorder"
---

The **Test Case Recorder** in QApilot allows users to interact with their mobile app in real-time and automatically capture test steps. This page serves as the central workspace for creating, editing, and managing test cases with both interactive and manual options.

### Layout Overview

The recorder page is divided into four main sections:

1. **Mobile App Simulation Panel (Left)** – Displays the app under test. All interactions here are recorded automatically.
2. **Widgets Panel (Center)** – Displays available actions, input options, and quick actions for the selected element.
3. **Test Steps Panel (Right)** – Shows a sequential list of all recorded or manually added test steps.
4. **Action Panes (Sidebars)** – Left sidebar for recording controls; right sidebar for gesture actions.

![](https://docs.qapilot.io/files/BNI9ZxmQH1omyNUugk7B)

***

### Mobile App Simulation Panel (Left)

* Shows a live view of the mobile app under test.
* Any user interaction (tap, swipe, text input) is automatically recorded into test steps.
* Screenshots are automatically captured for each step and can be viewed later.

***

### 2. Widgets Panel (Center)

#### **Action Widget**

* When a user selects an element on the app screen, the **Action Widget** populates context-specific options.
* **Quick Action Bar:**
  * **Get Value** – Retrieve the current value of an element.
  * **Clear Text** – Remove existing input from a field.
  * **Find Element** – Highlight or locate a UI element.
  * **Swipe Up / Swipe Down** – Add swipe actions to navigate content.
* **Input Step Options (for text/input elements):**
  * **Step Title** – Custom label for the test step.
  * **Input Value** – Value to be entered in the field.
  * **Variable Assignment** – Store the entered value in a variable for reuse.
  * **Enable Step Condition** – Toggle to define execution rules (e.g., conditional flow for success/failure).

![](https://docs.qapilot.io/files/JSx3UCtYRZDP6e4fRb4L)

#### **Accessibility Test Section**

* Allows performing accessibility checks on the selected element.

***

### Test Steps Panel (Right)

* Displays the list of recorded steps in order of execution.
* **Available Actions:**
  * **Edit Step** – Modify step title, input value, or action parameters.
  * **Delete Step** – Remove unnecessary or incorrect steps.
  * **View Screenshot** – Opens the screenshot associated with the step for verification.

![](https://docs.qapilot.io/files/3DS6uLaQJXZaHrS83JtH)

* **Manual Test Step Creation:**
  * Users can add test steps manually by clicking **“Add Test Step”** at the top.

***

### 4. Action Panes

#### **Left Sidebar (Recorder Controls)**

* **Refresh App** – Reload the application.
* **Stop Recording** – End the current recording session.
* **Disable Auto Step Creation** – Toggle to stop auto-generation of steps.
* **Enable Tap on Coordinates** – Allows tapping based on screen coordinates.
* **View Page Source** – Displays the XML/HTML source of the page.
* **Find Elements** – Search and highlight specific elements.
* **Switch Context (Native/WebView)** – Toggle between app contexts for hybrid apps.

#### **Right Sidebar (Gesture Pane)**

* Provides gesture-based controls (swipe, drag, multi-touch if supported).
* Used for simulating physical interactions beyond basic taps.

Read more about this in [Gestures](/detailed-documentation/test-recording/creating-test-steps-using-test-recorder/gestures).

***

### Key Features at a Glance

* **Record-as-you-test**: Interactions with the app are automatically converted into test steps.
* **Edit & Manage Steps**: Update or delete steps directly from the step list.
* **Screenshots per Step**: Visual verification with automatic screenshot capture.
* **Conditional Flows**: Define pass/fail branches for dynamic testing.
* **Manual Override**: Insert custom test steps as needed.
* **Multi-context Testing**: Seamlessly switch between native and webview testing.
* **Quick Actions**: Speed up test creation with commonly used actions.

***

### Typical Workflow

1. Launch the recorder and open the app under test.
2. Interact with the app (e.g., login, navigate, input data).
3. Review the automatically generated steps in the **Test Steps Panel**.
4. Edit or delete steps as required.
5. Add conditional logic for steps that require branching.
6. (Optional) Insert manual steps if additional validation is required.
7. Save and organize the recorded test case into a suite or plan.