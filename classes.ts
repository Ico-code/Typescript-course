class stark{
    name:string;
    static castle: string = "Winterfell!"
    saying:string;
constructor(){
    this.saying = "Winterfell!";
}
hello(person:string){
    console.log("Hello, " + person)
}
}
var ned = new stark();

ned.saying = "winter is coming";

ned.hello("Robert");