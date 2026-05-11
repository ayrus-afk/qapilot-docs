---
sidebar_position: 10
sidebar_label: "React Native"
title: "React Native Integration Guide"
---

# React Native Integration Guide

:::note Coming soon
Detailed React Native integration guidance is being written. The information below covers the current known requirements.
:::

## Accessibility Labels

QApilot uses the platform accessibility tree to identify elements. For reliable element recognition in React Native apps, add `accessibilityLabel` props to all interactive elements:

```jsx
<TouchableOpacity
  accessibilityLabel="Login Button"
  accessibilityRole="button"
  onPress={handleLogin}
>
  <Text>Login</Text>
</TouchableOpacity>
```

## Build Requirements

React Native apps do not have special build requirements beyond standard APK/IPA guidelines. See [App Upload Requirements](../setup/app-upload-requirements) for the full list.

## Known Issues

- Metro bundler dev mode builds work for automation but may be slower
- Hermes engine apps are fully supported
