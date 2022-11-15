const notes1 = document.getElementById("note1");
const notes2 = document.getElementById("note2");
const notes3 = document.getElementById("note3");
const p = document.getElementById("response");
const button = document.getElementById("enter");

button.addEventListener("click", validateNotes);

function calculateNotes(){
    return (Number(notes1.value) * 0.30) + (Number(notes2.value) * 0.30) + (Number(notes3.value) * 0.40);
}

function validateNotes(){
    let end = calculateNotes();
    if(end > 4.5 && end <=5.0){
        alert(end +" nota final")
        response.textContent =  "Excelente";
    }else if (end >= 3.5 && end <=4.5){
        alert(end +" nota final")
        response.textContent = "Buena";
    }else if (end >=2 && end <3.5){
        alert(end +" nota final")
        response.textContent = "Perdio pero puede recuperar"; 
    }else {
        response.textContent = "Perdio y tendra que repetirla";
    }
}

notes2.addEventListener("keyup", resultnote3);

function calculateNotesEnd(){
    return (3.5-(notes1.value*0.3)-(notes2.value*0.3))/0.4;   
}

function resultnote3(){
    if(calculateNotesEnd() >= 5.1){
     alert("Perdio la materia y no se puede salvar ");
    }else{
      alert("Para pasar la materia, debe sacar una nota igual o mayor a " +calculateNotesEnd()+ " en su tercera nota");
    }
  }

 