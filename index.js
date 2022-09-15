import { database } from "./src/scripts/database.js"
import { Render } from "./src/scripts/render.js"

class Dash {

    static ul = document.getElementsByClassName("vitrine")[0]
    static modal = document.getElementsByClassName("modal")[0]

    static renderMain (arr) {

        arr.forEach((element) => {
            const card = Render.cardCreator(element)

            this.ul.append(card)
        })
    }

    static showAll () {
        const li = document.getElementsByClassName("all")[0]

        li.addEventListener("click", (event) => {
            event.preventDefault()

            this.ul.innerHTML = ""
            Dash.renderMain(database)
        })
    }

    static showAccessories () {
        const li = document.getElementsByClassName("accessories")[0]

        li.addEventListener("click", (event) => {
            event.preventDefault()

            const filtered = database.filter((element) => element.tag === "Acessórios")
            
            if (filtered.length === 0) {
                this.modal.classList.toggle("hidden")
            } else {
                this.ul.innerHTML = ""
                Dash.renderMain(filtered)
            }
        })
    }

    static showShoes () {
        const li = document.getElementsByClassName("shoes")[0]

        li.addEventListener("click", (event) => {
            event.preventDefault()

            const filtered = database.filter((element) => element.tag === "Calçados")
            
            if (filtered.length === 0) {
                this.modal.classList.toggle("hidden")
            } else {
                this.ul.innerHTML = ""
                Dash.renderMain(filtered)
            }
        })
    }

    static showShirts () {
        const li = document.getElementsByClassName("shirts")[0]

        li.addEventListener("click", (event) => {
            event.preventDefault()

            const filtered = database.filter((element) => element.tag === "Camisetas")
            
            if (filtered.length === 0) {
                this.modal.classList.toggle("hidden")
            } else {
                this.ul.innerHTML = ""
                Dash.renderMain(filtered)
            }
        })
    }

    static modalClose () {
        const button = document.getElementById("close")

        button.addEventListener("click", (event) => {
            event.preventDefault()

            this.modal.classList.add("hidden")
        })
    }

    static searchBar () {
        const input = document.querySelector(".search-container input")
        const button = document.querySelector(".search-container button")

        const filteredInput = (event) => {
            event.preventDefault()

            const value = input.value.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "")

            const filtered = database.filter((element) => 
            element.tag.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(value) || 
            element.nameItem.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(value) || 
            element.description.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(value))

            this.ul.innerHTML = ""

            Dash.renderMain(filtered)
        }

        button.addEventListener("click", filteredInput)
    }
}

Dash.renderMain(database)
Dash.showAll()
Dash.showAccessories()
Dash.showShoes()
Dash.showShirts()
Dash.modalClose()
Dash.searchBar()