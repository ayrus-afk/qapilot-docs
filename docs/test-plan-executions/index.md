---
sidebar_position: 10
sidebar_label: "Overview"
title: "Test Plan Executions"
---

Test Executions refer to the process of running test cases to verify whether the mobile application behaves as expected under specific conditions. This is a crucial phase in the testing lifecycle, where predefined scripts or steps are executed, and their outcomes are recorded.

For the Execution to begin, Test Plan creation is a crucial step. A test plan can be a source of [Test Suite,](/detailed-documentation/test-plan-executions/test-suite) [Test Rule](/detailed-documentation/test-plan-executions/test-rule), [Test Case](/detailed-documentation/test-plan-executions/test-case), or [Deeplink](/detailed-documentation/test-plan-executions/deep-links). When a test plan is executed, the test suites and their corresponding test cases are executed serially or parallelly as configured. The main purpose of the Test plan is to facilitate the automation of Test cases with the relevant test data/values. An executable setup is created, which will be the final step of automating the testing process.

This article guides the user in preparing and executing test plans on the QApilot platform. For demonstrative purposes, we will discuss the execution of a test plan that has one test suite and one test case associated with the test suite:

***

## Prerequisites

You should know how to Create a [Test Case](/detailed-documentation/test-plan-executions/test-case), [Test Suite](/detailed-documentation/test-plan-executions/test-suite), [Test Rule](/detailed-documentation/test-plan-executions/test-rule), and [Deeplink](/detailed-documentation/test-plan-executions/deep-links).

***

## Listing Test Plans

On the Test Plans List page, you will have the below options:

1. Navigate to **Test Plans** in the left-side navbar.
2. You can easily manage test plans on the **Test Plans** list page by **filtering**, or **searching**. The page displays test suites with **titles**, **types**, **creation dates**, **creators**, and **statuses**.
3. Click **Create Test Plan.**

![](https://docs.qapilot.io/files/rBNuBHd0j9IMkyloAIAs)

***

## Steps to Create and Execute Test Plan

1. Navigate to **Test Plan** in the left-side navbar. Click the **Add Test Plan**. Provide the below details to **Create a Test Plan**:

![](https://docs.qapilot.io/files/9n6NnMbvwsDtxSwMpk7P)

2. It redirects to the Test Execution Screen:

![](https://docs.qapilot.io/files/VbpWDLtNEPnIUOXPbTm3)

3. The User is redirected to the execution screen. The Execution process takes three steps.
4. Enter the Title of the Execution in the respective text box as shown below.
5. Select the Operating System.
6. Select the Source From [Test Rule](/detailed-documentation/test-plan-executions/test-rule), [Test Suite](/detailed-documentation/test-plan-executions/test-suite), [Test Case](/detailed-documentation/test-plan-executions/test-case), or [Deeplink](/detailed-documentation/test-plan-executions/deep-links).
7. click on the Next

![](https://docs.qapilot.io/files/6u0RW1yAXX3KfDpNev8g)

8. Select the **Virtual Device** for execution in the second step.
9. Select the respective **Device** from the dropdown. **QApilot** allows multiple devices to perform running tests concurrently across various devices to ensure an application functions correctly.
10. Select [Test Data](/detailed-documentation/test-plan-executions/test-data) from the drop-down.
11. Select the **App Source** from the dropdown. Select the **Next** button.

![](https://docs.qapilot.io/files/lCjlOGGWZAld99vjjwju)

12. The third step includes Execution Settings which need to be applied, otherwise, default settings can be retained as per the Business Requirements.

![](https://docs.qapilot.io/files/Jm1qJY8unjvVCAFHvUFN)

13. Execution Settings are configurations to apply for the execution:
14. Enable Screenshot: Enable Screenshots allow the capture of images during test execution, which is essential for debugging, validation, and reporting purposes.
15. Step Image Screenshot: Step Image Screenshot captures a visual snapshot of the application state at specific test steps.
16. Auto close Contextual popup: This refers to the automatic dismissal of pop-up windows, tooltips, or contextual menus after a specific user action, delay, or event.
17. Enable Geo Location: This allows applications to access or simulate the user’s physical location.
18. Wait Time Between Steps: Wait Time Between Steps is the deliberate pause added between consecutive actions in a test script to ensure that each step completes properly before the next begins.
19. Command Time Out: Command Timeout is the maximum duration that an automation command is allowed to run before it is forcefully terminated.
20. Max Concurrent Errors: Max Concurrent Errors refers to the maximum number of errors or failures that are allowed to occur simultaneously within a single test execution or session.
21. Advance options: These configurable settings allow testers to fine-tune the behavior and performance of test executions.
    1. Enable Video: Enable Video allows for recording a video of the entire test execution session. This feature captures each step, action, and interaction within the application as the test progresses, creating a valuable visual record.
    2. Enable CPU: Enable CPU is a feature that allows testers to monitor the CPU usage of a device or application during test execution.
    3. Enable Memory: Enable Memory allows testers to monitor the memory usage of a device or application during the execution of tests.
    4. Enable Network Trace: Enable Network Trace allows testers to capture and analyze the network traffic generated by an application during testing.
    5. VPN Required: VPN Required typically refers to the necessity of using a Virtual Private Network (VPN) to securely connect to specific resources, environments, or networks that are not accessible over the public internet.

![](https://docs.qapilot.io/files/A4DiVe7oeQRBdjwWnOXT)

22. CI/CD Configurations: By enabling CI/CD configurations, you can ensure that your code is continuously validated through automated tests. Refer to [Continuous Integration/Continuous Deployment](/detailed-documentation/project-settings/integrations/continuous-integration-continuous-deployment)

For Cloud Device Execution, CD/CD Configuration is applicable.

![](https://docs.qapilot.io/files/WiwX6mr72Zd97K2S0cYv)

23. After applying the Execution Settings, click on the save button to Execute.

![](https://docs.qapilot.io/files/GXmUPpUKgmwjQVmP6Tzx)

24. The below Confirmation window will display. Click on the Yes button.

![](https://docs.qapilot.io/files/aQjuDRQN0YSOBw7Qrs82)

25. The Test Suite is executed as per the specified criteria.

![](https://docs.qapilot.io/files/o3Tgx13O2LCylMXy3ori)

![](https://docs.qapilot.io/files/QreCdz6EgaFIxiiv0r3p)

26. As you can see below, Execution is running. Total Cases are displayed along with the Notifications.

![](https://docs.qapilot.io/files/H4gQggu5DBV1wsgS2Mwg)

27. Once the executions are completed, these are acknowledged in the form of [Reports](/detailed-documentation/reports).

![](https://docs.qapilot.io/files/qMIYU4YfHXLwFvZ9uvaV)

28. Click the eye/view icon under the Actions columns to View the report's details.
29. The user is redirected to the detailed view of the executed Suite.

![](https://docs.qapilot.io/files/vzl2Um2cIoBKOIBqw1pZ)

30. The report has a set of tabs displaying different aspects of the executed process.
31. The Summary tab provides the overall view as shown above.
32. The Testcase tab displays details of every step and the respective timings and status.

![](https://docs.qapilot.io/files/ZYvWoc0PcaWtb4ncnxyb)

33. The Artifacts tab shows the screenshots.

![](https://docs.qapilot.io/files/IfdcSQIJLgOOjLoJNU3I)

34. The Test Data tab displays the Test values used for the execution process.
35. Others tab displays the settings of the execution process which includes the includes of Flags and Debug Logs.

![](https://docs.qapilot.io/files/4VWYN1nTbnKFWBlAeZzQ)

![](https://docs.qapilot.io/files/DcEGdVEHzMxfZ84lycYx)

36. The New Test Plan is created and it will be in the Active State displays on the Test Plan Listing Page.
37. It allows you to perform various actions on the Test Plan which are: Edit, Schedule Run, Enable CI/CD, Disable, Delete
38. [Schedule Run](/detailed-documentation/test-plan-executions/schedulers)
39. [CI/CD](/detailed-documentation/project-settings/integrations/continuous-integration-continuous-deployment)

![](https://docs.qapilot.io/files/MBXhcvmJvB9vdMayXUf4)

40. If you delete the Test Plan, you will lose all Run reports and Run configurations associated with it.