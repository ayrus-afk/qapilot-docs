---
sidebar_position: 20
sidebar_label: "Deep Links"
title: "Deep Links"
---

Deep links can be used to speed up navigation by directly accessing specific app screens, bypassing complex flows. Deep Links Tester allows users to validate deep links within their applications, ensuring that promotional or navigational links direct users to the correct pages. Three Types of Deep Links for **QApilot** are:

### Authentication Deeplinks:

Authentication deep links are used to navigate directly to authentication-related screens or processes within an application. They are especially useful in testing login flows, multi-factor authentication (MFA), and session management.

#### Use Cases in Testing:

1. Directly opening the login page or a specific OAuth provider (e.g., Google, Facebook).
2. Bypassing navigation steps to validate MFA functionality (e.g., OTP input screens).
3. Testing session timeouts or reauthentication flows.

### Download App Push Deeplinks

These deep links redirect users to download or install an app from a store (e.g., Google Play Store, Apple App Store) or a specific location. They are useful for apps that promote installations or updates via links in web pages, emails, or other apps.

#### Use Cases in Testing:

* Verifying the redirection to the correct app store page.
* Ensuring the deep link handles the "app already installed" scenario properly.
* Testing conditional flows where the app opens if installed or redirects to the store if not.

### Link Browser Portal PWA Deeplinks

These are links that open specific pages within a browser portal or Progressive Web App (PWA). They bridge the functionality of web and mobile apps, enabling access to a specific part of the app through a browser.

#### Use Cases in Testing:

* Navigating directly to a feature or section within a PWA (e.g., a product page or user dashboard).
* Validating behavior in offline mode (PWAs often provide offline capabilities).
* Ensuring links function across devices and browsers.

***

## Prerequisites

1. Ensure that you have test case scenarios to select from the dropdown.
2. You must have Deeplink URLs and elements to find them.
3. You should know how to [Execute the Test Plan](/detailed-documentation/test-plan-executions)

***

## Listing Deep links

On the Test Deep links List page, you will have the below options:

1. Navigate to **Deep links** in the left-side navbar.
2. You can easily manage Deep Links on the **Deep Links** list page by **filtering**, or **searching**. The page displays deep links with **titles**, **creation dates**, and **statuses**.
3. Click **Add Deep Links**

![](https://docs.qapilot.io/files/OpQL3ii5OO7CgWtICC8e)

***

## Creating Deep Links

1. Click the Add to add a new/Create Deeplink on the Deeplink Homepage.
2. It redirects to the below Create Deeplink window

![](https://docs.qapilot.io/files/H2L7vptAqa6DO49bYkco)

3. Enter Title
4. Enter your App Name
5. Select OS refers to choosing the operating system (OS) that a particular application or test environment will run on, such as Android or iOS.
6. A login scenario refers to a category or filter applied to group test cases specifically related to login functionality. This helps streamline test case management, enabling testers to focus on specific features or scenarios.
7. To test a deep link that requires user login in the application, you can follow a structured approach in QApilot. The goal is to verify that the deep link works correctly only after the user is authenticated and ensures redirection to the correct page or functionality.
8. Similarly, select Logout Scenario and Logout Test case from the dropdown.
9. Download a sample Deeplink Excel file and fill in the details to import that includes deep link URL and element text/XPath. Users can upload a sheet containing all the deep links they need to test. This sheet should include the link, the expected destination page, and a unique element identifier for validation. 
   1. A Deeplink URL is a specific type of hyperlink that takes a user directly to a specific page or location within a mobile application, rather than just opening the app. Deeplinks enhance the user experience by allowing users to access content more quickly, bypassing unnecessary navigation steps.
   2. XPATH helps to identify and interact with elements like buttons, links, input fields, etc., based on their location.
10. Click on the Create button and the new Deeplink will be created successfully.

![](https://docs.qapilot.io/files/hxhUAXij7QwW7hedVP7b)

11. When [executed](/detailed-documentation/test-plan-executions), a deep link can open the app to a specific screen or state, bypassing the app's normal navigation flow. This makes testing deep links crucial in ensuring that users are taken to the correct location within the app when they click these links.

***

## Deep Links Execution

1. Navigate to Test Plans on the left side nav bar, and create a Test Plan for Test Execution as shown below:

![](https://docs.qapilot.io/files/B4DRORBD7IlxNy1Y7aui)

2. Select Source From Deeplink that you have already created and Import Deeplinks from the available deep links dropdown.

![](https://docs.qapilot.io/files/q26WHQuXpDJ7ZskkYF8L)

3. After clicking Import, Device Setup

![](https://docs.qapilot.io/files/kxXWemgo7byLFUwjeb1w)

3. Next, Execution Settings will apply any advanced settings from this execution.

![](https://docs.qapilot.io/files/MCj7pr1FX0STnzk4c2rD)

4. Enabling the App Installation Flow will apply check authentication on every case or check authentication on only failed cases.

![](https://docs.qapilot.io/files/qYQLVAttwNmyTlry3RWy)

5. click on Save to Execute Deep links. **QAPilot** tests each deep link by clicking the link and verifying that it navigates to the correct page. The tool checks for the presence of a unique element (e.g., a specific text field or mobile number) to confirm successful navigation.
6. If the tool identifies the unique element, the test case is marked as passed. If the element is not found, the test case fails, indicating an issue with the deep link or navigation flow. Once the executions are completed, these are acknowledged in the form of [Reports](/detailed-documentation/reports).
7. Click the three-dot menu to manage the changes concerning every deep link.

![](https://docs.qapilot.io/files/hJ8VPb9TtA8VZI89jbJp)

13. The users can View Details to add the elements, Edit, Disable, and Delete.

![](https://docs.qapilot.io/files/TDbXJ8G5tuh2eFfFVlcN)

14. Click on Edit to update the Deeplink data:

![](https://docs.qapilot.io/files/7Tokmd8ACjrDXKAkRJLf)

Also, read about the Deep Links Report, [here](/detailed-documentation/reports/deep-links-report). 