//styles
import "./scss/carrossel.css";
//imagens data
import { dataApiLocal, datavalue } from "../assets/data.img";
//dependencias
import React, { Children, useEffect, useState, useRef } from "react";

export const Carrossel = () => {
  const [imagemState, setStateImage] = useState(dataApiLocal);
  const [url, setUrl] = useState({ prev: 0, center: 0, next: 0 });
  const [value, setValue] = useState(0);
  const [vas, setVas] = useState({});
  const [index, setIndex] = useState([]);

  function next() {}
  function last() {}
  useEffect(() => {
    //esperado: img {http: nomes e url, id: id dos items}
    //esperado: rec {data: data atual, hours: horario atual, location: local, recb: recebedor do item}
    //criando um objeto com o valor inicial de useState e adicionando os items pegos
    //de data.img.ts

    console.log(vas);
  }, []);
  useEffect(() => {
    const inter = new IntersectionObserver((call, opt) => {
      console.log("run");
    });
  }, []);
  return (
    <>
      <div className="image-item-carrossel">
        {datavalue.items.map((a, ind, array): any => {
          const { data, id, name, oldprice, price, url, item } = a;
          const div = useRef(null);
          console.log(`array: ${array[0].item} url: ${array[1].url}`);
          for (let i = 5; i < 5; i++) {
            return <div>{i}</div>;
          }
          return (
            <div className="item-carrossel" key={id} ref={div}>
              {item}
              <img src={array[value].url} width="50px" />
            </div>
            
          );
        })}
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="button-style"
        />
      </div>
    </>
  );
};
