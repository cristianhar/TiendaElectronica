// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Teléfono inteligente', price: 1500000, description: 'Un teléfono inteligente con pantalla HD, cámara de alta resolución y capacidad de almacenamiento de 128GB.', imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp', stock: 50 },
    { id: 2, name: 'Computadora portátil', price: 3000000, description: 'Una computadora portátil potente con procesador Intel Core i7, pantalla táctil de 15 pulgadas y 16GB de RAM.', imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg', stock: 20 },
    { id: 3, name: 'Tableta', price: 800000, description: 'Una tableta ligera y versátil con pantalla Full HD de 10 pulgadas, 64GB de almacenamiento y soporte para lápiz óptico.', imageUrl: 'https://i.pinimg.com/736x/01/8a/c3/018ac3545cd380fc2ae3c55057f8bc8c.jpg', stock: 30 },
    { id: 4, name: 'Televisor', price: 2500000, description: 'Un televisor LED de 55 pulgadas con resolución 4K Ultra HD, Smart TV integrado y sonido envolvente Dolby Atmos.', imageUrl: 'https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706393.jpg', stock: 15 },
    { id: 5, name: 'Cámara digital', price: 1200000, description: 'Una cámara digital DSLR con sensor de 24 megapíxeles, grabación de video en Full HD y pantalla articulada.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok0v918jgOursd3MlYjSVcLdko_LpMFTUkA&s', stock: 25 },
    { id: 6, name: 'Auriculares', price: 150000, description: 'Auriculares inalámbricos con cancelación de ruido, calidad de sonido premium y hasta 30 horas de reproducción continua.', imageUrl: 'https://png.pngtree.com/background/20230528/original/pngtree-colorful-hair-and-music-headphone-abstract-free-wallpapers-picture-image_2774495.jpg', stock: 100 },
    { id: 7, name: 'Altavoz inteligente', price: 400000, description: 'Un altavoz inteligente con asistente de voz integrado, conectividad Bluetooth y diseño elegante.', imageUrl: 'https://i.blogs.es/68210b/echo_pop/500_333.jpeg', stock: 40 },
    { id: 8, name: 'Consola de videojuegos', price: 2000000, description: 'Una consola de videojuegos de última generación con gráficos de alta calidad, almacenamiento de 1TB y capacidad de jugar en línea.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XaL8Pug6NwQbU0aHFamOXwVsysxtVf4Tbw&s', stock: 10 },
    { id: 9, name: 'Smartwatch', price: 700000, description: 'Un reloj inteligente con pantalla táctil a color, seguimiento de actividad física y notificaciones inteligentes.', imageUrl: 'https://i.etsystatic.com/39484203/r/il/3c06d8/5461874218/il_1080xN.5461874218_sxk3.jpg', stock: 50 },
    { id: 10, name: 'Dispositivo de realidad virtual', price: 1500000, description: 'Un dispositivo de realidad virtual con seguimiento de movimiento preciso, experiencia inmersiva y compatibilidad con una amplia variedad de juegos y aplicaciones.', imageUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2022/10/221012164501-clix-meta-vr-full-169.jpg?quality=100&strip=info', stock: 10 },
    { id: 11, name: 'Impresora', price: 500000, description: 'Una impresora multifuncional con impresión a color, escaneo y copiado, conectividad Wi-Fi y compatibilidad con dispositivos móviles.', imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-printer-with-several-color-prints-on-it-image_2685783.jpg', stock: 30 },
    { id: 12, name: 'Drone', price: 1800000, description: 'Un dron con cámara 4K, sistema de estabilización de tres ejes y autonomía de vuelo de hasta 30 minutos.', imageUrl: 'https://img.freepik.com/premium-photo/consumer-drone-most-amazing-hd-8k-wallpaper-background-stock-photographic-image_915071-24368.jpg', stock: 5 },
    { id: 13, name: 'Unidad flash USB', price: 50000, description: 'Una unidad flash USB de alta velocidad con capacidad de almacenamiento de 64GB.', imageUrl: 'https://png.pngtree.com/background/20230623/original/pngtree-data-filled-3d-usb-drive-picture-image_3951977.jpg', stock: 100 },
    { id: 14, name: 'Barra de sonido', price: 800000, description: 'Una barra de sonido con subwoofer inalámbrico, sonido envolvente virtual y conectividad Bluetooth.', imageUrl: 'https://i.blogs.es/1877be/cq5dam.web.1920.1920/1366_2000.jpg', stock: 20 },
    { id: 15, name: 'Chromecast', price: 150000, description: 'Un dispositivo de transmisión de contenido multimedia que permite reproducir video en streaming en tu televisor.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_827368-MLU74338205859_022024-O.webp', stock: 50 },
    { id: 16, name: 'Monitor de computadora', price: 700000, description: 'Un monitor de computadora de 27 pulgadas con resolución QHD y tecnología de panel IPS para colores vivos y ángulos de visión amplios.', imageUrl: 'https://fotografias.lasexta.com/clipping/cmsimages02/2023/04/28/32CD6443-CC3F-41CC-9EB7-EDC34E52E3D6/como-poner-fondo-diferente-cada-monitor_98.jpg?crop=1300,731,x0,y0&width=1900&height=1069&optimize=high&format=webply', stock: 25 },
    { id: 17, name: 'Reproductor de Blu-ray', price: 400000, description: 'Un reproductor de Blu-ray con capacidad de reproducción de discos 3D, escalado de video a resolución 4K y compatibilidad con servicios de streaming.', imageUrl: 'https://topesdegama.com/app/uploads-topesdegama.com/2020/03/reproductores-blu-ray.jpg', stock: 15 },
    { id: 18, name: 'Teclado inalámbrico', price: 150000, description: 'Un teclado inalámbrico con diseño ergonómico, teclas silenciosas y conexión USB recargable.', imageUrl: 'https://hardzone.es/app/uploads-hardzone.es/2018/10/teclados-gaming-inal%C3%A1mbricos-01.jpg?x=480&y=375&quality=40', stock: 50 },
    { id: 19, name: 'Ratón inalámbrico', price: 100000, description: 'Un ratón inalámbrico ergonómico con sensor óptico de alta precisión y diseño ambidiestro.', imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/9fd641835510958a2951b1e004bedec3/500x500-razer-viper-mini-signature-edition.webp', stock: 60 },
    { id: 20, name: 'Micrófono USB', price: 200000, description: 'Un micrófono USB de condensador con patrón polar cardioide para grabación de voz nítida y clara.', imageUrl: 'https://images.ecestaticos.com/dI4jLbRDQpAsps7QcrfcEVk9q4E=/161x0:1110x707/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fcef%2F53e%2F766%2Fcef53e766e41ae3c9d5bc13137914725.jpg', stock: 20 },
    { id: 21, name: 'Base de carga inalámbrica', price: 100000, description: 'Una base de carga inalámbrica compatible con dispositivos habilitados para Qi, con diseño delgado y elegante.', imageUrl: 'https://i0.wp.com/m.media-amazon.com/images/I/819eXdLF5OL._AC_SL1500_.jpg?fit=%2C&ssl=1', stock: 40 },
    { id: 22, name: 'Router Wi-Fi', price: 300000, description: 'Un router Wi-Fi de doble banda con tecnología MU-MIMO para una conexión rápida y estable en todo el hogar.', imageUrl: 'https://www.redeszone.net/app/uploads-redeszone.net/2023/04/renovar_router_wifi_errores_evitar_destacada.jpg', stock: 20 },
    { id: 23, name: 'Tarjeta de memoria', price: 100000, description: 'Una tarjeta de memoria microSD de 128GB de capacidad para almacenar fotos, videos y archivos.', imageUrl: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2021/09/memoria-ssd-m.2.jpg', stock: 80 },
    { id: 24, name: 'Webcam', price: 150000, description: 'Una webcam HD con micrófono incorporado, enfoque automático y corrección de iluminación automática.', imageUrl: 'https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_UF1000,1000_QL80_.jpg', stock: 30 },
    { id: 25, name: 'Reloj inteligente para niños', price: 300000, description: 'Un reloj inteligente diseñado especialmente para niños, con seguimiento de actividad, juegos educativos y llamadas de emergencia.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_816372-CBT72143173937_102023-O.webp', stock: 20 },
    { id: 26, name: 'Cargador portátil', price: 100000, description: 'Un cargador portátil de 10000mAh con dos puertos USB para cargar dispositivos móviles sobre la marcha.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_736086-MCO70843016985_082023-O.webp', stock: 50 },
    { id: 27, name: 'Proyector', price: 800000, description: 'Un proyector portátil con resolución Full HD, brillo de 3000 lúmenes y conectividad HDMI.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_976712-MLA73686209121_122023-O.webp', stock: 10 },
    { id: 28, name: 'Batería externa', price: 150000, description: 'Una batería externa de 20000mAh con puerto USB-C y carga rápida para dispositivos móviles.', imageUrl: 'https://cdn2.coolaccesorios.com/51198-thickbox_default/bateria-externa-universal-magnetica-power-bank-qi-5000-mah-cool-blanco.jpg', stock: 30 },
    { id: 29, name: 'Lámpara inteligente', price: 200000, description: 'Una lámpara inteligente regulable con control de voz, programación de horarios y ajuste de colores.', imageUrl: 'https://topesdegama.com/app/uploads-topesdegama.com/2021/02/lampara-inteligente-xiaomi-2.jpg', stock: 25 },
    { id: 30, name: 'Termómetro digital', price: 50000, description: 'Un termómetro digital infrarrojo sin contacto para medir la temperatura corporal con precisión.', imageUrl: 'https://data.kleintools.com/sites/all/product_assets/hires/klein/ir1_photo.jpg',  stock: 100 },
  ];


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }
}
