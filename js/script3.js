/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("cl").onmouseover = function() {mouseOver()};
document.getElementById("cl").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("cl").style.color = "green";
}

function mouseOut() {
    document.getElementById("cl").style.color = "black";
}
