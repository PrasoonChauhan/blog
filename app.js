
const apiKey = "d864cc922a684b31a7a455b523bf3a55";
const blogContainer = document.querySelector(".blogContainer");
const searchingBox = document.querySelector(".searching");
const searchBut = document.querySelector(".searchBut");

searchBut.addEventListener("click",async()=>{
   const query =  searchingBox.value.trim();
   if(query != "")
   {
const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`;
const response = await fetch(url);
const data = await response.json();

cardDisplay(data.articles);
   }
});
function cardDisplay(articles)
{
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const div = document.createElement("div");
        div.classList.add("blogCard");
        const image = document.createElement("img");
        image.src = article.urlToImage;
        image.alt = "can't load image";

        const title = document.createElement("h2");
        const truncatedTitle = 
        article.title.length > 30 ? article.title.slice(0,30)+"..." : article.title;

        title.textContent = truncatedTitle;

        const description = document.createElement("p");
        description.textContent = article.description;
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(description);
        blogContainer.appendChild(div);
        div.addEventListener("click",()=>{
            window.open(article.url,"_blank");
        });

    });

}



async function apiFetching()
{
 const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
const response = await fetch(url);
const data = await response.json();
console.log(data.articles);
cardDisplay(data.articles);

}


apiFetching();