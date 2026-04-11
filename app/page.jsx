export default function UnderLevelRoofingWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl font-black md:text-7xl">
              Under Level Roofing
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Beautiful, dependable roofing done with heart. We help families
              protect their homes with fair prices, honest work, and quality that lasts.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:9188009737"
                className="bg-amber-400 text-black px-6 py-3 rounded-xl font-bold"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* LOGO (THIS WILL WORK 100%) */}
          <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Under Level Logo"
              className="max-h-[300px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* MATERIALS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">Our Materials</h2>

          <p className="text-slate-300 mb-4">
            We use high-quality shingles that last longer and look better.
          </p>

          <p className="text-slate-300 mb-4">
            We install strong underlayment that will not tear easily, plus a first protective layer for extra durability.
          </p>

          <p className="text-slate-300 mb-4">
            We also use ice and water shield in important areas. Many older roofs we have seen did not have this.
          </p>

          <p className="text-slate-300 mb-4">
            Ice and water shield is a waterproof layer that stops water from getting into your home.
          </p>

          <p className="text-amber-300 font-semibold">
            Because we are not a big company, we do not charge high prices.
            Big companies pay managers, salespeople, and rent — and still send workers like us.
            With us, you get the same work for a fair price.
          </p>

        </div>
      </section>

    </div>
  );
}
