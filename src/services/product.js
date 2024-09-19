/* ===== PRODUCTOS ===== */

import Swal from "sweetalert2"
import { productoActivo } from "../../main"
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage"
import { closeModal } from "../views/modal"
import { handleGetProductsToStore, handleRenderList } from "../views/store"

/* ====GUARDAR O MODIFICAR ELEMENTOS===== */

//GUARDAR 
const accept = document.getElementById("acceptButton")
accept.addEventListener('click', () => {
    handleSaveOrModifyElements()
})

//FUNCION DE GUARDAR
const handleSaveOrModifyElements = () => {
    const name = document.getElementById('nombre').value,
        image = document.getElementById('img').value,
        price = document.getElementById('precio').value,
        category = document.getElementById('categoria').value
    let object = null;
    if (productoActivo) {
        object = {
            ...productoActivo,
            name,
            image,
            price,
            category
        }
    } else {
        object = {
            id: new Date().toISOString(),
            name,
            image,
            price,
            category
        }
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });

    console.log(object)

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}

//ELIMINAR UN PRODUCTO

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();

            const deleteResult = products.filter((el) => el.id !== productoActivo.id)

            //Seteamos el nuevo array
            localStorage.setItem('products', JSON.stringify(deleteResult));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal()
        } else {
            closeModal()
        }
    });

}