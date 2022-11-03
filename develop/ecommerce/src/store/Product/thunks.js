import { loadProductos } from "../../helpers";
import { setProducto } from "./productSlice";

export const startLoadingNotes = () => {
  return async (dispatch) => {
    const productos = await loadProductos();
    console.log(productos);
    dispatch(setProducto(productos));
  };
};
