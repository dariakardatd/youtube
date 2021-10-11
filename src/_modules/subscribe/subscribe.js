'use strict';

export class Subscribe {
  constructor() {
    console.log('subscribe module');

    const readMoreBtn = document.querySelector ('.j-read-more-btn');
    const text = document.querySelector ('.j-contentDescription');


    readMoreBtn.addEventListener('click', (e)=> {
      text.classList.toggle('show-more');
      if(readMoreBtn.innerText.toLowerCase() === 'show more') {
        readMoreBtn.innerText = 'SHOW LESS'
      }else {
        readMoreBtn.innerText = 'SHOW MORE'
      }
    })
  }
}