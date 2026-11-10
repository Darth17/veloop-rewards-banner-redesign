import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: the React plugin gives us JSX + fast refresh.
// CSS Modules (*.module.css) work out of the box, no extra setup.
export default defineConfig({
  plugins: [react()],
});
