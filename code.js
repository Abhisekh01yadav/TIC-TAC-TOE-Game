let count = 0;
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let draw = document.querySelector(".draw");

let turn0 = true;

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

boxes.forEach((box) => {
    // console.log("box was clicked");
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            box.style.color = "blue";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "brown";
            turn0 = true;
        }
        box.disabled = true;
          count++;
        checkWinner();
           if(count === 9 && !checkWinner())
               {
                   showDraw();
              }
              else if(count === 9 && checkWinner()) {
                         showWinner();
                     }

    //  if (checkWinner()) {
    //      showWinner(turn0 ? "X" : "O");
    //  } else if (count === 9 && !checkWinner()) {
    //      showDraw();
    //  }
    //     else if(count === 9 && checkWinner()) {
    //         showWinner();
    //     }
    })
});

const disableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `wohuuu Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count = 0;
    //  msgContainer.classList.add("hideme");
    
}

const checkWinner = () => {
    for (let position of winPatterns)
    {
        // console.log(position[0],position[1],position[2]);
        // console.log(boxes[position[0]],boxes[position[1]],boxes[position[2]]);
        let pos1val = boxes[position[0]].innerText;
        let pos2val = boxes[position[1]].innerText;
        let pos3val = boxes[position[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" )
        {
            if(pos1val === pos2val && pos2val===pos3val)
            {
                // console.log("winner",pos1val);
            
            // else
            // {
            //     console.log("Draw");
            // }
             showWinner(pos1val);
             disableboxes();
            }
        }
    }
}
const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
         count = 0;
    }
}
const resetgame = () => {
   turn0 = true;
    enableboxes();
    // count = 0;
   msgContainer.classList.add("hide");

}
newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

//   boxes.forEach((box) =>
//       {
//           box.addEventListener("click", () =>{
//               count ++;
//               box.disabled =true;
//               if(count === 9 && !checkWinner())
//                   {
//                       showDraw();
//                   }
//           });
        
//       });
const showDraw = () => {
    console.log("the match is draw");
    draw.innerText = "OOps there is no winner here! Try again ";
    msgContainer.classList.remove("hide");
    // !checkWinner();
}