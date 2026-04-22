export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-black text-amber-300">
          Thank You!
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          We received your request and will contact you as soon as possible.
        </p>

        <p className="mt-4 text-slate-400">
          If your request is urgent, feel free to call us directly.
        </p>

        <a
          href="tel:9188009737"
          className="mt-8 inline-block rounded-xl bg-amber-400 px-8 py-4 text-lg font-bold text-black shadow-xl hover:scale-105 transition"
        >
          Call Now: (918) 800-9737
        </a>

        <div className="mt-6">
          <a
            href="/"
            className="text-amber-300 underline"
          >
            Go back to homepage
          </a>
        </div>
      </div>
    </div>
  );
}
