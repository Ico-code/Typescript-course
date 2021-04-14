var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return person;
}());
var bran = new person("bran");
bran.dance();
var awesomeperson = /** @class */ (function (_super) {
    __extends(awesomeperson, _super);
    function awesomeperson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    awesomeperson.prototype.dance = function () {
        console.log("SO AWESOME");
        _super.prototype.dance.call(this);
    };
    return awesomeperson;
}(person));
var robb = new awesomeperson("Robb");
robb.dance();
