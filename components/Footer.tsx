export default function Footer() {
  return (
    <>
      <hr />
      <footer className="py-8">
        <div className="max-w-[720px] mx-auto px-6 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <span className="font-sans text-lg font-medium text-text-primary">imbita</span>
          <p className="font-sans text-xs text-text-muted">
            Custom event websites · Made in the Philippines
          </p>
        </div>
      </footer>
    </>
  );
}
