import React, { useState } from "react";
import agtech_3 from "../assets/Him.png";
import microscopeImg from "../assets/microscope.png";
import img1 from "../assets/lab1.jpg";
import img2 from "../assets/factory1.jpg";
import img3 from "../assets/lab2.jpg";
import img4 from "../assets/factory2.jpg";
import AgTech from "../assets/AgTech.png"
import burgerking from "../assets/burgerking.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom"
import {
  FaHourglassHalf,
  FaCertificate,
  FaUserCheck,
  FaTruck,
  FaIndustry,
  FaFileAlt,
  FaTags,
  FaPaintRoller,
  FaFlask,
} from "react-icons/fa";
import {  } from "framer-motion/client";

const Automotive = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const industries = [
  "Химические производства",
  "Автомойки",
  "Пищевая продукция",
  "Лаки и краски",
  "Косметические средства",
  "Автомобильная косметика",
  "Косметика по уходу за одеждой",
  "Косметика по уходу за обувью",
  "Строительные материалы",
  "И многих других",
];

const logos = [
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
  "/burgerking.png",
];


  const steps = [
  {
    number: "01",
    title: "Знакомство",
    text: "Безусловно, сплочённость команды профессионалов позволяет оценить значение формы воздействия.",
    link: "Оставить заявку",
  },
  {
    number: "02",
    title: "Заключение договора",
    text: "Лишь интерактивные прототипы призваны к ответу.",
  },
  {
    number: "03",
    title: "Производство",
    text: "А также стремится вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.",
  },
  {
    number: "04",
    title: "Доставка",
    text: "В частности, экономическая повестка сегодняшнего дня говорит о возможности приоритизации разума над эмоциями.",
  },
];

  const item = [
    { icon: <FaHourglassHalf className="text-blue-500 text-3xl mb-2" />, text: "Непрерывная работа с 2017 года" },
    { icon: <FaCertificate className="text-blue-500 text-3xl mb-2" />, text: "Вся продукция сертифицирована" },
    { icon: <FaUserCheck className="text-blue-500 text-3xl mb-2" />, text: "Контроль качества на всех этапах" },
    { icon: <FaTruck className="text-blue-500 text-3xl mb-2" />, text: "Возможны поставки по всей России" },
    { icon: <FaIndustry className="text-blue-500 text-3xl mb-2" />, text: "Оперативное производство" },
  ];

  const items = [
    { icon: <FaFileAlt className="text-blue-500 text-2xl" />, text: "Полное описание товаров" },
    { icon: <FaTags className="text-blue-500 text-2xl" />, text: "Актуальные цены" },
    { icon: <FaPaintRoller className="text-blue-500 text-2xl" />, text: "Лаки и краски" },
    { icon: <FaFlask className="text-blue-500 text-2xl" />, text: "Химические производства" },
  ];

  return (
    <>
      <div className="bg-[#F0F2F5] w-full h-56">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <hr className="border-[#5C8EE5] border-t-2 relative z-10 top-[20px] w-[100px]" />
              <h1 className="text-4xl font-medium pt-[24px]">Контрактное производство</h1>
              <div className="flex gap-6 mt-[24px]">
                <Link className="text-[#828A99] hover:text-[#292D33]" to="/">Главная</Link>
                <p>—</p>
                <Link className="text-[#828A99] hover:text-[#292D33]" to="/ContractManufacturing">Контрактное производство</Link>
                <p>—</p>
                <Link to="/automotive" className="text-[#292D33]">Автомобильная химия</Link>
              </div>
            </div>
            <div>
              <img className="w-[350px] h-auto relative top-[50px]" src={agtech_3} alt="Production" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-12 max-w-[1200px] mx-auto gap-10 px-4">
        <div>
          <img className="w-[350px] md:w-[420px]" src={img1} alt="Automotive" />
        </div>
        <div>
          <hr className="border-[#5C8EE5] border-t-2 relative z-10 top-[20px] w-[100px]" />
          <h1 className="text-3xl md:text-4xl font-medium pt-[24px] leading-snug">
            Контрактное производство <br /> автомобильной химии
          </h1>
          <p className="text-[#828A99] text-sm mt-6 max-w-lg leading-relaxed">
            Прежде всего, начало повседневной работы по формированию позиции
            однозначно фиксирует необходимость приоритизации разума над эмоциями.
            Кстати, представители современных социальных резервов неоднозначны и
            будут описаны максимально подробно.
          </p>
          <p className="text-[#828A99] text-sm mt-6 max-w-lg leading-relaxed">
            Но социально-экономическое развитие напрямую зависит от поставленных
            обществом задач! Безусловно, постоянный количественный рост и сфера
            нашей активности предоставляет широкие возможности для системы
            обучения кадров, соответствующей насущным потребностям. В целом,
            конечно, выбранный нами инновационный путь обеспечивает широкому
            кругу специалистов участие в формировании своевременного выполнения
            сверхзадачи.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-200 cursor-pointer">
          {item.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center p-6 border border-gray-200 hover:bg-white hover:shadow-md transition-all">
              {item.icon}
              <p className="text-gray-700 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">ИЗГОТОВЛЕНИЕ АВТОХИМИИ</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Но современная методология разработки позволяет оценить значение
              прогресса профессионального сообщества. Есть над чем задуматься:
              тщательные исследования конкурентов набирают популярность среди
              определённых слоёв населения, а значит, должны быть ассоциативно
              распределены по отраслям.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {item.icon}
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={microscopeImg} alt="Microscope" className="w-full max-w-[450px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
              Виды автохимии
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-4xl">
              Но современная методология разработки позволяет оценить значение прогресса 
              профессионального сообщества. Есть над чем задуматься: тщательные исследования 
              конкурентов набирают популярность среди определенных слоев населения, 
              а значит, должны быть ассоциативно распределены по отраслям.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700 text-sm md:text-base">
            <ul className="space-y-2">
              <li>— Антикотч</li>
              <li>— Многоцелевая смазка</li>
              <li>— Жидкий ключ</li>
              <li>— Высокотемпературная смазка</li>
              <li>— Универсальный очиститель деталей</li>
            </ul>

            <ul className="space-y-2">
              <li>— Силиконовая смазка</li>
              <li>— Цепная смазка</li>
              <li>— Медная смазка</li>
              <li>— Графитовая смазка</li>
              <li>— Очиститель кондиционера пенный</li>
            </ul>

            <ul className="space-y-2">
              <li>— Очиститель тормозных дисков</li>
              <li>— Очиститель битумных пятен</li>
              <li>— Очиститель кондиционера</li>
              <li>— Очиститель дроссельной заслонки</li>
              <li>— Очиститель обивки</li>
            </ul>

            <ul className="space-y-2">
              <li>— Тефлоновая смазка</li>
              <li>— Очиститель двигателя</li>
              <li>— Универсальный очиститель</li>
              <li>— Чернитель шин</li>
              <li>— Чернитель шин + очистка</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex justify-center items-center overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full md:w-[800px] h-[350px] object-cover flex-shrink-0 rounded-xl mx-2 shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-900 text-2xl font-semibold uppercase mb-12 tracking-wide relative inline-block">
          <span className="border-t-2 border-blue-500 absolute -top-3 w-12 left-0"></span>
          СХЕМА РАБОТЫ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-blue-500 text-2xl font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {step.text}
              </p>
              {step.link && (
                <a
                  href="#"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  {step.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 uppercase mb-10 relative inline-block">
            <span className="border-t-2 border-blue-500 absolute -top-3 w-12 left-0"></span>
            ПРОИЗВОДИМ АЭРОЗОЛЬНУЮ ПРОДУКЦИЮ ДЛЯ РАЗНЫХ СФЕР
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
            {industries.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {logos.map((logos, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <img
                src={burgerking}
                alt={`logo-${index}`}
                className="w-20 h-20 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
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

export default Automotive;