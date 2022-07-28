const productos = [
    {id: 1, nombre: "Velador Espiraldo Mod7", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'public/imagesvelador-blanco-modelo7.jpeg', stock: 10},
    {id: 2, nombre: "Velador Espiraldo Mod3", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'public/images/velador-fucsia-modelo3.jpeg', stock: 10},
    {id: 3, nombre: "Velador Espiraldo Mod33", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'public/images/velador-naranja-modelo33.jpeg', stock: 10},
    {id: 4, nombre: "Velador Espiraldo Mod5", tipo: "deco", cantidad: 1, desc: "Velador Espiralado. Varios colores disponibles.", precio: 1900, img: 'public/images/velador-on-azul-modelo5.jpeg', stock: 10},
    {id: 5, nombre: "Juego didáctico", tipo: "juego", cantidad: 1, desc: "Ideal para ejercitar la parte motriz de los chicos. Juego de equilibrio. La base a medida es redonda y hace que al poner las piezas empiece a balancearse, hay que lograr poner todas las piezas sin que se caiga. Al que se le cae pierde!", precio: 1200, img: 'public/images/tetrix-balancin.jpeg', stock: 15},
    {id: 6, nombre: "Soportes Notebook", tipo: "soportes", cantidad: 1, desc: "Ideal para largas jornadas de trabajo frente a nuestra computadora, permite mejorar la postura y así evitar dolores cervicales y de espalda. Brinda la posibilidad de ajustar el ángulo de inclinación y mejorar la refrigeración del equipo. Además de ser encastrable lo que lo vuelve muy compacto y fácil de transportar. El soporte es plegable y se puede configurar en cuatro posiciones, 15 ° (7cm), 25 ° (10cm), 35 ° (12,5cm ) y 45 ° (15cm). Acepta notebooks de hasta 2cm de grosor (medir solo grosor de teclado). Disponibles en varios colores.", precio: 1200, img: 'public/images/soportenotebook.jpg', stock: 20},
    {id: 7, nombre: "Llavero soporte celular", tipo: "soportes", cantidad: 1, desc: "Varios diseños y colores.", precio: 250, img: 'public/images/llaveros-soporte-celulares.jpeg', stock: 20},
    {id: 8, nombre: "Pulpo articulado", tipo: "juego", cantidad: 1, desc: "Varios diseños y colores, incluso puede ser un llavero simpático.", precio: 250, img: 'public/images/pulpoarticulado.jpg', stock: 10},
    {id: 9, nombre: "Lapiceros personalizados", tipo: "lapiceros", cantidad: 1, desc: "Varios diseños y colores.", precio: 1800, img: 'public/images/lapicero-mojo-gris.jpeg', stock: 5},
    {id: 10, nombre: "Homero + dona", tipo: "deco", cantidad: 1, desc: "Decorá tus paredes. Varios diseños y colores.", precio: 500, img: 'public/images/deco-homero-dona.jpeg', stock: 10},
    {id: 11, nombre: "Flander", tipo: "deco", cantidad: 1, desc: "Decorá tus paredes. Varios diseños y colores.", precio: 500, img: 'public/images/deco-flander.jpg', stock: 10}

]

export const getProductos= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos)
        }, 3000)
    })
}
       