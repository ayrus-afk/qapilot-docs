---
sidebar_position: 9
sidebar_label: "Overview"
title: "API Automation"
---

## API Automation in QApilot

QApilot’s API Automation module enables users to design, execute, validate, and manage API test workflows within the same unified platform used for mobile and UI testing. It supports request configuration, scripting, test data management, execution control, and reporting — all tightly integrated into the QApilot ecosystem.

***

## 1. Overview

API Automation in QApilot allows users to:

* Create and manage API collections
* Configure requests (GET, POST, PUT, DELETE, etc.)
* Attach pre-scripts and post-scripts
* Bind requests to structured test data
* Execute individual APIs or entire collections
* Capture and reuse dynamic values across steps
* Review execution logs and responses

The system is designed to support both deterministic testing and dynamic workflows.

***

## 2. Creating API Test Cases

Users can create API test cases within a collection.

Each API step includes:

* Request Method (GET, POST, POST form-data, x-www-form-urlencoded, etc.)
* Endpoint URL
* Headers
* Query Parameters
* Request Body (JSON, form-data, x-www-form-urlencoded)
* Authentication configuration
* Test Data binding

API steps can be executed independently or as part of a collection.

***

## 3. Test Data Management

API Automation supports structured test data management to allow reusable and maintainable test cases.

### 3.1 Static Test Data

Static test data contains fixed values that can be reused across API requests.

Example:

```
email = test@example.com
password = Test123
```

Static values can be updated during execution if enabled.

***

### 3.2 Dynamic Test Data

Dynamic test data generates values during execution based on configured rules. These values are not overwritten during API execution.

***

### 3.3 Test Data Binding

Users can bind request fields to test data items. During execution:

* Bound variables are replaced with their corresponding values
* Updates can optionally be persisted (see section 6)

***

## 4. Pre-Script and Post-Script Support

QApilot supports custom scripting before and after API execution.

### 4.1 Pre-Script

Executed before the API request is sent.

Used for:

* Generating tokens
* Preparing payloads
* Transforming data
* Modifying test variables

### 4.2 Post-Script

Executed after receiving the API response.

Used for:

* Extracting response values
* Performing validations
* Updating test variables
* Preparing data for the next API step

***

## 5. Execution Modes

API automation supports:

#### 5.1 Test Flow

Executes individual API steps for validation and debugging.

#### 5.2 Execute Collection

Executes the entire API collection in sequence, supporting dependency chaining between APIs.

***

## 6. Saving Updated Test Data (New Enhancement)

API Automation now supports saving updated test data values that are modified during execution.

### 6.1 Save Updated Values from Scripts

When a pre-script or post-script modifies a variable that is linked to a selected test data item:

* The updated value can now be saved back into the test data set.
* This applies to both **Test Flow** and **Execute Collection** execution modes.

### 6.2 Static vs Dynamic Behavior

To maintain predictable data handling:

* **Static test data items** can be updated and saved.
* **Dynamic test data items remain unchanged** and will not be overwritten.

This ensures that dynamically generated values preserve their intended behavior.

### 6.3 Use Cases

* Saving authentication tokens for reuse
* Capturing IDs from API responses
* Maintaining session state across API chains
* Updating dependent values during execution

***

## 7. Enhanced Test Data Handling in API Recording (New Enhancement)

The API recording interface now provides improved test data usability.

### 7.1 Dropdown-Based Test Data Selection

The previous variable text input has been replaced with a dropdown that lists all existing test data items.

Benefits:

* Prevents duplication
* Encourages reuse
* Improves consistency

***

### 7.2 Inline Test Data Creation

Users can create new test data items directly from the dropdown interface without leaving the recording screen.

This maintains flow continuity and reduces context switching.

***

### 7.3 Intelligent Value Resolution

If a user selects an existing test data item and leaves the input field blank:

* The system automatically retrieves the value from the selected test data item.
* That value is used during execution.

***

### 7.4 Backward Compatibility

Existing API test cases continue to function as before. The enhanced UI improves usability without affecting prior behavior.

***

## 8. API Automation Reporting

Execution reports include:

* Request details
* Response body
* Status codes
* Headers
* Execution logs
* Script execution results
* Validation results

Failures are clearly highlighted with error details and execution context.

***

## 9. Key Benefits

* Unified API and UI testing platform
* Structured test data management
* Support for dynamic workflows
* Script-based value manipulation
* Controlled persistence of modified data
* Reduced manual intervention
* Improved reusability and maintainability

***

## 10. Summary

QApilot’s API Automation module enables scalable, state-aware API testing with structured data management and script-driven logic. With the latest enhancements, users gain greater control over how dynamic values are captured, persisted, and reused — enabling more reliable and maintainable API test workflows.