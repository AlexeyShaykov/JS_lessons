function myHTML() {

    this.str = 'string1';
    this.count = 1;

    this.addText = function(str) {
        this.count++;
        this.str += str + this.count;
        return this;
    }
    this.between = function (i) {
        return i >= 1 && i <= 6;
    }
    this.addH = function(str,i) {
        if (this.between(i)) {
            this.str += '<h' + i + '>' + str + '</h' + i + '>';
        }
    }
    this.show = function() {
        return this.str;
    }

}

window.onload = function() {
    var obj = new myHTML();
    console.log(obj.str);
    obj.addText("string");
    console.log(obj.str);
    obj.addText("string");
    console.log(obj.str);
    obj.addH("string4",2);
    alert(obj.show());
}