// Generating random numbers in Javascript in a specific range

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
