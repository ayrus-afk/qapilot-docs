---
sidebar_position: 10
sidebar_label: "HTTP Master"
title: "HTTP Master"
---

The HTTP Master feature in **QAPilot** provides an integrated solution for validating API endpoints directly within test cases, functioning similarly to tools like Postman. It enables testers to execute and validate API calls (GET and POST methods) as part of their testing workflow.

***

### Prerequisites [](#httpmaster-prerequisites)

1. Obtain the required API details from your developer, including the endpoint, request type (GET or POST), and any necessary JSON code.
2. Ensure that you have a [Test Data](/detailed-documentation/test-plan-executions/test-data)

***

### Creating HTTP Master [](#httpmaster-creatinghttpmaster)

1. Navigate to the HTTP Master and it will redirect to the below screen:

![](https://docs.qapilot.io/files/D2VRpFKIvxOTM03OXf3b)

2. As you can see above, it allows you to choose any one of the above two methods:
   1. API Call: An API Call refers to a request made by a client application to a server to perform an action or retrieve data. In automation testing, API calls validate the functionality, reliability, and performance of Application Programming Interfaces (APIs) that serve as the backbone of modern software systems.
   2. Import OpenAPI: OpenAPI (formerly known as Swagger) is a widely used specification for defining RESTful APIs. Importing OpenAPI specifications into an automation testing framework enables testers to streamline the creation and management of API tests. This integration eliminates the need for manual test case creation by auto-generating API endpoints, request formats, and test scenarios from the specification.

![](https://docs.qapilot.io/files/DfYilB2seKstCPS4W3U9)

3. As you can see above, If the user wants to create a new collection, click on New Collection.
4. A confirmation popup will appear asking if you want to create a new collection.\
   Confirm the creation of the new collection in the popup.

![](https://docs.qapilot.io/files/41xsaluMRp1871ZYajGD)

5. In this collection, you can add a new module.

![](https://docs.qapilot.io/files/TZtnPjOhayGEUutUkCtJ)

6. You can add new requests within this new module. The collection is successfully created, and the new request is added.

![](https://docs.qapilot.io/files/derlxUkooLn3wrUkc80Q)

7. The dropdown on the left allows users to choose the type of HTTP request: **GET**, **POST**, **DELETE**, or **PUT**. This selection determines the kind of request that will be made in the API test.

![](https://docs.qapilot.io/files/5puNGKTrCRry3ggtJNK7)

8. In this request, we can pass the endpoint URL: and, if required, an authorization token for the API request. Please select the appropriate Auth Type:
   1. **Basic Auth**: Enter the Username and Password.
   2. **Bearer Token**: Provide the Token ID."
9. **Headers**: Here, we can provide headers. What are the prerequisites required for those headers? We need to provide headers.
10. In the Request Body section, you can choose between the following options:
    1. **Form-data**: Used for sending key-value pairs, often for file uploads or form submissions.
    2. **Raw**: Allows sending raw data in JSON, XML, or plain text formats.
11. **Scripts:** We provide two scripting options: **Pre-Request** and **Post-Response**.
    1. **Pre-Request Script**:\
       This script is executed **before** the API request is made. It can be used to set up dynamic values, generate tokens, or prepare the environment for the API call.\
       Example: Setting an authorization token or a timestamp.
    2. **Post-Response Script**:\
       This script is executed **after** the API request and response cycle. It captures and processes the response from the API. You can use this to validate response data, extract values for subsequent requests, or log outputs.
12. **Variables:** If the user needs to use variables for this API, they can be defined and provided here. Variables allow for dynamic values to be passed into the request, making it more flexible and reusable. Variables are used to store API responses, enabling data persistence and seamless reuse across subsequent requests within a collection.

![](https://docs.qapilot.io/files/0w4o9QnJPRUHpoJvlmMA)

13. **Type:** Specifies the source of the variable. For example, selecting "Response Headers" means the variable will extract data from the API response headers.
14. **XPath:** A path to pinpoint the specific part of the response from which data should be extracted. For example, you can use XPath expressions to retrieve values from JSON or XML responses.
15. **Variable:** The name of the variable where the extracted value will be stored for later use in subsequent requests.
16. **Assertion:** This dropdown allows you to define validations or checks for the extracted data. Available options include:
    1. **Save:** Save the value without additional validation.
    2. **Equal To:** Ensure the value matches a specific value.
    3. **Contains:** Check if the value contains a specific substring.
    4. **Greater than Equal / Less than Equal / Greater than / Less than:** Perform numerical comparisons on the extracted value.
17. **Asset Value:**
    1. If assertions are applied, this field specifies the value to be used in the validation.
18. **"Add New" Button:**
    1. Allows adding additional variables to extract and validate multiple pieces of data within a single request.
19. After importing the collections, executing the collection requires prerequisite test data to be imported. This test data is typically verified using environment variables in Postman. Similarly, to run the same collection in this platform, the same test data must be imported.
    1. **Collections Tab**: Displays the imported collections that contain API requests, modules, and workflows.
    2. **Test Data Tab**: Displays the associated test data files required for running the collections.

![](https://docs.qapilot.io/files/ejECEhi4GJz32KYXTtQR)

To execute the entire collection, follow these steps:

1. **Click on 'Run Collection'**: This will initiate the execution of all requests within the selected collection.

![](https://docs.qapilot.io/files/EgyJVABv7PE5H3v3VNeq)

2. **Apply Run Settings**:
   * **Select Test Data**: Choose the test data files that should be used for this run. These files will be applied to the requests based on the variables within the collection.
   * **Set Delay Time**: Specify the delay time between each request. This controls how much time should elapse between the execution of one request and the next, allowing for appropriate pacing.
   * **Save Response**: Choose whether to enable or disable the option to save the responses to the requests. Enabling this allows you to store the responses for later analysis or reporting.
3. **Click 'Save & Run'**: After configuring the settings, click on **Save & Run** to execute the entire collection. The platform will run all requests in sequence, apply the test data, and follow the delay time and response-saving rules.
4. Once the execution is completed, a detailed report will be generated, which includes the results of all requests, response times, assertions, and any failures that occurred during the run."

![](https://docs.qapilot.io/files/Es7B1mc3cbconTcgoR9U)

![](https://docs.qapilot.io/files/IdRRG416cJ6E79EbFNlB)