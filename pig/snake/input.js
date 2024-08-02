let inputdirection = {x:0,y:1};
let lastinputdirection = {x:0,y:1};

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp" && lastinputdirection.y !== 0) {
        inputdirection={x:-1,y:0};
 }else if(event.key === "ArrowDown" && lastinputdirection.y !== 0){
    inputdirection = {x:1,y:0};
 }else if(event.key === "ArrowRight" && lastinputdirection.x !== 0){
    inputdirection={x:0,y:1};
 }else if(event.key === "ArrowLeft" && lastinputdirection.x !== 0){
    inputdirection={x:0,y:-1};
 }
})



const getinputdirection = () => {
    lastinputdirection= inputdirection;
    return inputdirection;
}
