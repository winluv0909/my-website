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
    <main className="font-sans text-gray-900 w-full">

    {/* HERO */}
<section className="relative overflow-hidden py-36 px-6 text-center bg-gray-100">

  {/* Gradient */}
  <div className="absolute inset-0 bg-linear-to-br from-gray-100 via-white to-gray-200 opacity-90"></div>

  {/* Blob 1 */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

  {/* Blob 2 */}
  <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

  {/* Blob 3 */}
  <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto">

  <h1 className="text-5xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-up">
    株式会社 大崎総業
  </h1>

  <p className="mt-6 text-xl text-gray-600 opacity-0 animate-fade-up delay-200">
    Osaki Sogyo Co., Ltd.
  </p>

  <p className="mt-6 text-gray-500 max-w-2xl mx-auto opacity-0 animate-fade-up delay-400">
    世界中の人々に日本での未来を。働き、成長し、ともに成功へ。
  </p>

  <a href="/contact">
    <button className="mt-10 px-10 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition opacity-0 animate-fade-up delay-600">
      お問い合わせ
    </button>
  </a>

</div>
</section>

      {/* ABOUT */}
      <section
  id="about"
  className="py-24 px-6 bg-white text-center fade-up scroll-mt-24">
        <div className="max-w-3xl mx-auto">
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
        className="py-24 px-6 bg-gray-100 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center fade-up">
          <h2 className="text-3xl font-semibold tracking-tight">
            当社のサービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            
            <div className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-md hover-lift fade-up">
              <h3 className="font-semibold text-lg">人材アウトソーシング</h3>
              <p className="mt-4 text-gray-500">
                さまざまな業界の業務運営を支援するため、熟練した信頼性の高い人材を提供し、効率性・柔軟性・円滑な人材管理の実現をサポートします。
              </p>
            </div>

            <div className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-md hover-lift fade-up">
              <h3 className="font-semibold text-lg">グローバル採用・人材マッチング</h3>
              <p className="mt-4 text-gray-500">
                日本企業と世界中の優秀な人材をつなぎ、企業と求職者の双方にとって最適なマッチングを実現し、長期的な成功を支援します。
              </p>
            </div>

            <div className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-md hover-lift fade-up">
              <h3 className="font-semibold text-lg">ビジネス・人材サポートサービス</h3>
              <p className="mt-4 text-gray-500">
                人材配置ソリューション、業務プロセスの最適化、人員計画などを含む包括的な運営・コンサルティングサポートを提供し、生産性および企業パフォーマンスの向上を支援します。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-white text-center fade-up">
        <h2 className="text-3xl font-semibold tracking-tight">
          共に働きましょう
        </h2>

        <p className="mt-6 text-gray-500">
          ぜひ本日お問い合わせください。共に素晴らしいものを創り上げましょう。
        </p>

        <a href="/contact">
          <button className="mt-8 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 btn-smooth">
            お気軽にお問い合わせください
          </button>
        </a>
      </section>

    </main>
  );
}
