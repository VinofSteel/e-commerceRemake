import { database } from "./database.js";
export class Render {
    
    static cardCreator(object) {
        const li = document.createElement("li")
        li.id = object.id

        const figure = document.createElement("figure")
        const img = document.createElement("img")

        const div = document.createElement("div")
        const span = document.createElement("span")

        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const button = document.createElement("button")

        img.src = object.img
        img.alt = object.nameItem
        figure.appendChild(img)

        span.innerText = object.tag
        div.appendChild(span)

        h2.innerText = object.nameItem
        h3.innerText = object.description
        p.innerText = object.value
        button.innerText = "Adicionar ao carrinho"

        li.append(figure, div, h2, h3, p, button)
        return li
    }
}