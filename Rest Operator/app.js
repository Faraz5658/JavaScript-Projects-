function sum (name,...agrs){
    console.log(arguments);
    console.log(`HELLO $(name) : `);

    let sum = 0;
    for (let a in agrs){
        sum += agrs[a];
    
    }
    console.log(sum + "<br>")

}
sum ("FARAZ",23,34,45,56);
sum ("AHMAD",23,34,45,56);