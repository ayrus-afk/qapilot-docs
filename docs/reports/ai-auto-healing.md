---
sidebar_position: 17
sidebar_label: "AI Auto Healing"
title: "AI Auto Healing in QApilot"
---

#### **Overview**

QApilot’s **AI Auto-Healing** automatically repairs broken test steps caused by minor UI or element changes between app versions, ensuring your test cases remain stable and maintainable across releases. When a locator fails during execution, QApilot intelligently re-identifies the element using a multi-layered fallback process and updates the step context accordingly.

#### **How It Works**

**1. Locator Precedence**

QApilot resolves element changes in the following order of precedence:

1. **Element ID / Accessibility ID** – Primary and most reliable source.
2. **XPath & Tag Attributes** – Used for fuzzy matching when ID changes.
3. **Visual Match (Image Processing)** – Detects elements based on visual similarity when structural identifiers differ (e.g., color or layout change).
4. **Coordinate Fallback** – As a last resort, QApilot interacts with the element’s previously recorded screen coordinates.

If a step succeeds via a fallback method, QApilot marks it as **healed** in the execution log.

***

#### **Where to View Auto-Healing**

* After **test execution**, healed steps are highlighted in the **Execution Report**.
* Each healed step displays:
  * The **original locator**
  * The **AI-generated healing locator**

#### **Approving Healed Changes**

1. Navigate to the **Reports** section and open the relevant test execution.
2. Locate any step marked that has the "AI Assisted" tag as shown in the screenshot below
3. Click **“Update XPath”** beside the healed step.
4. The new AI-generated locator is automatically saved to the test case, and subsequent runs will use the updated version.

![](https://docs.qapilot.io/files/HWxfORVtKlYG2ZhUKCLr)

This ensures your test cases evolve automatically with your app, minimising manual maintenance.