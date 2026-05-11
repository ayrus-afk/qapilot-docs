---
sidebar_position: 14
sidebar_label: "Reusable Test Blocks"
title: "Reusable Test Blocks"
---

## **Reusable Test Blocks**

Reusable Test Blocks allow you to group commonly repeated steps into a single functional unit that can be referenced across test cases. This feature improves maintainability, reduces duplication, and enables faster creation of consistent and reliable automation flows.

Reusable Test Blocks behave like modular building blocks inside QApilot’s automation engine. You can define them once and reuse them whenever needed within a test case.

***

### **Overview**

Many mobile test cases share similar foundations such as login flows, onboarding steps, search sequences, or checkout starting points. Previously, these steps had to be recorded or maintained separately in every test case.

With **Reusable Test Blocks** you can:

* Convert any collection of steps into a functional block
* Reuse the same block multiple times in a test case
* Reorder and manage steps inside a block
* Execute blocks as part of a test and see each step individually in reports
* Maintain logic in one place rather than editing multiple test cases

This ensures consistency, reduces maintenance overhead, and accelerates authoring of long or repetitive flows.

***

## **Key Features**

### **1. Create Functional Blocks from Test Steps**

![](https://docs.qapilot.io/files/xLbhSukLnAnbEwyt0Jia)

You can select one or more steps from an existing test case and convert them into a **Functional Block**.

This is ideal for:

* Login sequences
* Navigational flows
* Reusable validation steps
* Form-filling routines
* Repeated UI action groups

Once created, the block becomes available for reuse.

***

### **2. New Keyword: Functional Block**

QApilot introduces a new keyword called **Functional Block**.

This keyword allows you to insert a predefined Functional Block anywhere inside a test case.

Example usage:

* Add **Login Block** at the beginning of multiple test cases
* Add **Search Flow Block** wherever needed
* Loop or reuse the same block multiple times within the same test case

***

### **3.** Exception Block for Failure Handling

A global exception block at a test case level, to enable automated failure handling without manual intervention.

In complex test flows, a failing step would previously halt execution or require individual error handling to be configured for each step. Now, a dedicated Exception Block can be configured at the footer section within the test case. If any step fails during execution, exception block is automatically invoked, executing the defined actions in the block.

* Click on "Show Exception Block" icon at the top right

![](https://docs.qapilot.io/files/wwuLwz9TX0U9KTix1Aag)

* There's a new "Import Functional Block" that's activated at the footer section of the screen

![](https://docs.qapilot.io/files/cpClIzqRVGQ4qyD0CmQh)

* User can choose from a set of already configured functional blocks to act as an exception block.

![](https://docs.qapilot.io/files/19sz0r3sITkdsuCOPkmb)

* Upon failure of a test step, where an exception block is triggered, the view is as depicted -

![](https://docs.qapilot.io/files/4ihEA2Vtftmy3SUTsLdt)

**Note** - In case of failure of an exception block, the subsequent steps are taken up for execution, ignoring the failed exception block execution.

***

### **4. Step Ordering & Editing**

Inside a Functional Block:

* Steps can be rearranged
* Steps can be edited as needed
* The block maintains its internal order when reused

Changes to the block automatically reflect across all test cases that reference it.

***

### **5. Execution & Reporting**

During execution:

* When the block is triggered, each step inside it runs sequentially
* Execution reports expand and display **every individual step**
* This ensures complete traceability and easier debugging

Functional Blocks behave exactly like normal test steps during execution.

### 6. Bulk Activate and Deactivate 

***

## **UI & Workflow**

### **Functional Blocks Tab**

A new tab called **Functional Blocks** appears in the sidebar next to the **Test Cases** tab.

Inside this tab, users can:

* View all created blocks
* Create a new block
* Edit existing blocks
* Delete or duplicate blocks
* Inspect steps inside a block
* Activate or Deactivate existing blocks individually or in bulk

The UI mirrors the Test Cases layout for familiarity and ease of use.

***

### **1. Creating a Functional Block**

There are two ways to create a Functional Block:

#### **Method 1: Convert Steps inside a Test Case**

1. Open an existing test case
2. Select one or more steps
3. Click **Create Functional Block**
4. Name the block
5. Save

The selected steps are moved or copied into the new block.

#### **Method 2: Create from Functional Blocks Tab**

1. Go to **Functional Blocks**
2. Click **New Functional Block**
3. Add steps manually
4. Save

***

### **2. Using Functional Blocks in Test Cases**

![](https://docs.qapilot.io/files/smzwDO3qnHRPpvY3uLH6)

To use a block:

1. Open a test case
2. Click **Add Step**
3. Select the **Functional Block** keyword
4. Choose the block from the dropdown

The block will appear as a single step, but during execution expands into its full sequence.

***

### **3. Find all cases where a functional block is referenced**

A "Find Mappings across Test Cases" option is now available for functional blocks and page items.

* Selecting this option opens a panel listing every test case and step where the selected functional block or page item is referenced.
* Use this before renaming, modifying, or removing a shared component to understand the full impact across the project.

### **4. Create Functional Blocks During Recording**

Group recorded steps into a functional block on the fly, without leaving the Recorder. 

**Creating a New Block**

* Select one or more recorded steps.
* Choose "Add a new block" to create a new functional block from the selected steps.
* If no functional blocks exist in the project yet, a new one will be created automatically.

**Inserting into an Existing Block**

* Steps can also be added into an already-imported functional block using the "Insert into existing block" toggle.

**Deletion Behaviour**

* Removing a functional block from the Recorder view only removes that instance from the current session.
* The underlying functional block in the project remains untouched and fully reusable.

### **5. Import Steps and Functional Blocks into the Recorder**

Bring existing test steps and functional blocks into an active recording session without leaving the Recorder.

**Importing Test Steps**

* Select the import option within the Recorder screen.
* Choose any module and test case to browse available steps.
* Selected steps are copied into the current recording session.

**Importing Functional Blocks**

* Functional blocks can be imported from anywhere in the project.
* Once imported, the steps within the block are visible in context but remain non-editable, preserving the integrity of the shared block.

**Additional Step Management in the Recorder**

* Steps can be cloned directly within the Recorder view.
* Step order can be updated via drag or reorder controls within the Recorder.

## **Maintenance**

Functional Blocks help reduce maintenance by centralizing repeated logic.

For example:

* Updating the login flow updates it across **all** test cases that use the Login Block
* The system significantly reduces the risk of stale or inconsistent automation steps

***

## **Best Practices**

* Use blocks for repeated flows like Login, Navigate to Home, Search, Add to Cart
* Avoid creating overly large blocks; keep them focused
* Name blocks clearly (e.g., *Login with Valid Credentials*, *Perform Search*, *Open Orders Screen*)
* Review execution reports to ensure block behavior matches expectations