var helper;
(function (helper) {
    var language = (function () {
        function language() {
        }
        language.Greeting = "Bonjour!";
        return language;
    }());
    helper.language = language;
})(helper || (helper = {}));
console.log(helper.language.Greeting + "World!");
//# sourceMappingURL=main.js.map