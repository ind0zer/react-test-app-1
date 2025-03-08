import { name } from "../../App";

const infoSite = { name: "google", url: "https://google.com" };
const firstNumber = 200;
const secondNumber = 100;
const colorsArray = ["Червоний", "Синій", "Зелений"];

export const Article = () => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png?20120323050937"
        alt="Опис зображення"
      />
      <a href={infoSite.url}>{infoSite.name}</a>
      <p>{firstNumber + secondNumber}</p>
      <ul>
        {colorsArray.map((color) => (
          <li key={color}><p>{color}</p></li>
        ))}
      </ul>
    </div>
  );
};
