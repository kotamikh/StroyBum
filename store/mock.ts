import { defineStore } from "pinia";
import { IProduct } from "~/types/Product";

export const useMock = defineStore('mockData', () => {
    const allProducts = ref<IProduct[]>([])
    const filteredProducts =  ref<IProduct[]>([])
    const getAllProducts = (offset: number, limit: number, category?: string, brand?: string): IProduct[] => {
        allProducts.value = products

        if (category && !brand) {
            filteredProducts.value = allProducts.value.filter(p => p.category === category).splice(offset, limit)
            return filteredProducts.value
        }

        if (category && brand) {
            filteredProducts.value = allProducts.value.filter(p => p.brand === brand).filter(p => p.category === category).splice(offset, limit)
            return filteredProducts.value
        }

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

    const getBrandsByCategory = (name: string): Brand[] => {
        const category = getCategories().find(cat => cat.name === name)
        if (category) {
            const stringId = category.id.toString()
            if (categoriesBrands.hasOwnProperty(stringId)) {
                let indexesArray = categoriesBrands[stringId]
                let brandsArray = []
                for (let id = 0; id < indexesArray.length; id++) {
                  let brand = brands.find(br => br.id === indexesArray[id])
                  if (brand) {
                      brandsArray.push(brand)
                    }
                }
                return brandsArray
            }
        }


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
    {
        id: 19,
        name: "Панель стеновая 220х1850мм (0,4м2) Кирпич",
        images: ["https://st16.stpulscen.ru/images/product/438/105/313_medium3.jpg"],
        price: 400,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Доломит"],
            ["Длина","1850мм"]
        ],
        category: "Фасадные панели",
        brand: "Доломит"
    },
    {
        id: 20,
        name: 'Цокольный Сайдинг "Альпийский" 220х3000мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/774_medium3.jpg"],
        price: 530,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Доломит"],
            ["Длина","3000мм"]
        ],
        category: "Фасадные панели",
        brand: "Доломит"
    },
    {
        id: 21,
        name: 'Цокольный Сайдинг "Альпийский" 220х3000мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/776_medium3.jpg"],
        price: 530,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Страна-производитель", "Россия"],
            ["Производитель", "Доломит"],
            ["Длина","3000мм"]
        ],
        category: "Фасадные панели",
        brand: "Доломит"
    },
    {
        id: 22,
        name: 'Подоконник Danke Комфорт 450мм',
        images: ["https://www.sorton.ru/image/cache/catalog/Danke/PodokonnikDankeKomfortbezhevii%CC%86-800x600.jpg"],
        price: 1800,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Производитель", "Danke"]
        ],
        category: "Подоконники, всё для установки окон",
        brand: "Danke"
    },
    {
        id: 23,
        name: 'Подоконник Danke Комфорт 150мм',
        images: ["https://www.sorton.ru/image/cache/catalog/Danke/PodokonnikDankeKomfortserii%CC%86-800x600.jpg"],
        price: 600,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Производитель", "Danke"]
        ],
        category: "Подоконники, всё для установки окон",
        brand: "Danke"
    },
    {
        id: 24,
        name: 'Подоконник Danke Комфорт 400мм',
        images: ["https://yut-store.ru/upload/iblock/185/18567c786e9d4ea3ffc42658eb80b016.jpg"],
        price: 1600,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Производитель", "Danke"]
        ],
        category: "Подоконники, всё для установки окон",
        brand: "Danke"
    },
    {
        id: 25,
        name: 'Профлист С20 в ассортименте',
        images: ["https://st30.stpulscen.ru/images/product/453/667/804_medium3.png"],
        price: 0,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Кровля",
        brand: "С20"
    },
    {
        id: 26,
        name: 'Лист перфорированный ХДФ 1200х600мм Эфес Венге',
        images: ["https://st16.stpulscen.ru/images/product/438/105/265_medium3.jpg"],
        price: 420,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Ширина, мм", "1200"],
            ["Высота, мм", "600"],
            ["Материал", "ХДФ"]
        ],
        category: "Декоративные экраны для батарей",
        brand: "NoBrand"
    },
    {
        id: 27,
        name: 'Экран КОРОБ Антик Орех МДФ 600х700х200мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/782_medium3.jpg"],
        price: 2750,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Ширина, мм", "700"],
            ["Высота, мм", "600"],
            ["Материал", "ХДФ"]
        ],
        category: "Декоративные экраны для батарей",
        brand: "NoBrand"
    },
    {
        id: 28,
        name: 'Экран КОРОБ Белый Глория МДФ 600х700х200мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/783_original.jpg"],
        price: 2900,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Ширина, мм", "700"],
            ["Высота, мм", "600"],
            ["Материал", "ХДФ"]
        ],
        category: "Декоративные экраны для батарей",
        brand: "NoBrand"
    },
    {
        id: 29,
        name: 'Ветро-влагозащитная 2-слойная мембрана Изобонд АМ 60м2',
        images: ["https://st16.stpulscen.ru/images/product/438/105/188_medium3.jpg"],
        price: 13,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Утеплители",
        brand: "Изобонд"
    },
    {
        id: 30,
        name: 'Минплита базальтовая Baswool 80 кг/м3 1,2х0,6х0,05 (0,216м3, 4,32м2)',
        images: ["https://st16.stpulscen.ru/images/product/438/105/264_medium2.jpg"],
        price: 820,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Плотность,кг/м3", "80"]
        ],
        category: "Утеплители",
        brand: "Baswool"
    },
    {
        id: 31,
        name: 'Минплита базальтовая Baswool 45 кг/м3 1,2х0,6х0,05 (0,216м3, 4,32м2)',
        images: ["https://st16.stpulscen.ru/images/product/438/105/264_medium2.jpg"],
        price: 530,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [
            ["Плотность,кг/м3", "45"]
        ],
        category: "Утеплители",
        brand: "Baswool"
    },
    {
        id: 32,
        name: 'Утеплитель Пеноплэкс 50мм 1200Х600 мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/666_medium2.jpg"],
        price: 240,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Утеплители",
        brand: "Пеноплэкс"
    },
    {
        id: 33,
        name: 'Утеплитель Пеноплэкс 30мм 1200Х600 мм',
        images: ["https://st16.stpulscen.ru/images/product/438/105/666_medium2.jpg"],
        price: 165,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Утеплители",
        brand: "Пеноплэкс"
    },
    {
        id: 34,
        name: 'Утеплитель напыляемый Polynor высокой плотности',
        images: ["https://st16.stpulscen.ru/images/product/438/105/659_medium3.jpg"],
        price: 500,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Утеплители",
        brand: "Polynor"
    },
    {
        id: 35,
        name: 'Пенопласт 30мм 1Х0,5м',
        images: ["https://st16.stpulscen.ru/images/product/438/105/338_medium3.jpg"],
        price: 60,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Утеплители",
        brand: "NoBrand"
    },
    {
        id: 36,
        name: 'Подвесной потолок Армстронг',
        images: ["https://st16.stpulscen.ru/images/product/438/105/377_medium3.jpg", "https://st16.stpulscen.ru/images/product/438/105/378_original.jpg"],
        price: 320,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Подвесные потолки",
        brand: "Армстронг"
    },
    {
        id: 37,
        name: 'Потолок Грильято Белый',
        images: ["https://st16.stpulscen.ru/images/product/438/105/407_medium3.jpg"],
        price: 500,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Подвесные потолки",
        brand: "Албес"
    },
    {
        id: 38,
        name: 'Потолок Грильято Золотой',
        images: ["https://st16.stpulscen.ru/images/product/438/105/405_medium2.jpg"],
        price: 600,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Подвесные потолки",
        brand: "Албес"
    },
    {
        id: 39,
        name: 'Потолок Грильято Металлик',
        images: ["https://st16.stpulscen.ru/images/product/438/105/408_medium2.jpg"],
        price: 600,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Подвесные потолки",
        brand: "Албес"
    },
    {
        id: 40,
        name: 'Потолок Грильято Черный',
        images: ["https://st16.stpulscen.ru/images/product/438/105/425_medium2.jpg"],
        price: 800,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Подвесные потолки",
        brand: "Албес"
    },
    {
        id: 41,
        name: 'Герметик Ultima силиконовый универсальный 310мл белый',
        images: [],
        price: 250,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Пена герметики, пистолеты",
        brand: "Ultima"
    },
    {
        id: 42,
        name: 'Очиститель монтажной пены Ultima',
        images: [],
        price: 150,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Пена герметики, пистолеты",
        brand: "Ultima"
    },
    {
        id: 43,
        name: "Пена герметик Kudo 65+ Лето",
        images: ["https://cdn.vseinstrumenti.ru/images/goods/stroitelnye-materialy/stroitelnaya-himiya/1084184/1200x800/88772991.jpg"],
        price: 400,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Пена герметики, пистолеты",
        brand: "Kudo"
    },
    {
        id: 44,
        name: "Водосточная система Альта-Профиль пластиковая",
        images: ["https://st16.stpulscen.ru/images/product/438/105/190_medium3.jpg", "https://st16.stpulscen.ru/images/product/438/105/192_original.jpg"],
        price: 100,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Водосточные системы",
        brand: "Альта-Профиль"
    },
    {
        id: 44,
        name: "Водосточная система кровли",
        images: ["https://st16.stpulscen.ru/images/product/438/105/193_medium3.jpg", "https://st16.stpulscen.ru/images/product/438/105/195_original.jpg"],
        price: 95,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Водосточные системы",
        brand: "Альта-Профиль"
    },
    {
        id: 45,
        name: "Воронка водосточная Белая",
        images: ["https://st16.stpulscen.ru/images/product/438/105/191_medium3.jpg"],
        price: 155,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Водосточные системы",
        brand: "Альта-Профиль"
    },
    {
        id: 45,
        name: "Воронка водосточная Коричневая",
        images: ["https://st16.stpulscen.ru/images/product/438/105/194_medium3.jpg"],
        price: 165,
        stock: 0,
        discount: 0,
        description: "Стоимость уточняйте на текущий момент ввиду постоянных изменений цен поставщиков.",
        characteristics: [],
        category: "Водосточные системы",
        brand: "Альта-Профиль"
    },
]

export interface Category {
    id: number,
    name: string,
    image: string
}

import siding from '@/assets/catalog-images/сайдинг.png'

const categories: Category[] = [
    {
        id: 0,
        name: "Сайдинг",
        image: siding,
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
        name: "Подоконники, всё для установки окон",
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

export interface Brand {
    id: number,
    name: string,
}

const brands: Brand[] = [
    {
        id: 0,
        name: "NordSide"
    },
    {
        id: 1,
        name: "Blockhouse"
    },
    {
        id: 2,
        name: "Hokla"
    },
    {
        id: 3,
        name: "Wood Grand"
    },
    {
        id: 4,
        name: "Т-сайдинг"
    },
    {
        id: 5,
        name: "Доломит"
    },
    {
        id: 6,
        name: "Danke"
    },
    {
        id: 7,
        name: "С20"
    },
    {
        id: 8,
        name: "NoBrand"
    },
    {
        id: 9,
        name: "Изобонд"
    },
    {
        id: 10,
        name: "Baswool"
    },
    {
        id: 11,
        name: "Пеноплэкс"
    },
    {
        id: 12,
        name: "Polynor"
    },
    {
        id: 13,
        name: "Армстронг"
    },
    {
        id: 14,
        name: "Албес"
    },
    {
        id: 15,
        name: "Ultima"
    },
    {
        id: 16,
        name: "Kudo"
    },
    {
        id: 17,
        name: "Альта-Профиль"
    }
]

const categoriesBrands = {
    0: [0, 1, 2],
    1: [3],
    2: [0, 4, 5],
    3: [6],
    4: [7],
    5: [8],
    6: [8, 9, 10, 11, 12],
    7: [13, 14],
    8: [15, 16],
    9: [17]
}
