let localDate = new Date();
const localDateDOM= document.querySelector("time");

/***** Display Date ******/ 
localDateDOM.innerHTML = localDate.toDateString();




// window.onload =  getnews();

    const newsHeadline = document.querySelector('.news-headline');
    const newsContent = document.querySelector('.news-content');
    const btn = document.querySelector('.read-more-btn');
    const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=G9k66bXLmyMt6vv61ul58QwnTAau9ItH';

    // make an Ajax request
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4){
            let news = JSON.parse(xhr.responseText)
            console.log(news);
            
            newsHeadline.innerHTML = news.results[5].title;
            newsContent.innerHTML = news.results[5].abstract;
        }
    };
    xhr.open('GET', url);
    xhr.send();
    

// Display Nav Bar
const nav = document.querySelector('.shownav');

function displayNav(){
    nav.style.display = 'block';
    console.log('hello')
}