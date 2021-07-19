Our very first POW! Give this one a crack and you might win $x$ amount of
dollars where $x \in (0, \infty)$ :D

# Problem
You want to transport 3000 bananas across 1000 kilometers.
Aiding you on your task is a camel that can carry 1000 bananas at most. However,
the camel must eat 1 banana for each kilometer that it walks.\
**What is the largest number of bananas that can be transported?**

# Solution
Hello my lovely bananas!

We saw a number of great solutions for our first problem of
the week. Except we gave you two weeks to solve it. Problem
of the fortnight? Anyways, thank you all for participating!

In lieu of the extra 168 hours given, we have two winners for
this one… **Diminutive Rex** and **tendstofortytwo**, congratulations! 
We hope you like your complementary camel-keychain
prize. Alternatively, you can opt for a gift card. Coincidentally,
they have the same monetary value.

<details>
<summary>The Solution</summary>
The camel can transport exactly $533 \frac{1}{3}$ bananas (roughly $17%$ of the total)
as follows: \ 
To transport all the bananas $1$ km from the start, we
have to make $3$ round trips, costing $5$ bananas in total (since
we don’t go back the last time). After $200$ km, something
important happens — the camel has eaten $1000$ bananas! Now
we only need to make 1 round trip for each km, so that’s $3$
bananas per km. This can go on for $333 \frac{1}{3}$ km, before another
$1000$ bananas gets eaten. From here, we only need to travel
the remaining $466 \frac{2}{3}$ km, at $1$ banana per km, leaving us with a
total of $533 \frac{1}{3}$ bananas at the finish line
</details>

**Now, for the winners' approaches:**

<details>
<summary>tendstofortytwo's Solution</summary>

Tendstofortytwo’s solution, or rather — *computer assisted thought experiment* 
— was particularly interesting; they graphed the distance travelled in one go ($x$) versus total
bananas transported ($y$), using a nifty Javascript program to
calculate all the values. Being hindered by the finiteness of
computing power, they arrived at the somewhat approximated answer that it is (about) optimal to travel in 1 km
intervals.  I urge you to check out their results which you can find in this 
[spreadsheet](https://docs.google.com/spreadsheets/d/1QIgi6lQ1lr8cJNkslepUWyw6S6Rcbq3LQP-4L2JGvM/edit?usp=sharing.) 
and ponder about the zigzaggy corners.
</details>

<details>
<summary>Diminutive Rex's Solution</summary>

Diminutive Rex came up with a more rigorous proof, ~~showing once again that computers are inferior to pencil and paper in every way~~. 
Their method of transporting bananas involved setting up “banana caches” throughout the journey, such that
they would end up back at the start and be able to travel the whole $1000$km in one go, 
picking up the caches as they go.

Here is is a shortened version of their proof:

Clearly, you must leave banana caches to get ANY bananas
past the finish line, and, clearly, you must make at least two
trips back to the origin to pick up more bananas, if you are
going to make the most of your bananas. The sum of all
bananas in banana caches up to and including kilometre $x$
should be no more than $x$. This is because if, for example,
you encounter $400$ bananas at the $200$km mark on your final
trip, you will have to leave $200$ bananas behind—a waste of
bananas! And after arguing that $2$ banana caches are necessary
to transport the maximum number of bananas because two
trips back to the origin are needed, they concluded “without
loss of generality that one of the caches will have to be further
out than the other. That means that, when leaving the caches,
we will travel the distance from the origin to the closer cache
$4$ times, but the distance from the closer cache to the further
cache just $2$ times. This means that the further cache can store
at most $\frac{1}{3}$ of a trip’s worth of bananas, and the closer cache
can store at most 1/5 (two trips there, two trips back, and the
amount cached). $\frac{1}{3}(1000) + \frac{1}{5}(1000) = 533$ bananas!
</details>

# Bonus: tendstofortytwo's Winning Speech

Finally, tendstofortytwo ~~harassed me for three days~~ *insisted* I include their
winning speech in this article, so bear with me:

“Today, I stand before you ladies, gentlemen, and formulae of
the Pure Math Club, because you bestow upon me the honor
of ‘Grand Optimizer of Camel Fuel Efficiency’. I could not
be more deeply honored to receive this prize, this token of
appreciation from the community of mathematics. As a child,
I never thought I would be counted among the greats—Isaac
Newton, Carl Gauss, Matt Parker, Three B. O. Brown, Presh
Talwalker, and now me. It seemed like a mere fantasy, a
dream that would stay forever unrealized. I am glad not only
that I was able to solve this problem and bring out many
positive changes in this world, including but not limited to
world peace and the end of global warming, but also that you
gave me the opportunity to do this. If not for the support of
the Pure Math Club, I would be as lost as a first year in the
hallways of the engineering buildings (because frankly, unlike
MC and DC they’re an organizational mess). I thank you all for
your unending support in this endeavor, and I shall cherish
this camel as a memento from the world to me, of my mark
made on the human species. Thank you.”