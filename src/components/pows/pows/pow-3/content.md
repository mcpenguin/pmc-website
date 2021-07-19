
Hello hello! 'Nuff said, new POW, so there's new prizes to be won.

(the true prize being the elusive mathematical "maturity" we all crave)

Let's all pretend like I didn't screw this one up and send a wrong picture in the email, mkay? Thanks xoxo

# Problem

The squares of a chessboard are numbered as shown. Eight numbers are
randomly chosen sothere is one in each row and each column.

**Show the sum of these numbers is always the same. What is the sum for an
$n \times n$ board?**

# Solution

Congratulations to mcpenguin for their very pretty solution
that brought back fond memories of drawing matrices for
lin alg! Your prize is: undisputed glory for a week and a chess
themed gimmick (alternatively, a gift card).

<details>
<summary>The Solution</summary>

The sum of any possible arrangement of eight numbers, with one in each row and one in each column, can
be thought of as first a “base” sum of $0 + 8 + 16 + ... + 56$, where each multiple of eight corresponds to each row,
and then adding $1$ for the number that is chosen in the
first column, $2$ for the number that is chosen in the second column, and so forth. 
We end up with a total sum of 
$$8 · (0 + 1 + ... + 7) + (1 + 2 + ... + 8)$$. 
This can be easily generalized by replacing all the $8$'s with $n$. 

Finally, thanks to nine year old Carl Friedrich Gauss, we get the total sum:

$$S = n \cdot \frac{(n-1)n}{2} + \frac{n(n+1)}{2}$$

which simplifies to

$$S = \frac{n^3 + n}{2}$$

</details>

**Check out mcpenguin's visualization, which sums (_haha pun intended amirite_) the solution nicely:**
<details>
<summary>mcpenguin's Solution</summary>

![grid](grid.png)
</details>

Check out this issue's problem next—it's the sexiest POW we'll ever
have so I'll be offended if you don't.

# Additional Notes

Taken from *Problemas azanzados*, by Anne Alberro Semerena, Radmila Bulajich Manfrino,
and Carlos Jacob Barrios (pg.1).
