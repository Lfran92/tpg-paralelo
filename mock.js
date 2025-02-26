export const getGamingProducts = () => {
    return [
        {
            id: 1,
            nombre: "Teclado Mecánico RGB",
            descripcion: "Teclado mecánico con retroiluminación RGB, ideal para gaming.",
            categoriaId: 1,
            categoria: "Periféricos",
            precio: 80.00,
            descuento: 10,
            stock: 20,
            marca: "HyperX",
            modelo: "Alloy FPS Pro",
            garantia: "2 años",
            esOferta: true,
            destacado: true,
            peso: "900g",
            imagen: "teclado2.jpeg"
        },
        {
            id: 2,
            nombre: "Mouse Gaming Inalámbrico",
            descripcion: "Mouse inalámbrico con sensor óptico de alta precisión.",
            categoriaId: 1,
            categoria: "Periféricos",
            precio: 60.00,
            descuento: 5,
            stock: 15,
            marca: "Logitech",
            modelo: "G Pro Wireless",
            garantia: "1 año",
            esOferta: false,
            destacado: true,
            peso: "80g",
            imagen: "mouse.webp"
        },
        {
            id: 3,
            nombre: "Monitor Gaming 27'' 144Hz",
            descripcion: "Monitor de 27 pulgadas con tasa de refresco de 144Hz y resolución 2K.",
            categoriaId: 1,
            categoria: "Periféricos",
            precio: 300.00,
            descuento: 15,
            stock: 10,
            marca: "ASUS",
            modelo: "ROG Strix",
            garantia: "3 años",
            esOferta: true,
            destacado: true,
            peso: "4.5kg",
            imagen: "monitor.jpeg"
        },
        {
            id: 4,
            nombre: "Tarjeta Gráfica RTX 3080",
            descripcion: "Tarjeta gráfica de alto rendimiento con 10GB de memoria GDDR6X.",
            categoriaId: 2,
            categoria: "Componentes",
            precio: 800.00,
            descuento: 20,
            stock: 5,
            marca: "NVIDIA",
            modelo: "GeForce RTX 3080",
            garantia: "3 años",
            esOferta: false,
            destacado: false,
            peso: "1.4kg",
            imagen: "tarjetagrafica.png"
        },
        {
            id: 5,
            nombre: "Auriculares Gaming con Micrófono",
            descripcion: "Auriculares con sonido envolvente 7.1 y micrófono retráctil.",
            categoriaId: 1,
            categoria: "Periféricos",
            precio: 50.00,
            descuento: 10,
            stock: 25,
            marca: "Razer",
            modelo: "Kraken",
            garantia: "1 año",
            esOferta: false,
            destacado: false,
            peso: "350g",
            imagen: "auricular.png"
        },
        {
            id: 6,
            nombre: "HardDisk",
            descripcion: "SSD Disco Solido 3.0 Ultra Samdisk 1 Tera.",
            categoriaId: 2,
            categoria: "Componentes",
            precio: 200.00,
            descuento: 10,
            stock: 25,
            marca: "Samdisk",
            modelo: "Ultra",
            garantia: "1 año",
            esOferta: false,
            destacado: false,
            peso: "350g",
            imagen: "harddisk.jpeg"
        },
    ];
}

export const getProductCategories = () => {
    return [
        {
            id: 1,
            nombre: "Periféricos",
            precioMin: 50.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Teclado Mecánico RGB",
                "Mouse Gaming Inalámbrico",
                "Auriculares Gaming con Micrófono"
            ],
            descripcion: "Dispositivos adicionales que mejoran la experiencia de uso de una computadora.",
            popularidad: 4.5 // escala del 1 al 5
        },
        {
            id: 2,
            nombre: "Monitores",
            precioMin: 100.00,
            precioMax: 600.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Monitor Gaming 27'' 144Hz",
                "Monitor UltraWide 34''"
            ],
            descripcion: "Pantallas de alta definición para visualizar el contenido de la computadora.",
            popularidad: 4.0
        },
        {
            id: 3,
            nombre: "Componentes",
            precioMin: 30.00,
            precioMax: 1200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Tarjeta Gráfica RTX 3080",
                "Procesador Intel i9",
                "Disco Duro SSD 1TB"
            ],
            descripcion: "Partes internas esenciales para el funcionamiento de una computadora.",
            popularidad: 4.8
        },
        {
            id: 4,
            nombre: "Mobiliario",
            precioMin: 100.00,
            precioMax: 500.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Silla Gaming Ergonómica",
                "Escritorio Ajustable"
            ],
            descripcion: "Muebles diseñados para proporcionar comodidad y soporte durante el uso de la computadora.",
            popularidad: 4.2
        },
        {
            id: 5,
            nombre: "Almacenamiento",
            precioMin: 20.00,
            precioMax: 300.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Disco Duro Externo 2TB",
                "Pendrive 128GB"
            ],
            descripcion: "Dispositivos utilizados para guardar y transportar datos digitales.",
            popularidad: 4.3
        },
        {
            id: 6,
            nombre: "Audio",
            precioMin: 30.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Altavoces Bluetooth",
                "Auriculares Inalámbricos"
            ],
            descripcion: "Equipos para la reproducción y grabación de sonido.",
            popularidad: 4.6
        }
    ];
}
