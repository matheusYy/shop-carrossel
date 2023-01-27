//styles
import "./scss/carrossel.css";
//imagens data
import { imagemData } from "../assets/data.img";
//dependencias
import { useEffect, useState } from "react";

export const Carrossel = () => {
  const [image, setImage] = useState([{}]);

  useEffect(() => {
    function getImage() {
      return setImage(() => imagemData.imagens.map((a) => a));
    }
    getImage();
  }, [imagemData]);

  return (
    <>
      {image.map((img, id) => {
        return (
          <div className="image-item-carrossel">
            <img
              src={`${img}`}
              width="100px"
              key={`${id++}0097`}
              className={`image-carrossel${id}`}
            />
          </div>
        );
      })}
    </>
  );
};
