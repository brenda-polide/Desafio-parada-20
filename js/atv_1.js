function calcular_media(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let text ="";
    let med;

    med = (n1+n2+n3)/3

    if(med<6){
        text = "Sua média é "+med.toFixed(0)+" e você está reprovado.";
    }
    else{
        text = "Sua média é "+med.toFixed(0)+" e você está aprovado.";
    }

    document.getElementById("teste").innerHTML = text;

}