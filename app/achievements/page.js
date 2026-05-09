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
      <section className="py-20 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div className="fade-up order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              経営陣のご紹介
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
              当社は、卓越性・誠実性・長期的な成功を重視する強固なリーダーシップのもとに運営されています。明確なビジョンと継続的な改善への姿勢に基づき、揺るぎない信頼を築きながら、高品質なサービスを提供し続けています。
            </p>
          </div>

          {/* IMAGE */}
          <div className="fade-up order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative text-center group w-full max-w-sm">

              {/* Soft glow */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gray-200/40 rounded-full blur-3xl"></div>
              </div>

              {/* Image */}
              <img
                src="/images/president.png"
                alt="President"
                className="
                  relative
                  mx-auto
                  w-52
                  sm:w-60
                  md:w-72
                  lg:w-80
                  h-auto
                  object-contain
                  transition
                  duration-500
                  ease-out
                  group-hover:scale-105
                  md:group-hover:-translate-y-2
                "
              />

              {/* Name */}
              <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                Mr. Akihiro Kaneko
              </p>

              {/* Japanese Name */}
              <p className="mt-1 text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
                金子明弘氏
              </p>

              {/* Title */}
              <p className="mt-1 text-base md:text-xl font-bold text-gray-500 tracking-wide">
                代表取締役
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS TIMELINE */}
<section className="pb-28 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto">

    {/* SECTION TITLE */}
    <div className="text-center mb-20 fade-up">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        会社沿革・実績
      </h2>

      <p className="mt-4 text-gray-500">
        当社の歩みと重要な実績をご紹介いたします。
      </p>
    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>

      {/* ITEM 1 */}
      <div className="relative mb-16 fade-up">

        {/* Dot */}
        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 top-2 z-10"></div>

        <div className="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-12 items-start">

          {/* LEFT */}
          <div className="md:text-right md:pr-10">
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              Achievement
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              平成25年11月07日
            </h3>
          </div>

          {/* RIGHT */}
          <div className="mt-4 md:mt-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <p className="text-gray-600 leading-relaxed">
              東和新生会様主催、東和銀行様等共催にてビジネス交流会で当社がブースを出展致します。グリーンドーム前橋で開催されます。
            </p>
          </div>

        </div>
      </div>

      {/* ITEM 2 */}
      <div className="relative fade-up">

        {/* Dot */}
        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 top-2 z-10"></div>

        <div className="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-12 items-start">

          {/* LEFT */}
          <div className="md:text-right md:pr-10">
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              Recognition
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              令和2年3月26日
            </h3>
          </div>

          {/* RIGHT */}
          <div className="mt-4 md:mt-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <p className="text-gray-600 leading-relaxed">
              群馬県安全運転管理者協議会様から感謝状を頂きました。
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

</main>
  );
}