---
parent:
  - "[[Fleeting MOC]]"
created: 2024-01-24
tags: []
---

## match command

As of Python >=3.10 we got a `match` command similar to the `switch-case` construct of _c-like_ [[programming languages]] like [[JavaScript]].

The basic invocation is something like

```python
value = 10

match value:
	case 0:
		print("value is zero.")
	case 10:
		print("value is ten.")
	case _:
		print("value is something different.")

>> "value is ten"
```

which works fine, if the cases are _concrete_ values. But what can you do, if the case is a _predicate_ lik `value < 10`. case unfortunately does not support boolean expressions, but we can work around this.

Here is an example

```python
def player_status(health):
    match health:
        case _dead if _dead <= 0:
            return "dead"
        case _health if _health <= 5:
            return "injured"
        case _:
            return "healthy"
test_values = [-1, 3, 4, 10, -42, 42]
result = list(map(player_status, test_values))

print(result)
>> ['dead', 'injured', 'injured', 'healthy', 'dead', 'healthy']
```

It works like this, the variables `_dead` and `_health` are treated as _wildcards_ and match in _all_ cases, thus they are guarded by the if-clause following them. The variables themselves represent the current value of the match evaluation.
