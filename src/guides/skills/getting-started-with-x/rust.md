---
title: "Getting Started with Rust"
---

Rust is a programming language designed for safety and performance. It has been the ["most loved language" on StackOverflow](https://insights.stackoverflow.com/survey/2020#share-most-loved-dreaded-and-wanted) for several years in a row! Although primarily aimed towards a systems-programming audience, it can be written at a high level without incurring runtime penalties while still accessing and interacting with low-level interfaces and structures. Programs written in Rust have certain guarantees provided at compile-time, including type- and memory-safety. These language features are not without drawbacks, such as increased language complexity and learning time. However, once learned, Rust can be written very efficiently and debugging time can be reduced greatly thanks to compile-time guarantees.

This guide is still a work-in-progress, so check out our [beginner guides section](#beginner-guides) for a more complete intro to the language. If you want to contribute, check it out on [GitHub](https://github.com/PittCSWiki/pittcswiki)!

## Rust Overview

### To Rust or Not To Rust

#### When To Use Rust
- You have enough time to learn the language
  - Rust has a very welcoming and inclusive community! Beginners are encouraged to ask questions! See [our community section below](#community-links) for links
- Correctness, speed, and safety are more important to you than development speed
- Your program needs low level access
  - Though Rust is also great for high level programs that don't need it :)
- You are contributing to a project that already uses Rust
  - While it is technically possible for Rust to interact with other languages (`ffi` or Foreign Function Interface), most projects won't change their build system just for you!
- Cross-platform development
  - Rust can be used in programs for Windows, macOS, Linux, android, iOS, FreeBSD, and more!
- Using a system that doesn't have a standard library
  - In Rust, you can disable the standard library with `no-std`
  - Often required when building operating system or programs for micro-controllers 

#### When Not To Use Rust
- You don't want to spend the time to learn it
  - But you should! that's what this guide is for :)
- You need speedy development
  - For events like hack-a-thons, game jams, code challenges
- You don't want to or can't distribute binaries/executables
  - Related: rust's standard library (`std`) depends on `libc` (C standard library)
    - There is an effort to re-implement necessary parts in rust, see [here](https://github.com/rust-lang/compiler-builtins)
    - This also makes things more difficult for OSs like OpenBSD that don't have OS-level backwards compatibility
- You want a short compile time
  - Compilation in Rust, generally speaking, is slow, but it *is* incremental (don't have to recompile everything if you only change a single file)
- Your employer/upper management is afraid of "immature" languages, see [here](https://codecs.multimedia.cx/2020/09/why-rust-is-not-a-mature-programming-language/) for a similar opinion
  - Rust technically does not have a formal language specification
  - `rustc` is not self-hosted -- it requires bootstrapping
  - Rust essentially only has one compiler implementation (`rustc`), though `mrustc` is promising
  - Rust still doesn't have great assembly support (though the `asm!` macro is almost there)
  - If you are using `nightly` (the unstable branch of rust), then some things in your code might break whenever rust is updated
    - Though this is less of an issue while using the `stable` branch

<!-- ### TODO: basic syntax -->

### Ownership / Memory

What is ownership? From [Chapter 4.1 of the Rust Book](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html):

> - Each value in Rust has a variable that’s called its *owner*.
> - There can only be one owner at a time.
> - When the owner goes out of scope, the value will be dropped.

[Here](https://hashrust.com/blog/moves-copies-and-clones-in-rust/) is another decent primer on Rust memory.

#### Moves
You can change the owner of a resource by "moving" it. This is done by assigning it to a new variable. Note that if a resource implements `Copy`, then it will *not* be moved during an assignment. See [Chapter 15.2 of Rust By Example](https://doc.rust-lang.org/rust-by-example/scope/move.html).

```rs
let x = Vec::<i32>::new(); // create a new vector of 32 bit integers, x is the owner
let y = x; // y is now the owner of the vector, x is no longer the owner
// let z = x; // this would be an error, use after move!
```

#### Borrowing
To access data without changing ownership, we can *borrow* the data by passing a reference to it. This is kind of similar to pointers in C and C++. However, keep in mind that the Rust compiler guarantees that references always point to valid objects, so your program won't even compile if you try a use-after-free. See [Chapter 15.3 of Rust By Example](https://doc.rust-lang.org/rust-by-example/scope/borrow.html) for details.

```rs 
let x = Vec::<i32>::new(); 
let y = &x; // y is reference to x
let z = &x; // z is also a reference to x
```

#### Clone vs Copy
In Rust, if you want to make a duplicate of some data, you can use the method `.clone()`. Your data type must implement the trait `Clone`. However, if your data type implements `Copy`, then it will automatically be copied upon assignment. 

```rs
let x = 10i32; // i32 implements Copy (so do all integers, floats, and chars)
let y = x; // y is now 10, but x is still valid
let z = x; // no use-after-move error, since the data is not moved!
```

<!-- ### TODO: Concurrency

async

threads

multiprocessing

message passing, shared memory -->

<!-- ### TODO: OOP-like Behavior

structs

enums

traits

`impl`

function pointers -->

<!-- ### TODO: History, Environment, and Community

history of rust

rust playground

cargo / rustc

governance structure -->

## Recommended Resources

### Community Links

- [Rust Website](https://www.rust-lang.org/)
  - Contains many links to other resources, guides, documentation, etc.
- [Rust Discord](https://discord.gg/rust-lang)
- [Rust Forums](https://users.rust-lang.org/)
- [This Week in Rust](https://this-week-in-rust.org/)
  - Weekly updates on the Rust environment and community
- The `#rust-dev` channel in the Pitt CS Club Discord!

### IDE Language Support 

- [rust-analyzer](https://rust-analyzer.github.io/) is a must-have for beginners who want IDE support
  - Supports many IDEs/text editors, such as VSCode/VSCodium, NeoVim, Emacs, Sublime Text 3, Eclipse, Kate Text Editor, and more, see [the manual](https://rust-analyzer.github.io/manual.html) for all supported platforms.
  - Much better than the "official" [VSCode extension](https://github.com/rust-lang/vscode-rust)
- [IntelliJ Rust](https://www.jetbrains.com/rust/) - for IntelliJ-based IDEs
- [Corrosion](https://github.com/eclipse/corrosion) - for Eclipse-based IDEs

### Beginner Guides

- [The Rust Programming Language](https://doc.rust-lang.org/book/) by Steve Klabnik and Carol Nichols, with contributions from the Rust Community
  - > Affectionately nicknamed “the book,” The Rust Programming Language will give you an overview of the language from first principles. You’ll build a few projects along the way, and by the end, you’ll have a solid grasp of the language.
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  - > Rust by Example (RBE) is a collection of runnable examples that illustrate various Rust concepts and standard libraries.
- [Rustlings](https://github.com/rust-lang/rustlings)
  - > Small exercises to get you used to reading and writing Rust code!
- [A Gentle Introduction To Rust](https://stevedonovan.github.io/rust-gentle-intro/) by Steve Donovan
- [A half-hour to learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust) by @fasterthanlime
- [Learning Rust](https://learning-rust.github.io/docs/index.html) by Dumindu Madunuwan
- [Tour of Rust](https://tourofrust.com)


### References

- [Rust Language Cheat Sheet](https://cheats.rs/)
- [The Rust Standard Library](https://doc.rust-lang.org/stable/std/)
- [The Rust Community’s Crate Registry](https://crates.io/) ("crates" are how Rust packages software libraries)

## Opinions

### Tobias Hildebrandt - 2021-10-09 <!-- ISO 8601 date format -->

Though I am by no means an expert in Rust, I really appreciate the features of the language. The compile-time checks can be frustrating -- I often call debugging "boxing with the compiler" -- but it is very satisfying to understand what things are determined to be safe and why. It has really helped me to organize my code better and think "is this really a safe thing to do?", even when programming in other languages.

Though I probably wouldn't recommend Rust to an absolute beginner, it is my language of choice in terms of general-purpose programming. Of course, some language are better suited for specific purposes, such as Python for rapid prototyping or C for low-level portability. The number of things you can build with Rust nowadays is massive, ranging from fullstack web dev with [Seed](https://seed-rs.org/) and [Rocket](https://rocket.rs/) to building an operating system such as [Redox](https://www.redox-os.org/) to making Discord bots with [Serenity](https://github.com/serenity-rs/serenity) to creating faster command-line utilities such as [ripgrep](https://github.com/BurntSushi/ripgrep). I truly think that Rust will continue to grow in the coming years and gain a stronger foothold in industry, competing for market share in areas that currently use C++.