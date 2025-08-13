
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
  

function generateTitleLinks(customSelector =''){
  /* remove contents of titleList */
const titleList = document.querySelector(optTitleListSelector);

titleList.innerHTML = '';
let html = '';

const articles = document.querySelectorAll(optArticleSelector + customSelector);
/* for each article */
  for (let article of articles){
      /* get the article id */ 
      const articleId = article.getAttribute('id');
      /* find the title element */   
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log ('wyświetl link do artykułu: ', linkHTML)
      /* create HTML of the link */
      html= html+ linkHTML;
    }
titleList.innerHTML = html;
console.log ('dodanie linków')
const links = document.querySelectorAll('.titles a');
console.log ('links:',links)

  for (let link of links){
      link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();


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
        console.log ('5. tagi podzielone na tablice: ', articleTagsArray)
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


    function tagClickHandler(event){
      /* prevent default action for this event */
      event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
      console.log('rozpoczęcie tagClickHandler')
      const clickedElement = this
      console.log ('kliknięty element: ', clickedElement)
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href')
      console.log('href:', href);
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-','');
      console.log ('wyekstraktowany tag', tag);
      /* find all tag links with class active */
      const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
      console.log ('aktywne tagi przed usunieciem class active:', activeTags);
      /* START LOOP: for each active tag link */
          for (let activeTag of activeTags){ 
          /* remove class active */
          activeTag.classList.remove('active');
        /* END LOOP: for each active tag link */
          }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const targetTagLinks = document.querySelectorAll('a[href="'+ href + '"]')
      console.log ('docelowe linki tagów:', targetTagLinks);
      /* START LOOP: for each found tag link */
    for (let tagLink of targetTagLinks){
        /* add class active */
    tagLink.classList.add('active');

      /* END LOOP: for each found tag link */
    }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[data-tags~="' + tag + '"]');
      console.log ('generateTitleLinks z selectorem','[data-tags~="' + tag +'"]');
    }

function addClickListenersToTags(){
  /* find all links to tags */
const tagLinks =document.querySelectorAll('a[href^="#tag-"]');
console.log ('znaleziono link do tagów: ', tagLinks);
  /* START LOOP: for each link */
    for (let tagLink of tagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click',tagClickHandler);
  /* END LOOP: for each link */
    }
}
addClickListenersToTags();

