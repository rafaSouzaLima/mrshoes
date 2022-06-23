function enviar()
{
    var senha = document.getElementById("senha").value;
    var confirmacao = document.getElementById("confirmacao").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var endereço = document.getElementById("endereco").value;
    var complemento = document.getElementById("complemento").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var cep = document.getElementById("estado").value;
    


    if(senha != confirmacao)
    {
        alert("Passwords do not match!");
        alert("Type it again")
    }
    else if (nome == "")
    {
        alert("Enter the name");
    }
    else if (endereço == "")
    {
        alert("Enter the adress");
    }
    else if (cidade == "")
    {
        alert("Enter the city");
    }
    else if (estado == "")
    {
        alert("Enter the state");
    }
    else if (cep == "")
    {
        alert("Enter the CEP");
    }
    else if (email == "")
    {
        alert("Enter E-mail");
    }
    else
    {
        alert("Completed registration");
        document.getElementById('return').innerHTML = (nome + " obrigado por fazer seu cadastro conosco.")
    } 
}
