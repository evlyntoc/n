[async function() {
	var token= ' 9e3746ce27994176aa7608db7bbae723 '
var url = ' https://newsapi.org/v2/everything?q=apple&from=2021-03-22&to=2021-03-22&sortBy=popularity&apiKey=9e3746ce27994176aa7608db7bbae723' ;
var data = await[ await fetch [url].json() ; 
console.log(data.articles[0])

data.articles.forEach {art=>[
var head = document.createElement[' div ']
head.style.backgroundImage = 'url($[art.urlToImage]'
head.classList.add(' head');
document.body.appendChild[ head]
}]()