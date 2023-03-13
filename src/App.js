import HeaderMenu from "./components/header/HeaderMenu";
import "./App.css";

import image from "./components/images/din_1.png";
import ServicesAbout from "./components/services/ServicesAbout";
import newimage from "./components/images/image 1.png";
import ServicesBlocks from "./components/services/ServicesBlocks";
import RentalServicesBlock from "./components/services/RentalServicesBlock";
import rentalimage from "./components/images/linkedin-sales-navigator-402831.png";

const servicesBlocks = [
  { color: "#22356F", text: "Годовое ТО" },
  { color: "#0052C1", text: "Выравнивание колес" },
  {
    color: "#76B58B",
    text: "Настройка переключателей",
  },
];

function App() {
  return (
    <div>
      <HeaderMenu
        title={'Веломастерская "Велозар"'}
        text={
          "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды."
        }
        image={image}
      />
      <ServicesAbout
        title={"Что мы предлагаем"}
        text={
          "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. "
        }
        image={newimage}
      />
      <ServicesBlocks blocks={servicesBlocks} />
      <RentalServicesBlock
        image={rentalimage}
        title={"Прокат велосипедов"}
        text={
          "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!"
        }
      />
    </div>
  );
}

export default App;
