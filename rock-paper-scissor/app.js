let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let ScoreByuser=document.querySelector("#user-score");
let ScoreBycomp=document.querySelector("#comp-score");
let reset=document.querySelector("#reset");

const getCompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randmindx= Math.floor(Math.random()*3)
    return options[randmindx];
    } ;
    const showwin=(userwin,userchoice,comChoice)=>{
        if(userwin){
            userScore++;
            ScoreByuser.innerHTML=userScore;
            console.log("you win");
            msg.innerHTML=`you won! your's ${userchoice} beat ${comChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            ScoreBycomp.innerHTML=compScore;
            console.log("you lose");
            msg.innerHTML=`you lose ! computer's ${comChoice} beat ${userchoice}`;
            msg.style.backgroundColor="red";
        }

    }

draw=()=>{
    console.log("game was draw");
    msg.innerHTML=`Draw game `;
            msg.style.backgroundColor="#081b31";
};

const playgame=(userchoice)=>{
    console.log("userChoice=",userchoice);

const comChoice=getCompchoice();
console.log("comChoice= ",comChoice);

if(userchoice===comChoice){
    draw();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //paper ,scissor
     userwin=comChoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        //rock ,scissor
        userwin=comChoice==="scissor"?false:true;
       }
    else {
        //paper,rock
        userwin=comChoice==="rock"?false:true;
       }
       showwin(userwin,userchoice,comChoice);
}

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
        {

         const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice );
    playgame(userchoice);}
    )

});
reset.addEventListener("click",()=>{
    compScore=0;
    userScore=0;

    ScoreBycomp.innerHTML=compScore
    ScoreByuser.innerHTML=userScore;
    msg.innerHTML="Play Again";
    msg.style.backgroundColor="#081b31";
})