import { obtenerChiste } from "./http-providers";


const body = document.body;
let btnNuevo, olChiste;

const crearChistesHtmlPage = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Nuevo chiste</button>
    <ol class="mt-2 list-group">

    </ol>
    
    `
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olChiste = document.querySelector('ol');
    btnNuevo = document.querySelector('button') 

    btnNuevo.addEventListener('click', async() => {
        btnNuevo.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnNuevo.disabled = false;
    });

}

//Chiste {id, value}
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`

    olItem.classList.add('list-group-item');

    olChiste.append(olItem);
}

export const init = () => {
    crearChistesHtmlPage();
    eventos()
}