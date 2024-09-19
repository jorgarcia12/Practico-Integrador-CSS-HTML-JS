import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("input_header");
    const products = handleGetProductLocalStorage();

    const resultSearch = products.filter((el) => {
        return el.name.toLowerCase().includes(inputHeader.value.toLowerCase()); 
    });

    handleRenderList(resultSearch);
}
