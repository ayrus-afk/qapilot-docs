---
sidebar_position: 5
sidebar_label: "Cloud Recording/Execution"
title: "Cloud Recording/Execution"
---

The test recording with cloud device testing allows admins/users to record and automate their testing process on cloud-hosted devices. This provides a convenient way to create and replay test scripts without manually writing code.

By default, Cloud Device Provider allows users to run a single testing session simultaneously. If you need to run multiple testing sessions simultaneously across different devices, browsers, or operating systems, you would need to reach out support@qapilot.com to discuss your specific requirements and potentially upgrade your account to support parallel testing.

### Software Required For Cloud Recording:

APK/IPA File is Required (according to the selected OS):

1. **An Android APK**: An APK file (Android Package Kit) is the file format used by the Android operating system to distribute and install apps. It contains all the elements necessary for an Android application to be installed and run on a device.
2. **IOS IPA**: An IPA file (iOS App Store Package) is the file format used by the iOS operating system to distribute and install applications on iPhone, iPad, and iPod touch devices. IPA files are specifically designed for Apple devices and can only be installed on devices running iOS, iPadOS, or macOS (with some modifications).

## How to Connect to the Cloud Device?

### Prerequisites

Ensure you create a [Project](/detailed-documentation/projects). Logging into the QApilot UI is a prerequisite for accessing the Projects Menu. The Projects Home page is the first screen shown after the respective user's successful login. Click the Project card to make the changes or [Create a New Project](/detailed-documentation/projects#how-to-create-a-new-project).

1. Click on the Project Card. Select the Recorder option from the Configurations list.\ 


   ![](https://docs.qapilot.io/files/TSMBRVUUtPqNn1kqquQr)
2. The first step is to set the Connection type—selecting the kind of Environment, Cloud or Local.\ 


   ![](https://docs.qapilot.io/files/TquvHJlJZcnInQpYK0VQ)
3. Select the kind of Environment, Cloud or Local. Please select Cloud Devices.

![](https://docs.qapilot.io/files/ZSG4Jh1qYGz0wt0y6qLm)

4. Choose Cloud Devices. The Operating System(OS) (Android/IOS) will appear as follows. Select your choice based on the Device to be tested.
5. Configure Cloud Device Provider Integration. Add New and it redirects to the below window:

![](https://docs.qapilot.io/files/nAeuUPjoA3jx8e5Ov1Nj)

6. As you can see, the **QApilot** supports integrations with several third-party tools, including Browser Stack, testrail, JIRA, Sauce Labs, Microsoft Teams, and Slack. Configure Cloud Device Integration. Enable Browser Stack for your integration. You can click on New [Integration ](/detailed-documentation/project-settings/integrations)to integrate with various other tools.

Browser Stack is a cloud-based cross-browser testing platform that allows admins/users to test their mobile applications across different browsers, operating systems, and devices. It provides a wide range of real, physical devices for testing, along with automated and live interactive testing capabilities. This helps developers and QA teams ensure their products are compatible and function properly across diverse environments.

![](https://docs.qapilot.io/files/u1bZXOhATqOm8wZ8FUxO)

7. Click on Yes to integrate for this cloud device.

![](https://docs.qapilot.io/files/BxmNnXWgvHpHesUMoBLg)

8. Select Appium Version as currently, the **QApilot** is running on the latest version v1.22.3.
9. Select your Device from the dropdown, and click Next.

 In this Step, select App & Testcase and the Page where the Test Case is applied.

App name is the Application Name. The module is a scenario or functional need served by the App. Test Cases are the aspects to check the functional ability of the app for real-time scenarios. Page is the screen/location where the whole functionality is implemented within the app.

![](https://docs.qapilot.io/files/Y4KNh2CPTakNywDmZYoc)

Select the OS (Android or iOS) and the app you want to test. The app names will be displayed. Choose the Application Name for the app you wish to test. 

It is a general configuration in any Application that, depending on the App Source, the Modules are synced and displayed in the Module dropdown. The Test Case dropdown displayed only those scenarios relevant to the opted Module. Pages are displayed only related to the App Source and Module. App Source, Module, Test Case, and Page are designed to be in sync concerning the functionality or the feature of the App.

10. Select App and Test Cases. When you click on  APP, it will redirect to the below screen.

![](https://docs.qapilot.io/files/9vnIPqa1wQ4t0XN6Tk1x)

11. As you can see above, Enter the Title.
12. As the Test recording is for a cloud device, Select the location as a cloud.
13. Select service from the dropdown. Cloud Device Integration before the App upload
14. Here, We need to upload the APK/IPA file as we selected Cloud Devices. It is mandatory to note that, For Cloud Devices, an [**APK/IPA file**](https://docs.qapilot.io/) should be provided.
15. As we have selected for Android, Once we upload the APK file\*\*,\*\* the Package Name and Version Name will automatically be fetched.
16. Click on the Launch button to initiate a session on the selected device.

![](https://docs.qapilot.io/files/vEVTE1pIE2Ww8V5ttfcG)

17. For Module:

 Create Module

![](https://docs.qapilot.io/files/QCXGAyuyIv9ZTlmpJCrU)

18. Create a Test case and click on the Create button.

![](https://docs.qapilot.io/files/JKFp69lFKJZ2lJhWqZzz)

19. For Page:

 Page Title

![](https://docs.qapilot.io/files/keBCiZXBKCM9wHx5whIC)

20. VPN Required is optional. If a VPN is required, then a local executor should be running.

![](https://docs.qapilot.io/files/aWVes1WH7bFaW9EtfwxV)

21. Click on Launch to establish a connection to your Cloud device.

![](https://docs.qapilot.io/files/pDHJ82D5PuhfwfiLHxlr)

22. The device will be successfully connected and the below Recording Screen will be displayed.

![](https://docs.qapilot.io/files/A4WFBIsGBviZF4dbP9gu)

![](https://docs.qapilot.io/files/Vm0HzWyNgzJCoXPvHhtu)

### **Dependency Recording with Flutter Context**

When starting a recording session, users can now select the Automation Type - UIAutomator2 or Flutter Driver - to ensure the session initialises with the correct dependencies.

* The default recording mode remains UIAutomator2 (standard context) unless a specific type is selected.
* Selecting Flutter triggers the session with Flutter-specific dependencies, using the same initialisation logic as standard sessions.
* This option is available on the recording setup screen before a session begins.

![](https://docs.qapilot.io/files/sYxEoV8VHEw2KcZalX4H)

### **Biometric Authentication Support on LambdaTest**

Fingerprint authentication can be bypassed during recording and execution on LambdaTest, enabling test flows that include the fingerprint-gated identity module to run without manual intervention.

How it works

* When a fingerprint authentication prompt is triggered during a test flow, a dummy screen is rendered in its place, allowing the user to proceed with testing.

Supported authentication types - fingerprint

Note - This capability is currently available on LambdaTest only.