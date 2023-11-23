const allTools = document.querySelectorAll(".tool");
const selectUser = document.querySelector(".selectUser");
const selectPC = document.querySelector(".selectPC");
const result = document.querySelector(".result");
let userScore = document.querySelector(".userScore");
let pcScore = document.querySelector(".PCScore");
const tools = ["stone", "paper", "scissors"];
let userCount = 0;
let pcCount = 0;
const oneMoreTime = document.querySelector(".oneMoreTime")
const reset = document.querySelector(".reset")

for (let i = 0; i < allTools.length; i++) {
  allTools[i].addEventListener("click", () => {
    selectUser.innerText = allTools[i].innerText;
    selectPC.innerText = tools[randomNum()];
    winLostCondition();
    disableBtn();
  });
}

const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

const winLostCondition = () => {
  if (selectUser.innerText == selectPC.innerText) {
    result.innerHTML = "TRY AGAIN";
    setTimeout(() => {
        selectUser.innerText = "😁" 
        selectPC.innerText = "😁"
    }, 1500);
    
  } else if (selectUser.innerText == "scissors") {
    if (selectPC.innerText == "paper") {
      result.innerHTML = "WIN";
    } else {
      result.innerHTML = "LOST";
    }
  } else if (selectUser.innerText == "stone") {
    if (selectPC.innerText == "paper") {
      result.innerHTML = "LOST";
    } else {
      result.innerHTML = "WIN";
    }
  } else if (selectUser.innerText == "paper") {
    if (selectPC.innerText == "stone") {
      result.innerHTML = "WIN";
    } else {
      result.innerHTML = "LOST";
    }
  }

  if (result.innerHTML != "TRY AGAIN") {
    if (result.innerHTML == "WIN") {
      userCount = ++userCount;
      console.log(userCount);
      userScore.innerText = userCount;
      bgAndOpa(selectUser, selectPC);
    } else {
      pcCount = ++pcCount;
      console.log(pcCount);
      pcScore.innerText = pcCount;
      bgAndOpa(selectPC, selectUser);
    }
  }
  if (result.innerHTML == "LOST") {
    document.querySelector(".pcWin").style.display = "block"
  }
  if (result.innerHTML == "WIN") {
    document.querySelector(".userWin").style.display = "block"
  }
};

const bgAndOpa = (winner, loser) => {
  setTimeout(() => {
    winner.style.backgroundColor = "green";
    loser.style = `
    background-color: red;
    opacity: .5;
    `;
  }, 1000);
};

const disableBtn = () => {
  for (let i = 0; i < allTools.length; i++) {
    allTools[i].disabled = true;
  }
};
const enableBtn = () => {
  for (let i = 0; i < allTools.length; i++) {
    allTools[i].removeAttribute("disabled");
  }
};

const oneMoreFunc = () => {
    selectUser.innerText = ""
    selectPC.innerText = ""
  selectUser.style = `
    background-color: none;
    opacity: 1;
    `;
  selectPC.style = `
    background-color: none;
    opacity: 1;
    `;
    enableBtn()
    document.querySelector(".pcWin").style.display = "none";
    document.querySelector(".userWin").style.display = "none";

    result.innerText = "⚔️"

};

oneMoreTime.addEventListener("click",()=>{
    oneMoreFunc()
})
reset.addEventListener("click",()=>{
    oneMoreFunc()
    userCount = 0;
    pcCount = 0;
    userScore.innerText = 0
    pcScore.innerText = 0
})