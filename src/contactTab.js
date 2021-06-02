import { createHtmlTag, clearPrevious } from './web_layout'

const loadContact = () => {
    clearPrevious();
    const main = document.querySelector("#main");
    const container = createHtmlTag("div", "container");
    const header = createHtmlTag("header", "content header", "Contacts")
    const contact = createHtmlTag("div", "content", "<i class='fab fa-whatsapp'></i> +601 234 5678<br><i class='fas fa-paper-plane'></i> myemail@gmail.com");
    container.appendChild(header);
    container.appendChild(contact);
    main.appendChild(container);
}

export default loadContact