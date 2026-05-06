"use client";

import { useEffect } from "react";

export default function Achievements() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto fade-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            実績と評価
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            卓越性と信頼性への取り組みを体現した成果をお届けします。
          </p>
        </div>
      </section>

      {/* PRESIDENT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          {/* TEXT */}
          <div className="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              経営陣のご紹介
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              当社は、卓越性・誠実性・長期的な成功を重視する強固なリーダーシップのもとに運営されています。明確なビジョンと継続的な改善への姿勢に基づき、揺るぎない信頼を築きながら、高品質なサービスを提供し続けています。
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end md:pr-10 lg:pr-5">
            <div className="relative text-center group">

              {/* Soft glow */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-64 h-64 bg-gray-200/40 rounded-full blur-3xl"></div>
              </div>

              {/* Image */}
             <img
               src="/images/president.png"
               alt="President"
               className="relative w-52 md:w-80 object-contain transition duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-10 md:translate-x-10 lg:translate-x-1"/>

              {/* Name */}
              <p className="mt-4 text-3xl md:text-2xl font-semibold text-gray-900">
                Mr. Akihiro Kaneko
              </p>

               {/* Katakana */}
              <p className="mt-0 text-2xl md:text-2xl font-bold text-gray-800 -translate-x-1 tracking-wide">
               金子明宏氏</p>

              {/* Title */}
              <p className="mt-0 text-1xl md:text-xl font-bold text-gray-500 -translate-x-1 tracking-wide">
               代表取締役</p>

            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS LIST */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="fade-up">
            <h3 className="text-xl font-semibold">平成25年11月07日</h3>
            <p className="text-gray-600 mt-2">
              東和新生会様主催、東和銀行様等共催にてビジネス交流会で当社がブースを出展致します。グリーンドーム前橋で開催されます。
            </p>
          </div>

          <div className="fade-up">
            <h3 className="text-xl font-semibold">令和2年3月26日</h3>
            <p className="text-gray-600 mt-2">
              群馬県安全運転管理者協議会様から感謝状を頂きました。
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}