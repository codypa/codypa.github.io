let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bible.jpg') {
      myImage.setAttribute('src','images/solus.jpg');
    } else {
      myImage.setAttribute('src','images/bible.jpg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      myHeading.textContent = "Isaiah 41:10";
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Live Coram Deo, ' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Live Coram Deo, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  