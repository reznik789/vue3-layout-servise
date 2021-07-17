import { useLayoutFactory } from "../helpers/useLayoutFactory";

const LAYOUTS = {
  grid: Symbol("grid"),
  product: Symbol("product"),
};

const useProductLayout = useLayoutFactory(LAYOUTS, LAYOUTS.grid);
export default useProductLayout;
