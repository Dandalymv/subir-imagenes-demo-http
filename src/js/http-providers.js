const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 's1feg0mu';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dy4nswjix/upload';

const obtenerChiste = async() =>{

    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw'No se  pudo realizar la peticion';
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};
        
    } catch (error) {
            throw error;
    }   
}

const obtenerUsuarios = async() => {

    const respuesta = await fetch(urlUsuarios);
    const {data: usuarios} = await respuesta.json();

    return usuarios;
}


const subirImagen = async(file) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file)

    try {
        
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }


//     formdata.append("upload_preset", "s1feg0mu");
// formdata.append("file", fileInput.files[0], "/C:/Users/d.morales/Downloads/logo-big.png");

// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.cloudinary.com/v1_1/dy4nswjix/upload", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
};