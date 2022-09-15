import { database } from "./src/scripts/database.js"
import { Render } from "./src/scripts/render.js"

class Dash {
    static renderMain (arr) {
        const ul = document.getElementsByClassName("vitrine")[0]

        arr.forEach((element) => {
            const card = Render.cardCreator(element)

            ul.append(card)
        })
    }

    static renderNumberBox () {
        
    }
}

Dash.renderMain(database)