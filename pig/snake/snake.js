const snakespeed=5;
const snakeBody=[
    {x:11,y:11},
    {x:11,y:10},
    {x:11,y:9},
];

const updatesnake = () => {
  for(let i = snakeBody.length-2;i>=0;i--){
    snakeBody[i+1]={...snakeBody[i]};
  }
  const snakedirection = getinputdirection();
  snakeBody[0].x+=snakedirection.x;
  snakeBody[0].y+=snakedirection.y;
}

const drawsnake = (gameboard) => {
  for(let i=0;i<snakeBody.length;i++){
    const segment=snakeBody[i];
    const snakeelement=document.createElement("div");
    snakeelement.style.gridRowStart =segment.x;
    snakeelement.style.gridColumnStart=segment.y;
    snakeelement.classList.add("snake");
    gameboard.appendChild(snakeelement);
}
}
const onsnake = (position) => {
    for(let i=0;i<snakeBody.length;i++){
        if(equalpositions(snakeBody[i],position)){
            return true;
        }
    }
    return false;
}

const equalpositions = (pos1,pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const expandsnake = (amount) => {
    for(let i=0;i<amount;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
}

const isgameover = () => {
    return issnakeoutofbounds()||issnakeeatself();
}

const issnakeoutofbounds = () => {
    return isoutofbounds(snakeBody[0]);
}

const issnakeeatself = () => {
    const snakehead=snakeBody[0];
    for(let i=1;i<snakeBody.length;i++){
        if(equalpositions(snakeBody[i],snakehead)){
            return true;
        } 
        return false;
    }
    }