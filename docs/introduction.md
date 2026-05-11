---
sidebar_position: 2
sidebar_label: "Introduction"
title: "Introduction: QApilot"
---

**QApilot** is a powerful and comprehensive cloud-based test automation platform for mobile app quality assurance (QA). It supports various mobile platforms and integrates with popular development and project management tools, which can significantly benefit Agile and DevOps teams.

The advanced features of **QApilot**, such as faster and more precise testing, can help minimize the time and cost associated with QA processes without sacrificing quality.

Additionally, detailed execution logs can provide valuable insights into test runs, aiding in troubleshooting and identifying areas for improvement. These features, combined with advanced reporting and many other mobile-specific features that **QApilot** offers contribute to a streamlined and efficient testing process.

***

Core concepts:

* [**Test Recording:**](/detailed-documentation/test-recording) Easily create automated [test suites](/detailed-documentation/qapilot-terminology#test-suite) by recording interactions on local or cloud devices without writing code. Test Recording can quickly record test steps by capturing user interactions, such as clicking buttons, entering text, navigating through pages, etc.
* [**Test Execution:**](/detailed-documentation/test-plan-executions) Run your automated test suites on local or cloud devices without writing code.
* [**Cloud Device Testing:**](/detailed-documentation/setup/cloud-recording-execution) Execute and schedule tests across a diverse range of real cloud devices for thorough and continuous coverage.
* [**Detailed Test Reporting:**](/detailed-documentation/reports) Receive actionable insights from comprehensive test reports and compare results across different test runs.
* [**HTTP Endpoint Integration:**](broken://pages/Mi9OD2Rk5rI14Lsa3CTT) Integrate and test HTTP endpoints seamlessly within your test scenarios.

***

## Getting Started with Automation Testing

Understanding the prerequisites to test mobile applications with a **QApilot** is crucial for successful testing. **QApilot** has two ways to get started with automation testing:

### [Local Device Testing](/detailed-documentation/setup/local-recording-execution)

Local device testing is testing mobile applications directly on physical devices you can access. Unlike cloud-based testing platforms, where tests run on remotely hosted devices, local device testing requires testers to interact directly with the hardware. This method is beneficial for validating real-world interactions and device-specific behaviors.

### [Cloud Device Testing](#cloud-device-testing)

Cloud Device Testing involves running automated test scripts on real devices and emulators hosted in the cloud device farm. Since these devices are hosted on cloud-based servers → cloud, they’re accessible online at all times. Such a testing infrastructure is called a real device cloud → device farm which facilitates effective cloud testing.

**QAPilot** has integrations with cloud device farms such as BrowserStack, and SauceLabs, allowing you to leverage cloud testing for your apps. For Information on integrating with cloud device farms, please refer to [Integrations](/detailed-documentation/project-settings/integrations).

***

### Cloud Architecture:

This image shows a cloud-based architecture for an automation testing solution **QApilot**. Here’s a breakdown of the components and how they interact:

![](https://docs.qapilot.io/files/hQrixtRJ23WpVtDUHUAD)

1. **Client Apps**:
   * **App UI Interface**: The front-end interface users interact with.
   * The [**Local Agent**](/detailed-documentation/setup/qapilot-executor-local-agent) in QApilot enables users to execute automated tests directly on their local devices. It serves as a utility that facilitates **test orchestration** by seamlessly managing tasks like queuing tests, executing them, and fetching their results.
2. **API Layer**:
   * **Core APIs**: Core functionality exposed as APIs for client apps to interact with the backend services.
   * **Webhooks**: Enable asynchronous communication and event-based updates between the system and external integrations.
3. **Microservices**:
   * **Authentication**: Manages user login and security protocols.
   * **Tenant Manager**: Manages multi-tenant environments, allowing multiple clients or users to operate in isolated segments.
   * **Device Management**: Handles devices used for testing.
   * **Application Data Manager**: Manages application data required for test cases and configurations.
   * **Visual and Text AI Modules**: AI-powered modules for image recognition and text analysis in testing.
   * **Reporting**: Generates reports on test execution and results.
   * **Executions Manager**: Manages test execution workflow.
   * **Network Tracer**: Monitors and logs network traffic for analysis during tests.
   * **Others**: Placeholder for additional microservices that support other functionalities.
4. **Infrastructure Layer:**
   * **Cloud Storage**: Stores large files or test data.
   * **Database**: Stores application data, configurations, test results, etc.
   * **Logs**: Maintains logs for monitoring and troubleshooting.
   * **Cache**: Used for caching frequently accessed data to improve performance.
5. **Integrations**:
   * **Device Farms**: External device farms (BrowserStack, Sauce Labs) for testing across different devices and configurations.
   * **CI/CD**: Continuous integration and deployment help automate the testing workflow.
   * **Test Management**: Tools like TestRail are used to manage test cases and test plans.
   * **Defect Management**: JIRA integration is used to track defects identified during testing.
   * **Social Apps**: Integration with communication platforms like Microsoft Teams for notifications and updates.

This architecture supports modularity, scalability, and integration with various testing and development tools, enabling efficient automation testing workflows and management across different devices and environments.