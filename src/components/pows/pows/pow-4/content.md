Worked pretty hard on this sexy little puzzle 💃 (ie. there wasn't an "answer at the back of the book" that I could look up this week), so be sure to give this one a try...

Try it, if not for the prizes, but for the eternal glory of claiming a piece of mathematical history ✨!

# Background

Choose any natural number. If it's even, divide it by two. If it's odd, 
multiply it by three and add one. Iterate this process over and over again.

The **Collatz Conjecture** hypothesizes that this process reaches 1 after only a finite number
of iterations (and then cycles through 1, 4, 2, 1, 4, 2, 1 etc). Interestingly, this is only a conjecture -
despite our advancements in modern mathematics, no one has been able to definitively prove whether this is true,
or find a counterexample, despite the simplicity of this problem.

Don't worry - we won't ask you to prove the conjecture here, but we will do something similar.

# Problem: the "DIY" conjecture

This week, we want you to find a rule that is sort of like the Collatz rule, but
based on divisibility by a number other than 2.

Formally, for some $k > 2$, we can define a Collatz rule by their general form
- $kn \rightarrow n$;
- $kn + 1 \rightarrow \text{multiply and add something to (kn+1)}$;
- $kn + 2 \rightarrow \text{multiply and add something to (kn+2)}$,
and so on.

In other words, create a "Linear Collatzian" rule of size $k > 2$ that reaches 1 in
a finite number of steps (for like the first 500 numbers).

# Bonuses (wait, there's more??)

## Bonus
Find more than one rule!

## Extra Bonus
Write a program that finds and checks rules!

## Super Bonus
Find a (non trivial) way of generating a family of rules!

## MEGA Bonus
Which rules only have one cycle? Which ones have a few cycles? Do some of them have
a finite or infinite number of cycles?

## EPICC Bonus
What makes a rule more likely to reach 1 for more numbers? What makes it more likely to have longer
(though still finite) sequences before reaching 1? Why?