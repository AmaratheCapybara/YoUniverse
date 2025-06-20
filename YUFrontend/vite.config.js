import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	kit: {
		alias: {
			// this will match a file
			'$logo': './src/lib/images/blanklogotransparent.png',
			'$images': './src/lib/images',
			'$lib': './src/lib',
			'$comp': './src/lib/components'
			// this will match a directory and its contents
			// (`my-directory/x` resolves to `path/to/my-directory/x`)
			//'my-directory': 'path/to/my-directory',

			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			//'my-directory/*': 'path/to/my-directory/*'
		}}
});
