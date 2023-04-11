//// Eventos //////////////////////////////
///////// Validando o formulário ////////////////////


const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const subtmiB = document.querySelector("#submitbutton");
const erromessage = document.querySelector(".msg");
const items = document.querySelector(".items");


subtmiB.addEventListener("click", function(e){
    e.preventDefault();
    const namevalue = nameinput.value;
    const emalvalue = emailinput.value;
    if(namevalue == '' || emaivalue == ''){
        return alert("Preencha os campos todos, é obrigatório");
    //////////////////// OU ///////////////////////////////
        erromessage.textContent = "Por favor preencha os campos obrigatórios";
        erromessage.classList = "error"; //Esse error é uma propriedade que foi ou tem que ser declarad no CSS com os valores ou atributos. 
        setTimeout(() => {
            erromessage.textContent = "";
            erromessage.classList = "";
        }, 3000);
        return;
    }
    const li = document.createElement("li");
    li.classList = "items";
    li.innerHTML = `Nome: ${namevalue} <br /> Email: ${emaivalue}`
    items.appendChild(li);

    nameinput.value = "";
    emailinput.value = "";
});

