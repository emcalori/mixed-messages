import {startApp, welcomeText,randomFortune, continueGame, finishGame} from "./functions.js";

welcomeText();

let cont = true;

do {
    const userName = await startApp();
    randomFortune(userName);

    const endGame = await continueGame();

    if (!endGame) {
        finishGame();
        cont = false;
    }

} while (cont);

