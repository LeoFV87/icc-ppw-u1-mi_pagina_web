
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
│
├── index.html
├── style.css
├── script.js
└── README.md
```

 * CAMBIAR SEGUN SU ESTRUCTURA

---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
COMLETAR
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
COMLETAR
```

---

### 3. Estilos aplicados con CSS

* COMLETAR LA TABLA

| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      |         |         |
| `header`                    | |
| `table`                     |                              |                  |
| `button`                    |                                   |   |
| `section`                   |                                        |          |
| `progress`                  | `accent-color: #007bff; width: 100%;`                          | Personalización de la barra de progreso |


**Ejemplo en el código:**

AGREGAR DOS EJEMPLOS DE SU CODIGO CSS

```css
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
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


## Capturas de pantalla del proyecto final

* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)

![alt text](<Captura de pantalla 2025-10-14 a la(s) 3.35.33 p. m..png>)

