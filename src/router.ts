import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

// @ts-expect-error Farm supports import.meta but the types is unavailable
const views = import.meta.glob([
  "./views/**/*.vue",
  "./views/**/index.vue",
  "./views/**/\\[*\\].vue",
]);

// @ts-expect-error Same as above, tracing on https://github.com/farm-fe/farm/issues/1996
const routes: RouteRecordRaw[] = Object.entries(views).map(
  ([filePath, component]) => {
    let path = filePath
      .replace(/^\.\/views\//, "")
      .replace(/\.vue$/, "")
      .replace(/^(.*)\/?index$/, "$1")
      .replace(/\[(\w+)\]$/, ":$1");
    path = "/" + path;

    return {
      path,
      name: filePath.replace(/^\.\/views\//, ""),
      // @ts-expect-error
      component,
    } satisfies RouteRecordRaw;
  }
);

const router = createRouter({
  // @ts-expect-error
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...routes],
});

export default router;
