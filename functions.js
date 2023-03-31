import { createInterface } from "readline";

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
    readline.close();
    console.log(`Thanks ${userRes}! Time for your kitty fortune...`);
    return userRes;
  }

