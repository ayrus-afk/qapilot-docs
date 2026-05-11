---
sidebar_position: 13
sidebar_label: "Code Snippet Execution"
title: "Code Snippet Execution"
---

## **Code Snippet Execution**

QApilot allows users to create and execute **custom JavaScript code snippets** during test execution to support conditional logic and custom validations within test flows.

***

### **Overview**

Code snippets are reusable JavaScript functions that can be executed synchronously as part of a test case. Each snippet returns a boolean value (`true` or `false`) and can be used to influence test execution logic.

***

### **Creating a Code Snippet**

* Users can create JavaScript snippets from the **Code Snippets** UI.
* Only **JavaScript functions** are allowed.
* The maximum script size is **10 KB**.
* Each snippet can be **Created, Updated, Activated, Deactivated, and Tested** from the UI.

#### **Security Restrictions**

To ensure safe execution, the following are **not permitted**:

* System and runtime access (e.g., `process`, `require`, `import`, file system access).
* Database-related keywords such as `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, and `SELECT`.

The UI displays a complete list of restricted keywords during snippet creation.

***

### **Testing a Code Snippet**

* Snippets can be tested directly from the UI before use.
* Test execution requires selecting a **test data profile**.
* Test data values can be edited within a popup during testing.
* Every snippet must return either `true` or `false`.

***

### **Using a Code Snippet in a Test Case**

* A new keyword, **`ExecuteSnippet`**, is available in the test step editor.
* Users can select a previously created snippet from a dropdown.
* During execution, the snippet is retrieved from the database and executed **synchronously**.
* Test execution proceeds only after the snippet completes.

***

### **Execution Behavior**

* Snippets run in a **sandboxed environment**.
* Execution is synchronous and blocking.
* The returned boolean value determines the outcome of the step.

***

This feature enables flexible, secure customization of test logic while maintaining predictable and controlled execution behavior.