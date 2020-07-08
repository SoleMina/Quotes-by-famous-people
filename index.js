
// Declaring variables

var quoteText = document.querySelector(".quote");
var authorName = document.querySelector(".author");
var btnQuote = document.querySelector(".quoteBtn");
var imgAuthor = document.querySelector(".img-author");


var quoteList = [
		'“The purpose of our lives is to be happy.”',
		'“Never let the fear of striking out keep you from playing the game.”',
		'“The big lesson in life, baby, is never be scared of anyone or anything.”',
		'“Life is like riding a bicycle. To keep your balance, you must keep moving.”',
		'“Turn your wounds into wisdom.”',
		'“Life is a succession of lessons which must be lived to be understood.”',
		'“Keep smiling, because life is a beautiful thing and there’s so much to smile about.”',
		'“Life shrinks or expands in proportion to one’s courage.”'
    ];

var authorList = [
		"Dalai Lama",
		"Babe Ruth",
		"Frank Sinatra",
		"Albert Einstein",
		"Oprah Winfrey",
		"Helen Keller",
		"Marilyn Monroe",
		"Anais Nin"
   ];

 var imgList = [
       "dalai.jpg",
       "babe.jpg",
       "sinatra.jpg",
       "albert.jpg",
       "oprah.jpg",
       "keller.jpg",
       "marilyn.jpg",
       "anais.jpg"
 ];

btnQuote.addEventListener("click", changeQuote);

function changeQuote() {
	var randomNumber = Math.floor(Math.random() * quoteList.length);
	quoteText.innerHTML = quoteList[randomNumber];
	authorName.innerHTML = authorList[randomNumber];
	imgAuthor.setAttribute("src", "images/" + imgList[randomNumber]);
}