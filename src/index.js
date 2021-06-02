import loadHomeTab from './homeTab'
import createPageSkelly from './pageSkelly'
import loadMenu from './menuTab'
import loadContact from './contactTab'

createPageSkelly();
loadHomeTab();

const navHome = document.querySelector("#nav-home");
const navMenu = document.querySelector("#nav-menu");
const navContact = document.querySelector("#nav-contact");

navHome.addEventListener("click", loadHomeTab);
navMenu.addEventListener("click", loadMenu);
navContact.addEventListener("click", loadContact);
