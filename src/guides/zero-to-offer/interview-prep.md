---
title: "Zero to Offer - Interview Prep"
---

Some of the following content is by [Yangshun Tay]([https://yangshun.im/](https://yangshun.im/)) and rephrased for the purpose of the wiki. 

## What are Coding Interviews
Coding interviews are technical-based interviews where interviewees are tasked to solve a coding question under a time constraint. In the beginning rounds these interviews are typically conducted over HackerRank and interviewees are expected to solve several questions by themselves. 

After the HackerRank rounds, interviewees will typically have an interviewer to assess their problem solving skills. These person-to-person interviews can be either done in-person or online on websites like CoderPad or Google Docs. 

## How to Pass Coding Interviews
Coding interviews are extremely tough and require a lot of prep and training. Fortunately there's a tried and proven method to get better at them. 

 1. Pick a programming language
 2. Understand Data Structures, Algorithms, CS fundamentals
 3. Practice coding interview questions
 4. Practice mock interviews
 5. Do well in your interviews!

## Programming Languages
Before anything else, you need to pick a programming language to do your interviews. Typically a company will let you code in any language you want.

The most popular interview languages are Python, Java, JavaScript, Ruby, C++. We discourage using low-level languages like C and Go since they lack standard library functions, data structures, and worst of all, often require manual memory management.

###  Our Choices
Since **Java** is the main language taught at Pitt, it isn't a bad idea to use it in interviews as it probably is your strongest language. Java is a decent choice but having to declare types, use curly braces, and deal with Generic classes ends up resulting in a lot of extra keystrokes, slowing your coding speed. 

We are big proponents of **Python**. It's syntax is concise but powerful. More importantly its data structures utilize a consistent API which makes it easy to use and understand. Overall Python really enables the user to write extremely minimal code.

Another good choice would be **Javascript**. We recommend using it only if you already have experience with it and understand its syntax. Using JavaScript would only be the preferred language in a Front End interview, so don't worry about learning it if you don't  know it already.

The ability to write short code is especially important in in-person interviews, where you have to write code on whiteboards instead of typing it out. That being said, don't try and learn Python just because we recommend it.

### Your Choice 
At the end of the day, it is recommended that you use a language you are super familiar with rather than pick one up on the fly because we told you to learn Python.  

If you are under time constraints, picking up a new language just for interviewing is hardly a good idea. Languages take time to master and if you are already spending most of your time and effort on mastering algorithms, there is barely spare effort left for mastering a new language. If you are familiar with using one of the mainstream languages, there isn't a strong reason to learn a new language just for interviewing. 

##  CS Fundamentals
If you haven't taken Algorithms or Data Structures in a while, it is highly recommended you review your CS Fundamentals. This [repository]([https://github.com/kdn251/interviews#data-structures](https://github.com/kdn251/interviews#data-structures)) has helpful info on data structures and algorithms. Also look at your college notes!

## Practice Coding Interviews
Practicing coding algorithms with your chosen language will help you gain familiarity of both CS fundamentals and your language's syntax.

### Coding Questions
[Cracking the Coding Interview]([http://www.crackingthecodinginterview.com/](http://www.crackingthecodinginterview.com/)) is one of the most popular resources, but since it's not online, you won't receive instant feedback and judgement on your solutions.

There are plenty of online judges like [LeetCode]([http://leetcode.com/](http://leetcode.com/)), [HackerRank]([https://www.hackerrank.com/](https://www.hackerrank.com/)), and [CodeForces]([https://codeforces.com/](https://codeforces.com/)) for you to practice questions online and get used to the language. 

From experience, LeetCode questions are the most similar to the kind of questions being asked in interviews whereas HackerRank and CodeForces questions resemble competitive programming questions. If you practice enough LeetCode questions, there is a good chance that you would have seen/done your actual interview question (or some variant) on LeetCode before.

If you need a LeetCode problem plans, [we have a few here](/zero-to-offer/sample-plans)!

### Space/Time Complexities
Learn and understand the time and space complexities of the common operations in your chosen language. For Python, this [page](https://wiki.python.org/moin/TimeComplexity) will come in handy. Also find out the underlying sorting algorithm that is being used in the language's `sort()` function and its time and space complexity (in Python its Timsort which is a hybrid sort). 

After completing a question on LeetCode, add the time and space complexities of the written code as comments above the function body to remind yourself to analyze the algorithm after you are done with the implementation.

### Code Style
Read up on the recommended coding style for your language and stick to it. If you have chosen Python, refer to the PEP 8 Style Guide. If you have chosen Java, refer to Google's Java Style Guide.

Some companies really care about your code quality! [Stripe]([http://stripe.com/](http://stripe.com/)) is famous for asking easy interview questions and instead judging their candidates on their ability to write clean code and other software engineering tasks (Debugging, etc).

### Internalize the pitfalls

Find out and be familiar with the common pitfalls and caveats of the language. If you point them out during the interview and intelligently avoid falling into them, you will usually impress the interviewer and that results in bonus points for your feedback, regardless of whether the interviewer is familiar with the language or not.

### Broaden exposure

Gain a broad exposure to questions from various topics. Do around 100–200 LeetCode questions and you should be good. Our [leetcode plans](/zero-to-offer/sample-plans) have recommended problems for each data structure and algorithm. 

Find the data structures you struggle with and practice them extensively! Practice, practice and more practice!

## Mock Interviews
Interviewing is a skill that requires lots of work and effort to excel at. Doing Leetcode problems by yourself can get old quickly. Finding a partner and going back and forth interviewing each other is a great alternative to practicing alone. 

Pitt CSC is currently trying to set up a module where Pitt students can reach out to other students for mock interviews. Stay tuned!

If you can't find someone to interview with, a platform we recommend is [Pramp]([https://www.pramp.com/#/](https://www.pramp.com/#/)).  Pramp pairs you up with another peer who is also a job seeker and both of you take turns acting as the interviewer and interviewee. Pramp also prepares questions for you, along with suggested solutions and prompts to guide the interviewee. 

## Conclusion
Though you now have strong interview skills, there are still a few things to know beforehand your interview. Check out our [Interview Guide](/zero-to-offer/interview) to learn about you should present yourself, act, and solve questions during the interview!