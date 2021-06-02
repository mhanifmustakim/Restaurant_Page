import { createHtmlTag, createElementById } from './web_layout';

const createNavbar = () => {
    const element = createElementById({ tag: "nav", id: "nav" });
    //Create the elements inside navbar
    const brand = createElementById({ tag: "div", id: "brand", innerHTML: "Yummy" });
    const home = createElementById({ tag: "div", id: "nav-home", innerHTML: "Home" });
    const menu = createElementById({ tag: "div", id: "nav-menu", innerHTML: "Menu" });
    const contact = createElementById({ tag: "div", id: "nav-contact", innerHTML: "Contact" });
    //Appending all to nav element
    element.appendChild(brand);
    element.appendChild(home);
    element.appendChild(menu);
    element.appendChild(contact);
    return element
}

const createPageSkelly = () => {
    //Find the content in the HTML
    const content = document.querySelector("#content");
    //Create the 3 main components of the page skelly
    const nav = createNavbar();
    const main = createElementById({ tag: "main", id: "main" })
    const footer = createElementById({
        tag: "footer", id: "footer",
        innerHTML: "Page made by: <a href='https://github.com/mhanifmustakim/Restaurant_Page'>mhanifmustakim</a>"
    })
    //Appending all main components to the content of the page
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
}

export default createPageSkelly