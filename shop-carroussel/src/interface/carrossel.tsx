//styles
import "./scss/carrossel.css";
//imagens data
import { datavalue } from "../assets/data.img";
//dependencias
import { SetStateAction, useEffect, useState } from "react";
//utils

export const Carrossel = () => {
  const [imagemState, setStateImage] = useState({
    item: [0],
    name: [""],
    preço: [""],
    preçoAntigo: [""],
    url: [""],
    id: [0],
  });

  const [value, setValue] = useState(0);
  const [center, setCenter] = useState(1);
  const [last, setLast] = useState(2);
  const [hiddenOne, setHiddenOne] = useState(3);
  const [hiddenTwo, setHiddenTwo] = useState(4);
  function upState() {
    setValue(value + 1);
    setCenter(center + 1);
    setLast(last + 1);
    setCenter(center + 1);
    setHiddenOne(hiddenOne + 1);
    setHiddenTwo(hiddenTwo + 1);
  }

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
      <div className="content-pai-carrossel">
        <button
          onClick={upState}
          type="button"
          className="button-next-carrossel"
        >
          next
        </button>

        <aside className="date-carrossel-content">
          <div className="item-carrossel-content">
            {imagemState.item[value]}
          </div>
          <div className="item-carrossel-content">
            {imagemState.item[center]}
          </div>
          <div className="item-carrossel-content">{imagemState.item[last]}</div>
          <div className="item-carrossel-content">
            {imagemState.item[hiddenOne]}
          </div>
          <div className="item-carrossel-content">
            {imagemState.item[hiddenTwo]}
          </div>
        </aside>
      </div>
    </>
  );
};
