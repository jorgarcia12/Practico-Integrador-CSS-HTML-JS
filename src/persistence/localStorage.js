//==========LOCALSTORAGE===========

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products ? products : [];
}

//guardar en LocalStorage

//recibir productos
export const setInLocalStorage = (productIn) => {
    //traer todos los elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) => productsLocal.id === productIn.id);
    //verificar si el elemento existe
    if (existingIndex !== -1) {
        //si existe debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    } else {
        // en caso contrario agregarse
        productsInLocal.push(productIn);
    }

    //Seteamos el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal));
}
