import esbuild from 'esbuild';
import { wasmLoader } from 'esbuild-plugin-wasm'

esbuild.build({
    entryPoints: ['vtracer_webapp.js'],
    format: "esm",
    bundle: true,
    outfile: 'dist/index.js',
    minify: true,
    sourcemap: true,
    plugins: [wasmLoader()],
})
