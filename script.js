

/*Codigo que agrega una nueva fila a la tabla*/ 
document.getElementById("agregarFila").addEventListener("click", () => {
  const tabla = document.querySelector("table");
  const nuevaFila = tabla.insertRow();
  nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
});

/*Codigo que cambia el color de titulo al pasar el mouse*/
const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "orange";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "white";
});


/*Codigo de boton de alerta que se ejecuta al presionar el boton*/ 

const botonAlerta = document.getElementById("mostrarAlerta");

if (botonAlerta) {
    botonAlerta.addEventListener("click", () => {
        alert("ALERTA! ALERTA!");
    });
} else {
    console.error("Error: No se encontró el botón con ID 'mostrarAlerta'.");
}

