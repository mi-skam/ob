
> [!NOTE] Accumulator
> There is an optional, second argument to **reduce()**, which defaults to the first value of array if omitted. 


Calculate the sum of experience with reduce 
(This calculation is actually nonsense, as we only take one language in each position into account 🤪, we fix this in the third example)
```javascript
const positions = [
	{ languages: ["HTML", "JavaScript", "PHP"], years: 4 },
	{ languages: ["JavaScript", "PHP"], years: 2 },
	{ languages: ["C", "PHP"], years: 3 },
];
const result = positions.reduce((acc, position) => {
  return acc + position.years
}, 0)

console.log(result)
```

Calculate the sum of experience with each language

```js
const positions = [
	{ languages: ["HTML", "JavaScript", "PHP"], years: 4 },
	{ languages: ["JavaScript", "PHP"], years: 2 },
	{ languages: ["C", "PHP"], years: 3 },
];

const result = positions.reduce((result, {languages, years}) => {
  languages.forEach(l => {
    result[l] = result[l] ? result[l] + years : years
  })
  return result
}, {})

console.log(result)
```

```js
const langExperience = { HTML: 4, JavaScript: 6, PHP: 9, C: 3 }

const totalYears = Object.keys(langExperience).reduce((total, key) => {
  return total + langExperience[key]
}, 0)

console.log(totalYears)
```