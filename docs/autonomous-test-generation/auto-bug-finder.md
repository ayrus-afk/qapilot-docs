---
sidebar_position: 8
sidebar_label: "Auto Bug Finder"
title: "Auto Bug Finder"
---

When a crawl completes, QApilot analyzes every discovered screen and interaction to identify common problem patterns. The results are grouped and presented as **Issues**, mapped back to the exact screens where they were found.

Each issue is backed by screenshots, UI metadata, and actionable guidance, making it easy to understand both **what failed** and **where it occurred**.

![](https://docs.qapilot.io/files/HTZ0wAzLLaAt8ImGdboH)

### Issues Categories

Issues are automatically classified into the following categories:

* **Assets Not Loaded**\
  Detects UI elements where images or visual assets failed to render correctly, resulting in blank or broken components.
* **Page Not Loaded**\
  Flags screens that did not load fully or failed to reach a stable state during navigation.
* **Spell Check**\
  Identifies spelling or textual inconsistencies detected on screens.
* **Accessibility**\
  Highlights potential accessibility violations based on UI structure and attributes.

Each category displays a count indicating how many issues were detected during the crawl.

### Pages with Issues

The left pane lists all screens where issues were identified, grouped by screen name (for example, Home Screen, Login Screen, Settings).

### Issue Details View

For each issue, QApilot provides a detailed breakdown:

* **Issue Summary**\
  A clear description of the problem detected.
* **Severity Indicator**\
  Highlights the potential impact (for example, High).
* **Screenshot Context**\
  Shows the affected screen, with the problematic element visually identifiable.
* **UI Metadata**\
  Includes element type, resource ID, class name, text, and screen bounds.
* **How to Fix**\
  Provides a recommended corrective action to help teams address the issue efficiently.

This combination of visual evidence and technical context makes issues immediately actionable for both QA and development teams.