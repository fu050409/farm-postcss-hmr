# Issue reproduction for postcss hmr

Reproduction for <https://github.com/farm-fe/farm/issues/2024>.

## Way to reproduce

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start farm dev server

   ```bash
   pnpm dev
   ```

3. Open test link in browser

   Click and open <http://localhost:9000/#/page>. As we can see, the background is filled with gray.

4. Change class name in `src/views/page.vue`

   The original class is `bg-gray-800`, change it to `bg-gray-900` or other background classes.

   You can see the background is white after change the class.

## Platform

   Arch Linux
