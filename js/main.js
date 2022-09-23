
function resultado() {
  
  for (let i = 0; i <=2; i++){
    if (document.getElementById('p11').checked==true) {
      i = 2;  
      alert("ACERTASTE");
      alert("pasa a la siguiente pregunta"); 
      window.location = './index2.html';}
    else if(i == 2){alert("pasa a la siguiente pregunta"); window.location = './index2.html';}
    else { alert("Erraste PETE");document.getElementById('p12' && 'p13' && 'p14').checked=false; }
    
  }}

  //document.getElementById('p12' && 'p13' && 'p14').checked=false;

    //nota=p1;
    //alert("ACERTASTE PETE");
    //window.location = './index2.html'




// function resultado2() {
//   var p2, nota;

//   // 1a pregunta
//   if (document.getElementById('p21').checked==true) {p2=1}
//   else {p1=0}
  

//   nota=p2;
//   alert(" Aciertos: " + nota);
//   window.location = './index.html'
// 