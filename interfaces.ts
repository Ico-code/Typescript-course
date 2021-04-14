interface stark{
    name:string
}

function printName(stark){
    console.log(stark.name);
}
printName({name: "Edward"});
printName({lable:"joe"});