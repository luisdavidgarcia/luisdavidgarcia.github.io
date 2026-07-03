Title: ARM System Developer's Guide
Date: 2026-07-02 23:00
Modified: 2026-07-02 23:00
Category: Books
Tags: arm, computer-architecture, efficiency
Authors: Luis David Garcia
Summary: A brief review of Andrew Sloss, Dominic Symes, and Chris Wright's *ARM System Developer's Guide: Designing and Optimizing System Software* (The Morgan Kaufmann Series in Computer Architecture and Design)

Dates Read: 02/21/2026 - 03/14/2026

**Rating: 4/5**

I will admit this book is very niche to ARM, but that's the point, 
and the authors did not disappoint.

I particularly liked learning about the Thumb instruction set, which 
lets us write 16-bit code rather than 32-bit code to optimize for 
code size.

What I learned, however, is that depending on the pipeline present 
on your ARM processor, if you have a 4-stage or deeper pipeline, 
you can group multiple architectural statements in your loops and 
save cycles through the techniques demonstrated in the examples they 
provided.

They also have chapters dedicated to teaching you how to write ARM assembly, followed by chapters that map C programming to ARM assembly.

I particularly liked their emphasis on how bit-fields in C are not very efficient and should be avoided if that is your goal. Although you are packing elements into bits, it is still a memory access to the structure containing the bit-field, and the pointer aliasing involved often causes multiple reads of the same structure.

Overall, this textbook should be read in order, and the exercises and examples should be tried before moving on unless you already understand the concepts ahead of time.

