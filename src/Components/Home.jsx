import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.png";
import { Clock, FileText, Scale, Truck, Settings, Phone } from 'lucide-react';

const Home = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center text-white flex flex-col"
        style={{ backgroundImage: `url(${background})` }}
      >
        <header className="flex justify-between items-center px-10 py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:underline hover:decoration-blue-400">
              О компании
            </a>
            <a href="#" className="hover:underline hover:decoration-blue-400">
              Контрактное производство
            </a>
            <a href="#" className="hover:underline hover:decoration-blue-400">
              Собственные торговые марки
            </a>
            <a href="#" className="hover:underline hover:decoration-blue-400">
              Новости
            </a>
            <a href="#" className="hover:underline hover:decoration-blue-400">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="text-white h-5 w-5" />
              <a href="tel:+74996861014" className="text-sm font-medium">
                +7 (499) 686-10-14
              </a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium">
              Получить консультацию
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-start justify-center px-10">
          <h1 className="text-4xl md:text-5xl font-bebas max-w-3xl leading-tight">
            КОМПЛЕКСНОЕ ОБЕСПЕЧЕНИЕ ТОВАРАМИ И РАСХОДНЫМИ МАТЕРИАЛАМИ БИЗНЕСА
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Высокий уровень вовлечения представителей целевой аудитории является
            четким доказательством простого факта: высококачественный прототип
            будущего проекта напрямую зависит от анализа существующих паттернов
            поведения.
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium">
            Подробнее о компании
          </button>
        </main>

        <div className="flex flex-wrap justify-between px-10 py-6 text-sm font-medium gap-4">
          <div className="flex items-center gap-2">
            <Clock className="text-blue-400 h-6 w-6" />
            <span className="font-bebas">Непрерывная работа c 2017 года</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="text-blue-400 h-6 w-6" />
            <span className="font-bebas">Вся продукция сертифицирована</span>
          </div>
          <div className="flex items-center gap-2">
            <Scale className="text-blue-400 h-6 w-6" />
            <span className="font-bebas">Контроль качества на всех этапах</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="text-blue-400 h-6 w-6" />
            <span className="font-bebas">Возможны поставки по всей России</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="text-blue-400 h-6 w-6" />
            <span className="font-bebas">Оперативное производство</span>
          </div>
        </div>
      </div>

      <section className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h2 className="text-4xl font-bebas mb-4">СХЕМА РАБОТЫ</h2>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <div className="flex flex-wrap justify-between gap-12">
            <div className="flex-1 min-w-[200px]">
              <span className="text-blue-500 text-3xl font-bebas">01</span>
              <h3 className="text-xl font-bold mt-2">Знакомство</h3>
              <p className="text-gray-600 mt-4 text-sm">
                Бесплатно, предоставляем компании профессиональную возможность оценить
                наши услуги. Заполнение формы обратной связи.
              </p>
              <a href="#" className="text-blue-500 mt-4 block text-sm">
                — Оставить заявку
              </a>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-blue-500 text-3xl font-bebas">02</span>
              <h3 className="text-xl font-bold mt-2">Заключение договора</h3>
              <p className="text-gray-600 mt-4 text-sm">
                Прямая интерпретация прототипов применения к требованиям.
              </p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-blue-500 text-3xl font-bebas">03</span>
              <h3 className="text-xl font-bold mt-2">Производство</h3>
              <p className="text-gray-600 mt-4 text-sm">
                А также стремительное введение традиционные производства, нанотехнологии функционально разнесены на независимые элементы.
              </p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-blue-500 text-3xl font-bebas">04</span>
              <h3 className="text-xl font-bold mt-2">Доставка</h3>
              <p className="text-gray-600 mt-4 text-sm">
                В частности, экономическая повестка сегодняшнего дня обуславливает важность инноваций о возможностях приоритетных разделов на экономику.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;