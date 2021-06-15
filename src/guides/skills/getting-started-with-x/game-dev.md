---
title: "Getting Started with Game Development"
---

Game development is a fun way to learn software engineering principles, and it can also be a career focus. Game development touches a wide variety of topics in computer science including graphics, I/O, networking, artificial intelligence, and data science, with the limits being mostly set by your imagination. On top of this, the inherent visual and interactive nature of a game creates a uniquely satisfying feedback loop where your changes to code often lead to an immediate measurable change in what you see or how you can interact with your game.

Also, **before you dismiss game development as requiring a level of creativity / artisistic prowess beyond yours**, consider using existing open source assets, a simplified art style (like pixel art), or avoiding assets altogether by using ASCII art or generative art.

## Game Development Overvie

### Technical Entry Points

As a game developer, you can choose from a variety of different layers of abstraction to start developing your game. A good way to choose where to start is to consider what you intend to accomplish by developing a game:
1. **Starting at the graphics API level** by using something like [OpenGL](https://en.wikipedia.org/wiki/OpenGL) and building an engine on top of it. This is a great way to learn about low-level graphics, and it also allows you much more freedom with how your engine works. This lower-level control allows game engines to be much more specialized and optimized for their particular purpose.
2. **Starting at the game framework / library level** by using something like [raylib](https://www.raylib.com/) (C++), [MonoGame](https://www.monogame.net/) (C#, Stardew Valley and Terraria used this), [lwjgl](https://www.lwjgl.org/) (Java, Minecraft used this). Libraries and frameworks like these abstract away most of the low-level details of interfacing with the Graphics Processing Unit (GPU) and other components, essentially providing you with the ability to draw to the screen and play sounds, leaving the rest of the engine up to you. If it is a framework, this functionality is often accompanied by a built-in [game-loop](https://gamedevelopment.tutsplus.com/articles/gamedev-glossary-what-is-the-game-loop--gamedev-2469), which handles the various timings required to run the game smoothly, leaving you with the job of just creating all of the game-related logic. Game libraries and frameworks are often a great way to have high control over your game engine, while leaving out some of the more complicated low-level details.
3. **Starting at the game engine / development platform level** by using something like [Unity](www.unity.com) (freemium, closed-source), [Unreal Engine](www.unrealengine.com) (freemium, restricted open source), or [Godot](https://godotengine.org/) (free and open source). These are tools intended to maximize development velocity by providing you with a fully-functional and often feature-rich game engine and abstracting away most of the low-level details. There is still room for programming here in the form of scripting the behavior of the game within the engine. This is a good place to start if you are serious about game development and intend to actually release a game (especially because tools like these often have support for shipping to many different devices), or when developer velocity is otherwise more important than learning the low-level tech of game development. Many well-known games are made using these tools:
   * **Unity:** Hollow Knight, Cuphead, Rust, Stranded Deep, Hearthstone, Cities: Skylines
   * **Unreal Engine:** Fortnite, Ark, Biomutant, Yoshi’s Crafted World, Street Fighter V, Borderlands 3

### Role Breakdown

There are two main components for making a game -- creative assets and code.

A **game programmer's** role is to make sure that the game functions as intended through programming. Developers may focus on principles outside the source code as well like networking, quality assurance, and platform-specific changes.

A **game artist** largely focuses on the parts of a game that the user directly sees / hears / experiences. They may be digital artists, 3D modelers, animators, etc. Artists can also contribute to a game through story writing, voice acting, music writing, or creating the game world.

> It is not at all uncommmon for someone to fit more than one role on a project.

For games that are intended to be sold, they may also require a **publisher** to handle the marketing and support side of development. Typically, this is done by a third party outside of development but some developers may choose to self-publish.

## Recommended Resources

### Graphics APIs

* [OpenGL](https://en.wikipedia.org/wiki/OpenGL)
* [Vulkan](https://en.wikipedia.org/wiki/Vulkan_(API))
* [DirectX](https://en.wikipedia.org/wiki/DirectX)

### Game Frameworks / Libaries

* [raylib](https://www.raylib.com/) (C++)
* [MonoGame](https://www.monogame.net/) (C#, Stardew Valley and Terraria used this)
* [lwjgl](https://www.lwjgl.org/) (Java, Minecraft used this)

### Learning

* [Brackeys on YouTube](https://www.youtube.com/channel/UCYbK_tjZ2OrIZFBvU6CCMiA) has awesome beginner to expert tutorials on how to do anything on Unity
* [Hackerrank](https://www.hackerrank.com/) is a great place to learn the basics of C# for Unity, C++ for Unreal Engine, or any other language
* [Code Monkey](https://www.youtube.com/channel/UCFK6NCbuCIVzA6Yj1G_ZqCg) is a very good YouTube Channel for in-depth programming tutorials on Unity and C#
* [The Cherno](https://www.youtube.com/user/TheChernoProject) is a YouTuber who specializes in C++ and Java game engine development. His tutorials are often more on the low-level and technical side.

### Creative Assets

* [Open Game Art](https://opengameart.org/) has free 2D, 3D, and audio assets for use in games
* [Brackeys’ website](https://brackeys.com/) has completely free 2D and 3D assets you can use anywhere
* [Epic Game Store](https://www.epicgames.com/store/en-US/) gives you access to Unreal Engine 5 in early access which has 15,000+ free assets to use in addition to the Unreal Engine Asset Store
* [Unity Asset Store](https://assetstore.unity.com/) is another plethora of game dev assets including scripts 

### Creative Tools

* [Blender](https://www.blender.org/) is an awesome and free 3D modeling software 
* [Gimp](https://www.gimp.org/) is an awesome and free alternative to Photoshop
* [Krita](https://krita.org/en/) is another amazing free alternative to Photoshop; includes 100s of premade brushes
* [Aseprite](https://www.aseprite.org) **COSTS MONEY** works really well with Unity; specifically designed for easily creating and animating pixel art

### Networking

* [Photon Engine](https://www.photonengine.com/) is an awesome and free place to host your multiplayer servers

### Music

* [LMMS](https://lmms.io/lsp/) is a free music development application; various extensions exist that add 1000s of instruments and sound effects

## Opinions

### Richie Goulazian - 6/13/2021

Even if you don't want to develop games for a living, game development is in my opinion one of the best ways to solidify your programming skills. The fact that a game is inherently a visual and interactive experience means that the changes you make to your code have a direct impact on what you see / how you can interact with your game, and that immediate feedback is near-addicting.

I personally learned programming from near 0 experience to high confidence developing mostly games. I started with games running in a console window (think text-adventure kinds of games), then moved to games using ASCII art within that same console window. I then moved to the game framework [MonoGame](https://www.monogame.net/), using open source game assets from websites like [Open Game Art](https://opengameart.org/) to build game engines and their associated games. It is really just so much fun to develop games, game engines, physics engines, etc. I personally didn't use any of the super built-out tools like Unity or Unreal Engine because I was there to build the engines mostly -- the games were mostly there as the far-out goal I needed to drive the development of the engine and learn new things. I also recommend sticking to 2D pixel art if the artistic part of game dev isn't really your focus (I did this, and it was super easy to find free assets online). If you need some inspo I have few games I've made on [my website](https://rgoulazian.com/).

### Alex Bailey - 6/7/2021

I think the very best way to learn game development is to choose an engine, download it, and make a game. Start as simple as possible at first and build upon it as you learn new features of your engine. In my opinion Unity is the best engine to start on as it has documentation, tutorials, and assets for absolutely everything. Additionally, Unity uses C# for scripting which is almost syntactically identical to Java (Don’t learn UnityScript!).

My greatest advice for game development is to make games that you would actually play. This will certainly keep you motivated and spiritually invested in your game which users will be able to see in the final product. Make sure you also focus on the parts of game development where you can be that invested. For example, if you like the art component more than the coding, then maybe make a game that relies more on the user’s visual experience like Hollow Knight or The Witness and find another developer for the coding part. If you like coding more than the artistic part you might consider games like Minecraft or Stardew Valley and buy the graphic components.

Lastly, don’t stress over developing your game. It may be daunting to play games worth millions or billions of dollars and try to mirror that success. Making games is an expression of you like singing, painting, or dancing. Create something you believe in and you enjoy creating.

### Alejandro Ciuba - 6/7/2021

I also agree with Alex with how to get started. Follow a game-making tutorial on YouTube for the engine you want to develop and then afterwards, use what you learned making that small game by making more. Eventually, your best resources will end up being forums and the engine's documentation. But don't feel bad if you end up using tutorials even after developing in the engine for a long time. Also make sure you try and do research before implementing a game mechanic because more than likely there's either a library that helps you implement it easier or someone has made a tutorial to get you started on the best ways to implement that mechanic. 
