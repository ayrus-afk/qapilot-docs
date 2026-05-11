---
sidebar_position: 19
sidebar_label: "Video Splits"
title: "Video Splits"
---

The **Video Splits section** provides a detailed breakdown of the test execution video, divided into smaller clips for each action or sequence (e.g., “Click Element,” “Go Back”). This allows users to quickly review specific parts of the test without replaying the entire recording.

![](https://docs.qapilot.io/files/xpgD9ybak7nJW0JmZcYa)

#### **Key Features**

* **Split-Level Playback:** Each test run is automatically segmented by start and end nodes, making it easier to analyze interactions step-by-step.
* **Frame Freeze Detection:** QApilot’s AI automatically scans every video split to detect **frame freezes,** moments where the app visually stalls or becomes unresponsive.
  * Detected freezes are highlighted with their timestamps.
  * If no visual freezes are found, the report displays *“No Freezes Detected.”*
* **Visual Debugging:** Users can play back each split, inspect UI transitions, and validate responsiveness directly from the report.

This section enables quick visual diagnosis of app performance issues, helping teams identify lag, hangs, or UI stalls across test executions.