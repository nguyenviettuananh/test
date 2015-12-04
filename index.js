//Bai 1
function binhphuong(a) {
    return a * a;
}
document.write("<p>binh phuong cua 4 la : " + binhphuong(4));
//Bai 2
function tinh(a, b, c) {
    d = 3 * a + 2 * b - c;
    return binhphuong(d);
}
document.write("<p>binh phuong cua bieu thuc la : " + tinh(4, 5, 2));
//Bai 3
var b = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

function cut(a) {
    c = a.slice(0, 11);
    return c.concat("...");
}
document.write("<p>Xau duoc cat la: " + cut(b) + "</p>");
//Bai 4
function change(a) {
    b = a.toLowerCase();
    c = b.charAt(0);
    c = c.toUpperCase();
    d = b.slice(1);
    return c.concat(d);
}
document.write("<p>Xau moi la: " + change(b) + "</p>");
//Bai 6
var c = ["Lượng", "Nghĩa", "Tuấn Anh", "Dũng", "Kiên"];

function sortname(a) {
    b = a.sort();
    return b.toString();
}
document.write("<p>Danh sach : " + sortname(c) + "</p>");
//Bai 5
d = [3,3,5,546,54,7656,7,243,2343,24,235,5];
d.sort(function(a,b){return a-b;});
document.write("So nho nhat la: "+d[0]);
//Bai 7
var teacher = {
    firstName: "Kim",
    lastName: "Dung",
    age: 30,
    say: function(){}
}

var student = {
    firstName: "Quách",
    lastName: "Tĩnh",
    age: 30,
    say: function(){}
}

var parent = {
    firstName: "Hoàng",
    lastName: "Dung",
    age: 25,
    say: function(){}
}

var aboutMe = function(){
    "use strict";
    return "<p>Xin chào, tôi là "+this.firstName+" "+this.lastName+" . Năm nay tôi "+this.age+" tuổi.</p>";
}
teacher.say = aboutMe;
//teacher.say();
document.write(teacher.say());