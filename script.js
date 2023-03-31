import {startApp, welcomeText} from "./functions.js";

welcomeText();
const userName = await startApp();

console.log('HERE', userName);
