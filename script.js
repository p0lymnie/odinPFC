function computerChoice() {
    let choix = ['pierre', 'feuille', 'ciseaux'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choix[randomNumber];
    }

function userSelection() {
    let text = prompt("Choisis entre pierre, feuille, ciseaux !")
    return text;
    }


function playRound(computerSelection, userSelection) {
    if (computerSelection == 'pierre' && userSelection == 'pierre') {
        let result = 'match nul'
        return result;
    } else if (computerSelection == 'feuille' && userSelection == 'feuille') {
        let result = 'match nul'
        return result;
    } else if (computerSelection == 'ciseaux' && userSelection == 'ciseaux') {
        let result = 'match nul'
        return result;     
    } else if (computerSelection == 'ciseaux' && userSelection == 'feuille') {
        let result = 'perdu'
        return result;     
    } else if (computerSelection == 'ciseaux' && userSelection == 'pierre') {
        let result = 'gagné'
        return result;     
    } else if (computerSelection == 'feuille' && userSelection == 'pierre') {
        let result = 'perdu'
        return result;       
    } else if (computerSelection == 'feuille' && userSelection == 'ciseaux') {
        let result = 'gagné'
        return result;     
    } else if (computerSelection == 'pierre' && userSelection == 'ciseaux') {
        let result = 'perdu'
        return result;     
    } else {
        let result = 'gagné'
        return result; }      
    }


function playGame() {
    let computerScore = 0;
    let userScore = 0;
    let finalResult = "";
    let computerGame1 = computerChoice()
    let userGame1 = userSelection()
    let computerGame2 = computerChoice()
    let userGame2 = userSelection()
    let computerGame3 = computerChoice()
    let userGame3 = userSelection()
    let computerGame4 = computerChoice()
    let userGame4 = userSelection()  
    let computerGame5 = computerChoice()
    let userGame5 = userSelection()
    let Playroundresult1 = playRound(computerGame1, userGame1)
        if (Playroundresult1 == 'gagné') {
            userScore += 1
        } else if (Playroundresult1 == 'perdu') {
            computerScore += 1
        } else {
            userScore += 0; 
        }
        console.log("PARTIE 1")
        console.log(`jeu de l'ordinateur : ${computerGame1}`)
        console.log(`votre jeu : ${userGame1}`)
        console.log(`Résultat de la manche : vous avez ${Playroundresult1}`)
    let Playroundresult2 = playRound(computerGame2, userGame2)
        if (Playroundresult2 == 'gagné') {
            userScore += 1
        } else if (Playroundresult2 == 'perdu') {
            computerScore += 1
        } else {
            userScore += 0; 
        }
        console.log("PARTIE 2")
        console.log(`jeu de l'ordinateur : ${computerGame2}`)
        console.log(`votre jeu : ${userGame2}`)
        console.log(`Résultat de la manche : vous avez ${Playroundresult2}`)
    let Playroundresult3 = playRound(computerGame3, userGame3)
        if (Playroundresult3 == 'gagné') {
            userScore += 1
        } else if (Playroundresult3 == 'perdu') {
            computerScore += 1
        } else {
            userScore += 0; 
        }
        console.log("PARTIE 3")
        console.log(`jeu de l'ordinateur : ${computerGame3}`)
        console.log(`votre jeu : ${userGame3}`)
        console.log(`Résultat de la manche : vous avez ${Playroundresult3}`)
    let Playroundresult4 = playRound(computerGame4, userGame4)
        if (Playroundresult4 == 'gagné') {
            userScore += 1
        } else if (Playroundresult4 == 'perdu') {
            computerScore += 1
        } else {
            userScore += 0; 
        }        
        console.log("PARTIE 4")
        console.log(`jeu de l'ordinateur : ${computerGame4}`)
        console.log(`votre jeu : ${userGame4}`)
        console.log(`Résultat de la manche : vous avez ${Playroundresult4}`)

    let Playroundresult5 = playRound(computerGame5, userGame5)
        if (Playroundresult5 == 'gagné') {
            userScore += 1
        } else if (Playroundresult5 == 'perdu') {
            computerScore += 1
        } else {
            userScore += 0; 
        }
        console.log("PARTIE 5")
        console.log(`jeu de l'ordinateur : ${computerGame5}`)
        console.log(`votre jeu : ${userGame5}`)
        console.log(`Résultat de la manche : vous avez ${Playroundresult5}`)
    if (userScore > computerScore) { 
            finalResult = 'You win baby !'
        } else if (computerScore > userScore) {
            finalResult = 'You lost babe !'
        } else {
            finalResult = 'Matchy matchy hihi !'
        }
        return finalResult;
        }

let FINALRESULT = playGame()
console.log(FINALRESULT)


/*function playRoundScored() {
    let computerScore = 0;
    let userScore = 0;
    if (Playroundresult == 'gagné') {
        userScore += 1
    } else if (playRound.result === 'perdu') {
        computerScore += 1
    } else {
        userScore += 0; 
    }
    return userScore
}

let test =

 function playGame() {
    let rund1 = Playroundresult


 }
    
/*    if (playRoundScored.userScore > playRoundScored.computerScore) { 
        let finalResult = 'You win baby !'
    } else if (playRoundScored.computerScore > playRoundScored.userScore) {
        finalResult = 'You lost babe !'
    } else {
        finalResult = 'Matchy matchy hihi !'
    }
    return finalResult;
    }

let Bigfinalresult = playGame(computerGame, userGame);
console.log(Bigfinalresult);

/*let lucaselement = document.getElementById("lucas")
lucaselement.innerHTML = Bigfinalresult
*/