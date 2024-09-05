let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgConatainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let winner = document.querySelector(".win")

let turnO = true;

//2D array
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
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
       
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
    

    
})

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enebleBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation winner is ${winner} `;
    msgConatainer.classList.remove("hide");
}

const checkWinner = () =>{
    for( let pattern of winPatterns){
        // console.log( pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
                disabledBoxes();

                
            }
        }

    }
}

// const resetGame = () =>{
//     resetBtn.addEventListener("click", () =>{
//         for( let bax of boxes){
//             bax.innerText = "";
//         }
//     })

// }
//  boxes.forEach((bax) => {
//     resetBtn.addEventListener("click", () =>{
//         bax.innerText = "";
//         bax.disabled = false ;
//         turnO = true;
//         msgConatainer.classList.add("hide");
//     })
//  })
//  boxes.forEach((bax) => {
//     newBtn.addEventListener("click", () =>{
//         bax.innerText = "";
//         bax.disabled = false ;
//         turnO = true;
//         msgConatainer.classList.add("hide");
//     })
//  })

const resetGame = () => {
    turnO = true;
    enebleBoxes();
    msgConatainer.classList.add("hide");
    count = 0;


}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

let count = 0;
boxes.forEach((box) => {
        box.addEventListener("click", () =>{
           count;
           count++;
           
           if(count === 9 && !checkWinner()  ){
                console.log(`the meatch is drow`)
                count = 0;
                drow("Drow");
           }
        })
       
     })

     const drow = (drowm) =>{
        msg.innerText = `The Match is ${drowm}`;
        msgConatainer.classList.remove("hide");
     }