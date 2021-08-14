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
const newsContainer = document.querySelector('.news-container');
// make an Ajax request
function requestData(){
    return new Promise((resolve,reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(){
            if(xhr.readyState ===4){
                let data = JSON.parse(xhr.responseText)
                resolve(data);
                console.log(data);

            }else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = ()=> reject(Error('A network error occured'));
        xhr.send();
    });
} 
// A news generate HTML function
function generateNewsHTML(data){
    
    for(let i = 0; i < data.results.length; i++){
        //create section node
        let nodeSection = document.createElement("SECTION"); 
        nodeSection.setAttribute("class", "news-container");
        document.body.appendChild(nodeSection);
        //create image node
        let nodeImg = document.createElement("IMG");  
        nodeImg.setAttribute('class','news-img');
        nodeImg.setAttribute('src', data.results[i].multimedia[0].url )
        nodeSection.appendChild(nodeImg);
        //create header node
        let newsheadline = document.createElement("HEADER");   
        newsheadline.setAttribute("class","news-headline")          
        let newsheader = document.createTextNode(data.results[i].title); 
        newsheadline.appendChild(newsheader);                                          
        nodeSection.appendChild(newsheadline);
        //create article node
        let nodeArticle = document.createElement("ARTICLE"); 
        nodeArticle.setAttribute("class","news-content")                       
        let articleText = document.createTextNode(data.results[i].abstract); 
        nodeArticle.appendChild(articleText);                                          
        nodeSection.appendChild(nodeArticle);
        //create button node
        let nodeBtn = document.createElement("button"); 
        nodeBtn.setAttribute("class","read-more-btn");
        nodeBtn.innerHTML = "Read more";
        nodeSection.appendChild(nodeBtn);
    }
    
}   
requestData()
    .then( data => {
        generateNewsHTML(data)
    
    })
     .catch( err => console.log(err))

    

