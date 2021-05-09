# Lesson 5: Prime Class

Collection of equivalent...

A prime class is a set of all metric values that are whole number multiples apart where a prime number is at index zero.

```
{p_n_ : _n_ is an integer} = [p0, p1, p2, p3, p4, p5, p6, ...]
```

This is just a scalable way to describe what should already be familiar. Much of Western music, for example, bases its methods on prime class 2 and 3: quarter notes based on prime class 2 become eighth notes, sixteenth notes, etc. when divided or half notes, whole notes, etc. when multiplied, while quarter notes based on prime class 3 become triplets, sextuplets, etc. when divided or quarter note triplets, half note triplets, etc. when multiplied.

Again, describing each derivation in standard terms is more headache than seems necessary; the terms are too linear. Any metric event divided by prime class 2 at index zero or _e_/p2[0] simplified as _e_/2 applies at any scale and remains nonlinear. The result is simply _e_ twice as frequent.

## Prime Class Set

Collection of different...

A composition containing duple and triple time events has a prime class set of [2, 3].

## Class Relationships

The following prime classes list every whole number integer from 2 to 16.

```
p2 = [2, 4, 6, 8, 10, 12, 14, 16]
p3 = [3, 6, 9, 12, 15]
p5 = [5, 10, 15]
p7 = [7, 14]
p11 = [11]
p13 = [13]
```

The following structure presents the same information in a way that shows relationships between classes. n[6] reads as "prime class 2 at index 2 or prime class 3 at index 1."

```
n = {
  2: p2[0],
  3: p3[0],
  4: p2[1],
  5: p5[0],
  6: p2[2] || p3[1],
  7: p7[0],
  8: p2[3] || p4[0],
  9: p3[2],
  10: p2[4] || p5[1],
  11: p11[0],
  12: p2[5] || p3[3],
  13: p13[0],
  14: p2[6] || p7[1],
  15: p3[4] || p5[2],
  16: p2[7],
}

```
