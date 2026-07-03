Title: The Art of Writing Efficient Programs
Date: 2026-07-02 23:00
Modified: 2026-07-02 23:00
Category: Books
Tags: cpp, efficient-programming, profiling
Authors: Luis David Garcia
Summary: A brief review of Fedor G. Pikus The Art of Writing Efficinet Programs

Dates Read: 02/20/2026 - 03/02/2026

**Rating: 4/5**

I came across this book from [Coding
Jesus](https://www.youtube.com/@CodingJesus), and what I liked about
it was that C++ emphasized and it made me stop my intutive nature
to guess about performance optimizations rather than actually measuring
and profiling my code.

That is a core lesson he teachers is that we must first measure and
get baseline before we make any optimization because we can guess all
day long, but until we get the measurements we won't know the true
cost or effect of the optimizations we thought of.

The book is broken up into three sections:

- Performance Fundamentals
- Advanced Concurrency
- Desiging and Coding High-Perfromance Programs

Based on the the organization of the book, Pikus does well to pack
all that content into one book. 

It's almost full circle bringing forth the knowledge of "C++ Concurrency in
Action," "Computer Organization and Design," and "OSTEP" to attempt 
understand the machine before we try to optimize the software we deploy 
on it.

It's a great edition to add this to your collection and arsenal if you
program often with C++ and work on systems that demand peformance for
large scale servers or even desktops.

For me however, it was bittersweat because oftentimes all these
optimizations he mentioned were not very embedded related, so it
felt hard to connect them to a target that was quite small and often
did not have all the memory hierachies involved with a larger system.

Additionally, the examples are all in C++, but you could apply them
to other languages, except you must find a tools that are applicable 
to your languages for measuring the perforamcne of your code.

Finally, your measure of performance depends on what you want to emasure,
whether that is energy use of your code, the speed of execution, the 
memory consumption of your code, or the amount of I/O operations 
completed. That is also what I learned here, so whichever you mwant 
to optimize will dictate which techniques you should apply to optimize.



