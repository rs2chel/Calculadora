

// Mostra os dados digitados pelo usuário
function screenInput(inputUser){
    let screen = document.getElementById("showResult");
    screen.value += inputUser;
}


function checkInput(inputUser) {
    let operations = ["+", "-", "/", "*"];
    let screen = document.getElementById("showResult");
    let lastValue = screen.value.charAt(screen.value.length - 1);
    let screenValue= screen.value

   
    // Caso o usuário queira adicionar "."
    if (inputUser === ".") {
        // Verifica se já existe um ponto na última parte da expressão (após um operador ou no início)
        let position = screenValue.split(/[\+\-\*\/]/); // Divide a expressão por operadores
        let lastPosition = position[position.length - 1];

        if (lastPosition.includes(".")) {
            return; // Se já tem um ponto na última parte, impede outro
        }
        // Permite adicionar ponto após um número ou se a expressão estiver vazia
        if (screenValue === "" || operations.includes(lastValue)) {
            screen.value += "0."; // Adiciona 0 antes do ponto se for o início
        } else {
            screenInput(inputUser) // Adiciona ponto normalmente
        }
        return;
    }

    if(screen.value==="Error!" || screen.value==="Infinity"){
        screen.value=""
    }

    if (operations.includes(lastValue) && operations.includes(inputUser)) {
        screen.value = screen.value.slice(0, -1) + inputUser;
        return; // Evita adicionar operadores repetidos
    }
    else {
        // Adiciona o valor ao visor
        screenInput(inputUser)
    }
}

// Apaga o ultimo numero dos numeros digitados, caso for error ou infinity ao digitar para apagar limpa o valor todo 
function deletelast() {
    let screen = document.getElementById("showResult");
    if (!screen) return; // Prevenir erro se o elemento não for encontrado

    let key = screen.value;

    // Se for "Error!" ou "Infinity", limpa o screen completamente
    if (key === "Error!" || key === "Infinity") {
        screen.value = "";
    } else {
        screen.value = key.slice(0, -1); // Remove o último caractere
    }
}

// Limpando o conteudo do input 
function clean(){
    document.getElementById("showResult").value ="";
};

// Tenta resolver a operação, se nao for possivel apresenta  Error!
function operation(){    
    if(document.getElementById("showResult").value ===""){
        return
    }
        
    try{
        let expression = document.getElementById("showResult").value
        let result = eval(expression)
        document.getElementById("showResult").value = result
    }
    catch(x){
        document.getElementById("showResult").value = "Error!"
    }
};

// controle de operacao, se for C, + ou seta chama as funcões de cada uma e nao mostra na tela 
// caso nao for nenhum desse mostra o que foi clicado  
function operationControl(userClick){

    switch(userClick.target.innerText){
        case "C":
            clean()
            break;
        case "=":
            operation()
            break; 
        case "←":
            deletelast()
            break;
        default:
            checkInput(userClick.target.innerText)
        }
    //Remover o foco do botão após o clique
     userClick.target.blur();
    
    //Devolve o foco para o input
     document.getElementById("showResult").focus();
};



// Se tiver um evento de clique dentro do elemento com id "mainContent", e se a funcao clique ocorreu em uma tag BUTTON então chama a função 
document.getElementById("mainContent").addEventListener("click", function(event){
    if(event.target.tagName=="BUTTON"){
        operationControl(event)
    }
});


// se o usuario apertar o enter confirma os dados e chama a funcao para somar 

document.getElementById("showResult").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o foco em botões
        operation(); // Chama a função para calcular
    } else if (event.key === "Backspace") {
        event.preventDefault(); // Evita comportamento padrão duplicado
        deletelast();
    } else {
        event.preventDefault(); // Bloqueia entrada direta
        UserInput(event.key);
    }
});



// verifica o input o do usuario pelo teclado, se for string apaga
// se nao for chama 
function UserInput(userInput) {
    let operations = ["+", "-", "/", "*", "←", ".", "Backspace"];
  
    // Verifica se a entrada é um número ou um operador permitido
    if (!isNaN(userInput) || operations.includes(userInput)) {
       checkInput(userInput)
    }
}

document.getElementById("openKeybord").addEventListener("change", function(event) {
    if(event.target.checked){
        document.getElementById("keyboard").style.display="block"
        return
    }
    document.getElementById("keyboard").style.display="none"
});

