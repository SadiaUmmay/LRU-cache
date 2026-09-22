class LRUCache {
    /**
    * Creates a cache that can hold a fixed number of entries.
     * @param {number} capacity
     */
    constructor(capacity) {
      if (capacity <= 0) {
        throw new Error("Capacity must be a positive integer.");
      }
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    /**
      * Returns a value and marks its key as recently used.
     * @param {any} key
     * @returns {number|any}
     */
    get(key) {
      if (!this.cache.has(key)) {
        return -1;
      }
      // Move the accessed entry to the end of the map.
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  
    /**
      * Adds or updates an entry, removing the least recently used entry if needed.
     * @param {any} key
     * @param {any} value
     */
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // The first map entry is the least recently used one.
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
        console.log(`[Evicted] Least recently used key '${oldestKey}' was removed.`);
      }
      this.cache.set(key, value);
    }
  }
  
  
  console.log("--- Starting LRU Cache Execution ---");
  const cache = new LRUCache(2);
  
  console.log("put('A', 10)");
  cache.put("A", 10);
  
  console.log("put('B', 20)");
  cache.put("B", 20);
  
  console.log("get('A') ->", cache.get("A")); // Returns 10.
  
  console.log("put('C', 30)");
  cache.put("C", 30); 
  
  console.log("get('B') ->", cache.get("B")); // B was removed when C was added.
  console.log("get('C') ->", cache.get("C")); // Returns 30.
  console.log("get('A') ->", cache.get("A")); // Returns 10.
  console.log("--- Execution Completed ---");