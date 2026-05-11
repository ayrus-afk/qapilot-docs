---
sidebar_position: 10
sidebar_label: "Gestures"
title: "Gestures"
---

Gestures are vital to modern applications, especially touch-based devices, as they allow users to interact with various elements using physical actions. Below is a list of common gestures along with their description and how they are applied to clickable elements in **QApilot**:

## Compare Variables

Compare Variables usually refers to comparing the values of two or more variables to validate if they meet a particular condition. It can be used in various contexts, such as writing test cases, assertions, or debugging.

1. Use Meaningful Assertions: When comparing variables, provide meaningful error messages so that any discrepancies are easily diagnosed.
2. Handle Data Format Differences: Ensure data is in the correct format before comparing, especially in scenarios where date formats, currency, or numeric precision may differ.

## Accept Alert

Accept Alert Keyword is used to handle and accept browser alerts, confirmation pop-ups, or JavaScript dialogs that appear during the execution of a test case. When a pop-up alert is triggered in the application, the automation script cannot continue interacting with the web elements until the alert is addressed.

1. Automates Manual Intervention: Automated tests can handle alerts without requiring manual intervention, which helps in running tests in continuous integration pipelines or unattended environments.
2. Ensures Test Continuity: By handling pop-up alerts, the test script can proceed to the next steps without being blocked, ensuring smooth test execution.

## HTTP Source

HTTP Source is designed to call APIs and store their responses during execution. It allows users to access and utilize specific values returned by these APIs within the current execution context. By storing the API responses, users can reference and incorporate the retrieved data into subsequent operations or calculations as needed.

1. API Testing: One of the most common uses of HTTP source testing is to validate API endpoints. Automation frameworks can send HTTP requests (GET, POST) to a server and then compare the response to the expected results. It ensures that the APIs return correct status codes, response times, headers, and data (in JSON, XML, etc.).

## Hide Keyboard

Hide Keyboard is used to close or dismiss the on-screen keyboard that appears when the user interacts with input fields (e.g., text fields, search bars, or forms).

1. Handling UI Overlap: In mobile apps, the virtual keyboard may cover buttons, input fields, or other elements after entering text into a field. Dismissing the keyboard ensures that these elements are visible and interactable for the next steps in the test.
2. Ensuring Smooth Navigation: When automating form-filling or other text-input processes, it's essential to dismiss the keyboard before proceeding to the next element, especially when performing actions like scrolling or clicking on elements that might be hidden behind the keyboard.

## Go Back

Go Back keyword or Keyword is used to simulate the action of navigating back to the previous screen, page, or state. This is equivalent to the user pressing the "Back" button on a mobile device or using the browser’s back button in a web application.

1. Navigating Between Screens: Mobile apps often have multi-screen workflows. The Go Back Keyword can simulate the user navigating back through different screens, allowing testers to verify whether the navigation works as expected.
2. Testing Navigation Flow: In scenarios where users move between pages, such as form submission screens or app settings, the Go Back Keyword helps verify that returning to the previous screen is handled correctly by the application.

## Get Text

Get Text keyword or Keyword is used to retrieve or extract text content from a specified element on a web page or a mobile application. This text could be from any UI element such as buttons, labels, headers, input fields, or other text-based elements. The retrieved text can then be used for validation, comparison, or further processing in the test script.

1. Validating UI Text: The primary use of Get Text is to verify that the displayed text on a web or mobile application matches the expected content. This is useful for checking labels, headings, error messages, success notifications, or any other on-screen text.
2. Dynamic Data Validation: In scenarios where the content is dynamically generated (e.g., user details, prices, or form submission responses), Get Text helps retrieve the actual displayed values and compare them with expected results from a database or API response.

## Get Page Source

The Get Page Source keyword captures the full HTML or XML source of the current page or mobile app screen. It's useful for debugging, verifying dynamic content, and ensuring that the app is rendering and functioning as expected across different browsers and devices.

1. Debugging and Troubleshooting: When a test fails due to an element not being found, Get Page Source allows you to inspect the structure of the entire page or screen to see if the element exists in the DOM or view hierarchy. This is especially helpful when dealing with dynamic elements or hidden content.
2. Verifying Dynamic Content: In applications where the content of the page or view changes based on user interaction or API responses, the page source can be retrieved to validate that the correct content is loaded into the DOM or view hierarchy.

## Contains Text

Contains Text keyword or Keyword is used to verify whether a particular UI element or the entire page contains the expected text. It checks if the specified text is present in the element or page, without requiring an exact match of the full content. This is useful when only part of the text needs to be validated or when the text is dynamic but contains key phrases or words that need verification.

1. Partial Text Validation: If the displayed text contains dynamic content (such as a changing date or username), the Contains Text Keyword allows you to validate only the static portion of the text without needing an exact match.
2. Checking for Keywords or Phrases: Useful when you are validating that a page or element contains important phrases or keywords, like success or error messages. For instance, you can check if a confirmation message contains the phrase "successfully" without validating the entire message string.

## Clear Text

Clear Text keyword or Keyword is used to remove any text present in an input field or text area. This action is commonly used when testing form fields or input elements, ensuring that existing content is cleared before entering new data.

1. Ensuring Clean Input: If an input field already contains text, the Clear Text Keyword removes it before entering new data. This is especially useful in scenarios where fields might be pre-populated or where previous actions in the test could have left text in the field.
2. Testing Validation Rules: When testing form validation, clearing text allows you to simulate user actions such as entering and then deleting data. This is useful for checking if a form behaves correctly when a required field is left empty after initially having text.

## Checkbox button Disabled

Checkbox Button Disabled (or Is Checkbox Disabled) keyword or Keyword is used to check whether a checkbox element on a web page or mobile app is disabled. This means the checkbox cannot be interacted with (i.e., cannot be checked or unchecked) by the user. Verifying whether a checkbox is disabled is important in scenarios where certain conditions need to be met before a checkbox is made available for interaction.

1. Form Validation: In some scenarios, checkboxes may be disabled based on certain conditions (e.g., a checkbox is only enabled after filling out other required fields). Testing the disabled state helps ensure that the form behaves as expected under these conditions.
2. Conditional UI Elements: Certain user interfaces disable checkboxes until specific actions are taken, such as checking other checkboxes, selecting options, or providing valid inputs in other form fields. Ensuring these checkboxes are disabled initially is critical for testing conditional flows in the UI.

## Checkbox button Enabled

The Checkbox Button Enabled keyword is used to check if a checkbox button is enabled, meaning it can be interacted with. It’s commonly used in scenarios involving form validation, conditional inputs, and role-based access control across web and mobile applications.

1. Form Interaction: When testing forms, it’s essential to ensure that checkboxes intended for user input are enabled. This allows users to select options relevant to the task at hand.
2. Conditional UI Elements: Some checkboxes may become enabled based on certain conditions (e.g., selecting another checkbox or filling out required fields). Testing the enabled state helps ensure that the form behaves correctly when conditions are met.

## Set Orientation LANDSCAPE

The Set Orientation Landscape keyword is vital for testing mobile applications in landscape mode, ensuring that the UI layout, responsiveness, and functionality adapt to different screen orientations.

1. Testing UI Layout: Many applications have different layouts and components that adapt to screen orientation. Using the Set Orientation Landscape Keyword allows testers to verify that UI elements are correctly displayed, positioned, and functional in landscape mode.
2. Responsive Design Validation: Testing how an app responds to orientation changes is critical for ensuring a good user experience. Testers can use this Keyword to ensure that elements resize, reposition, and display correctly in landscape orientation.

## Activate App

The Activate App keyword is essential for managing app state transitions, particularly for bringing apps from the background to the foreground, switching between apps, and ensuring apps continue to function correctly after interruptions.

1. Testing App States: When running a suite of tests, you may need to ensure that the app is active before performing actions. Using the Activate App keyword helps verify that the app is in the correct state, especially after backgrounding or switching to another app.
2. Simulating User Behavior: Users often switch between apps. The Activate App keyword simulates this behavior, allowing testers to observe how the app responds to being brought back to the foreground.

## Set Value

The Set Value allows testers to input text into fields effectively, which is essential for tasks such as filling out forms, entering login credentials, and validating application behavior based on different user inputs.

1. Form Filling: When testing forms, the Set Value keyword is used to enter data into input fields. This helps verify that the application processes user inputs correctly.
2. Data Entry Validation: You can use this keyword to test whether the application validates and handles different types of input correctly (e.g., text, numbers, special characters).

## Swipe Right

The Swipe Right action is an essential gesture in mobile automation testing, used for navigating between screens, interacting with hidden elements, and testing features like carousels or menus. It helps simulate real user behavior in mobile apps, ensuring that swipe-based interactions work correctly across different devices and conditions.

1. Navigation Between Screens: Many mobile applications use swipe gestures for navigation between different screens or tabs. The Swipe Right Keyword can be used to test this functionality, ensuring that users can navigate through the app as intended.
2. Carousel or Slider Interaction: Applications that feature image carousels or sliders often allow users to swipe right to view the next image or item. The Swipe Right Keyword can simulate this interaction to verify that the carousel responds correctly.

## Swipe Left

The Swipe Left action is used to simulate the gesture of swiping from right to left on a touchscreen device. This gesture is frequently used in mobile apps to navigate between screens, move through horizontal content (e.g., image galleries or carousels), and reveal hidden features or actions.

1. Navigation Between Screens: Many mobile applications use swipe gestures to navigate between different screens or tabs. The Swipe Left Keyword can be used to test this functionality, ensuring that users can successfully navigate through the app.
2. Carousel or Slider Interaction: Applications featuring image carousels or sliders often allow users to swipe left to view the previous image or item. The Swipe Left Keyword can simulate this interaction to verify that the carousel responds as expected.

## Swipe Down

The Swipe Down keyword is commonly used to simulate a downward swipe gesture on a mobile device's screen. This action is particularly important in applications where scrolling, refreshing content, or accessing hidden elements is required.

1. Scrolling Through Content: In applications that display long lists or scrollable content (e.g., social media feeds, product listings), the Swipe Down Keyword can be used to test whether the content scrolls as expected.
2. Refreshing Content: Many applications utilize a pull-to-refresh mechanism, where swiping down at the top of a scrollable area refreshes the content. Automating this gesture helps verify that the refresh functionality works correctly.

## Swipe Up

The Swipe Up keyword is commonly used to simulate an upward swipe gesture on a mobile device's screen. This action is particularly important in applications where scrolling, revealing hidden elements, or navigating through content is required.

1. Scrolling Through Content: In applications that display long lists or scrollable content (e.g., social media feeds, product listings), the Swipe Up Keyword can be used to test whether the content scrolls as expected when users swipe up.
2. Revealing Hidden Elements: Swiping up may uncover additional UI elements or options that are not initially visible. Testing this gesture ensures that the app displays these elements properly when the user swipes up.

## Check Orientation is Portrait

Check Orientation is Portrait Keyword used to verify if a mobile device or application is currently in portrait orientation. Portrait orientation means the screen is positioned vertically (taller than it is wide). This is important in scenarios where an app’s layout or functionality may differ based on screen orientation.

1. Validation of UI Layouts: Ensure that the application's UI elements are displayed correctly when in portrait mode. Some elements might be hidden or rearranged based on the orientation, so this check helps confirm proper layout behavior.
2. Functional Testing: Certain features of the app may only be available or behave differently in portrait mode. This Keyword helps validate that such features work as intended when the device is held vertically.

## Check Orientation is LANDSCAPE

The Check Orientation is LANDSCAPE keyword commonly used to verify that the orientation of the mobile application or device screen is set to landscape mode. This is particularly important for applications designed specifically for landscape orientation, ensuring that they display and function correctly when the device is held horizontally.

1. Validation of UI Layouts: Ensure that the application's UI elements are displayed correctly when in landscape mode. Some elements may be hidden, resized, or rearranged based on the orientation, so this check confirms proper layout behavior.
2. Functional Testing: Certain features of the app may only be available or behave differently in landscape mode. This Keyword helps validate that such features work as intended when the device is held horizontally.

## Scroll till element found (Vertical)

The Scroll till element found (Vertical) keyword is commonly used in mobile test automation to scroll through a vertically scrollable view until a specified element is located. This keyword is essential for testing applications with long lists, menus, or content that may be out of view on the current screen.

1. Testing Long Lists or Content: In applications with long lists (e.g., news feeds, product listings), this Keyword can help automate the process of scrolling to find specific items or elements, making it easier to verify their presence and properties.
2. Element Visibility Verification: Ensure that certain elements are visible to the user. This is essential for testing scenarios where elements are loaded dynamically or are initially off-screen.

## Scroll till element found (Horizontal)

The Scroll till element found (Horizontal) keyword is used to scroll through a horizontally scrollable view until a specified element is located. This keyword is essential for testing applications that feature horizontal lists, carousels, or other content that may not be fully visible within the current view.

1. Testing Horizontal Lists or Galleries: In applications that display items horizontally (e.g., image sliders, product carousels), this Keyword can automate the process of scrolling to find specific items or elements, making it easier to verify their presence and properties.
2. Element Visibility Verification: Ensure that certain elements are visible to the user when scrolling horizontally. This is essential for testing scenarios where elements are loaded dynamically or are initially off-screen.

## Reset App

The Reset App keyword is used to reset a mobile application's initial state. This action is essential during testing to ensure that each test starts with a clean slate, eliminating any residual data, settings, or states from previous tests.

1. Consistent Test Environment: Resetting the app ensures that tests start from a clean slate, eliminating any residual data or changes from previous test runs that could affect results.
2. Testing User Registration and Login: After testing user registration or login processes, you may want to reset the app to test these features again without needing to uninstall and reinstall the app.

## Radio Button Disabled

Radio Button Disabled means that a specific radio button in a user interface is in a non-interactive state. When a radio button is disabled, the user cannot select or change it. Visually, it is often grayed out or faded to indicate it is unavailable for interaction.

1. Form Validation: Verify that radio buttons that should not be selectable under certain conditions (e.g., based on previous selections) are correctly marked as disabled. This is important for ensuring that users cannot select invalid options.
2. Conditional Logic Testing: Test scenarios where the availability of certain options is dependent on user actions. For example, if selecting a specific checkbox disables certain radio buttons, this Keyword can help validate that behavior.

## Button Enabled

The Button Enabled Keyword is used to check whether a button is enabled, meaning that it is active and can be clicked or interacted with by the user. This functionality is crucial for validating the behavior of an application, ensuring that buttons are only interactive when appropriate, based on the application's logic and user input.

1. Form Validation: Verify that buttons are enabled or disabled based on the input values in a form. For example, a "Submit" button may be enabled only when all required fields are filled out correctly.
2. Conditional Logic Testing: Test scenarios where the availability of a button depends on previous user actions or selections. For example, if a user selects a specific option, a corresponding button may become enabled.

## Button Disabled

The Button Disabled Keyword is used to check whether a button is disabled, meaning that it is not interactive and cannot be clicked or activated by the user. This functionality is crucial for validating the behavior of the application, ensuring that buttons are only enabled when appropriate based on the application’s logic and user interactions.

1. Form Validation: Ensure that buttons such as "Submit" or "Next" are disabled until all required fields are filled out correctly. This prevents users from submitting incomplete or invalid information.
2. Conditional Logic Testing: Test scenarios where the availability of a button depends on certain conditions. For instance, a button may be disabled until a user selects a specific checkbox or option from a dropdown.

## Set Orientation Portrait

The Set Orientation Portrait Keyword is used to change the screen orientation of a mobile application to portrait mode. This Keyword is particularly important for testing applications that are designed to function in specific orientations, ensuring that the user interface (UI) and functionality work correctly when the device is held upright.

1. UI Testing: Validate that the application's user interface is displayed correctly in portrait mode. This includes checking the layout, visibility of elements, and overall usability.
2. Responsive Design Validation: Test how the application responds to orientation changes, ensuring that elements adapt correctly when switching from landscape to portrait mode.

## Find Element

The Find Element keyword is fundamentally used to locate and interact with web or mobile elements within a user interface. This Keyword is essential for performing actions like clicking buttons, entering text in input fields, or validating the presence of elements on the page.

1. Element Interaction: Enable testers to locate elements they need to interact with, such as buttons, text fields, checkboxes, and dropdowns, allowing them to simulate user actions.
2. Validation: Verify the presence or state of UI elements on a page, ensuring that the application is functioning as expected. For example, checking if a specific error message is displayed after a failed form submission.

## Dismiss Alert

The Dismiss Alert keyword is commonly used to handle alert dialogs or pop-ups that require user interaction before proceeding with other actions in an application. Alerts are often used in web and mobile applications to notify users of important information, confirm actions, or provide warnings. The ability to dismiss these alerts is essential for ensuring that automated tests can run smoothly without interruption.

1. Confirmation Dialogs: Automatically dismiss confirmation dialogs that appear when a user attempts to delete data or take an irreversible action, allowing the test to continue without manual intervention.
2. Warning Alerts: Handle warning alerts that inform users of potential issues, enabling the automation script to continue or proceed with a specific action.

## Swipe UP 25%

The Swipe Up 25% Keyword is used to simulate a swipe gesture on mobile devices, where the screen is swiped upward by a specified percentage (in this case, 25%) of the screen height. This Keyword is particularly useful for navigating through content in mobile applications that may be longer than the visible screen area, such as lists, scrollable views, or web pages.

1. Scrolling Through Content: Swipe up to reveal more content that is off-screen, such as loading additional items in a list or scrolling through long text in a document.
2. Navigating User Interfaces: Simulate user behavior by swiping up to navigate through app interfaces that utilize vertical scrolling.

## Double Click

The Double Click keyword is used to simulate a double-click action on an element within a user interface. This action is often associated with desktop applications and certain web elements, where a double-click triggers specific functionalities, such as opening files, selecting text, or activating features.

1. Opening Files or Folders: In desktop applications, double-clicking on a file or folder may open it. This keyword can be used to automate such actions in testing environments.
2. Selecting Text: In web applications or text editors, a double-click may be used to select a word or text block. This functionality can be tested to ensure it behaves as expected.

## Unlock Device

The Unlock Device keyword is used to programmatically unlock a mobile device. This is particularly important in mobile automation testing environments where tests need to interact with the device's user interface, and the device may be locked or require authentication (like a PIN or fingerprint) to access the home screen and application functionalities.

1. Accessing Locked Devices: When a device is locked due to inactivity, this keyword allows testers to unlock it to proceed with automated test execution.
2. Starting Test Sessions: Before initiating a test suite, unlocking the device ensures that the tests can run without interruption from the lock screen.

## Toggle WIFI

The Toggle WiFi keyword is used to enable or disable the Wi-Fi connectivity on a mobile device programmatically. This action is crucial for testing scenarios where the application's behavior may change based on the network status, allowing testers to simulate different connectivity conditions.

1. Network Connectivity Testing: Test how an application responds when Wi-Fi is enabled or disabled, ensuring that it handles network changes gracefully.
2. Offline Functionality: Verify the app’s offline functionality by toggling Wi-Fi off and checking if it behaves as expected when no network connection is available.

## Toggle Mobile Data

The Toggle Mobile Data keyword is used to enable or disable mobile data connectivity on a mobile device programmatically. This functionality is crucial for testing applications under varying network conditions, as mobile data is often used for internet access on mobile devices.

1. Network Connectivity Testing: Test how an application behaves when mobile data is turned on or off, ensuring that it can handle different connectivity scenarios effectively.
2. Offline Functionality: Verify the application's offline capabilities by disabling mobile data and ensuring it behaves correctly when no network connection is available.

## Toggle Location

The Toggle Location keyword is used to enable or disable location services on a mobile device programmatically. This capability is essential for testing applications that rely on location data, such as mapping services, ride-sharing apps, or any application that provides location-based features.

1. Location-Based Feature Testing: Validate how an application responds when location services are turned on or off, ensuring it behaves correctly under different conditions.
2. Offline Mode Testing: Test the application’s functionality when location services are disabled to verify that it handles the absence of location data appropriately.

## Toggle Airplane Mode

The Toggle Airplane Mode keyword is used to enable or disable airplane mode on a mobile device programmatically. Airplane mode disables all wireless communication, including cellular data, Wi-Fi, and Bluetooth. This functionality is vital for testing applications that must operate under various network conditions and ensure they handle connectivity changes effectively.

1. Connectivity Testing: Assess how an application behaves when switching between connected and disconnected states by enabling or disabling airplane mode.
2. Offline Functionality Verification: Test how the application functions in offline mode by enabling airplane mode and ensuring that it handles the lack of connectivity appropriately.

## Terminate App

The Terminate App keyword is used to forcefully close or terminate a mobile application on a device or emulator. This functionality is crucial for testing scenarios where the application's behavior needs to be assessed after being restarted or to ensure that resources are released appropriately when the app is no longer in use.

1. Application Restart Testing: Validate how the application behaves after being terminated and restarted, ensuring that it restores the state correctly or handles the restart gracefully.
2. Resource Management: Assess how well the application manages system resources, checking for memory leaks or performance issues when terminated and restarted frequently.

## Tap By Coordinates

The Tap By Coordinates keyword is used to simulate a tap or click action on a mobile device or emulator at specific screen coordinates. This feature is particularly useful in scenarios where standard element identification methods may not work, such as when interacting with dynamic UI elements or when performing actions on non-interactive areas of the screen.

1. Dynamic Elements: Interact with elements that may not be easily identifiable through standard locators (like IDs or class names), such as custom UI components.
2. Complex Gestures: Simulate more complex touch gestures that involve multiple taps or taps at different points on the screen.

## Swipe Up 50%

The Swipe Up 50% keyword simulates a swipe gesture on a mobile device or emulator, moving the screen content upward by a specified percentage (in this case, 50%) of the screen height. This functionality is essential for navigating through apps where content is scrollable, such as lists or pages with vertically stacked elements.

1. Scrolling Through Content: Efficiently scroll through long lists or pages where elements are not immediately visible, ensuring all parts of the interface are accessible for testing.
2. UI Testing: Validate the loading and display of new content when swiping up, checking for issues like infinite scroll, loading indicators, or layout changes.

## Swipe Up 75%

The Swipe Up 75% keyword in automation testing simulates a swipe gesture on a mobile device or emulator, moving the screen content upward by a specified percentage (in this case, 75%) of the screen height. This functionality is important for navigating through applications where content is scrollable, allowing testers to access elements that may be further down the screen.

1. Efficient Navigation: Quickly scroll through lengthy lists or pages to access content that is not immediately visible, ensuring comprehensive testing of all UI elements.
2. UI and UX Testing: Validate how the application responds to user interactions by checking the loading and display of new content as the user swipes up.

## Swipe Down 75%

The Swipe Down 75% keyword simulates a swipe gesture on a mobile device or emulator, moving the screen content downward by a specified percentage (in this case, 75%) of the screen height. This functionality is beneficial for navigating through applications where content is scrollable, allowing testers to access elements that may be lower on the screen or to refresh content in certain scenarios.

1. Accessing Hidden Content: Efficiently scroll down to view content that is not immediately visible, ensuring comprehensive testing of all UI elements within the application.
2. UI Testing: Validate that the application behaves correctly when swiping down, checking for issues such as content loading, display of loading indicators, or layout changes.

## Swipe Down 50%

The Swipe Down 50% keyword simulates a swipe gesture on a mobile device or emulator, moving the screen content downward by a specified percentage (in this case, 50%) of the screen height. This functionality is beneficial for navigating through applications where content is scrollable, allowing testers to access elements that may be lower on the screen or to refresh content in certain scenarios.

1. Accessing Hidden Content: Efficiently scroll down to view content that is not immediately visible, ensuring comprehensive testing of all UI elements within the application.
2. UI Testing: Validate that the application behaves correctly when swiping down, checking for issues such as content loading, display of loading indicators, or layout changes.

## Swipe Down 75%

The Swipe Down 25% keyword simulates a swipe gesture on a mobile device or emulator, moving the screen content downward by a specified percentage (in this case, 25%) of the screen height. This functionality is beneficial for navigating through applications where content is scrollable, allowing testers to access elements that may be lower on the screen or to refresh content in certain scenarios.

1. Accessing Hidden Content: Efficiently scroll down to view content that is not immediately visible, ensuring comprehensive testing of all UI elements within the application.
2. UI Testing: Validate that the application behaves correctly when swiping down, checking for issues such as content loading, display of loading indicators, or layout changes.

## Radio Button Enabled

The Radio Button Enabled keyword in automation testing checks the state of a radio button element within a mobile or web application. This keyword verifies whether a specific radio button is enabled (i.e., it can be interacted with) or disabled (i.e., it cannot be interacted with). Understanding the state of a radio button is crucial for ensuring that the application's user interface behaves as expected.

1. Validation of User Interaction: Ensure that the radio button is enabled and can be selected by the user during the testing process. This is particularly important in scenarios where certain conditions may enable or disable options.
2. Conditional Logic Testing: Test scenarios where the availability of the radio button is conditional based on previous user actions or selections. For example, verifying that a radio button becomes enabled when a specific checkbox is checked.

## Open Notification

The Open Notification keyword is typically used in mobile test automation to open the notification drawer on a mobile device. This is particularly relevant for mobile application testing, where notifications play a crucial role in user engagement and functionality. By using this keyword, testers can ensure that the application responds correctly to notifications and that the notification content is displayed as expected.

1. Testing Notification Display: Verify that the notifications generated by the application are displayed correctly in the notification panel. This includes checking the content, icons, and any actions associated with the notifications.
2. User Interaction Verification: Ensure that users can interact with notifications, such as tapping on them to open the associated app or specific content. This helps in validating the entire user journey from notification to app functionality.

## Long Press

Long Press is a gesture-based interaction used in mobile apps, where a user touches and holds an element on the screen for an extended time (usually more than a second). This action typically involves touching and holding a screen element for an extended period, triggering specific behaviors or actions associated with that element.

1. Accessing Contextual Menus: Test whether long pressing on certain elements, like buttons or list items, opens the expected contextual menu or options. This is common in applications that provide additional functionality via long press actions.
2. Drag and Drop Functionality: Validate the behavior of elements that can be moved or rearranged using a long press. This includes testing the ability to drag items and ensuring they drop correctly in the intended location.

## Lock Screen

The Lock Screen keyword is used in mobile test automation to simulate locking the device screen. Locking the screen is a common mobile interaction where the screen is turned off or secured with a password, PIN, or biometric authentication, preventing unauthorized access until the user unlocks it.

1. Testing Background Behavior: Verify how the application behaves when the device is locked. This includes checking whether the app maintains its state, pauses operations or continues background processes as intended.
2. Notification Verification: Ensure that notifications sent by the application are displayed correctly on the lock screen. This helps confirm that users receive important alerts even when the device is not actively being used.

## Is Installed

The installed Keyword is used to check whether a specific application is installed on a mobile device or emulator. This keyword is particularly useful in testing scenarios where the presence or absence of an app affects the outcome of the test case or the functionality being tested.

1. Pre-Condition Checks: Before starting a test suite or specific tests, verify that the application is installed. This helps avoid test failures caused by attempting to interact with an application that is not present.
2. Dynamic Testing Environments: In environments where multiple applications may be installed or uninstalled frequently, this keyword allows testers to confirm the installation status of the required application dynamically.

## Implicit Wait

Implicit Wait is a synchronization mechanism that allows the testing framework to wait for a specified amount of time when trying to locate an element on the web page or in the mobile application. If the element is found before the time expires, the execution continues immediately; if not, the test will throw an error after the timeout period has elapsed.

1. Dynamic Content Handling: In web applications with dynamic content loading (e.g., AJAX calls), implicit waits help ensure that the driver does not fail when elements are not immediately available.
2. Reducing Flaky Tests: By using implicit waits, tests are less likely to fail due to timing issues, leading to more stable test results. This can reduce false positives and negatives in your test suite.

## Compare Text

The Compare Text keyword is used in test automation to compare two text strings and verify if they are identical. This keyword is typically used in scenarios where you need to validate the output of a function, the content displayed in a UI element, or the data retrieved from a system against an expected result.

1. Validation of UI Elements: Ensure that the text displayed in labels, buttons, and other UI components matches the expected values. This is fundamental in verifying that the application is functioning as intended.
2. Error Message Verification: When an action fails, comparing the actual error message displayed against the expected message helps ensure that appropriate feedback is provided to the user.

## Close Side Menu

The Close Side Menu keyword is used in mobile and web test automation to close a side menu or a navigation drawer that is currently open in an application. Side menus, also known as navigation drawers, are common UI elements that slide in from the side of the screen, often used to provide navigation links or additional options.

1. Navigation Management: In scenarios where a side menu can be opened and closed during testing, this keyword helps manage the navigation state, ensuring that the menu does not interfere with subsequent actions.
2. UI State Verification: After verifying the contents or functionalities within the side menu, the keyword can be used to close the menu, allowing testers to confirm that the main interface returns to the expected state.

## Close Notification

The Close Notification keyword is used to close or dismiss notifications that appear on the device screen. Notifications are typically pop-ups or alerts that provide users with important information or updates from various apps.

1. User Interface Cleanup: After verifying the content of a notification, the keyword can be used to dismiss it, helping maintain a clear and manageable UI state for further actions.
2. Preventing Interference: Notifications can obscure important elements on the screen. Closing them ensures that automated actions can interact with the necessary elements without obstruction.

## Click Element

The Click Element keyword is a fundamental Keyword used in test automation to simulate a user clicking on a specific UI element, such as buttons, links, checkboxes, or other interactive components within a mobile application.

1. Navigating Through the Application: Clicking on links or buttons is essential for navigating through different pages or sections of an application. This allows testers to validate the application's flow and ensure that all features work as intended.
2. Submitting Forms: When testing forms, the Click Element keyword is used to submit the form after filling in the required fields, allowing testers to verify that the submission process works correctly.

## Wait till element not found

1. A new keyword allows steps to wait until a specified element disappears from the screen. The step is marked successful when the element is absent, and failed if it remains visible. 
2. System will wait till the element disappears from the DOM.
3. AI Self-Healing is explicitly disabled for this keyword, as the intent is to confirm element removal rather than locate an alternative