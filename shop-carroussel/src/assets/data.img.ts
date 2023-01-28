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
      id: 4643546,
      name: "Maionese",
      price: "467.46$",
      url: "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
      oldprice: "534.00$",
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
            "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
            "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
            "https://assets.pinterest.com/ext/embed.html?id=389279961551287362",
          ],
          ecomerce: [],
        },
      },
    },
  ],
};
