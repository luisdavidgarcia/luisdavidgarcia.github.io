Title: MISRA C 2012
Date: 2026-07-02 23:00
Modified: 2026-07-02 23:00
Category: Books
Tags: embedded-c, misra, coding-standards
Authors: Luis David Garcia
Summary: A brief review of the MISRA C 2012 Standards

Dates Read: 02/19/2026 - 02/20/2026

**Rating: 3/5**

When you began coding, did you have a set standard or formula for writing your code every time? I didn't. Especially when writing C, I knew I wouldn't use `goto`, but I definitely wasn't thinking about things like creating large nested conditionals, relying on short-circuit evaluation, putting function calls inside conditionals, and much more.

I enjoyed finally having a standard to help guide me in creating safer C code. It's not perfect and can sometimes feel stricter than necessary, but adhering to the standard can make debugging a much simpler process when you remember to prevent dangling pointers, avoid unnecessary pointer conversions and casts, and follow its other recommendations.

The challenge with this PDF, though, is simply understanding how to read it. I had to continuously go back and forth to the preface to understand the structure of the document because it wasn't immediately obvious which rules were mandatory and which ones were merely recommendations.

Other than that, it was nice to see a well-established set of rules that had already been developed and peer reviewed instead of having long debates over coding style. I could simply apply them and incorporate many of them into my `clang-tidy` or even `clang-format` configuration to help protect myself from introducing bugs.

