//=========CATEGORIA==============

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage()
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        //NO TOMA GASEOSAS
        case "Gaseosas":
            const resultProds = products.filter((el) => el.category.trim() === categoryIn)
            handleRenderList(resultProds)
            break;
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a, b) => b.price - a.price);
            handleRenderList(resultPrecioMayor);
            break;

        case "menorPrecio":
            const resultPrecioMenor = products.sort((a, b) => a.price - b.price);
            handleRenderList(resultPrecioMenor);
            break;

        default:
            handleRenderList(products);
            break;
    }
}

//render de la vista categorias

export const renderCategories = () => {

    //tomamos los elementos
    const ulList = document.getElementById("listFilter")
    //creamos los elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
    //añadimos el evento "click"
    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement)
        })
    })

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id)
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive')
            } else {
                if (elemento === el) {
                    el.classList.add('liActive')
                }
            }
        })
    }
}


