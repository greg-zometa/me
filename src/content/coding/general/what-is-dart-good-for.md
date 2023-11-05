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

While the Dart language is the primary focus of this post, I want you to consider Flutter as the primary fall back for Dart development. Specifically, I want you to consider **how the Dart language is influenced**.

### A problem as old as "learn once write anywhere"

The other day I was scrolling around the platform formerly known as Twitter on my mobile browser. I thought to myself, **"Wow, the UI is so similar to the mobile app. I wonder how much frontend code does it share."** Then I remembered that web code is not the same as mobile code.

In web development, you build the UI with [the holy trinity](https://www.geeksforgeeks.org/introduction-web-development-holy-trinity/). In mobile development, the UI is built with [Kotlin](https://kotlinlang.org/), previously Java, for Android devices, and [Swift](https://www.swift.org/), formerly Objective-C, for iOS devices. The new languages for mobile development have an interesting history, but for another time.

Enter the problem for a company that is looking to develop apps for multiple devices... you need multiple developers to build for multiple devices. You would need a web developer that specializes in JavaScript, an iOS developer that specializes in Swift, and an Android developer that specializes in Kotlin. [Don't get me started on building desktop apps](https://news.ycombinator.com/item?id=18733989)!

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

While developers write code in Dart, under the hood, the Flutter engine uses a combination of C, C++, and [Skia](https://skia.org/) to render the UI on the targeted device. It is designed to run apps using natively compiled code, making them highly performant. At the time of writing, Skia will be replaced by [Impeller](https://docs.flutter.dev/perf/impeller), a new runtime engine for Flutter that is intended to take full advantage of the latest chipsets and hardware-accelerated APIs for iOS and Android.

Looking at the reasons [Dart was chosen as Flutter's primary language](https://en.wikipedia.org/wiki/Ahead-of-time_compilation), at first glance it appears to satisfy developer and user requirements. For developers, Flutter is intended to be fast to develop in thanks to two critical components of Dart's runtime: [JIT compilation](https://wikipedia.org/wiki/Just-in-time_compilation) for development, and [AOT compilation](https://wikipedia.org/wiki/Ahead-of-time_compilation) for production apps. For users, fluid animations and jank-less experiences are possible because [Dart's virtual machine are implemented in C/C++](https://dart.dev/overview#platform), taking advantage of a mobile device's memory allocator.

While these appear to be valid reasons why Dart was chosen it may not satisfy all developers ~~criteria~~ personal preference for why it was chosen. For instance, why not Rust? It can run on embedded devices and easily integrate with other languages. Projects such as [Tauri](https://github.com/tauri-apps/tauri) and [Leptos](https://github.com/leptos-rs/leptos) are proving capable of building interfaces. Or why not Go? Like Dart, Go was built by Googlers and there are ambitious projects to bring Go to the client such as [Gio](https://github.com/gioui/gio) by [Elias Naur](https://github.com/eliasnaur) and [Wails](https://github.com/wailsapp/wails) by [Lea Anthony](https://github.com/leaanthony).

Taking a second look as to why Dart was chosen for Flutter I found something problematic. In the third paragraph it states, _"...when we adopted Dart, the language didn’t have an ahead-of-time toolchain for producing native binaries, which is instrumental in achieving predictable, high performance, but now the language does because the Dart team built it for Flutter._ **The Dart team shipped a Flutter specific feature because the Flutter team said so**. What the actual fuck?!

This would be like the React team telling [TC39, the organization maintaining and evolving the JavaScript language](https://tc39.es/), to add JSX as a feature because it will be so nice for web developers to no longer need to compile JSX to JavaScript. What about the other horrible front-end libraries?! [Will they get special treatment](https://github.com/tc39/proposal-cancelable-promises/issues/70)?!

It just feels like Dart is one of those projects that **Google had to adopt**. Sure, you can poach iOS and web-based hybrid developers to join your eco-system, but is it enough? How does a programming language fit into Google's agenda of world domination? Well, Google at one point tried to hijack control of web development standards, and did so by attempting to kill JavaScript.

> As a little trivia, Flutter was made after Dart 1.0. [Codenamed "Sky"](https://www.youtube.com/watch?v=PnIWl33YMwA), Flutter wouldn't be considered stable until 3 years later at [Flutter Live 2018](https://www.youtube.com/watch?v=kpcjBD1XDwU)

## A dash of history

For over 20+ years, Google has held a dominant influence in technology. After the creation of [their very popular search engine](https://www.similarweb.com/website/google.com/) that has been [engrained to our lives](https://www.cnet.com/tech/services-and-software/google-goes-down-for-5-minutes-internet-traffic-drops-40/), Google released other popular and successful web apps. The first of these web-based services were a suite of business tools such as Gmail and Google Calendar.

Developed near the dawn of Web 2.0

## Real world Dart or Dart outside of Flutter

## The future for Dart

Don't get me wrong, JavaScript is flawed. But let developers and other people who build this bullshit for the web dictate what they want to use.
