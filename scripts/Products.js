import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "product") {
            window.alert(`${clickTarget.dataset.name} costs $${parseFloat(clickTarget.dataset.price).toFixed(2)}`)
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" 
                    data-price="${product.price}" 
                    data-name="${product.name}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

