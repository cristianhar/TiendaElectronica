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
    { id: 7, name: 'Altavoz inteligente', price: 400000, description: 'Un altavoz inteligente con asistente de voz integrado, conectividad Bluetooth y diseño elegante.', imageUrl: 'URL_IMAGEN', stock: 40 },
    { id: 8, name: 'Consola de videojuegos', price: 2000000, description: 'Una consola de videojuegos de última generación con gráficos de alta calidad, almacenamiento de 1TB y capacidad de jugar en línea.', imageUrl: 'URL_IMAGEN', stock: 10 },
    { id: 9, name: 'Smartwatch', price: 700000, description: 'Un reloj inteligente con pantalla táctil a color, seguimiento de actividad física y notificaciones inteligentes.', imageUrl: 'URL_IMAGEN', stock: 50 },
    { id: 10, name: 'Dispositivo de realidad virtual', price: 1500000, description: 'Un dispositivo de realidad virtual con seguimiento de movimiento preciso, experiencia inmersiva y compatibilidad con una amplia variedad de juegos y aplicaciones.', imageUrl: 'URL_IMAGEN', stock: 10 },
    { id: 11, name: 'Impresora', price: 500000, description: 'Una impresora multifuncional con impresión a color, escaneo y copiado, conectividad Wi-Fi y compatibilidad con dispositivos móviles.', imageUrl: 'URL_IMAGEN', stock: 30 },
    { id: 12, name: 'Drone', price: 1800000, description: 'Un dron con cámara 4K, sistema de estabilización de tres ejes y autonomía de vuelo de hasta 30 minutos.', imageUrl: 'URL_IMAGEN', stock: 5 },
    { id: 13, name: 'Unidad flash USB', price: 50000, description: 'Una unidad flash USB de alta velocidad con capacidad de almacenamiento de 64GB.', imageUrl: 'URL_IMAGEN', stock: 100 },
    { id: 14, name: 'Barra de sonido', price: 800000, description: 'Una barra de sonido con subwoofer inalámbrico, sonido envolvente virtual y conectividad Bluetooth.', imageUrl: 'URL_IMAGEN', stock: 20 },
    { id: 15, name: 'Chromecast', price: 150000, description: 'Un dispositivo de transmisión de contenido multimedia que permite reproducir video en streaming en tu televisor.', imageUrl: 'URL_IMAGEN', stock: 50 },
    { id: 16, name: 'Monitor de computadora', price: 700000, description: 'Un monitor de computadora de 27 pulgadas con resolución QHD y tecnología de panel IPS para colores vivos y ángulos de visión amplios.', imageUrl: 'URL_IMAGEN', stock: 25 },
    { id: 17, name: 'Reproductor de Blu-ray', price: 400000, description: 'Un reproductor de Blu-ray con capacidad de reproducción de discos 3D, escalado de video a resolución 4K y compatibilidad con servicios de streaming.', imageUrl: 'URL_IMAGEN', stock: 15 },
    { id: 18, name: 'Teclado inalámbrico', price: 150000, description: 'Un teclado inalámbrico con diseño ergonómico, teclas silenciosas y conexión USB recargable.', imageUrl: 'URL_IMAGEN', stock: 50 },
    { id: 19, name: 'Ratón inalámbrico', price: 100000, description: 'Un ratón inalámbrico ergonómico con sensor óptico de alta precisión y diseño ambidiestro.', imageUrl: 'URL_IMAGEN', stock: 60 },
    { id: 20, name: 'Micrófono USB', price: 200000, description: 'Un micrófono USB de condensador con patrón polar cardioide para grabación de voz nítida y clara.', imageUrl: 'URL_IMAGEN', stock: 20 },
    { id: 21, name: 'Base de carga inalámbrica', price: 100000, description: 'Una base de carga inalámbrica compatible con dispositivos habilitados para Qi, con diseño delgado y elegante.', imageUrl: 'URL_IMAGEN', stock: 40 },
    { id: 22, name: 'Router Wi-Fi', price: 300000, description: 'Un router Wi-Fi de doble banda con tecnología MU-MIMO para una conexión rápida y estable en todo el hogar.', imageUrl: 'URL_IMAGEN', stock: 20 },
    { id: 23, name: 'Tarjeta de memoria', price: 100000, description: 'Una tarjeta de memoria microSD de 128GB de capacidad para almacenar fotos, videos y archivos.', imageUrl: 'URL_IMAGEN', stock: 80 },
    { id: 24, name: 'Webcam', price: 150000, description: 'Una webcam HD con micrófono incorporado, enfoque automático y corrección de iluminación automática.', imageUrl: 'URL_IMAGEN', stock: 30 },
    { id: 25, name: 'Reloj inteligente para niños', price: 300000, description: 'Un reloj inteligente diseñado especialmente para niños, con seguimiento de actividad, juegos educativos y llamadas de emergencia.', imageUrl: 'URL_IMAGEN', stock: 20 },
    { id: 26, name: 'Cargador portátil', price: 100000, description: 'Un cargador portátil de 10000mAh con dos puertos USB para cargar dispositivos móviles sobre la marcha.', imageUrl: 'URL_IMAGEN', stock: 50 },
    { id: 27, name: 'Proyector', price: 800000, description: 'Un proyector portátil con resolución Full HD, brillo de 3000 lúmenes y conectividad HDMI.', imageUrl: 'URL_IMAGEN', stock: 10 },
    { id: 28, name: 'Batería externa', price: 150000, description: 'Una batería externa de 20000mAh con puerto USB-C y carga rápida para dispositivos móviles.', imageUrl: 'URL_IMAGEN', stock: 30 },
    { id: 29, name: 'Lámpara inteligente', price: 200000, description: 'Una lámpara inteligente regulable con control de voz, programación de horarios y ajuste de colores.', imageUrl: 'URL_IMAGEN', stock: 25 },
    { id: 30, name: 'Termómetro digital', price: 50000, description: 'Un termómetro digital infrarrojo sin contacto para medir la temperatura corporal con precisión.', imageUrl: 'URL_IMAGEN', stock: 100 },
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
