export default function Footer() {
  return (
    <footer className="p-6 bg-black text-white text-center">
      <h3>株式会社 大崎総業</h3>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
