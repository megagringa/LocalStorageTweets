//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listener

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click',borrarTweet);


    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
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
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.innerText);

        }


}

//Mostrar datos de localstorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetstLocalStorage();

    tweets.forEach(function(tweet) {
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

    });
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

//Comprueba que haya elementos en localstorage,retorna un arreglo
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


//Eliminar tweet del localstorage 

function borrarTweetLocalStorage(tweet);{

    let tweet, tweetBorrar;
    //Elimina la x del tweet
    tweetBorrar = tweet.substring(0 , tweet.length - 1);

    tweet = obtenerTweetstLocalStorage();

    tweets.forEach(function(tweet , index){
        if(tweetBorrar === tweet){
                tweet.splice(index, 1);
        }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

