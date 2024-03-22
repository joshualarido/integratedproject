import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/integratedproject/",
  rules: [
    {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        query:{
            outputPath: './img/',
            name: '[name].[ext]?[hash]'
        }
    }
]
})
