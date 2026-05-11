---
sidebar_position: 99
sidebar_label: "Security Reports"
title: "Security Reports"
---

**Security Reports** in QApilot to help teams run static security analysis as part of their mobile testing workflow. This update integrates security insights directly into the Reports experience, ensuring visibility without disrupting existing QA processes\
\
While uploading the app source, the user has an option to enable security reports. 

![](https://docs.qapilot.io/files/CjmM4DQ0kR3DcXxE6AbY)

**Security Reports** 

* A new **“Security Analysis”** checkbox is available in the **App Upload** flow under Settings → App Source.
* Security analysis runs only when this option is explicitly enabled, ensuring teams stay in control of when and how scans are performed.
* Uploaded app versions include a **“View Security Report”** option, allowing quick navigation to the corresponding security report for that specific version.

![](https://docs.qapilot.io/files/RY9yxPpVeBGeLfqGFILg)

When Clicked on "view report", the security report will be displayed as follows -

![](https://docs.qapilot.io/files/ViLch5ojCXKRBzruX4WF)

* A new **Security Reports** tab has been added under the **Reports** section, alongside Accessibility Reports.
* Each security report is listed with key metadata, including app title, OS, package or bundle name, version, analysis duration, and execution status.
* Reports are organized per app version, with a single security report generated for each uploaded version.
* Users can view detailed findings across multiple analysis areas, including:
  * Manifest Analysis
  * Certificate Analysis
  * Code Analysis
  * Network Security