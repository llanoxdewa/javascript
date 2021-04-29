
const textOnNav = document.createElement('h1');
const textOnH1 = document.createTextNode('selamat datang');
textOnNav.appendChild(textOnH1);
const tempat = document.querySelector('.nav');
textOnNav.style.textAlign = 'center';
textOnNav.style.textTransform = 'uppercase';
textOnNav.style.color = 'red';
textOnNav.style.lineHeight = '100px';
tempat.appendChild(textOnNav);
tempat.style.backgroundColor = 'lightblue';
tempat.style.height = '100px';
tempat.style.borderBottom = '10px solid yellow'

// membuat articel
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
const pForArticel = document.createElement('p');
pForArticel.appendChild(document.createTextNode(text));
pForArticel.style.textAlign = 'justify';
const articel = document.querySelector('.artikel');
articel.appendChild(pForArticel);
articel.style.backgroundColor = 'grey';
articel.style.width = '400px';
articel.style.margin = 'auto';
articel.style.padding = '10px';
articel.style.marginTop = '20px';


// footer
const footer = document.querySelector('.footer');
footer.style.border = '2px solid black';
footer.style.width = 'cover';
footer.style.height = '50px';
footer.style.marginBottom = '0';
footer.style.marginTop = '20px';
const textForFooter = document.createElement('h1');
textForFooter.appendChild(document.createTextNode('SELESAI'));
textForFooter.style.textAlign = 'center';
textForFooter.style.lineHeight = '50px';
footer.appendChild(textForFooter)
footer.style.backgroundColor = 'lightgreen';
