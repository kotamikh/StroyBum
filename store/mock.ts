import { defineStore } from "pinia";
import { IProduct } from "~/types/Product";

export const useMock = defineStore('mockData', () => {
    const allProducts = ref<IProduct[]>([])
    const filteredProducts =  ref<IProduct[]>([])
    const getAllProducts = (offset: number, limit: number, category?: string, brand?: string): IProduct[] => {
        allProducts.value = products

        if (category) {
            filteredProducts.value = allProducts.value.filter(p => p.category === category).splice(offset, limit)
            return filteredProducts.value
        }

        if (brand) {
            filteredProducts.value = allProducts.value.filter(p => p.brand === brand)
            return filteredProducts.value
        }
        // получила продукты
        // если указана категория, фильтруешь по категории
        // если указан бренд фильтруешь по бренду

        else {
            return allProducts.value
        }
        // return []
    }

    const getCategories = (): Category[] => {
        let allCategories = []
        for (let i = 0; i < categories.length; i++) {
            allCategories.push(categories[i])
        }
        return allCategories
    }

    const getBrandsByCategory = (categoryId: number): Brand[] => {
        return []
    }

    return {
        allProducts,
        filteredProducts,
        getAllProducts,
        getCategories,
        getBrandsByCategory
    }
})

const products: IProduct[] = [
    {
        id: 0,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Белый",
        images: ["https://st37.stpulscen.ru/images/product/453/075/072_medium3.webp", "https://st16.stpulscen.ru/images/product/438/105/476_original.jpg"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Белый"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 1,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Ламантин",
        images: ["https://st16.stpulscen.ru/images/product/438/105/479_medium3.jpg"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Ламантин"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 2,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Магнолия",
        images: ["https://st16.stpulscen.ru/images/product/438/105/481_medium3.jpg"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Магнолия"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 3,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Маисовый",
        images: ["https://st16.stpulscen.ru/images/product/438/105/484_medium3.jpg", "https://siding-plus.ru/d/vilo_pesochnyj6.jpg"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Маисовый"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 4,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Миртовый",
        images: ["https://st16.stpulscen.ru/images/product/438/105/488_medium3.jpg", "https://bspol.ru/sites/default/files/styles/400x340/public/vinilovovyy_sayding_nordside_laplandiya_mirtovyy_1.jpg?itok=4mA8EkXF"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Миртовый"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 5,
        name: "Сайдинг NordSide Лапландия 3,05 х 0,205м Шафран",
        images: ["https://cs.petrovich.ru/image/21993772/original.jpg", "https://bspol.ru/sites/default/files/styles/100per_x_100per/public/vinilovovyy_sayding_nordside_laplandiya_shafran_2.jpg?itok=L40bODqe"],
        price: 215,
        stock: 1,
        discount: 15,
        description: "Сайдинг NordSide производится из первичного сырья на совместном Российско-финском предприятии в г. Санкт-Петербурге. Обладает качествами сайдинга премиум-класса. Добавление в сайдинг качественных присадок УФ-фильтров и диоксида титана придает ему прочность и устойчивость к выгоранию. \n " +
            "Сайдинг производится по новейшим технологиям для использования в российских климатических условиях. Материал выдерживает значительные перепады температур (от -45° до +50°С), защищает фасад от атмосферных воздействий. Сайдинг долговечен, не подвержен коррозии и не поддерживает горения (самозатухающий материал).",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"],
            ["Цвет", "Шафран"],
            ["Материал", "Виниловый"],
            ["Имитация", "Корабельная доска"],
            ["Длина,мм", "3050"],
            ["Ширина,мм", "205"]
        ],
        category: "Сайдинг",
        brand: "NordSide"
    },
    {
        id: 6,
        name: "Сайдинг Blockhouse ВН01 однопереломный 3,10 x 0,20м",
        images: ["https://st15.stpulscen.ru/images/product/159/035/469_medium3.jpg", "https://st15.stpulscen.ru/images/product/159/037/630_medium3.jpg", "https://st15.stpulscen.ru/images/product/159/037/619_original.jpg"],
        price: 400,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Альта Профиль"],
            ["Цвета", "Бежевый, Персиковый, Золотистый"],
            ["Материал", "Виниловый"],
            ["Имитация", "Бревно"],
            ["Длина,мм", "3100"],
            ["Ширина,мм", "200"]
        ],
        category: "Сайдинг",
        brand: "Blockhouse"
    },
    {
        id: 7,
        name: "Сайдинг Blockhouse ВН02 двухпереломный 3,10 x 0,32м",
        images: ["https://ukrbyd.com/image/cache/catalog/BlockHouse/bej/BH_bej-500x500.jpg", "https://images.idd35.ru/10352127/normal", "https://ukrbyd.com/image/cache/catalog/BlockHouse/zol/BH_zol-228x228.jpg"],
        price: 880,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Альта Профиль"],
            ["Цвета", "Бежевый, Персиковый, Золотистый"],
            ["Материал", "Виниловый"],
            ["Имитация", "Бревно"],
            ["Длина,мм", "3100"],
            ["Ширина,мм", "320"]
        ],
        category: "Сайдинг",
        brand: "Blockhouse"
    },
    {
        id: 8,
        name: "Сайдинг Blockhouse ВН03 двухпереломный 3,10 x 0,226м",
        images: ["https://st49.stpulscen.ru/images/product/262/260/672_medium3.jpg", "https://st45.stpulscen.ru/images/product/248/470/703_original.jpg", "https://st49.stpulscen.ru/images/product/262/260/674_original.jpg", "https://st45.stpulscen.ru/images/product/248/470/702_original.jpg", "https://st45.stpulscen.ru/images/product/248/470/705_original.jpg"],
        price: 250,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Альта Профиль"],
            ["Цвета", "Бук, Каштан, Ольха, Орех, Ясень"],
            ["Материал", "Акриловый"],
            ["Имитация", "Бревно"],
            ["Длина,мм", "3000"],
            ["Ширина,мм", "226"]
        ],
        category: "Сайдинг",
        brand: "Blockhouse"
    },
    {
        id: 9,
        name: "Сайдинг Hokla Color 2,0 х 0,25м",
        images: ["https://st2.stpulscen.ru/images/product/416/211/425_original.png", "https://st2.stpulscen.ru/images/product/416/212/173_original.png", "https://st2.stpulscen.ru/images/product/416/211/870_original.png"],
        price: 436,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Беларусь"],
            ["Производитель", "Hokla"],
            ["Цвета", "Брусника, Голубика, Ирландский мох"],
            ["Материал", "Акриловый"],
            ["Имитация", "Дерево"],
            ["Длина,мм", "2000"],
            ["Ширина,мм", "250"]
        ],
        category: "Сайдинг",
        brand: "Hokla"
    },
    {
        id: 10,
        name: "Сайдинг Hokla Винтаж 2,0 x 0,25м",
        images: ["https://st3.stpulscen.ru/images/product/413/366/965_medium3.png", "https://st3.stpulscen.ru/images/product/413/366/964_original.png", "https://st3.stpulscen.ru/images/product/413/366/959_original.png", "https://st3.stpulscen.ru/images/product/413/366/952_original.png"],
        price: 436,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Беларусь"],
            ["Производитель", "Hokla"],
            ["Цвета", "Солома, Пепел, Корица, Охра"],
            ["Материал", "Акриловый"],
            ["Имитация", "Дерево"],
            ["Длина,мм", "2000"],
            ["Ширина,мм", "250"]
        ],
        category: "Сайдинг",
        brand: "Hokla"
    },
    {
        id: 11,
        name: "Сайдинг Hokla Лиственница 2,0 х 0,25м",
        images: ["https://st30.stpulscen.ru/images/product/454/177/385_medium3.jpg", "https://st30.stpulscen.ru/images/product/454/177/387_original.jpg"],
        price: 392,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Беларусь"],
            ["Производитель", "Hokla"],
            ["Цвета", "Медовая, Светлая"],
            ["Материал", "Виниловый"],
            ["Имитация", "Дерево"],
            ["Длина,мм", "2000"],
            ["Ширина,мм", "250"]
        ],
        category: "Сайдинг",
        brand: "Hokla"
    },
    {
        id: 12,
        name: "Балясина 50х35мм Wood Grand",
        images: ["https://woodgrand.ru/upload/iblock/a67/uvgdlff15ni8fwytlftwhp09sg1cnpn1.webp", "https://woodgrand.ru/upload/iblock/c7f/kfptf9h0unjw5nhjvleeolucyfog43c8.webp", "https://woodgrand.ru/upload/iblock/0b5/a6wpie6lkddm5st11l4hrkqnabp5rit1.webp"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Wood Grand"],
            ["Цвета", "Венге, Антрацит, Терракот"],
            ["Размер,мм", "50х35"]
        ],
        category: "Террасная доска",
        brand: "Wood Grand"
    },
    {
        id: 13,
        name: "Балясина 50х35мм Wood Grand",
        images: ["https://woodgrand.ru/upload/iblock/a67/uvgdlff15ni8fwytlftwhp09sg1cnpn1.webp", "https://woodgrand.ru/upload/iblock/c7f/kfptf9h0unjw5nhjvleeolucyfog43c8.webp", "https://woodgrand.ru/upload/iblock/0b5/a6wpie6lkddm5st11l4hrkqnabp5rit1.webp"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Wood Grand"],
            ["Цвета", "Венге, Антрацит, Терракот"],
            ["Размер,мм", "50х35"]
        ],
        category: "Террасная доска",
        brand: "Wood Grand"
    },
    {
        id: 14,
        name: "Фасадная панель цокольная",
        images: ["https://st16.stpulscen.ru/images/product/438/105/329_medium2.jpg"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Т-сайдинг"]
        ],
        category: "Фасадные панели",
        brand: "Т-сайдинг"
    },
    {
        id: 15,
        name: "Фасадная панель цокольная",
        images: ["https://st16.stpulscen.ru/images/product/438/105/330_medium2.jpg"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Т-сайдинг"]
        ],
        category: "Фасадные панели",
        brand: "Т-сайдинг"
    },
    {
        id: 16,
        name: "Фасадная панель NordSide Северный камень",
        images: ["https://st16.stpulscen.ru/images/product/438/105/670_medium2.jpg"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"]
        ],
        category: "Фасадные панели",
        brand: "NordSide"
    },
    {
        id: 17,
        name: "Фасадная панель NordSide Сланец",
        images: ["https://st16.stpulscen.ru/images/product/438/105/671_medium2.jpg"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "NordSide"]
        ],
        category: "Фасадные панели",
        brand: "NordSide"
    },
    {
        id: 18,
        name: "Фасадная панель Доломит",
        images: ["https://st16.stpulscen.ru/images/product/438/105/318_medium2.jpg"],
        price: 900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Доломит"]
        ],
        category: "Фасадные панели",
        brand: "Доломит"
    },
]

export interface Category {
    id: number,
    name: string,
    image: string,
}

const categories: Category[] = [
    {
        id: 0,
        name: "Сайдинг",
        image: '@/assets/catalog-images/сайдинг.png',
    },
    {
        id: 1,
        name: "Террасная доска",
        image: '@/assets/catalog-images/террасная доска.png',
    },
    {
        id: 2,
        name: "Фасадные панели",
        image: '@/assets/catalog-images/фасадные панели.png',
    },
    {
        id: 3,
        name: "Подоконники",
        image: '@/assets/catalog-images/подоконник.png',
    },
    {
        id: 4,
        name: "Кровля",
        image: '@/assets/catalog-images/кровля.png',
    },
    {
        id: 5,
        name: "Декоративные экраны для батарей",
        image: '@/assets/catalog-images/радиатор.png',
    },
    {
        id: 6,
        name: "Утеплители",
        image: '@/assets/catalog-images/утеплители.png',
    },
    {
        id: 7,
        name: "Подвесные потолки",
        image: '@/assets/catalog-images/потолки.png',
    },
    {
        id: 8,
        name: "Пена герметики, пистолеты",
        image: '@/assets/catalog-images/пена герметик.png',
    },
    {
        id: 9,
        name: "Водосточные системы",
        image: '@/assets/catalog-images/водоотведение.png',
    },
    {
        id: 10,
        name: "Прочее",
        image: '@/assets/catalog-images/прочее.png',
    }
]

interface Brand {
    id: number,
    name: string,
}

// const brands: Brand[] = [
//     {
//         id: ...
//     }
// ]

const categoriesBrands = {
    0: [72, 12, 14, 15],
    1: [0, 2, 3, 4]
}
