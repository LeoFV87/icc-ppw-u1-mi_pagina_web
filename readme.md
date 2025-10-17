
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Leo Vásconez
**Repositorio:** [https://github.com/LeoFV87/icc-ppw-u1-mi_pagina_web](https://github.com/LeoFV87/icc-ppw-u1-mi_pagina_web)
**Página desplegada (GitHub Pages):** [https://leofv87.github.io/icc-ppw-u1-mi_pagina_web](https://leofv87.github.io/icc-ppw-u1-mi_pagina_web)

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para insertar imagenes a traves de enlaces | Logo de la UPS con `<figcaption>` |
| `<aside>` | Seccion con contenido secuendario | Ingreso información del contexto academico del trabajo |

**Código usado:**
```html
<h2>Etiquetas nuevas exploradas</h2>
            <p>Estas son dos etiquetas que aprendí de la tabla periódica HTML5:</p>

            <h3>Ejemplo Figure</h3>
            <figure>
                <img
                    src="https://c0.klipartz.com/pngpicture/21/61/gratis-png-universidad-politecnica-salesiana-educacion-superior-universidad-don-bosco-campus-de-estudios-de-posgrado.png"
                    alt="Logo de la UPS"
                    width="100"
                >
                <figcaption>Logo de la Universidad politecnica Salesiana</figcaption>
            </figure>

            <h3>Ejemplo Aside</h3>
            <aside>
                <h4>Contexto Académico</h4>
                <p>Trabajo para la materia Programación y Plataformas Web (Ing. Ciencias de la Computación, UPS).</p>
            </aside>
```


---

#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
├── antesydespuesimagen.jpeg
├── index.html
├── readme.md
├── script.js
└── style.css
```


---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
<link rel="stylesheet" href="style.css">
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="script.js"></script>
```

---

### 3. Estilos aplicados con CSS

| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      | `background-color: #f1f1f1; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0;` | Da color al fondo, defino el tipo de letra, etc |
| `header`                    | `background-color: #e6d32d;color: #000000;text-align: center;padding: 30px 20px;`   | Es el encabezado, asigno un color al fondo, a la letra, su alineación|
| `h2`                        | `color: #000000;border-bottom: 3px solid #800d00;padding-bottom: 15px;`                          | Personalización de titulo h2 |
| `table`                     | `border-collapse: collapse;width: 100%;`                         | Une bien los bordes de la tabla y le ajusta su tamaño horizontal |
| `th, td`                    | `border: 1px solid #dddddd;padding: 12px;text-align: left;`                          | Define como seran las celdas de las tablas y las estiliza |
| `button`                    | `background-color: #3498db;color: white;border-radius: 5px;cursor: pointer;padding: 10px 20px;border: none;font-size: 16px;`|  Da más vida al botón cambiando su color, de su texto, etc |
| `section`                   | `margin: 25px;padding: 20px;border-radius: 8px;box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);`  | Coloca de mejor manera el contenido general de la pagina  |
| `img`                       | `max-width: 100%;height: auto;border-radius: 8px;box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);margin: 15px 0;display: block;`                          | Agrego mas detalles a la imagen ingresada con figure |
| `footer`                    | `background-color: #e6d32d;color: #000000;text-align: center;padding: 20px;margin-top: 40px;border-top: 4px solid #800d00;`                          | Personaliza el pie de pagina |



**Ejemplo en el código:**

```css
img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    margin: 15px 0;
    display: block;
}

footer {
    background-color: #e6d32d;
    color: #000000;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    border-top: 4px solid #800d00;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. **Agregar una nueva fila a la tabla al presionar el botón**

   ```javascript
   document.getElementById("agregarFila").addEventListener("click", () => {
     const tabla = document.querySelector("table");
     const nuevaFila = tabla.insertRow();
     nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
   });
   ```

2. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "orange";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "white";
   });
   ```

3. **Dar un mensaje de ALERTA al presionar un botón**
   
 ```javascript
   const botonAlerta = document.getElementById("mostrarAlerta");

   if (botonAlerta) {
    botonAlerta.addEventListener("click", () => {
        alert("ALERTA! ALERTA!");
    });
   } else {
    console.error("Error: No se encontró el botón con ID 'mostrarAlerta'.");
   }
   ```
   


## Capturas de pantalla del proyecto final


![alt text](<antesydespuesImagen.jpeg>)

