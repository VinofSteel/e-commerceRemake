export class Render {
    
    static arrayCart = []
    static ul = document.querySelector("aside ul")
    static quantity = document.getElementById("valuebox__quantity")
    static total = document.getElementById("valuebox__total")

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
        p.innerText = `R$ ${object.value},00`
        button.innerText = "Adicionar ao carrinho"

        button.addEventListener("click", (event) => {
            event.preventDefault()            
            
            const data = {
                id: object.id,
                img: object.img,
                nameItem: object.nameItem,
                description: object.description,
                value: object.value,
                tag: object.tag
            }

            Render.arrayCart.push(data)

            this.ul.innerHTML = ""

            this.arrayCart.forEach((element) => {
                const card = Render.cartCreator(element)

                this.ul.appendChild(card)
            })

            
            this.quantity.innerText = `Quantidade de items:                                   ${this.arrayCart.length}`
            
            const mappedArray = this.arrayCart.map((element) => element.value)
            this.total.innerText = `Valor total:                                           R$ ${mappedArray.reduce((a, b) => a + b, 0)},00`

        })

        li.append(figure, div, h2, h3, p, button)
        return li
    }

    static cartCreator (object) {
        const li = document.createElement("li")

        const img = document.createElement("img")

        const div = document.createElement("div")
        const p = document.createElement("p")
        const h3 = document.createElement("h3")
        const button = document.createElement("button")

        img.src = object.img
        img.alt = object.nameItem

        p.innerText = object.nameItem
        h3.innerText = `R$ ${object.value},00`
        button.innerText = "Remover produto"

        button.addEventListener("click", (event) => {
            event.preventDefault()

            const find = this.arrayCart.find(element => {
                element.id === object.id
            })

            this.arrayCart.pop(find)

            this.ul.innerHTML = ""

            this.arrayCart.forEach((element) => {
                const card = Render.cartCreator(element)

                this.ul.appendChild(card)
            })

            this.quantity.innerText = `Quantidade de items:                                   ${this.arrayCart.length}`
            
            const mappedArray = this.arrayCart.map((element) => element.value)
            this.total.innerText = `Valor total:                                           R$ ${mappedArray.reduce((a, b) => a + b, 0)},00`
        })

        div.classList.add("div-text")
        div.append(p, h3, button)

        li.append(img, div)

        return li
    }
}