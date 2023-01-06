let vert = document.getElementById("vert");
    let rouge = document.getElementById("rouge");
    let bleu = document.getElementById("bleu");

    let d1 = document.getElementById("text");
 
    vert.addEventListener("click", () => {
     document.getElementById("text").style.color = "green";
    })

    rouge.addEventListener("click", () => {
     document.getElementById("text").style.color = "red";
    })
    
    bleu.addEventListener("click", () => {
     document.getElementById("text").style.color = "blue";
    })