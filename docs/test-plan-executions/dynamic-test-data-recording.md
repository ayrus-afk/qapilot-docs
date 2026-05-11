---
sidebar_position: 18
sidebar_label: "Dynamic Test Data during Recording"
title: "Dynamic Test Data during Recording"
---

### Dynamic Test Data during Recording

We’ve enhanced the test data handling experience within the Recorder to improve usability, reduce context switching, and provide better control over how input data is managed during test creation.

#### Background

Previously, when recording steps that required input values, users could either:

* Enter direct input data, or
* Use a variable, which would then automatically be added to the test data set along with its corresponding value.

While functional, this approach required manual entry and did not provide a structured way to reuse existing test data items efficiently.

***

### What’s Improved

#### 1. Dropdown-Based Test Data Selection

The standard variable text box has now been replaced with a **dropdown menu** that lists all existing test data items for the selected test data set.

This allows users to:

* Easily select from previously defined test data items
* Maintain consistency across test cases
* Avoid manual retyping of variable names

![](https://docs.qapilot.io/files/fPO3CaTqT0zcXcrQQ0mX)

***

#### 2. Inline Test Data Item Creation

Users can now create new test data items directly from the same dropdown interface.

Instead of navigating away from the Recorder screen:

* Select the option to create a new test data item
* Define the required value inline
* Continue recording without interruption

This ensures smoother workflow and eliminates unnecessary screen transitions.

***

#### 3. Intelligent Selection Logic

If a user selects an existing test data item and leaves the input field blank:

* The system automatically retrieves the value from the selected test data item
* That value is used during step execution

This reduces redundancy and ensures accurate value binding without additional input.

***

#### 4. Flow Continuity & Backward Compatibility

The existing logic for creating variables during recording remains fully supported.

When new items are added inline:

* They are automatically incorporated into the test data set
* The system continues to behave consistently with prior variable-handling logic

No changes are required to existing test cases.

#### 5. Update Test Data During Execution

QApilot supports dynamic test data updates mid-execution using a new "Update Test Data" keyword, allowing the same functional block to be driven by different data values without duplicating steps.


![](https://docs.qapilot.io/files/kX1zmsNWNyNkqquhXeS6)


![](https://docs.qapilot.io/files/EVjx7xgtFSqnrw3Vg977)

With the new keyword, users can specify a variable name and provide the updated value as the step input. 

* For dynamic variables, QApilot generates the value at runtime according to the configured rules and assigns it back to the variable automatically.
* For static variables, the value is applied directly before the step executes. 

***

### Impact

This enhancement streamlines test data management directly within the recording flow, improves reusability of data, reduces manual effort, and ensures cleaner separation between test steps and test data configuration.