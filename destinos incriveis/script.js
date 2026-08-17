let texto = document.getElementById("area");


function comprar()
{
    
    alert("bom dia, como posso te ajudar?");
}
    
function mudar()
{
    texto.textContent = "duvidas ";
}

function feedback()
{
    let area = document.getElementById("local");
    let userMsg = document.getElementById("nome").value;
    alert("bem vindo " + userMsg);
    let telefone = document.getElementById("telefone").value;
    alert("obrigado pela confirmaçao");
     let email = document.getElementById("caixatexto").value;
     alert("entraremos em contato");
     area.textContent = userMsg + " " + telefone + " " + email;

    
}

function soma()
    {
        let A = Number1(document.getElementById("numeroA").value);
        let B = Number2(document.getElementById("numeroB").value);
        alert(numero1 + numero2);
    }


function descontos()
{
    let preco = prompt("Bom dia com alegria, voce farà uma ótima opção de compra será no boleto á vista ou pix?");
    let desconto = preco * 0.5
    alert("O seu desconto é de: " + desconto)
}
    function verificaridade()
    {
        let idade = Number(document.getElementById("idade").value);

        if (idade >=18)
        {
            alert("Acesso permitido");
            }

            

            else if( idade < 18)
            {
                alert("Acesso Negado");
        }
        else
        {
            alert("nao permitido");

        }
    }
        
    






    

    





    

    
    

