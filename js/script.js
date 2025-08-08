
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/
'use strict'
 
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
     /* remove class 'active' from all article links  */
  activeLink.classList.remove('active');
}
  /* add class 'active' to the clicked link */
console.log ('clickedElement:', clickedElement);
clickedElement.classList.add('active');

const activeArticles = document.querySelectorAll('.post.active');

for(let activeArticle of activeArticles){
    /* remove class 'active' from all articles */
  activeArticle.classList.remove('active');
}
  /* get 'href' attribute from the clicked link */
 
const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(articleSelector);
  /* add class 'active' to the correct article */

targetArticle.classList.add('active');
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = ".post-tags .list"

function generateTitleLinks(){
  /* remove contents of titleList */
const titleList = document.querySelector(optTitleListSelector);

titleList.innerHTML = '';
let html = '';

const articles = document.querySelectorAll(optArticleSelector);
/* for each article */
for (let article of articles){
    /* get the article id */ 
    const articleId = article.getAttribute('id');
    /* find the title element */   
    const articleTitle = article.
    /* get the title from the title element */
    querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log ('kod')
    html= html+ linkHTML;
    }
 titleList.innerHTML = html;
 console.log ('dodanie linków')
}

generateTitleLinks();
const links = document.querySelectorAll('.titles a');
console.log ('links:',links)

for (let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log ('1.znalesione artykuły: ', articles);

    /* START LOOP: for every article: */
    for (let article of articles){
        console.log ('2.aktualny artykuł:', article);
      /* find tags wrapper */
        const tagsWrapper = article.querySelector(optArticleTagsSelector);
        console.log ('3. znaleziony wraper: ', tagsWrapper);
      /* make html variable with empty string */
        let html = '';
      /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        console.log ('4 pobrane tagi z atrybutu:',articleTags)
      /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
       console.log ('5. tagi podzielone na tablice: ',articleTagsArray)
      /* START LOOP: for each tag */
        for(let tag of articleTagsArray){
      
        /* generate HTML of the link */
        const linkHTML = '<li><a href= "#tag-' + tag + '"> ' + tag + '</a></li>';
        /* add generated code to html variable */
        html= html + linkHTML;
      /* END LOOP: for each tag */
        }
      /* insert HTML of all the links into the tags wrapper */
        tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
      }
    }

generateTags();
 