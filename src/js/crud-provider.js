const urlCRUD = 'https://reqres.in/api/users';

const getUser = async( id ) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;

};

const createUser = async(usuario) => {
    const resp = await fetch(urlCRUD,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();

}

const updateUser = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();

}

const deletUser = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {
        method:'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No encontrado' ;

}


export {
    getUser,
    createUser,
    updateUser,
    deletUser
}