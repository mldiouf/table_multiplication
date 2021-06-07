
function multiplications(){
    entrer = Number(document.getElementById("nbr1").value);
    if(entrer >= 0){
        document.getElementById('table').innerHTML= "";
    for (i=1; i<=10; i++) {
    rep=entrer*i;
    document.getElementById('table').innerHTML+= " " + entrer+ "x" +i+" = "+rep + "<br>";
    }
     }else{
        eleman.setAttribute("disabled", false);
        eleman.setAttribute("editable", true);
        eleman.setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
      //alert("Veuilez entrer un nombre positif");
     }
}
function decrementer(){
    var valeur =(document.getElementById('nbr1').value);
   valeur--;
   document.getElementById('nbr1').value= valeur;
}

function incrementer(){
    var valeur =(document.getElementById('nbr1').value);
    valeur++;
    document.getElementById('nbr1').value= valeur;
}

function clean(){
    document.getElementById('table').innerHTML= "";
}