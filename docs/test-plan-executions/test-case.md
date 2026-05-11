---
sidebar_position: 11
sidebar_label: "Test Case"
title: "Test Case"
---

**QApilot** provides a comprehensive and user-friendly solution for efficiently creating, organizing, and executing test cases. It enables teams to collaborate effectively, ensures maximum test coverage, and provides valuable insights into the testing workflow. Users can create test cases using either the [**QApilot** Recorder](/detailed-documentation/test-recording/creating-test-steps-using-test-recorder), [Generate Test Steps with AI Suggest](broken://pages/WEz8OJmda3QlttxcSkW2), or [Add Test Steps Manually](broken://pages/MkMQ3fRC3DvDzAvd6aoK). This documentation guides users step-by-step on how to manage test cases in **QApilot** to optimize the testing process.

***

## Prerequisites

Ensure you create a [Project](/detailed-documentation/projects) before creating Test Cases in **QApilot**.

***

## Create Test Case

1. When you click on Test case, it will redirect to the list of Test Cases concerning the Project of the specific page that includes the list of the test steps if already recorded.

![](https://docs.qapilot.io/files/eyUly6X4FjDBMHTnE0BO)

As you can see above, various actions can be performed for these test cases.

1. **Bulk Actions → Activate and Deactivate:** This provides a convenient way to manage the status of multiple test cases simultaneously. You can quickly activate or deactivate multiple test cases or a single test case.
2. **Filter:** It allows you to display the desired test cases based on App, Version, Severity, Status, and Module.

 Filter Test Case

![](https://docs.qapilot.io/files/LbrheUnDbuvSjsgSHE0V)

3. **Conditions:** Integrate Conditional Logic Directly Within Test Cases: 
   * QApilot enhances flexibility in test case execution by allowing the integration of conditional logic. This feature enables you to create dynamic test flows based on specific conditions. Please refer to [Type: If Conditions](/detailed-documentation/test-plan-executions/test-case/if-conditions-at-test-case-level).
4. **Execute:** The Execute Test Case feature is used to perform the steps of a specific test case to verify that an application behaves as expected. During execution, test cases are run under predefined conditions and monitored for expected outcomes. Please Refer [Test Plan Executions](/detailed-documentation/test-plan-executions)
5. **Upload Test Case Steps:** It allows you to import multiple test steps into your test case quickly. Instead of manually creating each step, you can upload a structured file with predefined steps.

 Test Case Upload

![](https://docs.qapilot.io/files/hhJ4wK3k6Q8pHlSmJxk7)

Download the sample Excel file & fill in the details to import

6. **Edit/Create Test Case**
7. Navigate to Test Cases in the left-side navbar. Click the Create Test Case button in the top right corner of the Test Case List page to create a test case.

![](https://docs.qapilot.io/files/p6zQKYRMGggjeYwHu4p9)

8. Enter Test Case Title
9. Enter Test ID
10. Select Severity, OS, App Version
11. Module: A Module refers to a distinct, logical grouping of related test cases or functionalities within a testing framework. Modules help organize the testing process by breaking down the application under test into smaller, manageable sections or components.
12. Feature: A Feature refers to a specific functionality, capability, or aspect of the application being tested.
13. Story: It refers to a user story that describes a specific requirement or functionality from the perspective of the end user. It is often written in plain language to communicate what the user wants to achieve and serves as the foundation for defining test cases and scenarios.
14. Within each module, create specific test cases that relate to the module's functionality.
15. Linking: Link the test cases to the relevant modules and features to ensure organized test management.

***

## How to Manage Test Cases?

1. click on the Manage Steps of the respective Test Case that you have created.

![](https://docs.qapilot.io/files/EhZYETKibjFZyGRogGZa)

2. It will redirect to the below window that displays all the steps that you have created for this particular Test Case.

![](https://docs.qapilot.io/files/7cqNkz6M5e1W2vbFLsUM)

3. For each of these steps, it will include a screenshot of the element which you have clicked on that specific feature.
4. It will allow you to Edit this step, Edit Page Items, Disable, Delete, and view history.

More than one Test case Module can be combined to form [Test Suites](/detailed-documentation/test-plan-executions/test-suite), and [Execution](/detailed-documentation/test-plan-executions) follows.

5. The history log includes detailed information such as the date of modification, the user who made the changes, and a summary of the updates.
6. If you delete the Test Case, you will lose all the recorded test steps associated with it.