import { createHtmlTag, createImg, clearPrevious } from './web_layout';

const loadHomeTab = () => {
    //Find the main part of the page and removes previous content
    clearPrevious();
    const main = document.querySelector("#main");
    //Crreate elements to be appended to the main tab
    const container = createHtmlTag("div", "container");
    const img = createImg("https://images.unsplash.com/photo-1556906905-4f33f9367b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80");
    const header = createHtmlTag("header", "content", "Yummy's Sushi Kingdom");
    const para = createHtmlTag("div", "content", "Love Sushi?<br>Get The Best Sushi")
    //Adding appropriate stuff to the elements
    img.classList.add("circle");
    img.classList.add("content");
    img.classList.add("header")
    header.id = "page-name";
    //Appending all the elements to a container
    container.appendChild(img);
    container.appendChild(header);
    container.appendChild(para);
    //Appending the container to the main page
    main.appendChild(container);
}

export default loadHomeTab;