{/* <section class="hacer">
            <h2>Que Hacer</h2>
            <div class="contenedor-cards">
                    <div class="card">
                        <img src="img/hacer1.jpg">
                        <div class="info">
                            <p class="categoria concierto">concierto</p>
                            <p class="titulo">Música electrónica 2021</p>
                            <p class="precio">$1,200 por persona</p>
                        </div>
                    </div>  */}

//Creamos la imagen(img) con createElement
// const imagen = document.createElement('img');
// imagen.src = 'img/newyork4.jpg';
// imagen.alt = 'Foto Nueva York';

// //creamos los 3 párrafos(p)
// const parrafo1 = document.createElement('p');
// parrafo1.classList.add('categoria', 'concierto');
// parrafo1.textContent = 'Prueba';
// const parrafo2 = document.createElement('p');
// parrafo2.classList.add('titulo');
// parrafo2.textContent = 'Curso Javascript';
// const parrafo3 = document.createElement('p');
// parrafo3.classList.add('precio');
// parrafo3.textContent = '$1000 por persona';

// //creamos div con la clase info

// const divInfo = document.createElement('div');
// divInfo.classList.add('info');

// //Asignar los parrafos dentro del div info
// divInfo.appendChild(parrafo1);
// divInfo.appendChild(parrafo2);
// divInfo.appendChild(parrafo3);

// //creamos el divCard para insertar la imagen y el divInfo
// const divCard = document.createElement('div');
// divCard.classList.add('card');
// divCard.appendChild(imagen);
// divCard.appendChild(divInfo);

// const contenedor = document.querySelector('.contenedor-cards');

// contenedor.appendChild(divCard);

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('#footer');

btnFlotante.addEventListener('click', mostrarFooter)

function mostrarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
        btnFlotante.classList.remove('fondoAzul');
    } else {
        footer.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
        btnFlotante.classList.add('fondoAzul');
    }
}