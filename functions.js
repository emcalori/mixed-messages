import { createInterface } from "readline";
import { nouns } from "./words/nouns.js";
import { adjectves } from "./words/adjectives.js";
import { breeds } from "./words/breeds.js";

export const welcomeText = () => {
    console.log('Welcome to the magical mystery cat fortune teller...');

    console.log(`|\\-----/|`);
    console.log(`|  o o  |`);
    console.log(`|=  ~  =|`);
    console.log(`\\___^___/`);

};

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

const readLineAsync = msg => {
    return new Promise(resolve => {
    readline.question(msg, userRes => {
        resolve(userRes);
    });
    });
}

export const startApp = async() => {
    const userRes = await readLineAsync("What is your name? ");
    console.log(`Thanks ${userRes}! Time for your kitty fortune...`);
    return userRes;
  }

export const continueGame = async() => {

    const answer = await readLineAsync("Would you like another fortune? ");

    if (answer.toLowerCase()[0] === 'y') {
        return true;
    }
    else {
        readline.close();
        return false;
    }
}

export const finishGame = () => {
    console.log(`Thanks for playing!!! Byeeeeeeeeeeeeeeeeee xxxx`)
}

const getRandomDate = () => {
    const from = new Date();
    const to = new Date(2075,11,31);
    return new Date(from.getTime() + Math.random() * (to - from)).toDateString();
}

const getRandomFromArray = (arr) => {
    const len = arr.length;
    const rand = Math.floor(Math.random()*len) + 1;

    return arr[rand];
}

const getRandomNoun = () => {
    return getRandomFromArray(nouns);
}

const getRandomAdjective = () => {
    return getRandomFromArray(adjectves);
}

const getRandomBreed = () => {
    return getRandomFromArray(breeds);
}


export const randomFortune = (userName) => {

    console.log("")
    console.log('°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸');
    console.log(`Welcome to your future ${userName} the ${getRandomAdjective()}...`);
    console.log(`Ahhh yes! Your lucky thing is a ${getRandomNoun()}... bit weird but you are ${getRandomAdjective()} I suppose. Moving on ...`);
    console.log(`If you were a cat, you'd be a ${getRandomBreed()} because you are ${getRandomAdjective()}. Makes sense really!`);
    console.log(`There's something else in my crystal ball! A date! It seems your luckiest day will fall on ${getRandomDate()}!`);
    console.log(`That day looks like it could be really ${getRandomAdjective()} for you`);
    console.log(`Oh! ... maybe wear your lucky undewear on the ${getRandomDate()}... ermm... looks like you'll be ${getRandomAdjective()}`);
    console.log(`Anyway! Goodbye for now and have a nice life ${userName}, byeeeeeeee *meow*`);
    console.log('°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸');
}

