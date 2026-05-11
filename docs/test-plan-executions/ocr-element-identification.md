---
sidebar_position: 21
sidebar_label: "OCR-Based Element ID"
title: "OCR-Based Element Identification"
---

OCR-based element identification enables test automation on screens where elements are not accessible through standard widget or XPath-based strategies.

In some mobile applications, UI components are rendered in ways that make them invisible to conventional automation techniques. For example, screens built with custom rendering, image-based components, or applications where development gaps result in elements that cannot be reliably targeted.

With this capability, QApilot uses OCR during the recording phase to detect and display visible text elements on screen. When a user selects an element, QApilot stores its text content and bounding box coordinates. During execution, OCR runs again on the live device screen to locate the same text, recalculates the current bounding coordinates, and performs the interaction.

It's now possible to control OCR-based element capture at the recording level. 

1. In Auto Step Mode, OCR is automatically disabled. 
2. When Auto Step Mode is off, a manual toggle is available in the recording UI, giving teams precise control over when OCR is used.


![](https://docs.qapilot.io/files/znva03JuDmuRKKeKgDFv)