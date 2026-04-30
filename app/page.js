import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white">
        <h1 className="text-xl font-bold">MyCompany</h1>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Build Your Future With Us</h1>
        <p className="text-gray-600 mb-6">
          Professional solutions to grow your business
        </p>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">Modern responsive websites</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">IT Solutions</h3>
            <p className="text-gray-600">Smart business systems</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Consulting</h3>
            <p className="text-gray-600">Expert guidance</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-6">
        <p>© 2026 MyCompany. All rights reserved.</p>
      </footer>

    </main>
  );
}
