# LRU Cache Implementation

A high-performance Least Recently Used (LRU) Cache built in JavaScript.

## Data Structures Used
- *JavaScript Map*: Utilized because it retains entry insertion order and allows $O(1)$ constant time complexity for key lookups, updates, and deletions.

## Complexity
- *Time Complexity*: $O(1)$ average time for both get() and put() operations.
- *Space Complexity*: $O(C)$, where $C$ is the positive capacity of the cache.

## How LRU Ordering is Maintained
- Whenever a key is accessed via get() or updated via put(), it is removed and re-inserted at the tail of the Map, marking it as the most recently used.
- When capacity exceeds, the first key from map.keys().next().value (the least recently used) is evicted.

## Setup & How to Run
1. Ensure Node.js is installed.
2. Run the test script:
   ```bash
   node lru_cache.js
