//styles
import "./scss/carrossel.css";
//imagens data
import { dataApiLocal, datavalue } from "../assets/data.img";
//dependencias
import React, { Children, useEffect, useState } from "react";

export const Carrossel = () => {
  const [imagemState, setStateImage] = useState(dataApiLocal);
  const [url, setUrl] = useState({ prev: 0, center: 0, next: 0 });
  const [value, setValue] = useState({ prev: 1, center: 2, next: 3 });
  const [vas, setVas] = useState({});

  function next() {}
  function last() {}
  useEffect(() => {
    //esperado: img {http: nomes e url, id: id dos items}
    //esperado: rec {data: data atual, hours: horario atual, location: local, recb: recebedor do item}
    //criando um objeto com o valor inicial de useState e adicionando os items pegos
    //de data.img.ts
    setUrl({ center: value.center, next: value.next, prev: value.prev });
  }, [value]);

  return (
    <>
      <div className="image-item-carrossel">
        {datavalue.url.map((ind, num: number) => {
          const { comidas } = ind;
          comidas.vidros.produtos.map((ind, index) => {
            const src = ind;
            return (
              <div className="content-frame">
                <iframe
                  src={src}
                  scrolling="no"
                  className="iframe-style"
                ></iframe>
                <p>name: nomes aqui</p>
              </div>
            );
          });
        })}
        {imagemState.forEach((ind, index) => {
          const { url } = ind;

          console.log();
          for (let i = 0; i < index.valueOf(); i++) {}
        })}
      </div>
      <button
        type="button"
        onClick={() =>
          setValue(({ center, next, prev }) => {
            return { center: center + 1, next: next + 1, prev: prev + 1 };
          })
        }
      >
        next
      </button>
      <button
        type="button"
        onClick={() =>
          setValue(({ center, next, prev }) => {
            return { center: center - 1, next: next - 1, prev: prev - 1 };
          })
        }
      >
        return
      </button>
      <p>{[url.prev, url.center, url.next]}</p>
    </>
  );
};
