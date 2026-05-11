---
sidebar_position: 11
sidebar_label: "Keywords"
title: "Keywords"
---

QApilot’s test recorder supports a rich set of keywords, including standard interaction keywords and custom keywords designed to handle complex mobile-specific scenarios. These keywords help testers build expressive, reusable, and reliable test flows without writing code.

***

### **Draw Signature**

The **Draw Signature** keyword enables automated drawing interactions on signature or canvas-based input fields.

**Behavior:**

* Accepts an input string directly or from a variable.
* If no input is provided, a random string is automatically generated.
* Draws each character of the input string inside the selected drawing element.
* Supports only lowercase alphabets (`a–z`) with a defined maximum input length.
* Characters are rendered as simple drawn shapes; visual readability is not required and is intended only as a reference.

### **Reset App**

Clears the app cache and session data, then relaunches a fresh instance of the application.

* Platform: Android only
* Behavior: Terminates the current app session, wipes all cached data, and starts the app from a clean state - equivalent to a manual cache clear and relaunch.
* Use case: Useful for resetting application state between test runs without restarting the device.