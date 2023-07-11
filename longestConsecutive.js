function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentStreak = 1;

            while (numSet.has(num + 1)) {
                num += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
}