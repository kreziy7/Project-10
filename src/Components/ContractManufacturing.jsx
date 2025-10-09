import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IMaskInput } from "react-imask";

import avtoHim from "../assets/avtoHim.png";
import bitHim from "../assets/bitHim.png";
import dezinfect from "../assets/dezinfect.png";
import AgTech from "../assets/AgTech.png";

const categories = [
  {
    title: "Автомобильная химия",
    description:
      "Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.",
    image: avtoHim,
    link: "/automotive",
  },
  {
    title: "Бытовая химия",
    description:
      "А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.",
    image: bitHim,
    link: "/household",
  },
  {
    title: "Дезинфицирующие средства",
    description: "Лишь интерактивные прототипы призваны к ответу.",
    image: dezinfect,
    link: "/disinfectants",
  },
  {
    title: "Дезинфицирующие средства",
    description: "Лишь интерактивные прототипы призваны к ответу.",
    image: dezinfect,
    link: "/disinfectants",
  },
  {
    title: "Автомобильная химия",
    description:
      "Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.",
    image: avtoHim,
    link: "/automotive",
  },
  {
    title: "Бытовая химия",
    description:
      "А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.",
    image: bitHim,
    link: "/household",
  },
];

const ContractManufacturing = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <>
      <div className="bg-[#F0F2F5] w-full h-56">
        <div className="max-w-[1200px] mx-auto">
          <hr className="border-[#5C8EE5] border-t-2 relative z-10 top-[20px] w-[100px]" />
          <h1 className="text-4xl font-medium pt-[24px]">
            Контрактное производство
          </h1>
          <div className="flex gap-6 mt-[24px]">
            <Link className="text-[#828A99] hover:text-[#292D33]" to="/">
              Главная
            </Link>
            <p>—</p>
            <a className="text-[#292D33]" href="#">
              Контрактное производство
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-[50px]">
          {categories.map((cat, idx) => (
            <div
              key={`${cat.title}-${idx}`}
              onClick={() => {
                setActiveIdx(idx);
                navigate(cat.link);
              }}
              className={`bg-white shadow-md cursor-pointer hover:scale-[1.03] transition-transform duration-200 text-center p-6 border filter grayscale hover:grayscale-0 ${
                activeIdx === idx ? "border-gray-200" : "border-gray-200"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-60 object-contain rounded-md mb-4 transition-all duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mt-8">SEO Заголовок</h3>
          <p className="text-[#828A99]">
            Также как дальнейшее развитие различных форм деятельности
            предполагает независимые способы реализации существующих финансовых
            и административных условий. Каждый <br /> из нас понимает очевидную
            вещь: курс на социально-ориентированный национальный проект играет
            важную роль в формировании как самодостаточных, так и внешне
            зависимых концептуальных решений. Внезапно, интерактивные прототипы
            набирают популярность среди определенных слоев населения, а значит,
            должны быть...
          </p>
          <p className="text-[#5C8EE5] cursor-pointer hover:underline mt-2">
            Читать больше
          </p>
        </div>
      </div>

      <div className="bg-[#F7F9FC] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={AgTech} alt="Spray" className="w-[350px] md:w-[420px]" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Хотите сотрудничать?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время,
              ответит на все интересующие вопросы и поможет даже в самых сложных
              случаях!
            </p>

            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Имя"
                className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-1/2 focus:outline-none focus:border-blue-500"
              />

              <IMaskInput
                mask="+998 (00) 000-00-00"
                placeholder="Номер телефона"
                className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-1/2 focus:outline-none focus:border-blue-500"
              />
            </form>

            <button className="bg-[#5C8EE5] hover:bg-[#467cd1] text-white font-medium px-8 py-3 rounded-md mt-6 transition-all duration-200">
              Отправить заявку
            </button>

            <p className="text-gray-500 text-sm mt-6 flex items-start gap-2">
              <span className="text-blue-500">🛡</span>
              Обращаясь к нам вы получаете не только профессиональную работу, но
              и абсолютную конфиденциальность информации!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractManufacturing;
