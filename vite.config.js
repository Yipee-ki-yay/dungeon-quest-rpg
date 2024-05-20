import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'dungeonQuestRpg',
      // the proper extensions will be added
      fileName: 'dungeon-quest-rpg',
    },
  },
})