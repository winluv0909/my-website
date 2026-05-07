"use client";

import { useEffect } from "react";

export default function Home() {

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

          {/* Large Glow */}
          <div className="absolute -top-40 -left-32 w-136 h-136 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Purple Glow */}
          <div className="absolute top-1/3 -right-40 w-136 h-136 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Pink Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-md h-112 bg-pink-100/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px]]"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-sm tracking-wide text-gray-700">
              Since 1990 • Trusted Workforce Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="fade-up mt-10 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            株式会社 大崎総業
          </h1>

          {/* English Name */}
          <p className="fade-up mt-6 text-2xl md:text-3xl text-gray-600 font-light tracking-wide">
            Oosaki Sogyo Co., Ltd.
          </p>

          {/* Description */}
          <p className="fade-up mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
            世界中の人々に日本での未来を。
            <br className="hidden md:block" />
            働き、成長し、ともに成功へ。
          </p>

          {/* Buttons */}
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
            <div className="fade-up p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <h3 className="font-semibold text-lg">
                人材アウトソーシング
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                さまざまな業界の業務運営を支援するため、熟練した信頼性の高い人材を提供し、効率性・柔軟性・円滑な人材管理の実現をサポートします。
              </p>
            </div>

            {/* CARD 2 */}
            <div className="fade-up p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <h3 className="font-semibold text-lg">
                グローバル採用・人材マッチング
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                日本企業と世界中の優秀な人材をつなぎ、企業と求職者の双方にとって最適なマッチングを実現し、長期的な成功を支援します。
              </p>
            </div>

            {/* CARD 3 */}
            <div className="fade-up p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <h3 className="font-semibold text-lg">
                ビジネス・人材サポートサービス
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                人材配置ソリューション、業務プロセスの最適化、人員計画などを含む包括的な運営・コンサルティングサポートを提供し、生産性および企業パフォーマンスの向上を支援します。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center fade-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              私たちの実績
            </h2>

            <p className="mt-4 text-gray-400">
              長年にわたり築き上げてきた信頼と成果
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

            <div className="text-center fade-up group">
              <h3 className="text-5xl font-bold text-white transition duration-300 group-hover:scale-110">
                1990
              </h3>

              <p className="mt-4 text-gray-400">
                設立年
              </p>
            </div>

            <div className="text-center fade-up group">
              <h3 className="text-5xl font-bold text-white transition duration-300 group-hover:scale-110">
                1000+
              </h3>

              <p className="mt-4 text-gray-400">
                登録スタッフ
              </p>
            </div>

            <div className="text-center fade-up group">
              <h3 className="text-5xl font-bold text-white transition duration-300 group-hover:scale-110">
                30+
              </h3>

              <p className="mt-4 text-gray-400">
                年以上の経験
              </p>
            </div>

            <div className="text-center fade-up group">
              <h3 className="text-5xl font-bold text-white transition duration-300 group-hover:scale-110">
                24/7
              </h3>

              <p className="mt-4 text-gray-400">
                サポート体制
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-white text-center">

        <div className="fade-up">
          <h2 className="text-3xl font-semibold tracking-tight">
            共に働きましょう
          </h2>

          <p className="mt-6 text-gray-500">
            ぜひ本日お問い合わせください。共に素晴らしいものを創り上げましょう。
          </p>

          <a href="/contact">
            <button className="mt-8 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
              お気軽にお問い合わせください
            </button>
          </a>
        </div>

      </section>

    </main>
  );
}