"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import FadeUp from "../../components/FadeUp";

export default function AboutPage() {
  const pathname = usePathname();

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <FadeUp>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              株式会社大﨑総業について
            </h1>

            <p className="mt-6 text-xl text-gray-500 font-medium">
              私たちについて・企業理念
            </p>
          </div>
        </FadeUp>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <FadeUp delay={0.1}>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                株式会社 大﨑総業
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                1990年9月に現会長・高松によって設立された株式会社大崎総業は、日本における人材サービス分野で信頼と実績を築いてきた企業です。群馬県伊勢崎市に本社を構え、労働者派遣事業（許可番号：10-300066）およびアウトソーシング事業を中心に展開しています。創業以来、事業の拡大に伴い、1997年8月には社員寮および事務所ビル、さらに複数の社員寮を完成させるなど、インフラ整備にも積極的に取り組んでまいりました。資本金4,500万円、登録スタッフ数1,000名以上を有し、お客様の多様なニーズに応える高品質かつ効率的なサービスの提供に努めるとともに、従業員の成長と働きやすい環境づくりにも力を注いでいます。
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                私たちの使命は、効率的なソリューションを通じて企業を支援するとともに、現代のニーズに応えるためにサービスの継続的な向上に努めることです。
              </p>
            </div>
          </FadeUp>

          {/* DIRECTOR IMAGE */}
          <FadeUp delay={0.2}>
            <div className="flex justify-center md:justify-end">

              <div className="relative text-center pb-16 group">

                {/* Glow */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40 transition duration-500 group-hover:opacity-70"></div>
                </div>

                {/* Image */}
                <img
                  src="/images/director.png"
                  alt="Director"
                  className="
                    relative
                    w-40 sm:w-48 md:w-72 lg:w-80
                    h-auto
                    object-contain
                    mx-auto
                    transition duration-500 ease-out
                    group-hover:scale-105
                    md:translate-x-6 lg:translate-x-1
                  "
                />

                {/* Name */}
                <p className="mt-4 text-3xl md:text-2xl font-semibold text-gray-900">
                  Mr. Akihiro Kaneko
                </p>

                {/* Katakana */}
                <p className="mt-0 text-2xl md:text-2xl font-bold text-gray-800 -translate-x-1 tracking-wide">
                  金子晃弘氏
                </p>

                {/* Title */}
                <p className="mt-0 text-xl md:text-xl font-bold text-gray-500 -translate-x-1 tracking-wide">
                  代表取締役
                </p>

              </div>
            </div>
          </FadeUp>

        </div>

        {/* CARD */}
        <FadeUp delay={0.3}>
          <div className="max-w-6xl mx-auto mt-16">
            <div className="p-10 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold">
                当社のミッション
              </h3>

              <p className="mt-4 text-gray-600">
                企業に効率的な人材ソリューションを提供し、安定した事業運営と生産性の向上に貢献します。
              </p>

              <h3 className="text-xl font-semibold mt-8">
                当社のビジョン
              </h3>

              <p className="mt-4 text-gray-600">
                信頼される人材サービス企業として、時代のニーズに応じた柔軟で高品質なサービスを提供し続けることを目指します。
              </p>
            </div>
          </div>
        </FadeUp>

      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <FadeUp delay={0.1}>
          <h2 className="text-3xl font-semibold tracking-tight">
            今、何をためらっていますか？ぜひ私たちと一緒に働きましょう！
          </h2>

          <p className="mt-6 text-gray-500">
            共に強固で成功するパートナーシップの構築を目指しましょう。
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-4 bg-black text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              お問い合わせ
            </button>
          </Link>
        </FadeUp>
      </section>

    </main>
  );
}