const json = require('./haikus.json')

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// read random from args

const doRandom = process.argv[2] === 'random'

if (doRandom) {
    console.log(json.haikus[random(0, json.haikus.length - 1)].haiku, '\n')
} else {
    json.haikus.forEach(haiku => {
        console.log(haiku.haiku, '\n')
    })
}
