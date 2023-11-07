---
title: What is Dart good for?
description: After nearly a decade since it's release, Dart has primarily been used to develop multi-platform apps with the Flutter framework. I ask the hard question, what else is it good for?
pubDatetime: 2023-11-07T10:00:00.000
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

The other day I was scrolling around the platform formerly known as Twitter on my mobile browser. I thought to myself, **"Wow, the UI is so similar to the mobile app. I wonder how much front-end code does it share."** Then I remembered that web code is not the same as mobile code.

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

Looking at the reasons [Dart was chosen as Flutter's primary language](https://en.wikipedia.org/wiki/Ahead-of-time_compilation), at first glance it appears to satisfy developer and user requirements. For developers, Flutter is intended to be fast to develop in thanks to two critical components of Dart's runtime: [JIT compilation](https://wikipedia.org/wiki/Just-in-time_compilation) for development, and [AOT compilation](https://wikipedia.org/wiki/Ahead-of-time_compilation) for production builds. For users, fluid animations and jank-less experiences are possible because [Dart's virtual machine are implemented in C/C++](https://dart.dev/overview#platform), taking advantage of a mobile device's memory allocator.

While these appear to be valid reasons why Dart was chosen it may not satisfy all developers ~~criteria~~ personal preference for why it was chosen. For instance, why not Rust? It can run on embedded devices and easily integrate with other languages. Projects such as [Tauri](https://github.com/tauri-apps/tauri) and [Leptos](https://github.com/leptos-rs/leptos) are proving capable of building interfaces across devices. Or why not Go? Like Dart, Go was built by Googlers and there are ambitious projects to bring Go to the client such as [Gio](https://github.com/gioui/gio) by [Elias Naur](https://github.com/eliasnaur) and [Wails](https://github.com/wailsapp/wails) by [Lea Anthony](https://github.com/leaanthony).

Taking a second look as to why Dart was chosen for Flutter I found something problematic. In the third paragraph it states, _"...when we adopted Dart, the language didn’t have an ahead-of-time toolchain for producing native binaries, which is instrumental in achieving predictable, high performance, but now the language does because the Dart team built it for Flutter._ **The Dart team shipped a Flutter specific feature because the Flutter team said so**. What the actual fuck?!

This would be like the React team telling [TC39, the organization maintaining and evolving the JavaScript language](https://tc39.es/), to add JSX as a feature because it will be so nice for web developers to no longer need to compile JSX to JavaScript. What about the other horrible front-end libraries?! [Will they get special treatment](https://github.com/tc39/proposal-cancelable-promises/issues/70)?!

It just feels like Dart is one of those projects that **Google had to adopt**. Sure, you can poach iOS and web-based hybrid developers to join your eco-system, but is it enough? How does a programming language fit into Google's agenda of world domination? Well, Google at one point tried to hijack control of web development standards, and did so by attempting to _phase-out_ JavaScript.

> As a little trivia, Flutter was made after Dart 1.0. [Codenamed "Sky"](https://www.youtube.com/watch?v=PnIWl33YMwA), Flutter wouldn't be considered stable until 3 years later at [Flutter Live 2018](https://www.youtube.com/watch?v=kpcjBD1XDwU)

## A dash of history

To understand how Dart was influenced, we have to look into how Google significantly influenced the evolution of Web 2.0.

### The dawn of Web 2.0

For over 20+ years, Google has held a dominant influence in technology. After the creation of [their very popular search engine](https://www.similarweb.com/website/google.com/) that has been [engrained to our lives](https://www.cnet.com/tech/services-and-software/google-goes-down-for-5-minutes-internet-traffic-drops-40/), Google released other popular and successful web apps. The first of these web-based services were a suite of business tools such as Gmail and Google Calendar.

These apps were developed near [the dawn of Web 2.0](https://www.techtarget.com/whatis/definition/Web-20-or-Web-2). Lists, dates, links, and other elements were hard-coded into HTML, and dynamic functionality was limited to server languages such as PHP. Web apps developed during Web 2.0 made a shift from static web pages to dynamic, interactive platforms. For example, real-time updates on the client were performed through [asynchronous requests](https://developer.mozilla.org/docs/Web/Guide/AJAX).

And around this time, JavaScript was a mess. Or should I say **browsers interpreting JavaScript** was a mess. This was largely due to **[the browser wars](https://en.wikipedia.org/wiki/Browser_wars)** that started way back in the 1990s. Back in 2006, a web developer by the name of [John Resig](https://johnresig.com/) was feeling the pain of writing JavaScript code for multiple browsers. [Different browsers implemented JavaScript in slightly varying ways](https://caniuse.com/), causing headaches for developers. In an attempt to unify JavaScript functionality across browsers, John would go on to create the web's most influential library, [jQuery](https://jquery.com/). With jQuery, web developers can easily manipulate the DOM, handle client-side events, animations, and AJAX requests in order to create these dynamic apps.

However, within several years of jQuery's release there were several challenges web developers faced. For starters, when a project grew in size and complexity, maintaining large jQuery codebases became problematic. This was due partially to lack of structure; **hundreds of thousands of lines of JavaScript** would load on every page of an app. This would lead to [tangled, hard-to-navigate code](https://en.wikipedia.org/wiki/Spaghetti_code).

This would give rise to frameworks that back-end architects would push for, giving structure to the front-end. This pattern, that may be familiar to some, would be the **[MVC (Model-View-Controller)](https://www.geeksforgeeks.org/mvc-framework-introduction/)**. In short, this pattern helped separate concerns, making code more modular and maintainable. This pattern empowered developers to build scalable, organized web apps, addressing the limitations of raw jQuery.

### jQuery was never the problem

Google extensively used [AngularJS, the JavaScript-based web framework](https://angularjs.org/), for various purposes. Components of Google Workspace, including Google Docs, Sheets, and Slides, were built using AngularJS. These apps were developed and maintained with AngularJS' best patterns:

- **Controllers** — control the flow of data in that application.
- **Directives** — encapsulate complex behavior and DOM manipulation.
- **Model-Driven Approach** — DOM elements reflect changes in the AngularJS model.

**These complex apps that had real-time collaboration, rich text editing, offline mode, version control, and version conflict resolution** were maintained with these best patterns from AngularJS. Yet, there were issues that these developers had to overcome, and they were [common problems that any developer can relate to](#a-problem-as-old-as-learn-once-write-anywhere).

Was the issue the framework? It was brand new at the time these apps were developed. Was it the scale and scope of the apps? The AngularJS pattern reduced the scope of code and made it more maintainable. _Building delightful applications on the web today is far too difficult_. That's a justifiable assumption, but doesn't answer _the technical challenges_.

[A developer from Google had an answer](https://gist.github.com/paulmillr/1208618), and **he blamed JavaScript**!! According to _Mark_, _"Complex web apps--the kind that Google specializes in--are struggling against the (web) platform and working with a language that cannot be tooled and has inherent performance problems. Even smaller-scale apps written by hobbyist developers have to navigate a confusing labyrinth of frameworks and incompatible design patterns."_ Well, [amen to that](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f).

As the leaked email continues, _"Javascript as it exists today will likely not be a viable solution long-term. **Something must change**... we can try to evolve Javascript, or we can push for a new language that addresses core problems in Javascript that can’t be repaired easily or quickly."_ As the email goes on, Google devs wanted a "clean break" from JavaScript while still maintaining a seat at TC39. Google devs would go on to create a new language while maintaining an influence in the web, specifically the standards that dictated how web developers build applications.

This new break in language would be ~~Dart~~ Dash! Dash would be designed with performance and developer usability in mind. Dynamic and easy-to-get-started, Dash was intended to be a viable substitute for JavaScript as _"the native client-side language of choice across all browsers."_ Targeting legacy JavaScript, Dash would be able to compile to [ECMAScript Harmony](https://johnresig.com/blog/ecmascript-harmony/).

Intended to be promoted as _"the language for serious web development on the web platform"_, web developers who developed solely on the new Chrome browser could expect Dash features built into Chrome relatively sooner than the other browsers. Developers focusing on all browsers **will have to make use of the Dash cross compiler to target other browsers**, and, _"...depending on the success of the evangelizing effort, might have to wait years for other browsers to implement native support for Dash"_.

I'll just leave this final quote here: \_"The goal of the Dash effort is ultimately to replace JavaScript as the lingua franca of web development on the open web platform. We will proactively evangelize Dash with web developers and all other browser vendors and actively push for its standardization and adoption across the board.

> [In case anyone doubted that this was Dart](http://googlesystem.blogspot.com/2011/09/dash-googles-alternative-to-javascript.html).

## Real world Dart or Dart outside of Flutter

So with a bunch of context with the Flutter framework covered, and the history of JavaScript influencing the creation of the language, I come back to the original question. What is Dart good for?

Well, if you look at [open source projects programmed in Dart](https://github.com/topics/dart), it's mostly Flutter apps. Hence the fallback to Flutter!

But in all seriousness, Dart, as it has been described in [their beautiful website](https://dart.dev/), is a client-optimized language for fast apps on any platform. It's current goal is to port client side code in any platform. [With syntax and features that will feel very familiar to web developers](https://dart.dev/language), [Dart takes a page from JavaScript](https://dart.dev/guides/language/coming-from/js-to-dart), but with some enhancements that Google devs really wanted during the ECMAScript Harmony proposal, such as a [built-in type system](https://dart.dev/language/type-system).

```dart
// Variables
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};

// Control flow statements
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}

// Functions
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);

// Classes
class Spacecraft {
  String name;
  DateTime? launchDate;

  // Read-only non-final property
  int? get launchYear => launchDate?.year;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  // Method.
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```

Google fought really hard to have the language be a part of the JavaScript community. So much so they set a standard for the language for Dart 1.0 under [TC52](https://ecma-international.org/technical-committees/tc52).

While there are few popular [awesome open source projects created by Dart](https://github.com/yissachar/awesome-dart), it still has an influence. Any web developers using the latest version of Sass? [That's written in Dart](https://github.com/sass/dart-sass). Companies that are using Flutter/Dart other than Google? [Plenty](https://flutter.dev/showcase). Heck, closed projects where Dart is the primary language? ~~Ever heard of Fuchsia OS?!~~ [Fuchsia was re-written in Rust](https://fuchsia.dev/fuchsia-src/development/languages/rust).

> At least it didn't land in [the graveyard](https://killedbygoogle.com/) like [another language a Google developer tried to create](https://www.theregister.com/2014/11/04/improving_javascript_google_throws_atscript_into_the_mix/).

## The future for Dart

In conclusion, for a programming language that was developed by the ultimate ad-revenue, money making machine and [is used on an app that serves ads for revenue](https://dart.dev/community/who-uses-dart), this programming language has been poorly marketed.

While there is potential for a client-side language to do more <!-- TODO: Write about Node.js -->than what it was designed for, it needs to get out of the ecosystem that it was designed for! Lest, it will live and die being only ever useful for one thing.

For the Google devs who went out of their way to create this language and attempt to overtake JavaScript, I hope lessons were learned. The popularity and adoption of a language does not come from savvy marketing or coercion of a specific environment/platform. Instead it comes from real-world usage, community and industry adoption, job-demand, and conformity of that language for developers. Don't get me wrong, JavaScript is flawed, but let web developers and other people who build this bullshit for the web dictate what they want to use.

As Bjarne Stroustrup once stated: _"There are only two kinds of languages: the ones people complain about and the ones nobody uses."_ Where are the Dart developers using the language outside of Flutter?
