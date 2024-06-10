---
in: "[[JS and TS Fullstack Development]]"
created: 2024-01-07
tags:
  - code/js/lang
cssclasses: []
---

> *What are closures?*

A `closure` is a function which "saves" its own state, even after the scope of the function is left.  This means that the function "remembers" its original scope, including any variables and functions defined within it.

> *Why use closures?*

> [!multi-column]
> 
>> [!info] Description
>> **generator functions**
>> These functions change their own state, every time they are called.
>>
>> `idGenerator` returns the `count`which gets incremented after the call and "are saved" in the closure.
>
>> [!code] Example
>> ```js
>> function idGenerator() {
>>   let count = 1;
>>   return function() {
>>     return count++;
>>   }
>> }
>> ```


> [!multi-column]
>
>>[!info] Description
>>**factory functions**
>>factory functions produce new functions.
>>
>>`toThePowerOf`expects a exponent as input and returns a function that calculates the value of a value and this exponent, e.g `toThePowerOf(2)(3) equals 9*9 = 81`
>
>>[!code] Example
>> ```js
>> function toThePowerOf(exp) {
>>   return function(n) {
>>     return n ** exp;
>>   }
>> }

