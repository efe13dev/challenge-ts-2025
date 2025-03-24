# 🥋 Suzuki's Student Line-up Challenge

## Problem Description
Suzuki needs help lining up his students for their training interviews! He wants to schedule the interviews based on the length of the students' names in descending order.

## Task
You will be given a string of student names. Your task is to sort them and return a list of names in descending order based on name length.

## Rules
1. Sort by name length (descending)
2. For names of equal length, sort in reverse alphabetical order (Z→A)

## Examples

### Example 1
**Input:**
```
'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
```

**Output:**
```python
[
    'Takehiko',
    'Takayuki',
    'Takahiro',
    'Takeshi',
    'Takeshi',
    'Takashi',
    'Tadashi',
    'Takeo',
    'Takao'
]
```

### Example 2
**Input:**
```
"xxa xxb xxc xxd xa xb xc xd"
```

**Output:**
```python
['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']