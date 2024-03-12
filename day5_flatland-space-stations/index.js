// Flatland Space Stations
// https://www.hackerrank.com/challenges/flatland-space-stations/
function flatlandSpaceStations(n, c) {
    const sortedCities = c.sort((a,b) => a-b);
    let lastCityDistance = (n - 1) - sortedCities[sortedCities.length - 1];
    let highestDistance = lastCityDistance;
    
    for (let i = 0; i < sortedCities.length; i++) {
        const totalDistance = sortedCities[i+1] - sortedCities[i]
        if (totalDistance > highestDistance) {
            highestDistance = totalDistance
        }
    }
    
    let firstCityDistance = sortedCities[0];
    if (firstCityDistance > highestDistance) {
        return firstCityDistance;
    }
    
    if (highestDistance === lastCityDistance || Math.floor(highestDistance / 2) < lastCityDistance) {
        return lastCityDistance;
    }
    
    return (Math.floor(highestDistance / 2))
}