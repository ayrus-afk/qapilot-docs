---
sidebar_position: 5
sidebar_label: "Overview"
title: "Autonomous Test Generation"
---

A **crawler** is an **intelligent test exploration engine** that automatically scans through the mobile/web application and performs actions to discover test flows, UI components, and potential issues.

The **crawler in QApilot** is like an **auto-navigator** that explores the app, finds possible user paths, generates test steps, and increases coverage with minimal manual intervention.

### How it Works in the QApilot Context?

* **Supported Platforms**
  * Currently, Crawlers in QApilot are designed for **mobile applications on Android OS**.
  * iOS crawler support is **under implementation** and will be available in upcoming releases.
* **Execution Modes**
  * **Crawl Local** → Run the crawler on a locally connected Android device/emulator.
  * **Crawl Remote** → Run the crawler on a **cloud-based Android device farm** (BrowserStack, Sauce Labs, LambdaTest).
* **Recording**
  * In both local & remote modes, the crawler **records the interactions** into structured test steps.
  * In both Local and Remote modes, the crawler automatically records interactions as structured test steps, which are then stored directly into Test Cases for reuse and execution.
* **Crawl Reports**
  * All crawler runs (local or remote) are stored in **Crawl Reports**, where you can:
    * Review steps.
    * Compare across builds.
    * Track coverage.
    * Promote recorded flows into regression suites.