String.prototype.addToElement = function(el,cl) {
    return "<" + el + " class='" + cl + "'>" + this + "</" + el + ">";
};
String.prototype.repeat = function(times) {
    return new Array(times + 1).join(this);
};

window.onload = function() {
    var str = 'Hello word';
    console.log(str.addToElement("div","red"));
    alert(str.repeat(3));
}