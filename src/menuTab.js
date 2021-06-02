import { createHtmlTag, createImg, clearPrevious } from './web_layout'

const menuList = [
    { src: "https://images.unsplash.com/photo-1588635655481-e1c4e86a378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", desc: "Sushi 1" },
    { src: "https://images.unsplash.com/photo-1621101370143-d2c2fbd7f01b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", desc: "Sushi 2" },
    { src: "https://images.unsplash.com/photo-1616431575939-68c388586e99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", desc: "Sushi 3" },
    { src: "https://images.unsplash.com/photo-1592461876794-2427a599977e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", desc: "Sushi 4" },
    { src: "https://images.unsplash.com/photo-1562131247-bd2efe88ec9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", desc: "Sushi 5" },
    { src: "https://images.unsplash.com/photo-1616431575978-ad28681d658e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", desc: "Sushi 6" },
]

const loadMenu = () => {
    clearPrevious();
    const main = document.querySelector("#main");
    const container = createHtmlTag("div", "container col-2 col-3-md");
    for (let i = 0; i < menuList.length; i++) {
        const element = createHtmlTag("div", "menu-item content");
        const img = createImg(menuList[i].src);
        const desc = createHtmlTag("div", "menu-desc", menuList[i].desc);
        element.appendChild(img);
        element.appendChild(desc);
        container.appendChild(element);
    }
    main.appendChild(container);
}

export default loadMenu