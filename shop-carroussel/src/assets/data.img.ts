import { useState, useEffect } from "react";

export const dataApiLocal = [
  {
    id: 466745,
    name: "Geleia 700ml",
    price: "12$",
    url: "https://assets.pinterest.com/ext/embed.html?id=694328467569935470",
    oldprice: "15$",
    data: getData().data,
  },
  {
    id: 4643546,
    name: "Maionese",
    price: "467.46$",
    url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
    oldprice: "534.00$",
    data: getData().data,
  },
  {
    id: 35474,
    name: "Lemon Curd",
    price: "4540.00$",
    url: "https://assets.pinterest.com/ext/embed.html?id=293085888257648843",
    oldprice: "5034.00$",
    data: getData().data,
  },
  {
    id: 34668965,
    name: "Italian",
    price: "34.00$",
    url: "https://assets.pinterest.com/ext/embed.html?id=1025694883857547870",
    oldprice: "37.00$",
    data: getData().data,
  },
  {
    id: 3542474,
    name: "Lemon Curd",
    price: "4540.00$",
    url: "https://assets.pinterest.com/ext/embed.html?id=293085888257648843",
    oldprice: "5034.00$",
    data: getData().data,
  },
];

function getData() {
  const time = new Date();
  const [data, hours] = [time.getDate, time.getHours];
  return { data: data, hours: hours };
}

const g = dataApiLocal.map((a) => {
  const { data, id, name, oldprice, price, url } = a;
  return;
});

export const datavalue = {
  items: [
    {
      item: 1,
      id: 46436788978546,
      name: "benezsa",
      price: "467.46$",
      url: "https://src.nappy.co/2466",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 2,
      id: 464366799546,
      name: "Maionese",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 3,
      id: 46434676733546,
      name: "Veze",
      price: "46.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "44.00$",
      data: getData().data,
    },
    {
      item: 4,
      id: 6798087,
      name: "Benheze",
      price: "447.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 5,
      id: 690 - 97,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 6,
      id: 5798,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 7,
      id: 6443,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 8,
      id: 4353554,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 9,
      id: 788900877,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 10,
      id: 567890,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
    {
      item: 11,
      id: 6767697,
      name: "Stay",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
      data: getData().data,
    },
  ],
  url: [
    {
      comidas: {
        chocolate: {
          bombom: ["a", "b", "v"],
          ferreiro: "",
        },
        gelados: {
          sorvetes: [],
          bebidas: [],
        },
        vidros: {
          produtos: [
            {
              nome: "skate",
              preço: "340$",
              url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
            },
            {
              nome: "coca-cola",
              preço: "3$",
              url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
            },
            {
              nome: "tenis Nike Gold",
              preço: "345$",
              url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
            },
          ],
          ecomerce: [],
        },
      },
    },
  ],
};
