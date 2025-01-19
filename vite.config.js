import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'html/About/about.html'), 
        tours: resolve(__dirname, 'html/Tours/tour.html'), 
        merch: resolve(__dirname, 'html/Merch/merch.html'), 
        music: resolve(__dirname, 'html/Music/music.html'), 
        contact: resolve(__dirname, 'html/Contact/contact.html'),  
        prometheus: resolve(__dirname, 'html/Music/Albums/prometheus.html'), 
        logo_long_sleeve: resolve(__dirname, 'html/Merch/Apparel/long_sleeve.html'), 
        acantha_tshirt: resolve(__dirname, 'html/Merch/Apparel/acantha_T-shirt.html'), 
        acantha_hoodie: resolve(__dirname, 'html/Merch/Apparel/acantha_hoodie.html'), 
        white_hat: resolve(__dirname, 'html/Merch/Apparel/white_logo_hat.html'), 
        nyx_tshirt: resolve(__dirname, 'html/Merch/Apparel/nyx_T-shirt.html'), 
        black_logo_hoodie: resolve(__dirname, 'html/Merch/Apparel/black_logo_hoodie.html'), 
        black_moto_sweatpants: resolve(__dirname, 'html/Merch/Apparel/black_motto_sweatpants.html'),
        // Media
        nyx_vinyl: resolve(__dirname, 'html/Merch/Media/nyx_vinyl.html'), 
        prometheus_vinyl: resolve(__dirname, 'html/Merch/Media/prometheus_vinyl.html'),
        acantha_vinyl: resolve(__dirname, 'html/Merch/Media/acantha_vinyl.html'),
        // Accessories
        moto_phone_case: resolve(__dirname, 'html/Merch/Accessories/motto_phone_case.html'),
        logo_white_airpod_case: resolve(__dirname, 'html/Merch/Accessories/logo_white_airpod_case.html'),
      },
    },
  },
})