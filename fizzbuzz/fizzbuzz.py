#!/usr/bin/env python3

for x in range(0,100):
  if x%15 == 0:
    print("fizzbuzz")
  elif x%3 == 0:
    print("fizz")
  elif x%5 == 0:
    print("buzz")
  else:
    print(x)
