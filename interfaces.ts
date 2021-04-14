interface stark{
    name:string;
    age?:number;
}

function printName(stark){
    console.log(stark.name);
}
printName({name: "Edward"});
printName({lable:"joe"});