import { ref } from "vue";
export const useLayoutFactory = (LAYOUTS, defaultLayout) => {
  const layout = ref(defaultLayout);
  const setLayout = (layoutType) => {
    layout.value = layoutType;
  };
  return () => {
    return { layout, setLayout, LAYOUTS };
  };
};
