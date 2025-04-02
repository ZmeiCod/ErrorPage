import React from "react";
import vk from "../assets/img/vk.svg";

export default function Home() {
  return (
    <>
      <div className="error">
        <div className="text">
          <h1 className="">Уважаемые клиенты !</h1>
          <p>
            В данный момент проходят внеплановые технические работы на сервере
          </p>
          <h3>
            Просим прощение за неудобство и просим Вас заказывать по номеру или через
            группу Вконтакте
          </h3>
        </div>

        <div className="silka">
          <a className="tel" href="tel:+79784441414">
            {" "}
            + 7 (978) 444 14 14{" "}
          </a>
          <ul>
            <li>
              <a
                href="https://vk.com/mayasimf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vk} alt="vk" className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
