---
sidebar_position: 12
sidebar_label: "If Conditions"
title: "If Conditions at Test Case Level"
---

In **QApilot**, you can add **If**, **If-Else** in your test cases based on a true or false condition. For example: **If** verifies the login status in a login test case, and **Else** will check credentials and redirections. This article discusses using **If**, **If-Else** Conditions in **QAPilot**.

***

## Prerequisites

* You Should Know how to Create a [Project](/detailed-documentation/projects).
* You should also know how to [create a test case](/detailed-documentation/test-plan-executions/test-case).

***

## Using If, If Else conditions in Test Cases

1. Navigate to Create Test Case Conditions and click on Create Condition.

![](https://docs.qapilot.io/files/gV54OTdQV1dld5coOh8A)

2. As you can see above, it allows you to create test case conditions using the two Rule Types: IF and IF-Else.
3. Using IF Conditions:  Conditional Test Flows: Define IF-ELSE scenarios within your test cases to handle different paths based on specified conditions. This allows you to tailor the test execution to various scenarios and outcomes.
4. Enter Condition Name
5. Select a Rule: If or IF-Else

 Rule Type

![](https://docs.qapilot.io/files/o4M8dvLCXHI3gMWK2b43)

6. Condition Type: Select a Condition from the dropdown: Testcase or Variable. when selecting a Condition Type, you choose between two options: Testcase or Variable. This selection helps control the flow of test execution based on specified conditions.

 Condition Type

![](https://docs.qapilot.io/files/86MYbIdzQ6tmTRWMhJFN)

7. Testcase:
   1. Selecting Testcase as a condition means the system will execute actions based on the pass/fail status or output of a specified test case.
   2. For example, you might set a condition that if Testcase A fails, Testcase B will not execute, or if Testcase A passes, a specific follow-up action occurs.
8. Variable:
   1. Selecting Variables allows conditions to be based on specific values or states of variables within the test.
   2. You might, for instance, set a condition where if a variable (e.g., `user_logged_in`) equals "True," the test proceeds with actions that assume a logged-in state.
9. Click on the Create button. This will add Condition to your test step. Once it is created, it appears as a card and it is in an Active state shown below:

![](https://docs.qapilot.io/files/7rfZuTIlgsEDUyl59Zww)

10. There are a few Actions you can perform. You can check the condition details like View Detail, Edit, and Disable.