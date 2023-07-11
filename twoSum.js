function twoSum(nums, target) {
    const map = new Map(); // Create a map to store the numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // Calculate the complement required to reach the target
      
      if (map.has(complement)) {
        return [map.get(complement), i]; // If the complement exists in the map, return the indices
      }
      
      map.set(nums[i], i); // Store the number and its index in the map
    }
    
    return []; // If no solution is found, return an empty array
  }
  