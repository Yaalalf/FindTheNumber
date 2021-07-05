let values = [];
let randomNumber= Math.floor(Math.random()*100);
let count = 0;

const respuesta = document.querySelector("p:nth-of-type(2)");
const pista = document.querySelector("p:nth-of-type(3)");
const boton = document.querySelector("button");
const textbox = document.querySelector("input[type='text']");

textbox.focus();

function Comprobar()
{
    if(Number(textbox.value) != NaN && Number(textbox.value) !=undefined )
    {
        let currentCount = count;
        count++; 

        values.push(Number(textbox.value));
    
        respuesta.textContent+= " " + values[currentCount];
        pista.classList.remove("hidden");
        if(values[currentCount] > randomNumber)
        {
            pista.textContent = "El numero que escogiste es mayor";
            pista.classList.add("bad")
            textbox.value = "";
            textbox.focus() 
        }
        else if(values[currentCount] < randomNumber)
        {
            pista.textContent = "El numero que escogiste es menor";
            pista.classList.add("bad") 
            textbox.value = "";
            textbox.focus() 
        }
        else
        {
            pista.textContent = "Lo descubriste";
            pista.classList.add("good");
            pista.classList.remove("bad");
            textbox.value = "";
            textbox.focus() 
            GameOver();
        }

        if(count == 10)
        {
            pista.textContent = "Has Perdido";
            GameOver();
        }
        
    }
}

boton.addEventListener("click",Comprobar);

function GameOver()
{
    textbox.disabled = true;
    boton.removeEventListener("click", Comprobar);
    boton.addEventListener("click", Reset);
    boton.textContent = "Reiniciar";
}

function Reset()
{
    values = [];
    count = 0;
    randomNumber = Math.floor(Math.random()*100);
    respuesta.textContent = "Respuestas:";
    textbox.value = "";
    textbox.disabled = false;
    textbox.focus();
    pista.classList.add("hidden"); 
    boton.textContent = "Comprobar"
    boton.addEventListener("click",Comprobar);
    boton.removeEventListener("click",Reset); 
}
