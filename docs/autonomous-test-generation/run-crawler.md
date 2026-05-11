---
sidebar_position: 6
sidebar_label: "How to Run the Crawler"
title: "How to run the Crawler"
---

Click on the Project Card. Select the Crawler option from the Configurations list.

![](https://docs.qapilot.io/files/5i6480zp0FlcZ1YhORMr)

## Crawler Configuration

QApilot allows you to run the crawler either from scratch or **after executing a recorded test plan**, reusing the same Appium session instead of starting a fresh one.

This enables deeper exploration, especially for:

* Apps with login or OTP flows
* Screens reachable only after user interaction
* Complex workflows that crawler alone cannot initiate

#### **Crawler Launch Modes**

When launching the crawler, you will see two options:

#### **1. Start Crawler Without Dependency**

(Default behavior)

* Crawler starts in a fresh Appium session.
* Installs and launches the app and begins crawling from the startup screen.

#### **2. Start Crawler With Dependency** 

![](https://docs.qapilot.io/files/bRPwycCZEMXe5bfWfQET)

* Select this option to run a test plan before the crawler.
* A dropdown appears listing available test plans.
* QApilot first executes the selected test plan.
* **The Appium session is not terminated afterward.**
* The crawler attaches to the same session and continues exploration from the final screen of the test plan.

## Autonomous Test Generation with the crawler

1. Configure Cloud Device Provider Integration from the Project Settings icon.

![](https://docs.qapilot.io/files/6YP5Eo7OtSJ7XuXzvz3T)

3. As you can see, the **QApilot** supports integrations with several third-party tools, including Browser Stack, TestRail, JIRA, Sauce Labs, Microsoft Teams, and Slack. Configure Cloud Device Integration. Enable Browser Stack for your integration. You can click on New [Integration ](https://docs.qapilot.io/project-settings/integrations)to integrate with various other tools.

Browser Stack is a cloud-based cross-browser testing platform that allows admins/users to test their mobile applications across different browsers, operating systems, and devices. It provides a wide range of real, physical devices for testing, along with automated and live interactive testing capabilities. This helps developers and QA teams ensure their products are compatible and function properly across diverse environments.

![](https://docs.qapilot.io/files/8ytiwVdew6XxojlEvWpF)

3. A confirmation popup will appear. Click **Yes** to enable the provider.

![](https://docs.qapilot.io/files/C2lzLuDz5w2Bh6vso6o3)

4. Once connected, the blow window will appear.

![](https://docs.qapilot.io/files/WApynG8QcrrbT6vrM2B5)

5. The next screen represents the **first step of setting up a Crawler in QApilot**. 

   #### **1. Select App Platform**

   * Here, you choose the platform for crawling.
   * Currently, only **Android** is supported (iOS coming soon).
   * This tells the crawler what type of app (APK) it will be working on.

   #### **2. Set Crawler Duration**

   * You define how long the crawler should run (e.g., **10 minutes**).
   * The crawler will keep exploring the app during this duration, capturing screens and interactions.
   * Useful for balancing depth vs. execution time.

   #### **3. Upload App File**

   * You must upload your app’s APK file.
   * This APK is the version that the crawler will analyze and interact with.

   :information\_source: File name must be alphanumeric (no special characters).

   #### **4. Package Name**

   * Automatically extracted from the uploaded APK.
   * Example shown: `com.booking`.
   * Ensures that the crawler knows which app package to target.

   #### **5. Does Your App Require Login Credentials?**

   * If **yes**, you provide the **Username** and **Password**.
   * This allows the crawler to log in before starting the crawl.
   * If **no**, it will skip the login and start crawling directly.

   #### **6. Advanced Options (Optional)**

   * Key-value pairs can be injected into the app’s environment.
   * Useful for:
     * Testing specific scenarios.
     * Passing configuration flags.
     * Setting environment-specific values.

   #### **7. Ignore Keywords**

   * Enter words (like **“Terms and Conditions”**) that the crawler should skip.
   * Helps avoid unnecessary screens or dead ends during crawling.

   #### **8. Update Button**

   * After filling in all details, clicking **Update** will save the configuration and prepare the crawler to run with these settings.

![](https://docs.qapilot.io/files/7ci6vW0OFAIDuyrX9Etb)

![](https://docs.qapilot.io/files/m4hrIyrYFKiKHYjkzU8v)

6. After setting up the **crawler configuration,** the following screen will appear to establish a connection.

![](https://docs.qapilot.io/files/cAH293QZa5rGLpy2ELd3)

7. The App will be successfully connected with the Crawler, and the Recording Screen below will be displayed.

![](https://docs.qapilot.io/files/Z1dRYS1vHRnSZAxzGxbm)

**Crawler Running Status**

* At the top-left, it shows the project name (**QApilot Demo Project**) and status (**Running**).
* A timer is running (**1 Min 14 Sec**) to track how long the crawl has been active.

#### **Current Page Under Test**

* The crawler has reached the **Onboarding Welcome Screen**.
* It has detected **16 interactable elements** (like buttons, links, input fields).
* A screenshot of the current screen is displayed on the left.

#### **Actions Captured**

* The crawler automatically **taps/clicks** on elements (in this case, the **SKIP button**) to bypass onboarding.
* This action is recorded as a **structured test step**.
* Example: *“Taps the SKIP button in the bottom-right corner to bypass onboarding and proceed directly to the home screen.”*

#### **Home Page Detection**

* The crawler asks for **user confirmation**:\
  \&#xNAN;*“Is this the home screen?”*
* Options: **Yes** or **No**.
* This ensures accuracy by letting the tester validate if the crawler has correctly reached the app’s home screen.

#### **Real-Time Updates**

* On the right panel, you can see different tabs:
  * **Updates** → Lists recorded steps sequentially.
  * **Crawler Input** → Lets you provide manual inputs (e.g., credentials, specific instructions).
  * **Activity Graph** → A visual graph showing the crawler’s navigation path across screens.

#### **Interaction Count**

* At the bottom-left, it shows:
  * **Screens Crawled:** 2
  * **Interactions:** 2
* Meaning the crawler has navigated 2 screens and performed 2 interactions so far.

#### **Recording Process**

* Every screen the crawler explores and every interaction it performs gets:
  1. **Captured visually** (screenshot).
  2. **Converted into structured test steps** (stored in Test Cases).
  3. **Logged for reporting** (for coverage analysis).

9. Once the crawler has finished exploring the app, a confirmation screen appears stating **"Crawling Completed,"** as shown below. At this stage, you are presented with the following options:
   1. **View Generated Test Cases**\
      Click this to review the structured test cases automatically created from the crawler's interactions.
   2. **View Graph Results**\
      This option lets you see the **graphical representation** of the app’s navigation path and screen transitions.
   3. **Click OK**\
      Once you’ve reviewed the results, click **OK** to exit the completion dialog and return to the main dashboard.

![](https://docs.qapilot.io/files/RKxs24JapyssT64fLDof)

10. Once the crawler runs, you can monitor or stop its execution from the **Crawler Reports** section in the QApilot project dashboard.

**✅ To Access:**

1. Click the **Crawler Icon** (camera icon on the left panel).
2. You’ll see an overview of:
   * **Total Test Cases**
   * **Device & App Info** (e.g., Samsung Galaxy S22 Ultra, `com.booking`)
   * **Execution Date & Time**
   * **Crawl Duration** (e.g., 10 minutes)
   * **Status** (e.g., Running)

**🎯 Actions Menu (Right Side)**

Click the **three-dot menu (⋮)** under the **Actions** column to view the following options:

* 👁️ **View Live Crawl**:\
  It opens a live view of the crawler's work in real time. You can see the screens being crawled and interactions occurring as they occur.
* ⏹️ **Stop**:\
  Manually stop the crawler execution if needed before the crawl duration ends.

![](https://docs.qapilot.io/files/hloFSTWea3yTNqz9lqr8)

11. After the crawl duration ends or you manually stop the crawler execution, QApilot automatically finalizes and generates the [Crawler Report](/detailed-documentation/autonomous-test-generation/crawler-report).