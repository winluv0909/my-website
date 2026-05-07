"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(
        flippedCards.filter((item) => item !== index)
      );
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-sans text-gray-900 w-full overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-gray-50 via-white to-gray-100">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size[:80px_80px]"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-sm tracking-wide text-gray-700">
              Since 1990 • Trusted Workforce Solutions
            </span>
          </div>

          <h1 className="fade-up mt-10 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            株式会社 大崎総業
          </h1>

          <p className="fade-up mt-6 text-2xl md:text-3xl text-gray-600 font-light tracking-wide">
            Oosaki Sogyo Co., Ltd.
          </p>

          <p className="fade-up mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
            世界中の人々に日本での未来を。
            <br className="hidden md:block" />
            働き、成長し、ともに成功へ。
          </p>

          <div className="fade-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

            <a href="/contact">
              <button className="px-10 py-4 bg-black text-white rounded-xl shadow-xl hover:scale-105 hover:bg-gray-800 transition-all duration-300">
                お問い合わせ
              </button>
            </a>

            <a href="/services">
              <button className="px-10 py-4 bg-white/80 backdrop-blur-md border border-gray-300 rounded-xl hover:bg-white transition-all duration-300 shadow-sm">
                サービスを見る
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-white text-center scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto fade-up">

          <h2 className="text-3xl font-semibold tracking-tight">
            会社概要
          </h2>

          <p className="mt-8 text-gray-600 leading-relaxed">
            株式会社大崎総業は、高品質なサービスの提供を基盤に、お客様との強固で持続的なパートナーシップの構築を目指しています。専門性・信頼性・革新性を重視し、常に価値の向上に努めています。
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 bg-gray-100 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="fade-up text-3xl font-semibold tracking-tight">
            当社のサービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 items-stretch">

            {/* CARD 1 */}
            <div
              onClick={() => handleFlip(1)}
              className="cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.includes(1) ? "rotate-y-180" : ""
                }`}
              >

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-sm p-10 flex flex-col justify-center hover:shadow-xl transition-all duration-300">

                  <h3 className="font-semibold text-lg">
                    人材アウトソーシング
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    さまざまな業界の業務運営を支援するため、熟練した信頼性の高い人材を提供します。
                  </p>

                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black text-white rounded-2xl shadow-xl p-10 flex items-center justify-center">

                  <p className="text-2xl font-semibold">
                    ご覧いただき、誠にありがとうございます。
                  </p>

                </div>

              </div>
            </div>

            {/* CARD 2 */}
            <div
              onClick={() => handleFlip(2)}
              className="cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.includes(2) ? "rotate-y-180" : ""
                }`}
              >

                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-sm p-10 flex flex-col justify-center hover:shadow-xl transition-all duration-300">

                  <h3 className="font-semibold text-lg">
                    グローバル採用・人材マッチング
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    日本企業と世界中の優秀な人材をつなぎます。
                  </p>

                </div>

                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black text-white rounded-2xl shadow-xl p-10 flex items-center justify-center">

                  <p className="text-2xl font-semibold">
                    ご覧いただき、誠にありがとうございます。
                  </p>

                </div>

              </div>
            </div>

            {/* CARD 3 */}
            <div
              onClick={() => handleFlip(3)}
              className="cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.includes(3) ? "rotate-y-180" : ""
                }`}
              >

                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-sm p-10 flex flex-col justify-center hover:shadow-xl transition-all duration-300">

                  <h3 className="font-semibold text-lg">
                    ビジネス・人材サポートサービス
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    包括的な運営・コンサルティングサポートを提供します。
                  </p>

                </div>

                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black text-white rounded-2xl shadow-xl p-10 flex items-center justify-center">

                  <p className="text-2xl font-semibold">
                    ご覧いただき、誠にありがとうございます。
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