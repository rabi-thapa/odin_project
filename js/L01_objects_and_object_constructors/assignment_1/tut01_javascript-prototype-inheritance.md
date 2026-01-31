# JavaScript Prototypes & Inheritance Tutorial
_Last updated: January 2026_

---

## 1. Creating an empty object (two equivalent ways)

```js
// Modern & preferred way
let x = {};

// Classic way (exactly the same result)
let x = new Object();
```

---

## 2. Where is the prototype?

```js
Object.getPrototypeOf(x);   // → Object.prototype
x.__proto__;               // → Object.prototype (older style, not recommended)
```

Both point to the same object: **Object.prototype**

---

## 3. Prototype chain in action

When you write:

```js
x.toString();
```

JavaScript looks for `.toString` in this order:

1. `x` itself → not found  
2. `x.[[Prototype]]` → `Object.prototype` → found!

**Output:**
```js
function toString() { [native code] }
```

---

## 4. Arrays – longer prototype chain

```js
let y = [];

console.log(y.__proto__);                 // → Array.prototype
console.log(y.__proto__.__proto__);       // → Object.prototype
console.log(y.__proto__.__proto__.__proto__); // → null
```

### More readable checks

```js
y.__proto__ === Array.prototype;             // true
y.__proto__.__proto__ === Object.prototype;  // true

Array.prototype.isPrototypeOf(y);            // true
Object.prototype.isPrototypeOf(Array);       // true

y instanceof Array;                          // true
y instanceof Object;                         // true
```

---

## 5. Constructor Functions + Prototypes

```js
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero("Rabi", 1);

console.log(hero1);
// → Hero { name: "Rabi", level: 1 }
```

```js
Object.getPrototypeOf(hero1) === Hero.prototype; // true
```

---

## 6. Adding shared methods to the prototype

```js
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
};

console.log(hero1.greet());
// → "Rabi says hello."
```

✔ All `Hero` instances share **one** `greet()` function (memory efficient)

---

## 7. Inheritance with Constructor Chaining (without `class` syntax)

```js
function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}
```

⚠ At this point, `Warrior.prototype` and `Healer.prototype` are still linked to `Object.prototype`, **not** `Hero.prototype`.

---

## 8. Wrong situation (common beginner mistake)

```js
const hero1 = new Warrior("Bjorn", 1, "axe");

console.log(hero1.greet());
// ❌ Uncaught TypeError: hero1.greet is not a function
```

**Why?**  
`call()` copies properties, **not prototype methods**.

---

## 9. Correct way – link the prototypes

```js
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
};
```

---

## 10. Final result – working inheritance

```js
const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");

console.log(hero1.attack());
// → "Bjorn attacks with the axe."

console.log(hero1.greet());
// → "Bjorn says hello."

console.log(hero2.heal());
// → "Kanin casts cure."

console.log(hero2.greet());
// → "Kanin says hello."
```

---

## Summary – Prototype Chain

```
Bjorn (Warrior instance)
   ↓
Warrior.prototype → attack()
   ↓
Hero.prototype    → greet()
   ↓
Object.prototype → toString(), hasOwnProperty(), ...
   ↓
null
```

---