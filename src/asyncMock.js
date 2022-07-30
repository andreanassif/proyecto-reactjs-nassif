const productos = [
    {id: 1, nombre: "Velador Espiraldo Mod7", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-blanco-modelo7_vo5kef.jpg', stock: 10},
    {id: 2, nombre: "Velador Espiraldo Mod3", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-on-fucsia-modelo3_gb9xaq.jpg', stock: 10},
    {id: 3, nombre: "Velador Espiraldo Mod33", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-naranja-modelo33_vtknpl.jpg', stock: 10},
    {id: 4, nombre: "Velador Espiraldo Mod5", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-on-azul-modelo5_zk1lwl.jpg', stock: 10},
    {id: 5, nombre: "Juego didáctico", tipo: "juego", cantidad: 1, desc: "Ideal para ejercitar la parte motriz de los chicos. Juego de equilibrio. La base a medida es redonda y hace que al poner las piezas empiece a balancearse, hay que lograr poner todas las piezas sin que se caiga. Al que se le cae pierde!", precio: 1200, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659131864/Locosen3D/tetrix-balancin_rwzqmh.jpg', stock: 15},
    {id: 6, nombre: "Soportes Notebook", tipo: "soportes", cantidad: 1, desc: "Ideal para largas jornadas de trabajo frente a nuestra computadora, permite mejorar la postura y así evitar dolores cervicales y de espalda. Brinda la posibilidad de ajustar el ángulo de inclinación y mejorar la refrigeración del equipo. Además de ser encastrable lo que lo vuelve muy compacto y fácil de transportar. El soporte es plegable y se puede configurar en cuatro posiciones, 15 ° (7cm), 25 ° (10cm), 35 ° (12,5cm ) y 45 ° (15cm). Acepta notebooks de hasta 2cm de grosor (medir solo grosor de teclado). Disponibles en varios colores.", precio: 1200, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133159/Locosen3D/soportenotebook_yyickv.jpg', stock: 20},
    {id: 7, nombre: "Llavero soporte celular", tipo: "soportes", cantidad: 1, desc: "Varios diseños y colores.", precio: 250, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/llaveros-soporte-celulares_eiwcbj.jpg', stock: 20},
    {id: 8, nombre: "Pulpo articulado", tipo: "juego", cantidad: 1, desc: "Varios diseños y colores, incluso puede ser un llavero simpático.", precio: 250, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/pulpoarticulado_plywvr.jpg', stock: 10},
    {id: 9, nombre: "Lapiceros personalizados", tipo: "lapiceros", cantidad: 1, desc: "Varios diseños y colores.", precio: 1800, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg', stock: 5},
    {id: 10, nombre: "Homero + dona", tipo: "deco", cantidad: 1, desc: "Decorá tus paredes. Varios diseños y colores.", precio: 500, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/deco-homero-dona_hmfm8w.jpg', stock: 10},
    {id: 11, nombre: "Flander", tipo: "deco", cantidad: 1, desc: "Decorá tus paredes. Varios diseños y colores.", precio: 500, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/deco-flander_cstbmb.jpg', stock: 10},
    {id: 12, nombre: "Mate personalizado", tipo: "deco", cantidad: 1, desc: "Personalizados. Varios diseños y colores.", precio: 500, img: 'https://res.cloudinary.com/dhndpus6m/image/upload/v1659133159/Locosen3D/mates-personalizados_ucepdr.jpg', stock: 10}

]

export const getProductos= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos)
        }, 1000)
    })
}
       