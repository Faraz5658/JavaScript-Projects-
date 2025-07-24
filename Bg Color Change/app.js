function changeBg(){
    let color = ["black" , "blue" , "red"];
    document.body.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
}