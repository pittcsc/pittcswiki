---
title: "How to Succeed in CS1501, Algorithms and Data Structures 2"
author: "Nathan Barta"
search_tags: 
  [
    "1501",
    "algorithm implementation",
    "algorithms and data structures 2",
    "CS1501",
  ]
---

## **What is *Algorithms and Data Structures 2*?**

Well, from the "2" in it's name... it's the class succeeding CS445, Algorithms and Data Structures 1. Algorithms and Data Structures was previously called *Algorithm Implementation*. We will be using the names interchangeably.

But what is it really?

CS 1501 is an in-depth exploration of surface level algorithms. The course is designed to give you a thorough rundown on the theory, rationale, analysis, and implementation of important algorithms. Algorithms from this course are often used as the basis for more complicated algorithms you would find (or design) later on in your computer science journey.

Topics vary semester to semester and teacher to teacher, but usually include the following:

> 🌪 emoji used to denote topics which are often substituted in and out or vary by professor. # of topics != higher course focus

- Trees: A progression from the arrays and linked lists you are familiar with from CS445 and prior courses. Trees allow you to solve new problems, as well as solve ones you may have previously encountered more efficiently. A common topic for the trees unit is the concept of *searching*. Trees have many applications to *searching* problems (think search engines, databases) as well as compression, networks, parsing, graphics / computational geometry, ordering, and logic/state.
  - Binary trees
  - Binary search trees
  - Balanced trees
    - 2-3 trees
    - Red black trees
    - B-Trees
  - Tries
    - Digital search trees
    - Radix search tries
    - R-way/Multiway tries
    - De La Briandais tries
  - Insertion, deletion, get, set, contains, **search**, traverse (pre-order, in-order, post-order), min, max, height, more...
  - Applications to hash tables
- Priority Queues: Priority queues are structures designed to retrieve the min *or* max key. They are commonly implemented as binary trees - with certain additional rules. However, PQ's do not have to be trees.
  - Array / Linked List PQ
  - Heap PQ
  - Heap Sort
  - Indirection
  - Insertion, deletion, min, max, range, height
- Compression: Compression is the process of encoding data using fewer bits than the source, and reconstructing that data (*decompressing*) to an acceptable state. As you read this sentence, your computer is compressing and decompressing multiple streams of data, from your hard-drive, network, and maybe even your memory.
  - Why compress?
  - Lossy/Lossless
  - Huffman Compression
  - Runlength encoding
  - LZW Compression
- Graphs: Graphs are a data structure comprised of nodes and edges. They have heavy roots in math. Graphs can be used to represent complicated relationships between objects, such as networks - physical and social. Graphs can be used to represent state as well.
  - Definitions/Vocabulary
  - Depth-first search
    - Pre-order, Post-order
  - Breadth-first search
  - Representation
    - Adjacency matrix
    - Adjacency list
  - Finding articulation points
  - Shortest path
  - Weighted graphs
    - Minimum spanning tree
      - Prim's algorithm
        - Eager prims
      - Kruskal's algorithm
    - Shortest path (with smallest sum of weights)
      - Djikstra's algorithm
- Network Flow
  - Max flow and Min cut
    - Ford-Fulkerson
    - Edmond's Karp
- Dynamic programming and greedy algorithms: Techniques for solving programming problems. Dynamic programming (DP) is about breaking down problems and solving their smaller parts before building up to the full solution. Greedy algorithms is about making the best local decision at the 
  - Knapsack
    - 0/1 Knapsack variation
  - Fibonacci
  - Subset sum
  - Change making
  - Memoization
  - Substring searching
    - Longest common subsequence
    - Knuth Morris Pratt algorithm
- 🌪 Encryption: A process used to protect data.
  - Symmetric Cyphers
  - Secret vs Public key encryption
  - RSA
  - Cryptographically secure hashing
- 🌪 Arithmetic: How can we multiply, exponentiate, and find the GCD of *really* large integers *faster*?
  - Karatsuba's algorithm
  - Exponentiation
  - Euclid's algorithm
    - Extended Euclidean algorithm
- 🌪 Intractable problems and NP-Completeness
  - P vs NP
  - NP Completeness
- 🌪 **NEW SPRING 2023** Machine Learning: Overview of the algorithmic foundations of machine learning.
  - Approaches
    - Supervised learning
    - Unsupervised learning
    - Semi-supervised learning
    - Reenforcement learning
  - Clustering
    - K-means
      - Initial assignment
      - Lloyd's algorithm
      - Distance metric
- Algorithm Performance/Use analysis, often comparing algorithms' against each other.
  - Runtime
  - Memory Usage
  - Effort
  - Variations in implementation / design decisions and their effect
  
## **Why do we study Algorithm Implementation in computer science?**

Knowing CS theory is great. Being able to apply it is even better. This class teaches you how to solve problems where your existing techniques may not work - or may perform poorly.

## **How to succeed in 1501:**

The course's reputation for being demanding is true. The course topics will likely take a while to grasp - especially if you don't have any prior exposure. Students should focus on understanding topics *thoroughly*. Study until you can explain the course contents from memory, including the small details. Don't practice until you can get problems right. *Practice until you can't get problems wrong*.

### **Lectures**

Attendance is very important. The slide decks are often sparse and occasionally include Pitt-specific instructional devices which you wouldn't be able to find information on externally (and you wouldn't want to devote too much time to as they normally have built in flaws or impracticalities).

Asking questions is a great way to clarify topics. You are going to have questions at some point. Even if you could search it up online, why would you? You're depriving yourself of a few great benefits: 

1. Vocalizing a question: Communication matters a ton. If you aren't able to communicate with your colleagues / coworkers, you are holding people back. Additionally, if you can't develop internal dialog, how are you going to do all of your thinking? The reading material for your courses is going to get harder and harder, so are your lectures - develop your eyes and ears. 
2. Assisting your professor: If you aren't understanding something, it could be because your professor omitted some details or got off track. It's not easy to jump between classes and "meet" everybody at the level they are at. Asking a question will help them get back on track - they will be appreciative. At the very least, it will probably help with the pacing of the lecture.
3. Assisting your classmates: Your classmates probably have similar questions!
4. Actively thinking of questions is good for your brain. Why do we do things X way? What could happen if we did Y?

Take notes!

### **Readings**

Readings are strongly recommended. The textbook often includes interesting auxiliary information, and thought experiments not present in lecture. You can read at your own pace.

Don't restrict yourself to course textbooks! Think of questions based off of your readings and do some research. It will lead you down some really interesting paths and help you get the most out of the course. As a general rule reading 2-3 articles about a given topic is a good way to work towards building mastery.

Code is meant to be read too!

I'd recommend reading the author's implementations and making sure it lines up with what you read from the book. Once you can draw the connections, move on, or even experiment with alternate implementations. Why did the author do it that way?

### **Projects**

You are going to be writing a bunch of code in this course. Roughly 1 project every two weeks, about ~50-400 lines of code to write per project. These projects constitute a massive part of your grade, so it's important that you do well on them. Also, projects serve as a great way to prepare for exams - with the caveat that if the exam scope is broad and the project scope is narrow, it might be taking time away from studying, but it's usually in your favor. With that note, it's very important that you **start your projects early**. A general rule is to open the project the day it's assigned.

What should I do when I am assigned a project?
1. (First Day) Read the description. Take notes if necessary. Note any questions so you can ask the TA's/professor.
2. (First Day) Make sure your development environment is set up and can run the project.
3. Break the project into incremental parts. You'll notice that the project interface is set in a way that allows functionalities to be tested individually. *I wonder why that is....*
4. Build the project incrementally. Develop unit tests as you go along, it will be difficult to retroactively build them. If your professor allows multiple submissions, submit frequently to gain partial credit in the event you are not able to turn in a completed project.
5. (2-3 days before deadline) Build tests for your complete project. Look for edge cases in your code. Consider [fuzzing](https://en.wikipedia.org/wiki/Fuzzing) as it's a relatively easy way to find bugs and make sure your testing coverage is adequate. 

You do not want to be holding on to an incomplete project the last 2-3 days before it's due. That's likely when the next project is being introduced - which means you'll have extra things to think about.

> Don't cheat. It's very easy to catch. Beyond the typical meaning of cheating: *don't cheat yourself*. Did you write some code that you don't fully understand? Figure it out. Do it right.

### **Tests**

Tests are challenging in 1501 because of the breadth of the information you are expected to know and the depth at which you are supposed to understand it (graph joke 😉). Memorization will be required to remember vocabulary and algorithms, however comprehension is going to be far more pivotal.

Most test questions revolve around tracing algorithms by hand. So, make sure you can "step through" algorithms on paper for any given input. This will likely require you to come up with some strategies and *build up speed* by practicing. Quizzes and practice tests are great for assessing your knowledge and familiarizing yourself with the format of the upcoming test before taking it.

It is important to read all questions carefully. You will likely not be asked to synthesize new information - since there is so much content to be tested on already.

Once you receive your test back, review it carefully. If you got anything wrong, make sure you review it *until you can't get it wrong again*. Problems that were missed by large portions of the class are likely to reappear later on...

## **Conclusion:**

Algorithms and Data Structures 2 is a challenging and rewarding course that will see you building on your ability to create efficient solutions to programming problems. While 1501 is a time-intensive course, it's content is attainable to industrious students. Students who approach the class with no ego and the willingness to do what it takes to succeed will find themselves learning more than they could have imagined.

## **Tips:**

- Attend recitations: They are a great place to learn and make friends with your classmates. Also, get to know your TA - they can help you get out of a real bind on your projects if you visit them during their office hours.
- Chat about the course topics with your friends, it can be a great way to learn and get immersed in the content.
- Keep your notes organized, you will find yourself referencing them a lot.
- Block your time for your projects: It can be really hard to start and stop work on your projects, so try to work in 2-3 hour sections if possible.
- Create/compile "warm-up" problems to take before your tests. That way you are at peak performance when you are taking the exam.

