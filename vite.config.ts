import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [react(), nodeResolve(), svgr({ include: "**/*.svg?react" }), typescript()],
	build: { chunkSizeWarningLimit: 1600 }
});
