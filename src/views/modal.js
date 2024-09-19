/* ABRIR Y CERRAR POPUP*/

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

//ABRIR
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const deleteButton = document.getElementById("deleteButton")
    if(productoActivo){
        deleteButton.style.display = "block"
    }else{
        deleteButton.style.display = "none"
    }

    if (productoActivo) {
        const name = document.getElementById('nombre'),
            image = document.getElementById('img'),
            price = document.getElementById('precio'),
            category = document.getElementById('categoria');
        name.value = productoActivo.name;
        image.value = productoActivo.image;
        price.value = productoActivo.price;
        category.value = productoActivo.category;
    }
}

//CERRAR Y EVENTO  CANCEL
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setproductoActivo(null);
    resetmodal();
}

const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', () => {
    closeModal();
});


//RESETEO DEL MODAL
const resetmodal = () => {
    const name = document.getElementById('nombre'),
        image = document.getElementById('img'),
        price = document.getElementById('precio'),
        category = document.getElementById('categoria');
    name.value = ""
    image.value = ""
    price.value = 0
    category.value = "Seleccione una categoria"
}

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener('click', () => {
    handleDeleteButton()
})

const handleDeleteButton = () => {
    handleDeleteProduct();
}