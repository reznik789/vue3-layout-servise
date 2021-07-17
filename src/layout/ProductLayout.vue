<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" :layout="layout" v-bind="slotProps" />
    </template>
  </component>
</template>

<script>
import { computed } from "vue";
import GridLayout from "./components/GridLayout";
import ListLayout from "./components/ListLayout";
import useProductLayout from "./composables/useProductLayout";
export default {
  setup() {
    const { layout, LAYOUTS } = useProductLayout();
    const layoutComponents = {
      [LAYOUTS.grid]: GridLayout,
      [LAYOUTS.list]: ListLayout,
    };
    const currentLayoutComponent = computed(
      () => layoutComponents[layout.value]
    );
    return {
      layout,
      currentLayoutComponent,
    };
  },
};
</script>
