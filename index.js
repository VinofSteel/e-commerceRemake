const ul = document.getElementsByClassName("vitrine")[0]


// Criando uma função para criar os cards e seus elementos internos com base na database e anexá-los à ul.
function cardCreator (array) {
    
}
cardCreator(arr)

// Criando a sidebar e seus componentes dinamicamente com o dom.
let nav = document.createElement("nav")
nav.classList.add("side-container")
main.appendChild(nav)

let divSearch = document.createElement("div")
divSearch.classList.add("search-container")
nav.appendChild(divSearch)

let inputSearch = document.createElement("input")
inputSearch.type = "text"
inputSearch.placeholder = "Digite aqui sua pesquisa"
inputSearch.classList.add("searchbar")
divSearch.appendChild(inputSearch)

let buttonSearch = document.createElement("button")
buttonSearch.innerText = "Pesquisar"
divSearch.appendChild(buttonSearch)

let divTitle = document.createElement("div")
divTitle.classList.add("title-container")
nav.appendChild(divTitle)

let h2Title = document.createElement("h2")
h2Title.innerText = "Carrinho de Compras"
divTitle.appendChild(h2Title)

// Criando o carrinho vazio e seus elementos
let ulCart = document.createElement("ul")
ulCart.classList.add("cart-container")
nav.appendChild(ulCart)

let h2Cart = document.createElement("h2")
h2Cart.innerText = "Carrinho vazio"
ulCart.appendChild(h2Cart)

let pCart = document.createElement("p")
pCart.innerText = "Adicione items"
ulCart.appendChild(pCart)

// Função para adicionar produtos ao carrinho
let productCart = []

function addCart (produto) {
    productCart.push(produto)
    cartList (productCart, ulCart)
}

// Função para somar o valor dos produtos no carrinho 
function valueSum () {
    let counter = 0
    for (let i = 0; i < productCart.length; i++) {
        counter = counter + productCart[i].value
    }  return counter;
}

// Criação do container onde ficará o valor da compra e a quantidade de items comprados
let valueBox = document.createElement("div")
valueBox.classList.add("valuebox")
nav.appendChild(valueBox)

let preTotal = document.createElement("pre")
preTotal.classList.add("pretotal")
preTotal.innerText = `Quantidade de items:                                   0`
valueBox.appendChild(preTotal)

let preValue = document.createElement("pre")
preValue.classList.add("prevalue")
preValue.innerText = `Valor total:                                           R$ 0,00`
valueBox.appendChild(preValue)


// Criando função para interceptar produtos clicados e adicioná-los ao carrinho utilizando o conceito de bubbling e a função addCart
ul.addEventListener("click", productIntercept)

function productIntercept (event) {
    let buttonClick = event.target
    if (buttonClick.classList == "clickable") {
        let idProduto = buttonClick.id
        let produto = arr.find(function(produto) {
            if(produto.id == idProduto) {
                return produto
            }
        }) 
        addCart (produto)
        // Acrescentando os elementos abaixo para que os mesmos interajam dinamicamente com mudanças no array do carrinho
        preTotal.innerText = `Quantidade de items:                                   ${productCart.length}`
        preValue.innerText = `Valor total:                                       R$ ${valueSum()},00`
    }
}

// Criando função para listar os produtos no carrinho, somar seu valor total e removê-los
function cartList (array, ul) {
    ul.innerHTML = ""

    // Chamando função para somar e listar valores que forem colocados no carrinho
    valueSum()

    for (let i = 0; i<array.length; i++) {
        let product = array[i]
        
        let cardProduto = document.createElement("li")
        cardProduto.classList.add("product")

        let imgProduto = document.createElement("img")
        imgProduto.src = product.img
        imgProduto.alt = product.nameItem
        cardProduto.appendChild(imgProduto)

        let divTextProduto = document.createElement("div")
        divTextProduto.classList.add("div-text")
        cardProduto.appendChild(divTextProduto)

        let titleProduto = document.createElement("p")
        titleProduto.innerText = product.nameItem
        divTextProduto.appendChild(titleProduto)

        let priceProduto = document.createElement("h3")
        priceProduto.innerText = `R$ ${product.value},00`
        divTextProduto.appendChild(priceProduto)

        let buttonRemoveProduto = document.createElement("button")
        buttonRemoveProduto.innerText = "Remover produto"
        buttonRemoveProduto.id = product.id
        buttonRemoveProduto.classList.add = "product-remove"
        // Função para remover produto
        buttonRemoveProduto.addEventListener ("click", function() {
            for (let i = 0; i < productCart.length; i++) {
                if (productCart[i].id == product.id) {
                   productCart.splice(i, 1)
                   buttonRemoveProduto.closest("li").remove()
                   // Acrescentando os elementos abaixo para que os mesmos interajam dinamicamente com mudanças no array do carrinho
                   preTotal.innerText = `Quantidade de items:                                   ${productCart.length}`
                   preValue.innerText = `Valor total:                                       R$ ${valueSum()},00`
                   break
                }
            }
        })
        divTextProduto.appendChild(buttonRemoveProduto)
        ul.appendChild(cardProduto)

    }
}

// Criando funcionalidade para a barra de pesquisa
buttonSearch.addEventListener("click", function() {
    let outputSearch = []
    for (let i = 0; i<arr.length; i++) {
        if (inputSearch.value.toLowerCase() == arr[i].nameItem.toLowerCase()) {
            outputSearch.push(arr[i])
        } else if (inputSearch.value == "") {
            outputSearch.push(arr[i])
        }
    } ul.innerHTML = ""
    cardCreator(outputSearch)
})

// Criando funcionalidade para o header 
const acessories = document.querySelector(".acessories")
const shoes = document.querySelector(".shoes")
const shirts = document.querySelector(".shirts")

// Função para fazer o clique no header mostrar items apenas da categoria selecionada, começando com acessories
acessories.addEventListener("click", function() {
    let outputAcessories = []
    for (let i = 0; i<arr.length; i++) {
        if (arr[i].tag == "Acessórios") {
            outputAcessories.push(arr[i])
        }
    } ul.innerHTML = ""
    cardCreator(outputAcessories)
})

// Shirts
shirts.addEventListener("click", function() {
    let outputShirts = []
    for (let i = 0; i<arr.length; i++) {
        if (arr[i].tag == "Camisetas") {
            outputShirts.push(arr[i])
        }
    } ul.innerHTML = ""
    cardCreator(outputShirts)
})

// Shoes
shoes.addEventListener("click", function() {
    alert("Não há produtos nesta categoria no momento!")
})