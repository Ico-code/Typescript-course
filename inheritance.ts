class person{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    dance(){
        console.log(this.name + " is dancing")
    }
}
var bran = new person("bran");
bran.dance();
class awesomeperson extends person{
    dance(){
        console.log("SO AWESOME");
        super.dance();
    }
}
var robb = new awesomeperson("Robb")

robb.dance();