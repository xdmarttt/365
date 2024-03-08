// Climbing the Leaderboard
// Explanation: https://dev.to/xdmarttt/1-of-365-coding-challenge-41mp
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/

function climbingLeaderboard(ranked, player) {
    const uniqueRanked = [...new Set(ranked)];
    const rankedSet = Array.from({ length: uniqueRanked.length }, (_, i) => i + 1);
    const finalRank = [];

    player.forEach(score => {
        if (score < uniqueRanked[uniqueRanked.length - 1]) {
            finalRank.push(rankedSet[rankedSet.length - 1] + 1);
        } else if (score > uniqueRanked[0]) {
            finalRank.push(1);
        } else {
            const midPoint = Math.floor((rankedSet.length + 1) / 2) - 1;
            const start = score <= uniqueRanked[midPoint] ? midPoint : 0;

            for (let i = start; i <= rankedSet[rankedSet.length - 1]; i++) {
                if (score >= uniqueRanked[i]) {
                    finalRank.push(rankedSet[i]);
                    break;
                }
            }
        }
    });

    return finalRank;
}