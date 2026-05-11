---
sidebar_position: 12
sidebar_label: "Overview"
title: "Reports"
---

The users will have better satisfaction when the application does not have bugs, technical glitches, performance issues, or usability issues. When these issues increase, the quality decreases, which results in bad UX. That's when drill-down reports come in handy.

In **QApilot**, you can view/download reports at multiple levels and find specific details, like the number of tests failed and the reason for failures or machines causing more problems. You can assess the application's quality and address issues from this data.

***

## Prerequisites

* You should know how to create a [test case](/detailed-documentation/test-plan-executions/test-case), [test suite](/detailed-documentation/test-plan-executions/test-suite), and [test plan](/detailed-documentation/test-plan-executions).

***

## Possible Actions on the Reports Page

1. Navigate to **Reports on the left side navbar** and click on the reports.
2. The following are the actions possible on the **Reports** page:
   1. **Search**: To search for a run result by name, use this. The search will filter all the run results names that contain your search query.
   2. **Sort by:** Click on the **Sort by** button to sort the list of Run Results according to your preference. You can sort the list based on the **Title**, **Created Date**, **Updated Date**, **Last Run**, **Ascending** or **Descending**.
   3. **Filter:** Click on **Show Filters** to add filters and sort results according to your preference. You can add filters based on the options **Created By**, **Last Run Date**, **Created Date**, **Updated Date**, **Last Run Date**, and **Labels**.

![](https://docs.qapilot.io/files/Gn1rHHGGZbNSf7SVSLbQ)

***

## QApilot Reports Dashboard Overview

1. Navigate to view details on any specific reports. **QApilot** Reports Dashboard is the control panel that provides a comprehensive overview and detailed analysis of all executed test cases.\ 


   ![](https://docs.qapilot.io/files/Mn0oueWIbutqCZPA1P5y)
2. **Summary Overview:** The dashboard offers a high-level summary of all test cases run to date, displaying: 
   1.  **Total Test Cases:** Overall count of test cases executed.
   2. **Successful Test Cases:** Number of test cases that passed all steps.
   3. **Failed Test Cases:** Number of test cases with one or more failed steps.
   4. **Executed Steps:** Total number of steps executed across all test cases.
   5. **Failed Steps:** Total number of steps that encountered errors.
3. **Visual Summary:** A pictorial summary is provided to give users a quick overview: 
   1. **Failed Test Cases Summary:** Displays details of the failed test cases, highlighting specific steps that failed (e.g., element ID not found).
   2. **Failure Reasons:** A chart representing the reasons for failures, such as elements not found, comparison failures, etc.
   3. **Severity Chart:** Indicates the severity of failed steps.
   4. **Keyword Failures:** Shows which keywords caused test cases to fail (e.g., compare text, click element).
   5. **Module Failures:** A bar chart representing the number of failures per module, making it easy to identify problematic areas.
4. **Accessing Detailed Reports:** 
   1. Tap on the "Test Cases" option to view all recorded and executed test cases.
   2. Click on any test case to reveal all the steps involved and their execution details (passed, failed, etc.).
5. **Test Step Details:** Each test step provides a detailed view, including: 
   1. **Screenshot:** Visual representation of the app screen at the time of execution.
   2. **Keyword:** The action performed (e.g., click element, set value).
   3. **Coordinates:** Location on the screen where the action was performed.
   4. **Element ID:** Unique identifier of the element interacted with.

***

## Report Details

**Test Cases**

![](https://docs.qapilot.io/files/aPFCeyXygnjl5LL6PPv2)

Here in the test cases section in the report, you will find detailed logs against each test case in that execution report complete with the screenshots for each step of the respective test case.

In addition to this, you will also find detailed artifacts (screenshots) of the execution, video, test data, debug logs, crash logs, and video splits in the following sections in execution reports as shown in the attached screenshots below. 

![](https://docs.qapilot.io/files/dzRTLE9zEmC15m9GasAW)

![](https://docs.qapilot.io/files/DvmNjuYA5hcFUd7sVBQO)

![](https://docs.qapilot.io/files/60N6vvtMXoiQap01tF7o)

![](https://docs.qapilot.io/files/2iwS1XmnCnSGgHbUWD8L)

![](https://docs.qapilot.io/files/0dBYQETEB6rIPiD9cUdp)

## How to share the reports with other users?

1. On the Reports Home page, under the Actions field select the Envelop icon to configure the mail ID of the user.

![](https://docs.qapilot.io/files/LXeZ3u2Hq7OIXByPqfte)

2. A dialog box will appear to enter the email along with the configurations to be applied:
   1. Show Images
   2. Show Test Case Counts
   3. Show Crash Logs

![](https://docs.qapilot.io/files/6aErWeCOuucXFe0gaf1Y)

3. Click the **Send** button. The report will be mailed to the respective mail id.
4. It allows to sending of multiple reports to multiple emails.

![](https://docs.qapilot.io/files/xpkETd5ZTtCviTecqHgk)

5. Enter the Report Title as the multiple reports are grouped into the specific report.
6. Enter the respective email id’s to send the report.

You can send up to 5 email IDs at once and email IDs should be comma separated.

![](https://docs.qapilot.io/files/2C8GYOM8XhIN0sKd5ue6)

***

## How To Download a Report?

1. On the Reports Home page, under the Actions field select the Download icon to configure the mail ID of the user.

![](https://docs.qapilot.io/files/Li2iAVEkLpAGXilcq2tx)

2. The downloaded reports are shown on the browser in the PDF format.

![](https://docs.qapilot.io/files/kWZCgRACFsXmJcbqnKUr)

3. Click the Open file link to view the report.

***

## How To Raise an Issue?

1. Click on View detail on any respective report.

![](https://docs.qapilot.io/files/QF0gocVnU0JLk233Nzw3)

2. It redirects to the below screen. Click on the Raise issue icon

![](https://docs.qapilot.io/files/F2o7N75K77PJsOkXD9zA)

3. While viewing the detailed test steps, locate the options to raise an issue.
4. Click on "Raise Issue" if the tester believes the issue is from the app team. Describe the issue and submit it.

![](https://docs.qapilot.io/files/RWhyKcHplzxzdJsYKMox)

5. The issue is directly raised in Jira and assigned to the relevant developer.

***

## Steps to Rerun from Reports

1. Click on View detail on any respective report.

![](https://docs.qapilot.io/files/tyOsON57WYWRtj95Yt26)

2. It redirects to the below screen. Click on the Re-Run icon in the top right corner.

![](https://docs.qapilot.io/files/fmqSia5w8FGJW2ZTYLDE)

3. On the **Re-run** prompt, you will see the following popup:

![](https://docs.qapilot.io/files/NFOi8ChwDmqut65ub1mn)

4. Choose the option and click on **Start execution** to rerun.

![](https://docs.qapilot.io/files/3k6HwEIUMkY8OBhoKZ0e)

5. Once the executions are completed, these are acknowledged in the form of Reports.