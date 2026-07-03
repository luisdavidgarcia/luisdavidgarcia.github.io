Title: MISRA C++:2023
Date: 2026-07-02 23:00
Modified: 2026-07-02 23:00
Category: Books
Tags: embedded-cpp, misra, coding-standards
Authors: Luis David Garcia
Summary: A brief review of the MISRA C++:2023 Standards

Dates Read: 02/01/2026 - 02/02/2026

**Rating: 4/5**

Compared to MISRA C, this PDF is a little denser, but it's also simpler to parse.

C++ already has a significant number of language features, so the increased depth makes sense, and the organization was a nice touch.

I enjoyed being reminded to avoid writing C++ code as if it were C. For example, avoiding C-style casts and, even better, avoiding dynamic memory allocation with `new` and `delete` whenever possible.

For me, that felt very restrictive, but at the same time it made sense. It helps protect you from introducing additional complexity through memory management.

What I appreciate most about this standard is that it's based on C++17. It's not the latest version of the language, but it still felt like a great improvement over C++11, giving us features like the standard filesystem library, structured bindings, and `std::string_view`.

I have to admit, one of the things I enjoy most about reading these standards is that I can configure `clang-tidy` and `clang-format` to help enforce them. Of course, depending on your industry, you may need to follow every rule. I mainly use these standards as the basis for my own coding guidelines in personal projects.

