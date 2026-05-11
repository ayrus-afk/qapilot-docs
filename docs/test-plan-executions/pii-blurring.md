---
sidebar_position: 14
sidebar_label: "Configurable PII Blurring"
title: "Configurable PII Blurring"
---

### **Configurable PII Blurring**

QApilot supports automatic blurring of sensitive information in screenshots to help teams maintain privacy and compliance during test execution and reporting.

***

### **Overview**

PII blurring can now be configured at the **Test Plan level**, allowing users to explicitly choose which types of personally identifiable information (PII) should be masked. Based on this selection, QApilot automatically detects and blurs the corresponding elements in all captured screenshots.

This ensures sensitive data is protected while preserving the rest of the visual context needed for debugging and analysis.

***

### **How It Works**

* During **Test Plan configuration**, users can select one or more PII types to be blurred.
* When the test plan is executed, QApilot scans all captured screenshots.
* Elements matching the selected PII types are automatically blurred.
* Blurring is applied only to screenshots; test execution logic remains unaffected.

***

### **Supported PII Types**

The following PII types are currently supported for automatic blurring:

* Phone numbers
* Email addresses
* Credit card numbers
* Social Security Numbers (SSN)
* Passport numbers
* Gender
* Date of birth (DOB)

***

### **Benefits**

* Protects sensitive user data in reports and shared artifacts
* Enables fine-grained control over what information is masked
* Supports compliance and internal security requirements
* No additional effort required during test execution