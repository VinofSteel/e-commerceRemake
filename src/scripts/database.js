// Criando uma base de dados com uma classe construtora 
class Product {
  constructor (id, img, nameItem, description, value, tag) {
    this.id = id,
    this.img = img,
    this.nameItem = nameItem,
    this.description = description
    this.value = value
    this.tag = tag
  }

  getValue () {
    return this.value
  }
}

const database = []

const lightJacket = new Product(1, "./src/assets/jaqueta.svg", "Lightweight Jacket", "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...", 100, "Camisetas")
const blackHat = new Product(2, "./src/assets/gorro.svg", "Black Hat", "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...", 100, "Acessórios")
const mask = new Product(3, "./src/assets/mascara.svg", "Mask", "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...", 40, "Acessórios")
const tShirt = new Product(4, "./src/assets/camiseta_preta.svg", "T-shirt", "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...", 100, "Camisetas")
const shortTShirt = new Product(5, "./src/assets/camiseta_branca.svg", "Short-Sleeve T-Shirt", "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um tecido mais grosso...", 100, "Camisetas")
const championJacket = new Product(6, "./src/assets/moletom.svg", "Champion Packable Jacket", "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...", 100, "Camisetas")

database.push(lightJacket, blackHat, mask, tShirt, shortTShirt, championJacket)