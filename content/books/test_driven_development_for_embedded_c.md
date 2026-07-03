Title: Test Driven Development for Embedded C
Date: 2026-07-02 23:00
Modified: 2026-07-02 23:00
Category: Books
Tags: unit-testing, embedded-c, tdd
Authors: Luis David Garcia
Summary: A brief review of James W. Grenning's *Test-Driven Development for Embedded C* (Pragmatic Programmers)

Dates Read: 02/13/2026 - 02/17/2026

**Rating: 4/5**

When I first learned unit testing during my internship at Schilling Robotics, it was great, and they even emphasized using test-driven development.

However, at the time I didn't have the opportunity to connect it with writing unit tests for firmware or embedded systems until I read Grenning's book, which came after my master's.

I hadn't thought of unit testing as something feasible in the embedded world, since I wondered how I could run tests on the hardware I was programming for. But the truth is that we abstract away the hardware and focus on validating the logic.

At the end of the day, we still need to run integration tests and smoke tests that involve the hardware, and in my experience these are often written in Python.

However, when we make changes to firmware, what really helps catch deviations from requirements or prevent bugs is running unit tests before each build. If they pass, we proceed with the build; otherwise, we stop to fix issues or add new tests to improve coverage.

What I appreciated from Grenning was how he taught mocking and stubs, because it really clicked for me when I was able to abstract our HAL libraries, which often interface directly with the physical addresses of our MCU.

With mocking, I no longer needed to power on an FPGA or integrate the rest of the circuit just to validate logic. I could run the unit tests directly on my PC.

He also provided great insight into taking requirements and turning them into tests, which then drive code development.

Following the TDD cycle—red, green, refactor—became a fun iterative process for development rather than writing a large behemoth of code and then creating a `main.c` just to test it afterward.

The only main drawback of this book is that the frameworks it uses, [Unity Test Framework](https://www.throwtheswitch.org/unity?utm_source=chatgpt.com) and [CppUTest](https://cpputest.github.io/?utm_source=chatgpt.com), are somewhat dated compared to modern approaches. In the examples, they feel a bit old relative to what you'd write today. Additionally, it's much better to use Unity alongside its associated tool, [Ceedling](https://www.throwtheswitch.org/ceedling?utm_source=chatgpt.com).

So while it's not the best in terms of modern tooling examples for writing unit tests, the foundational concepts—how to write unit tests and isolate them from hardware—remain very strong.

