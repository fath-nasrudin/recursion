# Recursion

## Description

Recursion is a programming technique where a function calls itself within its own definition to solve a problem. It involves breaking down a problem into smaller subproblems and solving them until a base case is reached, which terminates the recursive process. Recursion is useful for solving problems that can be divided into smaller and similar subproblems, such as sorting, searching, and tree traversal.

This project is implementation recursion on Fibonacci Sequence and Merge Sort algorithm.

## Problem

### Fibonacci

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. It starts with 0, 1, and then each subsequent number is the sum of the previous two, so the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. It is named after Leonardo Fibonacci, an Italian mathematician who introduced it to the Western world in his book Liber Abaci. The Fibonacci sequence appears in many natural phenomena, such as the branching of trees, the arrangement of leaves on a stem, and the spiral patterns of shells and galaxies.

### Merge Sort

Merge sort is a sorting algorithm that uses a divide-and-conquer approach to sort a list of elements.

The algorithm works by recursively dividing the list into halves until each half contains only one element. Then, it merges the sorted halves into a single sorted list.

The merge step compares the first element of each half and appends the smaller one to the new merged list. It continues to compare and append the remaining elements until both halves are empty.

Merge sort has a time complexity of O(n log n) and is considered one of the most efficient sorting algorithms. However, it requires additional memory to store the sub-lists, which can be a disadvantage in some cases.
