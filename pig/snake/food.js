let food={x:5,y:18};
const expansion=1;

const updatefood = () => {
  if(onsnake(food)){
    expandsnake(expansion);
    food= getrandomfoodposition();
  }
}

const drawfood = (gameboard) => {
    const foodelement=document.createElement("div");
    
    foodelement.style.gridRowStart =food.x;
    foodelement.style.gridColumnStart=food.y;
    foodelement.classList.add("food");
    gameboard.appendChild(foodelement);
}
const getrandomfoodposition = () => {
    let newfoodposition = randomGridPosition();
    while(onsnake(newfoodposition)){
        newfoodposition=randomGridPosition();
    }
    return newfoodposition;

}