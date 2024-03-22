const sendData = async () => {

    const postedBody = {
        title : 'El supertitulo',
        body : 'Y esto es un body del titulo ese tan guapo',
        userID: 10
    }

    const posted = await fetch ("https://jsonplaceholder.typicode.com/posts" , {
        method : 'POST',
        body : JSON.stringify(postedBody),
        headers: {
            'content-type' : 'application/json; charset=UTF-8'
        } 
    })
    const postedJSON = await posted.json()
    console.log(postedJSON);
}

sendData();
