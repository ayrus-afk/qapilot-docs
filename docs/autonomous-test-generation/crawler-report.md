---
sidebar_position: 7
sidebar_label: "Crawler Report"
title: "Crawler Report"
---

A **Crawl Report** is a structured output generated after an automated crawler explores an application. **Status (Completed)** → Confirms crawl finished successfully.

***

**Crawler Flow:**

This visual graph shows the paths taken by the automated crawler during its test run of the application. It captures all the screens visited and the transitions (navigation) between them.**🟢 Initial Screen**

* **Sign In Screen** (Green node)
  * This is where the crawl began. It represents the **starting point** of the automated journey (login or onboarding).

**🔵 Home Screen**

* **Dashboard Screen** (Blue node)
  * This is identified as the **Home Screen**.
  * All primary journeys or user flows **branch out from here**, showing that once login was successful, the app directed the user to this central hub.

**⚪ Navigation Screens (Gray nodes)**&#x45;ach of these represents a functional or navigable area discovered from the Dashboard or subsequent screens.The structure visually confirms how the crawler **mapped user journeys** and can now be used to **generate test cases** and **replay interactions**.**🎛️ Interface Elements**

* **Top Bar Options**:
  * `Crawler Flow`, `Scenarios`, `Activity Graph`, `Interaction Flow` — different views for inspecting crawl data.
* **Status: "Completed"** — Crawl finished successfully.

**🎥 Bottom Right Controls**

* **Start Playback** (Red Button):
  * Replays the entire path the crawler took, step-by-step.
* **Reset Zoom**: Returns the graph to default zoom for easy navigation.

![](https://docs.qapilot.io/files/R0FYkWbo7Nco2LsXynLn)

***

**Scenarios**

This section automatically groups the crawler's discoveries into **categorized user journeys**, turning them into **structured test cases**, with step-by-step details and visual evidence (screenshots).✅ **Status: Completed:** Confirms that the crawl ran successfully and all journeys were recorded and processed.Each collapsible group represents a major **user journey**. Inside each journey, you can see **step-by-step actions** with **screenshots**.Example for these below Journeys:

1. **Onboarding Journey** – 3 test cases
2. **Account Management** – 2 test cases
3. **Roaming Pack Purchase** – 7 test cases *(Expanded)*

**Auto-Generated Descriptions:** Plain-English breakdowns of each interaction. Missing Step Indicators clearly flag when screenshots aren’t available.


![](https://docs.qapilot.io/files/k0zcTOuH7C0TVary7MYF)

***

**Activity Graph:**&#x49;t maps out the **user journeys** discovered by the crawler during its run.

* **Start Node** → The crawl begins at the **Onboarding Journey** (login screen).
* **Onboarding Steps**
* From here, multiple **branches** extend → each represents a **journey** or app flow that the crawler detected.

👉 Each box = a **screen or functional area**. 👉 The connecting lines = **navigation paths** (how the user/crawler moved from one screen to another).**Right-Side Panel (Details View)**

* Labeled **“Test Cases / All Steps”**.
* Each journey expands to show the **exact steps** taken.

Example: **Onboarding Journey**

1. Enter your email into the input field.
2. Enter the password.
3. Tap the Sign In button → proceed to Home Screen.

👉 This means the crawler automatically **converts interactions into structured test cases**.**Icons Highlighted in Red (Top Right)**

* **Test Case Counter (10)** → Total journeys/test cases generated.
* **Play/Replay Icon** → Lets you replay the crawl path or rerun it.

**Mini-Map (Bottom Right)**

* A zoomed-out overview of the whole flow, helpful for navigating large graphs.

![](https://docs.qapilot.io/files/D39CUdfRepWC9sGjdPXv)

***

**Interaction Flow**

This flow diagram shows a **step-by-step path of user interactions**, captured during the automated crawl. It highlights **what actions the crawler took on each screen**, in the order they occurred.

* **User Actions** → Not just screens, but what the crawler/user did (e.g., clicked, typed, navigated).
* **Flow Direction** → Dotted lines show the path and order.
* **Detailed Behavior Tracking** → Each box includes **interaction descriptions**.

![](https://docs.qapilot.io/files/hsUgM62z8EQOijT4PnJI)

***

**Test Cases are automatically displayed in the** [**Test Cases**](https://app.gitbook.com/o/FbyoGKdvYxBL55moKt6I/s/f7DuCvkprTM62hS3tKQF/test-plan-executions/test-case) from the crawler’s recorded steps across different user journeys. These test cases are automatically generated from the crawled scenarios and recorded interaction flows, where each user interaction (such as tap, input, or navigation) is captured as an individual step.

![](https://docs.qapilot.io/files/95NICYBfaYkIVpatghwP)

#### Failure Reasons for Crawler

In case, when crawler is initiated for a certain period of time and for some reason, the crawl fails, the corresponding reason for the failure of crawler is also displayed as shown in the image below. The failure reasons are displayed along with Trans Ids too. 

![](https://docs.qapilot.io/files/tjdPqOFIZLCS4U682yf7)