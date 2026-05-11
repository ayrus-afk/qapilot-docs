---
sidebar_position: 99
sidebar_label: "Debugging Mobile Applications on Local Devices"
title: "Debugging Mobile Applications on Local Devices"
---

Debugging mobile applications on local devices with QApilot allows you to inspect and resolve errors by running test cases step-by-step. This interactive debugging feature lets you pause at specific points, inspect behavior, and analyze resources like step results, metadata, and screenshots, ensuring accurate problem identification and efficient resolution.

***

## Prerequisites

Before starting the debugging process, ensure the following:

* A [local mobile device connection](/detailed-documentation/setup/local-recording-execution) is configured with **QApilot**. The **QApilot Local Agent** is active on your local device.
* Debugging must be performed on a local device.
* If your test case uses a test data profile, only one test data profile can be selected for debugging.

***

## Executing Test Cases using Launch Debugger

1. After establishing a local device connection, you will see the launch debugger option when creating the test plan.

![](https://docs.qapilot.io/files/U3T5m9pxlSs74Uj5DV1Y)

2. click on the Launch Debugger and Execute
3. During test case execution, you can visually follow each step. If an error occurs or a debug point is reached:
   * **QApilot** will highlight the problematic step.
   * You can pause the step to analyze the issue and determine the necessary fixes.