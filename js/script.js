/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
document.formularioContacto.nombre.focus();
document.formularioContacto.addEventListener('submit', validarFormulario);
}
window.onload = function () {
document.formularioContacto.apellido.focus();
document.formularioContacto.addEventListener('submit', validarFormulario);
}
function validarFormulario(evObject) {
evObject.preventDefault();
var todoCorrecto = true;
var formulario = document.formularioContacto;
if (isNaN(formulario.edad.value)==true || /^[1-9]\d$/.test(formulario.edad.value)==false ) {alert ('Edad no valida'); todoCorrecto=false;
}

