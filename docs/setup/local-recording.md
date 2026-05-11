---
sidebar_position: 4
sidebar_label: "Local Recording/Execution"
title: "Local Recording/Execution"
---

When using **QApilot** for test recording with local devices, the process typically involves setting up the devices on your local network → device/system, and configuring them to work with the **QApilot** platform.

* [x] Connect the device to your system. Ensure you have enabled developer options for local testing and the **QApilot** Local Executor (Local Agent) is installed and running.
* [x] The connected device will automatically be displayed on the Test Recording Screen.

## **Software Installation:**

### Install Required Software:

![
     [Windows](#for-windows),  [Mac Android](#for-mac-android),  [Mac IOS](#for-mac-ios), and [Linux ](#for-linux)                                                          
](https://docs.qapilot.io/files/EnILuTPTkBu9L2W0LUrU)
*
     [Windows](#for-windows),  [Mac Android](#for-mac-android),  [Mac IOS](#for-mac-ios), and [Linux ](#for-linux)                                                          
*

## How To Connect to the Local Device?

### Prerequisites

Ensure you create a [Project](/detailed-documentation/projects). Logging into the QApilot UI is a prerequisite for accessing the Projects Menu. The Projects Home page is the first screen shown after the respective user's successful login. Click the Project card to make the changes or [Create a New Project](/detailed-documentation/projects#how-to-create-a-new-project).

1. Click on the Project Card. Select the Recorder option from the Configurations list.\ 


   ![](https://docs.qapilot.io/files/weOTBr1oixQ5phP41U2D)
2. The first step is to set the Connection type—selecting the kind of Environment, Cloud or Local.


   ![](https://docs.qapilot.io/files/JXu8PP2gc8cobBhmg2QE)
3. Select Local Devices → It will redirect to the below screen:

![](https://docs.qapilot.io/files/mIapURdXsMaqU4YjPcTp)

4. Depending on your choice, select a Desktop OS: Windows, Mac, or Linux. Connect your mobile device to your laptop or desktop.

Local Devices refer to physical devices on which the Test cases are run to check the respective app's functionality. Cloud devices refer to the devices present in the Cloud farm.

The Cloud Device setup will enable running the Test Cases on multiple mobile devices as they are integrated/configured to be part of the Automation testing environment. This arrangement will facilitate the Test Cases' check to understand the application's compatibility.

### For Windows:

#### Pre-requisites:

1. **Administrative Privileges:** The script requires administrative privileges to modify system environment variables and install applications.
2. **JDK and Android SDK Directories:** Ensure the JDK and SDK folders are located in the same directory as the script.
3. **install** [**local agent QApilot Local executor**](/detailed-documentation/setup/qapilot-executor-local-agent).

#### Installation Steps to follow:

1. Uninstall any previous **QApilot** builds if any.
2. Run the install.bat file.
3. If all prerequisites are met, the Setup Wizard will automatically open.
4. Follow the basic instructions & wait for the installation to complete.
5. Restart the system.
6. Run the QApilot application from your installed directory.

### For Mac Android:

#### Install android SDK

To download the latest version of Android SDK, navigate to the link [Download Android SDK](https://developer.android.com/tools/releases/platform-tools?_gl=1*1yubow8*_up*MQ..\&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnBWvkKppBLUL3KnC1pGWfZRm8He13ZcG6OXsoBd1rkDhZ01kGFgXp0aAkNNEALw_wcB\&gclsrc=aw.ds)

#### Install node.js

To download the latest version of Node.js, navigate to the link [Download Node.js](https://nodejs.org/en/download)

**Download and install** [**local agent QApilot Local executor**](/detailed-documentation/setup/qapilot-executor-local-agent)

**Install Java and Set the Path**

1. Download the JDK from Oracle's website or use `Homebrew` to install it:

   ```
   brew install openjdk@11
   ```
2. Set up the JDK environment file:
3. echo 'export PATH="/usr/local/opt/openjdk\@11/bin:$PATH"' >> \~/.zshrc
4. echo 'export JAVA\_HOME=$(/usr/libexec/java\_home -v 11)' >> \~/.zshrc
5. source \~/.zshrc

#### Install Android Studio and Set the Path

1. Download Android Studio from the official website.
2. Run the installer and follow the setup wizard.
3. Open the downloaded file and drag Android Studio to the Applications folder.
4. Open Android Studio and follow the setup wizard.
5. Open a terminal and find the SDK path: open -e \~/.zshrc
6. Add the following lines (adjust the path as needed):
7. export ANDROID\_HOME=$HOME/Library/Android/sdk
8. export PATH=$PATH:$ANDROID\_HOME/emulator
9. export PATH=$PATH:$ANDROID\_HOME/tools
10. export PATH=$PATH:$ANDROID\_HOME/tools/bin
11. export PATH=$PATH:$ANDROID\_HOME/platform-tools
12. Save the file and reload the terminal: source \~/.zshrc

### For Linux:

#### Install android SDK

To download the latest version of Android SDK, navigate to the link [Download Android SDK](https://developer.android.com/tools/releases/platform-tools?_gl=1*1yubow8*_up*MQ..\&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnBWvkKppBLUL3KnC1pGWfZRm8He13ZcG6OXsoBd1rkDhZ01kGFgXp0aAkNNEALw_wcB\&gclsrc=aw.ds)

#### Install node.js

To download the latest version of Node.js, navigate to the link [Download Node.js](https://nodejs.org/en/download)

**Download and install** [**local agent QApilot Local executor**](/detailed-documentation/setup/qapilot-executor-local-agent)

#### Install Java & Set Path

1. Download the JDK from Oracle's website
2. Set up the JDK environment file:
3. echo 'export PATH="/usr/local/opt/openjdk\@11/bin:$PATH"' >> \~/.zshrc
4. echo 'export JAVA\_HOME=$(/usr/libexec/java\_home -v 11)' >> \~/.zshrc
5. source \~/.zshrc

#### Install Android Studio & Set the Path

1. Download Android Studio from the official website.
2. Run the installer and follow the setup wizard.
3. Open the downloaded file and drag Android Studio to the Applications folder.
4. Open Android Studio and follow the setup wizard.
5. Open a terminal and find the SDK path: open -e \~/.zshrc
6. Add the following lines (adjust the path as needed):
7. export ANDROID\_HOME=$HOME/Library/Android/sdk
8. export PATH=$PATH:$ANDROID\_HOME/emulator
9. export PATH=$PATH:$ANDROID\_HOME/tools
10. export PATH=$PATH:$ANDROID\_HOME/tools/bin
11. export PATH=$PATH:$ANDROID\_HOME/platform-tools
12. Save the file and reload the terminal: source \~/.zshrc

Once the installations are done for your choice of OS. Extract the Local Agent launcher file.

### For Mac IOS:

#### Install Java and Set Path:

1. Download the JDK from Oracle's website [Click Here](https://www.oracle.com/in/java/technologies/downloads/) or use `Homebrew` to install it:

   ```java
   brew install openjdk@11
   ```
2. Check how to set the path [Click Here](https://docs.oracle.com/en/java/javase/23/install/installation-jdk-macos.html#GUID-C5F0BF25-3487-4F33-9275-7000C8E1C58C)

#### Install Android Studio & Set the Path

1. Download Android Studio from the official website. [Click Here](https://shorturl.at/DhMxr)
2. Check how to set the path [Click Here](https://developer.android.com/tools/variables)

#### XCode installation

1. Log in with the Developer Account on the Apple website.
2. Go to the downloads page [(https://developer.apple.com/download/)](https://developer.apple.com/download/) and download the latest version of Xcode
3. After the download is completed, double-click on the dmg file of Xcode.
4. Drag the Xcode dmg file to the application folder.

#### Install node.js

To download the latest version of Node.js, navigate to the link [Download Node.js](https://nodejs.org/en/download)

**Download and install** [**local agent QApilot Local executor**](/detailed-documentation/setup/qapilot-executor-local-agent)

#### Update WebDriverAgent

Download the source code of the latest version of WebDriverAgent from the below link [https://github.com/appium/WebDriverAgent/releases/latest](https://github.com/appium/WebDriverAgent/releases/latest)

### Extract Local Agent:

1. Extract the **Executor** zip file

![](https://docs.qapilot.io/files/8UYtc2LpTiHqznKGGByE)

2. Open **CMD** from the same file location

![](https://docs.qapilot.io/files/Y356908spQMGke170hDk)

3. Enter **npm i** for the first time, once the **installation** is done.

![](https://docs.qapilot.io/files/rrHalmKRXAvk3JQ7mYNQ)

4. Enter **npm start**, if the **Android SDK** **path** is set and corrected the respective screen is displayed.

![](https://docs.qapilot.io/files/69BSn7xU41qcd3AqZjgI)

5. The respective **Physical Device** will be displayed in the **Device** dropdown.
6. Enable **Developer Tools/Options** on the connected **Device/Mobile.**
7. Enable **USB Debugging**.

Applying the above two steps is mandatory to add the respective **Device** details to the QA pilot UI.

The **Mobile settings** of **Developer Tools** and **USB Debugging** for the QA pilot UI will fetch the device details. The user can use any search engine (Google/Bing) to understand how to enable the required mobile settings for the respective model (mobile company & model).

Unless the above two settings are enabled on the **Device** to be selected, the **Device** details are not shown under the **Device** dropdown to proceed to the next step.

![](https://docs.qapilot.io/files/7CmpoaNi7ga5J6lIZbOO)

8. Select the respective options from various fields(**App**, **Module, Testcase**, **Page, and VPN Required**) on **Select App & Testcase** as shown above.

The **user** can select the options from the dropdown or **click the button to create a new element for every field**.

**New element creation:**

* **Module**
* **Testcase**
* **Page**

![](https://docs.qapilot.io/files/w2V7BZsvlLUsr0WPCHgK)

9. Select App from the drop-down to test.
10. For Module:

Create Module

![](https://docs.qapilot.io/files/TYdLkwY63VHhZr4mZnHb)

11. Create a **test case** and click on the **Create** button.

![](https://docs.qapilot.io/files/Y0dlowGaqpdX0AnGxJ1S)

12. For **Page:**

 Page Title

![](https://docs.qapilot.io/files/pF65KJlAPx5Lvkc7GUkC)

13. **VPN Required** is optional. If a **VPN** is required, then a **local executor** should be running.

![](https://docs.qapilot.io/files/A0yTQsQyJdiLNa64qQEW)

14. click on **Launch** to establish a connection to your local device.

![](https://docs.qapilot.io/files/x7RlrKlgROdtcMCvqSqE)

15. The **device** will be successfully **connected** and the below **Recording Screen** will be displayed.

![](https://docs.qapilot.io/files/3WO2dSxNbbGvI20upWJc)