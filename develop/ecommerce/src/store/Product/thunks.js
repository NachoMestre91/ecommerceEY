import { loadProductos } from "../../helpers";
import { setProducto } from "./productSlice";

export const startLoadingNotes = () => {
  return async (dispatch) => {
    const productos = await loadProductos();
    dispatch(setProducto(productos));
  };
};
