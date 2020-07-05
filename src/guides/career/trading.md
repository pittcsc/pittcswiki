---

title: "A Brief Introduction to Trading"

search_tags:
- "money"

- "quant"

- "stonks"

- "quantitative"

- "stocks"

- "SIG"

- "Susquehanna International Group"

- "Jane Street"

- "Optiver"

- "Two Sigma"

- "Citadel"

- "Jump Trading"

- "Capital"

- "Algorithmic Trading"

- "Prop Trading"

- "Proprietary Trading"

---

  

The field of Trading is very vast, and there's lots of different definitions and terms to go along with it. In this guide, we'll try to give a basic rundown on Software Engineering within the field of Trading, as well as a little bit on Trading positions.

As with all things on this wiki, this information will not be perfect (especially for a field as varied and specialized as this one). This is intended to get you started with a primer on the industry, there are many resources online that you can use to expand your knowledge (and I'll link to some in this article).  

**Important note: the field of Technology in Trading can technically be considered a subset of FinTech (Financial Technology), but generally you'll see the term FinTech is used for banks and personal finance companies such as Vanguard rather than Trading firms.**
  

Let's start by giving you some definitions which will come in handy.

Real quick, if you're confused on *anything* in this article, you can check out [Investopedia](https://investopedia.com/) for almost every term here. They provide a lot of good advice for beginners trying to learn what everything means.

You do not need to be a finance major to get into a quantitative trading firm - they much prefer CS and Math majors, but a good financial background will set you apart.

**Another important note - this article will be helpful for aspiring software engineers, generally helpful for aspiring traders, but not nearly as helpful for quantitative researchers (dubbed 'Quants'). If you want to become a Quant, check this link [here.](https://www.quantstart.com/articles/Understanding-How-to-Become-a-Quantitative-Analyst/)**

## Definitions:

-  **Quantitative '_______'**
	- This is simply the process of using quantitative models to assess various aspects of investments such as associated risk. This can be used for *anything*, everyone in the financial industry uses some sort of quantitative method (including groups such as Goldman Sachs that aren't considered "trading" companies). 

- **Trading**
	- This is the process of being at the forefront of decisions for handling financial instruments such as options, commodities, and futures. 

- **Prop/Proprietary Trading Firm**
	- This is a term given to companies who trade using their own capital. Firms like Citadel or Two Sigma are given money by a set of investors (sometimes public, mostly private), and their purpose as a company is to provide them with consistent returns on the money they are given, while taking a portion of the profits. 
	- Proprietary trading companies, such as Jane Street, SIG, and Optiver handle their own funds, meaning that they don't provide a service to anyone. Their existence is to utilize their trading prowess to earn more money. This generally results in a slightly higher hiring bar for positions that manage those funds.

- **"Algorithmic/Strategic/Quantitative/Automated ______ Engineer"**
	- Generally, this is used for a position that applies algorithmic knowledge in the writing and development of trading 'strategies', which is a term used for *anything that acts upon an input and produces an output that can be boiled down to a basic decision*. Not all strategies will trade directly (meaning that your code may not interact directly with an exchange, but is still important overall). There are many strategies, for both market making, market taking, and .
	- An app that takes in financial data and sounds an alarm whenever there is a good deal is an example of a strategy that doesn't rely on market execution.

- **Market Making and Market Taking**
	- Many trading firms have an obligation set by the SEC to be what's known as *market makers*. This means that the firm is required to give quotes for a buy and a sell price for a certain security (such as a stock, option, or future). The reason they're required to is because the SEC wants markets to be *liquid*, essentially meaning that they want an easy way to go from money to a security. There is a lot of mathematics that is used for producing quotes for the market, as firms need to set prices that others will use but will also remain profitable.
	- Market taking is the process of participating in the market, meaning that you see a good deal, you want to fulfill that trade. 
	- The CME Group has a great explanation and education section for terms like this [here.](https://www.cmegroup.com/education/courses/trading-and-analysis/market-makers-vs-market-takers.html#:~:text=Market%20makers%20generally%20try%20to,in%20the%20current%20last%20price.&text=Market%20takers%20are%20less%20concerned,the%20best%20bid%20or%20offer.)

- **Frequency & Latency**
	- When reading about trading firms, you may hear a lot of terms such as "HFT", "MFT", "LFT", and so on. These terms stand for High/Mid/Low Frequency Trading. High frequency trading firms execute huge amounts of orders in an incredibly short amount of time. HFT requires low latency programming, meaning that you need to get from your strategy/order execution to the exchange *extremely quick, and quicker than your rivals*. Read a super entertaining article on this [*here.*](https://www.bloomberg.com/news/features/2019-03-08/the-gazillion-dollar-standoff-over-two-high-frequency-trading-towers)
	- High Frequency Trading isn't necessarily 'better' than other frequencies of trading but it is something you'll hear about more often, simply due to "HFT" being a massive buzzword. Two Sigma and Jane Street, despite being two of the biggest names in the trading industry, are not high frequency trading firms.
	In general, latency matters less the less frequent you trade (for example, if you trade once a day, a second or two won't hurt you in the long run). If you're interested in low level or FPGA programming, this field has plenty of need for you.


## Trading vs Technology at a Trading Firm
- There are many companies that use human traders, and many that use automated/algorithmic strategies to trade. Both are difficult to get into, and going into one or the other won't hurt your career, but going from Trading to Technology is much easier than the other way around (a lot of traders write some code themselves to help with their job). [This link](https://www.investopedia.com/articles/active-trading/112614/steps-becoming-quant-trader.asp) helps with understanding what traders do/how to become one. There tends to be fewer and fewer 'fully' trading positions available these days (most require some sort of coding ability as well).
- Software Engineering is an incredibly broad field at trading firms, generally. Some firms replace traders with developers (Hudson River Trading, for example). Being a software engineer at a trading firm doesn't mean you are a strategy developer - there are plenty of jobs that resemble 'standard' software engineering at trading firms. This can be anywhere from back office (infrastructure, non-market facing) engineering to writing strategies. [This link](https://blog.headlandstech.com/2017/08/03/quantitative-trading-summary/) is an incredibly good resource for understanding what a tech stack at a trading firm could look like. This is widely considered to be the best public explanation for how a general software division at a quantitative trading firm could look - this information is hard to come by since firms are constantly competing with their rivals.
- **GO TO A FIRM THAT PRIORITIZES AND RESPECTS ENGINEERS**. This industry is filled with companies that treat their engineers as lower priorities than their traders - companies that don't do this are the places you want to work. Engineers are taking over and slowly dominating the industry, and the places that recognize that and treat engineers with respect are the places to be.

## Why work at a Trading Company?
- The problems you'll face are among the most interesting and applicable to the real world financial markets. The knowledge you'll gain is immense and you can get a good understanding of how things work.
- There is a high element of prestige in working for a trading company. Since trading companies rely on their traders and engineers to make money, they take a lot of care in hiring who they consider to be the 'best of the best' - it's a direct financial investment in you. Other companies are aware of this, and will recruit from you heavier. Trading firms are cutthroat - if you make it there and survive, that's the biggest validation you can get from your work.
- A lot of firms have a great culture, a lot have the exact opposite. With those with a good culture, you'll find a very satisfying work experience with challenging and real-world problems, intelligent (and sometimes famous) co-workers, and a lot of valuable experience.



## How do I get into a Trading Firm?

This is incredibly difficult, and historically Pitt students have not been recruited in the Trading industry, but times are changing.

- Apply early - these firms have applications that open almost a year in advance (May-June).
- Leverage any connections you have, there are always a few Pitt kids who intern/full time at trading firms.
- Study for the position you want - for software engineering positions, you need good algorithmic interview skills along with solid understanding of low level principles such as concurrency. For trading, you'll likely be asked a lot of mathematics-based questions.
- Get into another prestigious company first - trading firms and prestigious tech companies are known for recruiting from each other, and the sad truth of this industry is that name-brand factor is massive when recruiting. 
- If you land an interview, make sure to check the company's glassdoor page for practice interview questions from previous applicants.
- Trading firms are difficult to get into, but they're nowhere near impossible. They have a bigger desire to prevent false positives than any other type of company, so it won't be entirely LeetCode that gets you in. As with everything in this field, though, everything is possible if you put in the effort.
