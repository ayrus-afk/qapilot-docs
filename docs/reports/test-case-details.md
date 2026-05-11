---
sidebar_position: 16
sidebar_label: "Test Case Details"
title: "Test Case Details"
---

#### Overview

The Test Case section in QApilot’s Reports provides a detailed, step-by-step breakdown of how each test case was executed. It offers complete visibility into execution results, screenshots, and system logs, allowing QA teams to quickly analyse behaviour, verify outcomes, and identify failure points.

![](https://docs.qapilot.io/files/EIIBZVm5dNOIUrD2LwTy)

***

#### Key Components

**1. Step-by-Step Execution View**

Each test case expands into an execution timeline listing every test step in order of execution.\
For every step, QApilot captures:

* Start and End Timestamps
* Keyword / Action Type (e.g., Tap, Input, Scroll)
* Execution Time
* Status Indicator – *Success* ✅ or *Failure* ❌
* Context and Log Entries – element IDs, XPaths, automation name, and environment context

This ensures that every action performed during the test run is fully traceable.

**2. Screenshots: Recording vs. Execution**

For each step, QApilot displays a side-by-side visual comparison of:

* Recorded Screenshot – the screen state captured during initial recording.
* Execution Screenshot – the actual state of the app during playback.

This comparison helps visually validate whether UI changes affected test outcomes.

**3. Navigation View**

At the top of the test case, you can toggle Navigation View to see all screenshots from the test steps in a visual flow. This provides a quick, storyboard-style overview of the entire test run—ideal for reviewing app behaviour without diving into each log.

![](https://docs.qapilot.io/files/EdbOWO5OOxlkoMp3ILoi)

**4. Step-Level Logs**

Each step includes rich contextual logs such as:

* Element locators used (ID, XPath, or custom path)
* Execution context (e.g., automation name, resource ID)
* Element found/displayed status
* AI auto-healing traces (if applied)
* Click or input confirmation

These logs help pinpoint the exact cause of a success or failure, down to the element level.

**5. Step-Level Status Indicators**

Each test step is clearly marked with a status icon:

* ✅ Success – Step executed as expected.
* ⚠️ AI-Assisted – Step passed through [AI Auto-healing](/detailed-documentation/reports/ai-auto-healing-in-qapilot).
* ❌ Failure – Step failed due to missing or mismatched element.

This lets testers identify reliability trends and focus on failing or healed steps quickly.