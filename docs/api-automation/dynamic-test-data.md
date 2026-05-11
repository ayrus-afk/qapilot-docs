---
sidebar_position: 11
sidebar_label: "Dynamic Test Data for APIs"
title: "Dynamic Random Test Data Generation for APIs"
---

QApilot supports **dynamic random test data generation** to reduce dependency on static values and improve test reliability across executions.

Users can mark specific test data items as **Random** instead of Static and configure how the value should be generated. This includes defining a custom format using prefix and suffix text with a `{{random}}` placeholder, selecting the data type (such as Email, Alphanumeric, or Numeric), and setting minimum and maximum length constraints.

![](https://docs.qapilot.io/files/C0fCp8dvHPlvgfAN0Gvm)

### Configuration Options

When a test data item is marked as **Random**, the following configuration options are available:

#### Text Customisation

* Users can define a custom format using **prefix** and **suffix** text.
* Use the placeholder `{{random}}` to indicate where the generated value should be inserted.
* Example: `order_{{random}}_test`

#### Length Constraints

* Users can specify minimum and maximum limits, depending on the selected data type.

### Supported Data Types

#### 1. Alphanumeric

* Accepts both letters and numbers
* Length-based generation
* **Minimum:** 1 character
* **Maximum:** 100 characters

#### 2. Numeric

* Accepts numbers only
* Value-based generation
* **Minimum value:** 0
* **Maximum value:** 9999

#### 3. Regex-Based Random Data

* Accepts a **custom regular expression pattern**
* Example: `^[A-Za-z0-9]+$`
* Regex must be valid and is verified before execution
* Generated values strictly follow the provided pattern

#### 4. User-Defined Random Data

* Accepts **single or comma-separated alphabetic values**
* Example: `small,medium,large`
* A value is randomly selected from the provided list during execution

![](https://docs.qapilot.io/files/Qr8sXh5WWmfPLCvqNAjv)

![](https://docs.qapilot.io/files/uQ0ApbcEGPYMHTt9lq2f)

### Execution Behavior

* Random values are generated **just before execution**.
* Generated data respects all configured rules and constraints.
* Values are injected automatically into the test flow without manual intervention.
* Each execution can use a fresh value, reducing data collisions and retries.

During execution, QApilot automatically generates the required random values based on the configured rules and injects them into the test flow before execution begins. This ensures each run uses fresh data while still respecting defined structure and constraints.

This enhancement helps avoid data collisions, supports repeated executions, and improves overall test robustness without requiring manual data updates.