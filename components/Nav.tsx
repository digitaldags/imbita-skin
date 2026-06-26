export default function Nav() {
  return (
    <nav className="w-full border-b border-divider">
      <div className="max-w-[720px] mx-auto px-6 py-[18px] flex items-center justify-between">
        <span className="font-sans text-lg font-medium text-text-primary">imbita</span>
        <a
          href="#inquire"
          className="bg-maroon text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-maroon-dark transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
