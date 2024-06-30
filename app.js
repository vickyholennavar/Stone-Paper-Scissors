let userScoreCount=0;
let computerScoreCount=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#userscore");
const computerScore=document.querySelector("#computerScore");


const getComputerChoice=()=>
    {
        const option=["rock","paper","scissors"];
        const randomIdx=Math.floor(Math.random()*3);
        return option[randomIdx];
    }

const drawGame=()=>
    {
        msg.innerText="Game is Draw.Play Again";
        msg.style.backgroundColor="#081b31";
    }

const showwinner=(userWin,userChoice,computerChoice)=>
    {
        if(userWin)
            {
                userScore.innerText=++userScoreCount;
                msg.innerText=`You Win! your ${userChoice} beats ${computerChoice} `;
                msg.style.backgroundColor="green";
            }
            else{
                computerScore.innerText=++computerScoreCount;
                msg.innerText=`You Lose. ${computerChoice} beats your ${userChoice} `;
                msg.style.backgroundColor="red";
            }

    }

const playGame=(userChoice)=>
    {
     const computerChoice=getComputerChoice();
     if(userChoice===computerChoice)
        {
           drawGame();
        }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin= computerChoice==="paper"?false:true;
            }
        else if(userChoice==="paper")
            {
                userWin= computerChoice==="scissors"?false:true;
            }
        else{
            userWin= computerChoice==="rock"?false:true;
        }
        showwinner(userWin,userChoice,computerChoice)
        
    }
    }

choices.forEach((choice)=>
    {
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);

        });
    }
);