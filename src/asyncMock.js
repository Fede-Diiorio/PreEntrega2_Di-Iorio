const products = [
    {
        id: '1',
        name: 'Varita de Sauco',
        price: 7000,
        category: 'varita',
        img: './varitaSauco.webp',
        stock: 5,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '2',
        name: 'Varita de Harry Potter',
        price: 6800,
        category: 'varita',
        img: './varitaHarry.webp',
        stock: 2,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '3',
        name: 'Varita de Voldemort',
        price: 6900,
        category: 'varita',
        img: './varitaVoldemort.webp',
        stock: 3,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '4',
        name: 'Remera de Plataforma 9 3/4',
        price: 5000,
        category: 'remera',
        img: './remera9-34.webp',
        stock: 15,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '5',
        name: 'Remera de Emblema de Hogwarts',
        price: 5200,
        category: 'remera',
        img: './remeraEmblema.webp',
        stock: 25,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '6',
        name: 'Remera de Reliquias de la Muerte',
        price: 5500,
        category: 'remera',
        img: './remeraReliquias.webp',
        stock: 20,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '7',
        name: 'Colgante de Plataforma 9 3/4',
        price: 2000,
        category: 'colgante',
        img: './colgante9-34.webp',
        stock: 10,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '3',
        name: 'Colgante de Reliquias de la Muerte',
        price: 2500,
        category: 'colgante',
        img: './colganteReliquias.webp',
        stock: 5,
        description: 'Generar descripción en otro momento'
    },
    {
        id: '3',
        name: 'Colgante de Harry Potter',
        price: 1500,
        category: 'colgante',
        img: './colganteHarry.webp',
        stock: 15,
        description: 'Generar descripción en otro momento'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}