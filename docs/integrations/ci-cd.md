---
sidebar_position: 21
sidebar_label: "CI/CD"
title: "Continuous Integration/Continuous Deployment"
---

Integrating automation testing tools with CI/CD pipelines enables tests to run automatically in the software build and deployment process. This allows developers to get immediate feedback on their code changes and catch issues early.

***

## Prerequisites

1. Before you Enable CI/CD in **QApilot**, you must understand the concepts of executing the [Test Plan](/detailed-documentation/test-plan-executions).
2. CI/CD is applicable only for [cloud device connection](/detailed-documentation/setup/cloud-recording-execution).

***

## Enabling CI/CD

1. You can enable CI/CD in two places at the Test Plan options menu and the creation of the [Test Plan Level](/detailed-documentation/test-plan-executions).
2. Navigate to [**Test Plan**](/detailed-documentation/test-plan-executions) in the left-side navbar. It redirects to the Test Plan Listing Screen which displays all the Test Plans along with their status, and creation date.

![](https://docs.qapilot.io/files/mcXQxOI0HNsFRChd0ag8)

2. Click on the three-dot symbol, Enable CI/CD, and click on Yes.

![](https://docs.qapilot.io/files/e1Q8U9dJPQpD7qdObSuE)

3. Shell Files (.sh) and Batch Files (.bat) involve integrating scripts to automate your build, test, and deployment processes. Shell files are for Mac iOS, while batch files are used on Android. Both can execute commands to configure and trigger CI/CD pipelines.
4. Shell Scripts (.sh) and Batch Files (.bat) play an important role in executing automated test cases, configuring environments, and integrating test suites with CI/CD pipelines. These scripts provide a way to trigger test execution manage dependencies, and automate repetitive tasks.

![](https://docs.qapilot.io/files/jbihizGTvntrJVrkjt41)

To integrate the provided shell file for Mac iOS and the bat file for Android into your CI/CD pipeline, follow these steps:

5. Download .Sh file for Linux server and .bat file for Windows Server. Here, a server refers to the CICD server of the client from where Build is generated.
   1. Download the shell file for Mac iOS and the bat file for Android as provided.
6. Provide the Files to the CI/CD Integration Team:
   1. Share the downloaded shell file and bat file with your CI/CD integration team.
7. Integration into CI/CD Pipeline:
   1. The CI/CD team will integrate these files into the CI/CD pipeline for automation testing.
8. Execute Test Cases:
   1. The CI/CD pipeline will execute the test cases contained in the integrated files whenever there is a production update.
9. Handling Failures:
   1. If there is a failure in the execution of the test cases in the integrated files, the CI/CD team will need to stop the production update and fix the issues.
10. Re-running the Files:
    1. Once the issues are fixed, the CI/CD team can rerun the integrated files to retest the test cases before proceeding with the production update.

By following these steps and integrating the provided files into your CI/CD pipeline, you can ensure that test cases are run automatically before any production updates, allowing for early detection of issues and preventing faulty updates from reaching production.