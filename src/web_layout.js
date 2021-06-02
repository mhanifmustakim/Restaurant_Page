const createHtmlTag = (tag, className = null, innerHTML = "") => {
    const element = document.createElement(tag);
    if (className) {
        const classes = className.split(" ");
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    element.innerHTML = innerHTML;
    return element
}

const createImg = (src) => {
    const element = document.createElement("img");
    element.setAttribute("src", src);
    return element
}

const createElementById = ({ tag, id, innerHTML = "" }) => {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element;
}

const clearPrevious = () => {
    const main = document.querySelector("#main");
    const previous = main.querySelector(".container");
    if (previous) { previous.remove() }
}
export { createHtmlTag, createImg, createElementById, clearPrevious };