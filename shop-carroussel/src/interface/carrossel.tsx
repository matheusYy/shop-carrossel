//styles
import "./scss/carrossel.css";
//imagens data
import { dataApiLocal, datavalue } from "../assets/data.img";
import Data from "./data";
//dependencias
import React, { Children, useEffect, useState } from "react";
//utils
import { getArray } from "../utils/return.array";

export const Carrossel = () => {
  const [imagemState, setStateImage] = useState({
    item: [0],
    name: [""],
    preço: [""],
    preçoAntigo: [""],
    url: [""],
    id: [0],
  });
  const [url, setUrl] = useState({ prev: 0, center: 0, next: 0 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    const dateValue = {
      item: datavalue.data.items.map((ind) => {
        const { item } = ind;
        return item;
      }),
      name: datavalue.data.items.map((ind) => {
        const { name } = ind;
        return name;
      }),
      preço: [""],
      preçoAntigo: [""],
      url: [""],
      id: datavalue.data.items.map((ind) => {
        const { id } = ind;
        return id;
      }),
    };
    setStateImage(() => {
      return dateValue;
    });
    console.log(imagemState);
  }, []);

  return (
    <>
      <div className="image-item-carrossel">
        <button
          type="button"
          onClick={() =>
            value > datavalue.data.items.length
              ? setValue(() => {
                  return value - 1 - datavalue.data.items.length;
                })
              : setValue(value + 1)
          }
          className="button-style two"
        />
        <button
          type="button"
          onClick={() =>
            value == 0
              ? setValue(() => {
                  return datavalue.data.items.length;
                })
              : setValue(value - 1)
          }
          className="button-style one"
        />
        <aside className="date-carrossel-content">
          <div className="item-carrossel-content">{imagemState.item[value]}</div>
          <div className="item-carrossel-content">{imagemState.item[value]}</div>
          <div className="item-carrossel-content">{imagemState.item[value]}</div>
          <div className="item-carrossel-content">{imagemState.item[value]}</div>
          <div className="item-carrossel-content">{imagemState.item[value]}</div>
        </aside>
      </div>
    </>
  );
};
