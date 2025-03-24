
let boxes = document.querySelectorAll("#buttons");
let resetBtn = document.querySelector(".reset-bt");
let newGameBt = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container ,hide");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX , player0
let count = 0 ;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

// action of button  

boxes.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        if(turn0){
            //player0
            buttons.innerHTML = 'O';
            turn0 = false;
        }
        else{
            //player1
            buttons.innerHTML ="X";
            turn0 = true;
        }
        buttons.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val== pos2Val && pos2Val == pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
                return true;
            }
        }
    }
};


const showWinner = (winner)=>{
    count =0;
    msg.innerText= `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const resetGame = ()=>{
    turn0 =true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};    


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }    
};    

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }    
};    

newGameBt.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);










