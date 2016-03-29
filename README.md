# Cherries

Some core stand-alone functions for when you don't need an entire library. All
of them are pure and have no dependencies (neither outside, nor among each
other).

Functions are generally written with simplicity in mind so that they are easy
to edit and understand.

Each function is tested and generally behaves as you'd expect. (Please let me
know if this is not true). You can, however, if you're so inclined "abuse"
functions as you please. For instance, even though `initial` is designed to
work on arrays, passing it a string will not throw an error, but just kind of
work. (e.g., `initial('cherries'); // 'cherrie'`).

Some functions that you might expect are left out because I doubt that you'd
ever use them. For example, `initial`, `tail`, and `last` are all included,
however `head` is not because you'd be crazy to have a specific function just
to do `array[0]`. Other functions are left out because they are already in the
core, such as `Array.prototype.map` and `Array.prototype.filter`. I did
however, implement these for `objects`.

There is no main file, and there is no way to include every function. The way I
personally use it, is by copy/pasting the function into my project and adapting
it according to my needs. I'm aware that this is heresy in the broader
JavaScript community, but I find that it's usually not worth the time searching
for and installing very small modules for me, and the loss of control makes me
  a little queasy.


## Install

```sh
npm install cherries
```

You should really read what I wrote above though.


## Requirements

The functions are written to `node`, meaning they're exported with
`module.exports` and not `export`; they are written with arrow functions,
`const` (but not `let`), `for..of`, no destructuring or rest. You get the
picture.


## Documentation

There really isn't any. You should read the implementation of a function, and
then (if you're at a loss) the tests. If that doesn't do it for you, then just
take it for a spin. Copy paste it into your console and play around with it.

There is a certain "jargon", though not much, that might be useful to
understand. For instance `pairs` always refer to an array with two items in it.
So for instances the function `pairsToObject` will take a list of pairs and
create an object where first item is the key and last is the object.

```js
pairsToObject([['a', 1], ['b', 2], ['c', 3]]);
// {a: 1, b: 2, c: 3}
```

Its sister function `listsToObject` however, assumes two lists (of any length)
and creates an object where the items in the first list becomes the keys and
the items in the second list becomes the values.

```js
listsToObject([['a', 'b', 'c'], [1, 2, 3]]);
// {a: 1, b: 2, c: 3}
```

---

There is also a set of, in my mind, overlooked functions, such as `partition`
and `span`. Both work on arrays, and hands you back two arrays (within an
array) divided in some way according to the function you passed in.

```js
const array = [0, 1, 2, 3];
const even = x => x % 2 === 0;

// Think of this as [array.filter(even), array.filter(x => !even(x))]
partition(even, array); // [[0, 2], [1, 3]]

// This of this as [takeWhile(even, array), dropWhile(even, array)]
span(even, array); // [[0], [1, 2, 3]]
```


## Tests

Uses `tape` and `faucet` (to make it look pretty). Assumes that you have node
installed (mine is `v4.2.6`). Run tests with

```sh
npm test
```

As of writing there are 107 tests, and every function is covered by at least
one test.


## License

Do as you please.
