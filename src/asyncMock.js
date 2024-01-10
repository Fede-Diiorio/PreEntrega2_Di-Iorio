const products = [
    {
        id: '1',
        name: 'Varita de Sauco',
        price: 11,
        category: 'varita',
        img: '../varitaSauco.webp',
        stock: 5,
        description: 'Una poderosa varita esculpida en madera de saúco, famosa por su conexión única con su poseedor. Ideal para aquellos magos y brujas que buscan un instrumento mágico de alta calidad.'
    },
    {
        id: '2',
        name: 'Varita de Harry Potter',
        price: 10,
        category: 'varita',
        img: '../varitaHarry.webp',
        stock: 2,
        description: 'La icónica varita de Harry Potter, conocida por sus hazañas en la derrota del mago tenebroso. Réplica auténtica con detalles precisos para los fanáticos de la saga.'
    },
    {
        id: '3',
        name: 'Varita de Voldemort',
        price: 9,
        category: 'varita',
        img: '../varitaVoldemort.webp',
        stock: 3,
        description: 'La oscura varita de Lord Voldemort, con un diseño intimidante y poderes oscuros. Perfecta para aquellos que buscan un toque de magia siniestra.'
    },
    {
        id: '4',
        name: 'Remera de Plataforma 9 3/4',
        price: 5,
        category: 'remera',
        img: '../remera9-34.webp',
        stock: 15,
        description: 'Una elegante remera con el emblema de la Plataforma 9 3/4, perfecta para los amantes de la magia y la aventura. Ideal para expresar tu amor por el mundo mágico.'
    },
    {
        id: '5',
        name: 'Remera de Emblema de Hogwarts',
        price: 4,
        category: 'remera',
        img: '../remeraEmblema.webp',
        stock: 25,
        description: 'Luce con orgullo el emblema de Hogwarts con esta vibrante remera. Ideal para los aspirantes a magos y brujas que anhelan pertenecer a la escuela de magia más famosa.'
    },
    {
        id: '6',
        name: 'Remera de Reliquias de la Muerte',
        price: 6,
        category: 'remera',
        img: '../remeraReliquias.webp',
        stock: 20,
        description: 'Una remera intrigante con el símbolo de las Reliquias de la Muerte. Perfecta para aquellos que buscan una prenda con un toque de misterio y significado.'
    },
    {
        id: '7',
        name: 'Colgante de Plataforma 9 3/4',
        price: 2,
        category: 'colgante',
        img: '../colgante9-34.webp',
        stock: 10,
        description: 'Un encantador colgante que representa la entrada a la Plataforma 9 3/4. Ideal para aquellos que desean llevar consigo un pedacito del mundo mágico.'
    },
    {
        id: '8',
        name: 'Colgante de Reliquias de la Muerte',
        price: 3,
        category: 'colgante',
        img: '../colganteReliquias.webp',
        stock: 5,
        description: 'Un colgante místico que representa las tres Reliquias de la Muerte. Perfecto para aquellos que aprecian la simbología mágica y la conexión con la historia.'
    },
    {
        id: '9',
        name: 'Colgante de Harry Potter',
        price: 1,
        category: 'colgante',
        img: '../colganteHarry.webp',
        stock: 15,
        description: 'Un encantador colgante inspirado en el famoso mago Harry Potter. Ideal para los admiradores del niño que vivió y su valentía en la lucha contra las fuerzas oscuras.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}