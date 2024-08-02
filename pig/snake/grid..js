const gridsize=21;

const randomGridPosition = () => {
    return{
        x:Math.floor(Math.random() * gridsize) +1,
        y:Math.floor(Math.random() * gridsize) +1
    }
}

const isoutofbounds = (position) => {
   return position.x<1||position.x>gridsize||position.y<1||position.y>gridsize;
}