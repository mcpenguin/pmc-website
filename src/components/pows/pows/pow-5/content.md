
Hey math-folk!

Let's switch gears this fortnight to the study of secrecy
and intelligence; in other words, CRYPTOGRAPHY and
Benebottom Cucumber's razor sharp cheekbones.

To be honest, these problems are my only motivation to keep
doing math while my soul gets sucked out during co-op, so
the themes tend to stick to whatever I'm reading that week.
So thank you to everyone who's been keeping up with this
half-blog, half-POW (get it? because it's once every two weeks
:3) train ride.

This week, I've got a fun teaser that no mathlete lesser than
Alan Turing himself could solve… at least, so far. Try your luck! 

# Problem
Decipher the following message:
```
caesar
YLJHQHUH
WMGPR, WVGJVJ
84 44 67 48 58 25
OIE XUPV RNS?
```

<details>
<summary>Hints</summary>

1. The cipher name tells you the cipher key.
2. Google is encouraged!
3. www.101computing.net is helpful for the last line.

</details>

# Solution
Congratulations to Vincent, the winner of the fifth POW! As
the go-to cryptography expert at PMC, could we really expect
anything less? Your prize is: JKSALLFD ASLKJF SLOOI PR
NUWAAG (and this one is worth quite a bit of cha-ching, let me tell
you). Alternatively, you can opt for a gift card. Anywho, instead
of explaining this myself, as if I actually knew how to solve
the problems I put out, their solution is so sexy that I'll let it
speak for itself (note: it may be difficult to follow the last step)

Vincent's solution is outlined below in steps, in case you want to give it a try.

<details>
<summary>Step One: <em>caesar</em></summary>

The first line is *caesar*, so it makes sense the text below is encoded by a
Caesar cipher.
</details>

<details>
<summary>Step Two: <em>YLJHQHUH</em></summary>

By step one, it makes sense that this line is encoded by a
Caesar cipher, and so we should try all $26$ possible keys.

This is easy enough with a simple Python script:

```python
ciphertext = 'YLJHQHUH'

def as_num(letter):
    return ord(letter) % ord('A')

def rotate_letter(letter, offset):
    num = as_num(letter)
    shifted = (num + offset) % 26
    return chr(shifted + ord('A'))

def decrypt(ct, key):
    decrypted = ''
    for c in ct:
        decrypted += rotate_letter(c, key)
    return decrypted

for k in range(1, 26):
    print(k, decrypt(ciphertext, k))
```

This outputs the key followed by the decrypted value, and we find that the key $23$ gives the output **VIGENERE**. And as we all know, the *Vigenere* cipher is a type of cryptographic cipher, leading us to our next step.

</details>

<details>
<summary>Step Three: <em>WMGPR, WVGJVJ</em></summary>

From step two, we know the previous line decodes into the word **VIGENERE**, and so we can assume that the next line *WMGPR, WVGJVJ* needs to be decoded with a *Vigenere* cipher.

We blindly guess that the key is VIGENERE (note: this is also motivated by Hint #1), and proceed to try to decode *WMGPRWVGJVJ*.

To do this, we write the following Python program:

```python
def as_num(letter):
    return ord(letter) % ord('A')

def as_letter(num):
    return chr(num + ord('A'))

def sub_letters(l1, l2):
    n1 = as_num(l1)
    n2 = as_num(l2)
    return as_letter((n1 - n2) % 26)

def decrypt(ct, k):
    text = ''
    for i in range(len(ct)):
        key_letter = k[i % len(k)]
        text += sub_letters(ct[i], key_letter)
    return text

ciphertext = 'WMGPRWVGJVJ'
key = 'VIGENERE'

print(decrypt(ciphertext, key))
```

The above Python code gives the output *BEALESECOND*, and by typing this into a search engine of your choice, we learn about the **Beale ciphers**, pointing us in the direction of our next clue.

</details>

<details>
<summary>Step Four: <em>84 44 67 48 58 25</em></summary>

We use the Beale Papers version of the United States Declaration of Independence, and by matching the numbers to the word in the document at that index (ie 84 matches with the 84th word in the document), the string of numbers eventually transforms into

**equal nature impel God mankind and**,

and taking the first letter of each word spells out **ENIGMA**, pointing us to our final clue.

</details>

<details>
<summary>Step Five: <em>OIE XUPV RNS</em></summary>

By using an enigma simulator with the plugboard set to *EN, IG, MA* and the rotor settings all set to *A*, this line transforms into **TWO PLUS TWO**.

</details>

<details>
<summary>Step Six: <em>Pulling it All Together</em></summary>

$2 + 2 = 4$, and that's the answer to this POW!

</details>

# Additional Notes
Inspired by *The Code Book*, by Simon Singh.