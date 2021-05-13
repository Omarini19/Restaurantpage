import mpageLoad from './modules/initial-page-load';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';


init();

function addNaEvent (){

  const btnHome = document.getElementById('home');
  const btnMenu = document.getElementById('menu');
  const btnContact = document.getElementById('contact');

  btnHome.addEventListener('click', loadHome);
  btnMenu.addEventListener('click', loadMenu);
  btnContact.addEventListener('click', loadContact);
}


  function init (){
    mpageLoad();
    loadHome();
    addNaEvent();
  } 