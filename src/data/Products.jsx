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
        "title": "Chilli",
        "price": 2,
        "discount": 3,
        "cat": "Vegetable"
    },

    {
        "id": 1,
        "img": b,
        "title": "Onion",
        "price": 5,
        "discount": 5,
        "cat": "Vegetable"
    },

    {
        "id": 2,
        "img": c,
        "title": "Tomato",
        "price": 8,
        "discount": 3,
        "cat": "Vegetable"
    },

    {
        "id": 3,
        "img": d,
        "title": "Cabbage",
        "price": 1.22,
        "discount": 6,
        "cat": "Vegetable"
    },

    {
        "id": 4,
        "img": e,
        "title": "Cauliflower",
        "price": 3.8,
        "discount": 33,
        "cat": "Vegetable"
    },

    {
        "id": 5,
        "img": f,
        "title": "Carrot",
        "price": 2.45,
        "discount": 34,
        "cat": "Fruits"
    },

    {
        "id": 6,
        "img": g,
        "title": "Beans",
        "price": 4.2,
        "discount": 12,
        "cat": "Organic"
    },

    {
        "id": 7,
        "img": h,
        "title": "Cookies",
        "price": 2.9,
        "discount": 6.6,
        "cat": "Bread"
    },

    {
        "id": 8,
        "img": i,
        "title": "Bean",
        "price": 2.6,
        "discount": 3.33,
        "cat": "Organic"
    },

    {
        "id": 9,
        "img": j,
        "title": "Beetroot",
        "price": 9.8,
        "discount": 6.45,
        "cat": "Organic"
    }
]

export const products = shuffle(product);

