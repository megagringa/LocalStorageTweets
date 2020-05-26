//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listener

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click',borrarTweet);

}

//Funciones




//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault('Formulario enviado');
    // leer el valor de text area
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadir contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar el tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);

   
}

//Elimina el tweet del doom
function borrarTweet(e){
        e.preventDefault();
        if(e.target.className === 'borrar-tweet'){
            console.log(e.target.parentElement.remove());
            alert('Tweet eliminado');
        }


}

//Agrega Tweet a LocalStorage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetstLocalStorage();
    //añadir el nuevo tweet
    tweet.push(tweet);
    //Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
    
}

function obtenerTweetstLocalStorage(){
        let tweets;
        //revisamos los valores de localstorage
        if(localStorage.getItem('tweets') === null){
            tweets = [];
            }else{
                tweets = JSON.localStorage.getItem('tweets');
            }
            return tweets;
}