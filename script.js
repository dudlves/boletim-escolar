// const primeiroBimestre = 20;
// const segundoBimestre = 20;
// const terceiroBimestre = 20;
// const quartoBimestre = 20;
// const valorTotal = primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre




// const matematica = ;
// const portugues =18;
// const fisica = 12;
// const quimica = 20;
// const historia = 20;
// const geografia = 20;

// const primeiroBimestre = {
//     matematica : 20,
//     portugues :18,
//     fisica :12,
//     quimica : 20,
//     historia :20,
//     geografia : 0
// }

// const segundoBimestre = {
//     matematica : 20,
//     portugues :18,
//     fisica :12,
//     quimica : 20,
//     historia :20,
//     geografia : 10
// }

// const terceiroBimestre = {
//     matematica : 20,
//     portugues :18,
//     fisica :12,
//     quimica : 20,
//     historia :20,
//     geografia : 10
// }

// const quartoBimestre = {
//     matematica : 20,
//     portugues :18,
//     fisica :12,
//     quimica : 20,
//     historia :20,
//     geografia : 3
// }

// const matematica = (primeiroBimestre.matematica + segundoBimestre.matematica + terceiroBimestre.matematica + quartoBimestre.matematica) 
// const portugues = (primeiroBimestre.portugues + segundoBimestre.portugues + terceiroBimestre.portugues + quartoBimestre.portugues) 
// const fisica = (primeiroBimestre.fisica + segundoBimestre.fisica + terceiroBimestre.fisica + quartoBimestre.fisica) 
// const quimica = (primeiroBimestre.quimica + segundoBimestre.quimica + terceiroBimestre.quimica + quartoBimestre.quimica)
// const historia = (primeiroBimestre.historia + segundoBimestre.historia +terceiroBimestre.historia + quartoBimestre.historia)
// const geografia= (primeiroBimestre.geografia + segundoBimestre.geografia +terceiroBimestre.geografia + quartoBimestre.geografia)

// if(matematica >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }
 
// if(portugues >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }
 
// if(fisica >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }
 
// if(quimica >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }

// if(historia >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }
 
// if(geografia >= 60){
//     console.log("Você passou!")
// }else{
//     console.log("Você não passou!")
// }
 



// if(resultado){
//     document.getElementById('resultado').innerHTML = eval(resultado)
// }

// input.addEventListener("keypress", function(event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter") {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("myBtn").click();
//     }
//   });
    
 
// var numero = document.getElementById('numero').innerHTML
// var resultado= document.getElementById('resultado').innerHTML 


// function soma(){
//     var numero = document.getElementById('numero')
//    var valorDoNumero= numero.value 
// }




function clicar( num1, num2, num3, num4) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var num3 = document.getElementById('numero3').value;
    var num4 = document.getElementById('numero4').value;

   
   
    var soma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
    var resultado = document.getElementById('resultado').innerHTML = eval(soma);
  
}

