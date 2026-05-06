"use client";
import { useEffect } from "react";
import {
  Briefcase,
  LineChart,
  Wrench,
  UserCheck,
  Globe,        // ✅ fixed (was GlobeIcon)
  Building2     // ✅ fixed (was Building / BuildingIcon)
} from "lucide-react";

export default function ServicesPage() {

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
      <section className="py-32 px-6 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto fade-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            当社が提供するサービス
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            信頼と誠実さに基づき、私たちは皆様と共に成長し、信頼できるビジネスパートナーとして持続的な成功の創出を目指します。
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <Briefcase className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="text-xl font-semibold">
                人材ソリューション
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                さまざまな業界のニーズに合わせて、熟練した信頼できる人材を提供し、企業の円滑で効率的な業務運営を支援します。
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <LineChart className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="text-xl font-semibold">
                ビジネスコンサルティング
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                生産性の向上、業務プロセスの最適化、そして確かな経営判断を支援する専門的なアドバイスを提供します。
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <UserCheck className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="text-xl font-semibold">
                人材紹介・マッチング
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                日本国内の安定した企業と、世界各国の優秀な人材を結びつけ、企業と求職者双方にとって最適なマッチングを実現します。
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <Wrench className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="text-xl font-semibold">
                業務サポート
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                企業の業務継続を支えるために、現場およびリモートでの迅速かつ信頼性の高いサポートを提供し、課題解決に貢献します。
              </p>
            </div>

            {/* CARD 5 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <Globe className="w-6 h-6 text-gray-700" /> {/* ✅ fixed */}
              </div>

              <h3 className="text-xl font-semibold">
                グローバル人材採用
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                世界中から意欲ある人材を採用し、日本での就労とキャリア形成の機会を提供します。
              </p>
            </div>

            {/* CARD 6 */}
            <div className="group relative p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift transition-all duration-300 fade-up overflow-hidden">
              
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[linear-gradient(to_right,rgba(191,219,254,0.4),transparent,rgba(233,213,255,0.4))]"></div>

              <div className="mb-6 inline-flex p-4 rounded-xl bg-gray-100">
                <Building2 className="w-6 h-6 text-gray-700" /> {/* ✅ fixed */}
              </div>

              <h3 className="text-xl font-semibold">
                スタッフィングマネジメント（人材管理）
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                スケジュール管理、配置、最適な人員運用など、企業の人材管理を包括的にサポートします。
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
            ぜひ本日お問い合わせください。共に素晴らしいものを築き上げましょう。
          </p>

          <a href="/contact">
            <button className="mt-8 px-8 py-4 bg-black text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
               お問い合わせ
            </button>
          </a>
        </div>
      </section>

    </main>
  );
}