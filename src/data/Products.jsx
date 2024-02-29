import a from '../img/v1.jpg'
import b from '../img/v2.jpg'
import c from '../img/v3.jpg'
import d from '../img/v4.jpg'
import e from '../img/v5.jpg'
import f from '../img/v6.jpg'
import g from '../img/v7.webp'
import h from '../img/v8.webp'
import i from '../img/v9.webp'
import j from '../img/v10.webp'
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

 const product = [
    {
        "id": 0,
        "img": a,
        "title": "Vegetable",
        "price": 2,
        "discount": 3
    },

    {
        "id": 1,
        "img": b,
        "title": "Fruits",
        "price": 5,
        "discount": 5
    },

    {
        "id": 2,
        "img": c,
        "title": "Meat",
        "price": 8,
        "discount": 3
    },

    {
        "id": 3,
        "img": d,
        "title": "Seafood",
        "price": 1,
        "discount": 6
    },

    {
        "id": 4,
        "img": e,
        "title": "Milk & Egg",
        "price": 3.8,
        "discount": 33
    },

    {
        "id": 5,
        "img": f,
        "title": "Bread",
        "price": 2.45,
        "discount": 34
    },

    {
        "id": 6,
        "img": g,
        "title": "Frozen",
        "price": 4.2,
        "discount": 12
    },

    {
        "id": 7,
        "img": h,
        "title": "Organic",
        "price": 2.9,
        "discount": 6.6
    },

    {
        "id": 8,
        "img": i,
        "title": "Organic",
        "price": 2.6,
        "discount": 3.33
    },

    {
        "id": 9,
        "img": j,
        "title": "Organic",
        "price": 9.8,
        "discount": 6.45
    }
]

export const products = shuffle(product);

