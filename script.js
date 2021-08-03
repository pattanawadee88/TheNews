let localDate = new Date();
const localDateDOM= document.querySelector("time");

/***** Display Date ******/ 
localDateDOM.innerHTML = localDate.toDateString();

// Display Nav Bar
const nav = document.querySelector('.shownav');

function displayNav(){
    nav.style.display = 'block';
    console.log('hello')
}


// window.onload =  getnews();
const newsHeadline = document.querySelector('.news-headline');
const newsContent = document.querySelector('.news-content');
const newsImg = document.querySelector('.news-img');
const btn = document.querySelector('.read-more-btn');
const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=G9k66bXLmyMt6vv61ul58QwnTAau9ItH';

// make an Ajax request
function requestData(){
    return new Promise((resolve,reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(){
            if(xhr.readyState ===4){
                let data = JSON.parse(xhr.responseText)
                resolve(data);
            }else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = ()=> reject(Error('A network error occured'));
        xhr.send();
    });
} 
// A news generate HTML function
function generateNewsHTML(){
   
}   
requestData()
    .then( data => {
    newsHeadline.innerHTML = data.results[5].title;
    newsImg.src = data.results[5].multimedia[0].url;
    newsContent.innerHTML = data.results[5].abstract;

     console.log(data)})
     .catch( err => console.log(err))

    

