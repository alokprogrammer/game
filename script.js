let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGme = () => {
    turnO = true;
    enableBoxex();
    msgContainer.classList.add("hide");
}

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//playerO
            box.innerText = "O";
            box.style.color = "#b0413e";
            turnO = false;
        }else{//playerX
            box.innerText = "X";
            box.style.color = "#4b8b3b";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableBoxex = () => {
    for (let box of boxex) {
        box.disabled = true;
    }
}

const enableBoxex = () => {
    for (let box of boxex) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxex();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxex[pattern[0]].innerText;
        let pos2Val = boxex[pattern[1]].innerText;
        let pos3Val = boxex[pattern[2]].innerText;


        
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            
        }
    }
    }

   
};


newGameBtn.addEventListener("click", resetGme);
resetBtn.addEventListener("click", resetGme);