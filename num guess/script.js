let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget()
{
    return Math.floor(Math.random() * 9);
}

function compareGuesses(human,computer,secret)
{
    let humandiff = 0;
    let computerdiff = 0;

    humandiff = Math.abs(secret - human);
    computerdiff = Math.abs(secret -computer);

    if (humandiff <computerdiff)
    {
        return true;
    }
    else
    {
        return false;
    };
}


function updateScore(string1)
{
    switch(string1)
    {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
        default:
            break;
    }
}

function advanceRound()
{
    currentRoundNumber += 1;
}