const isLogged = true;

function loginStatus (log){
    return new Promise((resolve, reject) => {
        if(log === true){
            const random = Math.random()
            resolve(random)
        } else {
            reject (new Error("User isn´t logged"))
        }
    })
}

function userInfo(status){
    return new Promise((resolve, reject) => {
        if(status > 0.5) {
            resolve({name: "John", age: 24})
        }else {
            reject(new Error("Status is not valid"))
        }
    })
}

loginStatus(isLogged)
    .then((res) => userInfo(res))
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


/*const promiseOne = new Promise((resolve, reject) => {
    if(isLogged){
        const random = Math.random()
        resolve(random)
    } else {
        reject (new Error("User isn´t logged"))
    }
})*/

