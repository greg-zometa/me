---
title: What is Dart good for?
description: After nearly a decade since it's release, Dart has primarily been used to develop multi-platform apps with the Flutter framework. I ask the hard question, what else is it good for?
pubDatetime: 2023-10-30T04:00:00.746Z
directory: coding
draft: true
dynamicOgImg: https://images.unsplash.com/photo-1582172958571-208b55ba4bab
tags:
  - dart
  - flutter
  - google
  - mobile
  - web
---

After nearly a decade since it's release, Dart has primarily been used to develop multi-platform apps with the Flutter framework. I ask the hard question, what else is it good for?

## Table of contents

## A bit of context with Flutter

While the Dart language is the primary focus of this post, I want you to consider Flutter as the primary fall back for Dart development. Specifically, I want you to consider **how Flutter shapes the intention of the Dart language**.

> Keep this in mind as I'll be repeating it again: `Dart is a client-optimized language`.

### A problem as old as "learn once write anywhere"

The other day I was scrolling around the platform formerly known as Twitter on my mobile browser. I thought to myself, **"Wow, the UI is so similar to the mobile app. I wonder how much frontend code does it share."** Then I remembered that web code is not the same as mobile code.

In web development, you build the UI with [the holy trinity](https://www.geeksforgeeks.org/introduction-web-development-holy-trinity/). In mobile development, the UI is built with [Kotlin](https://kotlinlang.org/), previously Java, for Android devices, and [Swift](https://www.swift.org/), formerly Objective-C, for iOS devices. The new languages for mobile development have an interesting history, but for another time.

Enter the problem for a company that is looking to develop apps for multiple devices... you need multiple developers to build for multiple devices. You would need a web developer that specializes in JavaScript, an iOS developer that specializes in Swift, and an Android developer that specializes in Kotlin. Don't get me started on building desktop apps (pray for [Tauri](https://tauri.app/) success)!

Unless there is a [unicorn](https://www.atlanticbt.com/insights/myth-full-stack-unicorn-developer/) that is willing to work for less than $200k, a company will end up shelling $300k+ annually for developers to build these apps. But instead of hiring one developer to build multi-platform apps in multiple languages, what if you hired one developer to build those apps with **ONE** language.

Enter [hybrid apps](https://www.techtarget.com/searchsoftwarequality/definition/hybrid-application-hybrid-app): build with web standards and ship across devices. There are many frameworks that web developers can take advantage of to build these apps:

- **[Ionic](https://ionicframework.com/)** — an open source UI toolkit for building mobile apps with HTML, CSS, and JavaScript, and integrates with popular JS frameworks like Angular, React, and Vue.
- **[NativeScript](https://nativescript.org/)** — provides platform APIs to enable web developers to build native platform apps with JavaScript.
- **[React Native](https://reactnative.dev/)** — combines native development with React based primitives to render native platform UI, providing React developers a similar development experience.
- **[Xamarin](https://dotnet.microsoft.com/en-us/apps/xamarin)** — an app platform for building Android and iOS apps with .NET and C#.

Now there is a caveat, with the rise of **[progressive web apps (PWA)](https://developer.mozilla.org/docs/Web/Progressive_web_apps)** that allow web developers to continue building web apps **WITHOUT** the above frameworks, and they can be installed into a mobile device natively (an example being this website!) but, I digress.

While these frameworks are solutions to build web and mobile apps, there is division among hybrid development vs native development. There's plenty of articles and discussions among developers about this topic, but what is important to know is that it always centers on one specific issue: `the use of JavaScript`.

It impacts mobile applications for:

- Users
  - bad performance
  - lagging feedback on interactions
  - outdated or poor UI from lack of customization
  - battery drainage due to high memory usage
- Developers
  - security vulnerabilities
  - native and non-native bugs
  - OS/version stability support
  - app store support

While these frameworks have worked very hard to build mobile UI with native elements, there is still a gap to bridge for JavaScript logic to be interpreted in the OS of the mobile device. Thus causing the headaches above. _If only there was a hybrid framework that doesn't ship with JavaScript_.

> Another thing to keep in mind as you read on: **how JavaScript shapes the intention of the Dart language**.

### The solution: build (Flutter) apps for any screen

According to [the Flutter home page](https://flutter.dev/), _"Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase."_ Unlike web-based, hybrid frameworks, **Flutter doesn’t rely on web browser technology**. Instead, it utilizes the Dart language to draw widgets. Widgets in the Flutter framework can be visual, stateful, and interactive. For example, Flutter comes with pre-built widgets to build Android (Material Design) and iOS (Cupertino) UI layouts and themes.

While developers write code in Dart, under the hood, the Flutter engine uses a combination of C, C++, and [Skia](https://skia.org/) to render the UI on the targeted device.

Flutter was made after Dart 1.0. [Codenamed "Sky"](https://www.youtube.com/watch?v=PnIWl33YMwA), Flutter wouldn't be considered stable until 3 years later at [Flutter Live 2018](https://www.youtube.com/watch?v=kpcjBD1XDwU)

## A history of Dart

## Real world Dart or Dart outside of Flutter

## The future for Dart
