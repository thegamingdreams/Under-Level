export default function UnderLevelRoofingWebsite() {
  const gallery = [
    {
      title: "Professional roof transformation",
      image: "https://tcroofingconstruction.com/wp-content/uploads/2023/02/Bridgeport-Roofer-Before-and-After-3.jpg",
      desc: "Real before-and-after roofing work that shows the difference quality craftsmanship can make.",
    },
    {
      title: "Clean roof replacement results",
      image: "https://roofhousepedia.com/wp-content/uploads/2023/06/Before-and-After-Roof-Replacement-1024x683.jpg",
      desc: "A finished roof should look clean, strong, and professionally installed from edge to edge.",
    },
    {
      title: "Visible curb appeal upgrade",
      image: "https://bestroofingrepair.ca/wp-content/uploads/2019/05/roofing-before-after.jpg",
      desc: "Good roofing work improves both protection and the overall look of the home.",
    },
  ];

  const serviceAreas = [
    "Bentonville","Rogers","Springdale","Fayetteville","Bella Vista",
    "Lowell","Siloam Springs","Prairie Grove","Fort Smith","Van Buren",
    "Russellville","Clarksville","Miami, OK","Grove, OK","Tulsa, OK",
    "Claremore, OK","Joplin, MO","Neosho, MO","Monett, MO",
    "Branson, MO","Springfield, MO","Eureka Springs","Harrison","Muskogee, OK",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <h1 className="text-5xl font-black md:text-7xl">
              Under Level Roofing
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Beautiful, dependable roofing done with heart. We help families protect their homes with fair prices, honest work, and quality that lasts.
            </p>

            <div className="mt-8">
              <a
                href="tel:9188009737"
                className="bg-amber-400 text-black px-6 py-3 rounded-xl font-bold"
              >
                Call Now: (918) 800-9737
              </a>
            </div>
          </div>

          {/* LOGO */}
          <div className="bg-black rounded-2xl p-6 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Under Level Roofing logo"
              className="max-h-[300px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-amber-300">Fair pricing</h3>
            <p className="text-slate-300 mt-2">
              We are not a big company, so we keep our prices fair.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-amber-300">Roofing + Gutters</h3>
            <p className="text-slate-300 mt-2">
              We do both roofing and gutter installation.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-amber-300">Proof of work</h3>
            <p className="text-slate-300 mt-2">
              We take photos of every step and show customers proof.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Our Work</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="bg-slate-900 rounded-xl overflow-hidden">
              <img src={item.image} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="bg-slate-900 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Our Materials</h2>

          <p className="text-slate-300 mb-3">
            We use high-quality shingles that last longer and look better.
          </p>
          <p className="text-slate-300 mb-3">
            We install strong underlayment that does not tear easily.
          </p>
          <p className="text-slate-300 mb-3">
            We use ice and water shield to protect your home from leaks.
          </p>
          <p className="text-amber-300 font-semibold">
            Because we are not a big company, we do not charge high prices.
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Service Area</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceAreas.map((city) => (
            <div key={city} className="bg-slate-900 p-3 rounded-lg text-center">
              {city}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-400 border-t border-white/10">
        <p className="text-white font-bold">Under Level Roofing</p>
        <p>Serving 150 miles from Bentonville</p>
        <p>(918) 800-9737</p>
      </footer>

    </div>
  );
}
