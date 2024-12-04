import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "employee") {
            let productCount = 0
            for (const order of orders) {
                if (order.employeeId === parseInt(clickTarget.dataset.id)) {
                    productCount++
                }
            }
            window.alert(`${clickTarget.dataset.name} has sold ${productCount} product(s)`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

