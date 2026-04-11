export default function UnderLevelRoofingWebsite() {
  const gallery = [
    {
      title: "Professional roof transformation",
      image:
        "https://tcroofingconstruction.com/wp-content/uploads/2023/02/Bridgeport-Roofer-Before-and-After-3.jpg",
      desc: "Real before-and-after roofing work that shows the difference quality craftsmanship can make.",
    },
    {
      title: "Clean roof replacement results",
      image:
        "https://roofhousepedia.com/wp-content/uploads/2023/06/Before-and-After-Roof-Replacement-1024x683.jpg",
      desc: "A finished roof should look clean, strong, and professionally installed from edge to edge.",
    },
    {
      title: "Visible curb appeal upgrade",
      image:
        "https://bestroofingrepair.ca/wp-content/uploads/2019/05/roofing-before-after.jpg",
      desc: "Good roofing work improves both protection and the overall look of the home.",
    },
  ];

  const serviceAreas = [
    "Bentonville",
    "Rogers",
    "Springdale",
    "Fayetteville",
    "Bella Vista",
    "Lowell",
    "Siloam Springs",
    "Prairie Grove",
    "Fort Smith",
    "Van Buren",
    "Russellville",
    "Clarksville",
    "Miami, OK",
    "Grove, OK",
    "Tulsa, OK",
    "Claremore, OK",
    "Joplin, MO",
    "Neosho, MO",
    "Monett, MO",
    "Branson, MO",
    "Springfield, MO",
    "Eureka Springs",
    "Harrison",
    "Muskogee, OK",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Roofing background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_25%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.14),_transparent_25%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 backdrop-blur">
                Trusted local roofing • Honest pricing • Real care
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Under Level Roofing
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                Beautiful, dependable roofing done with heart. We help families
                protect their homes with fair prices, honest work, and quality
                that lasts.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                We are not a giant company, and that is exactly why many
                customers love working with us. You get real attention, honest
                communication, and pricing that feels fair.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:9188009737"
                  className="rounded-2xl bg-amber-400 px-7 py-4 text-center text-lg font-bold text-slate-950 shadow-2xl shadow-amber-400/30 transition hover:scale-[1.02]"
                >
                  Call Now: (918) 800-9737
                </a>

                <a
                  href="#estimate"
                  className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-center text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Get a Free Estimate
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-amber-300">Fair</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Fair prices without big-company overhead
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-amber-300">
                    Trusted
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Work done carefully and respectfully
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-amber-300">
                    Local
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Real people who care about every home
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl md:col-span-2">
                <div className="flex h-72 w-full items-center justify-center bg-black p-6">
                  <img
                    src="/logo.png"
                    alt="Under Level Roofing logo"
                    className="h-auto max-h-[240px] w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-300">
                    Built on trust
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">
                    A roofing and gutter company people feel good hiring
                  </h2>
                  <p className="mt-3 leading-7 text-slate-300">
                    We focus on quality roofing, strong gutter work, clear
                    communication, and treating every customer with respect from
                    the first call to the final cleanup.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                <p className="text-lg font-bold text-amber-300">
                  Free Estimates
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  Straightforward advice, honest answers, and no pressure.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                <p className="text-lg font-bold text-amber-300">
                  Roofing + Gutters
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  We handle both roofing and gutter work so your home looks
                  better and drains water the right way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Why homeowners choose us
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Professional service with a personal touch
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-amber-300">
              Fair pricing
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              We keep our prices fair because we are a smaller company. You get
              real value without inflated big-company costs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-amber-300">
              Roofing + gutters
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              We do roofing and gutter work together, helping protect your
              roofline and direct water away from your home.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-amber-300">
              Personal service
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              To us, you are not just another number. Every home matters, and
              every project gets real care and attention.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-amber-300">
              Work you can trust
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              We believe your roof and gutters should look beautiful, last
              longer, and give your family real protection.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Real roofing results
            </p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              The kind of results homeowners want to see
            </h2>
          </div>

          <a
            href="tel:9188009737"
            className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Book Your Estimate
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Before and after
          </p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Real roof transformations
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Homeowners want to see real roofing results. These examples show
            how much a properly finished roof can improve both protection and
            appearance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
            <img
              src="https://tcroofingconstruction.com/wp-content/uploads/2023/02/Bridgeport-Roofer-Before-and-After-3.jpg"
              alt="Roof before and after example"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                Before and after roof replacement
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A better-looking roof with a cleaner finish, stronger
                protection, and a more professional result.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
            <img
              src="https://roofhousepedia.com/wp-content/uploads/2023/06/Before-and-After-Roof-Replacement-1024x683.jpg"
              alt="Roof replacement before and after"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                Real curb appeal improvement
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Quality roofing helps a home look newer, cleaner, and more
                cared for while improving protection.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
            <img
              src="https://bestroofingrepair.ca/wp-content/uploads/2019/05/roofing-before-after.jpg"
              alt="Roofing before and after"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                Clear visual difference
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A professionally finished roof should make the difference
                obvious the moment you look at it.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
            <img
              src="https://www.oldhouseinitiative.com/images/before-after-roof.jpg"
              alt="Before and after house roof"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                Roof upgrade you can see
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Roofing done right improves the home visually and gives
                customers more confidence in the protection above them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-r from-amber-400/15 to-sky-400/10 p-8 shadow-2xl backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Our materials
              </p>
              <h2 className="mt-2 text-4xl font-black">
                We use strong, high-quality materials
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-200">
                We believe a good roof starts with good materials. That is why
                we use high-quality shingles that last longer and look better.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                We also use strong paper underlayment that will not tear easily,
                along with a first protective layer to give your roof extra
                durability.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                We install ice and water shield in important areas to protect
                against leaks. Many older roofs we have seen did not have this,
                which can cause problems over time.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                Ice and water shield is a waterproof layer under the shingles
                that helps stop water from getting into your home, especially
                during heavy rain or ice melt.
              </p>

              <p className="mt-4 text-lg font-semibold leading-8 text-amber-100">
                Because we are not a big company, we do not have to charge high
                prices. Big companies pay managers, salespeople, and rent — and
                still send workers like us to do the job. With us, you get the
                same work quality for a fair price.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-xl p-6">
              <div className="flex min-h-[280px] items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Under Level Roofing logo"
                  className="h-auto max-h-[320px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Service area
          </p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Serving up to 150 miles from Bentonville
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            We proudly serve homeowners across Northwest Arkansas and nearby
            parts of Oklahoma and Missouri.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <div className="grid grid-cols-2 gap-4 text-center text-slate-200 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((city) => (
              <div
                key={city}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Customer confidence
          </p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Why people feel comfortable calling us
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-5xl font-black text-amber-300">01</p>
            <h3 className="mt-4 text-2xl font-bold">We listen</h3>
            <p className="mt-3 leading-7 text-slate-300">
              We take time to understand what your roof and gutters need and
              explain things in simple words.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-5xl font-black text-amber-300">02</p>
            <h3 className="mt-4 text-2xl font-bold">We stay honest</h3>
            <p className="mt-3 leading-7 text-slate-300">
              No inflated prices. No big-company attitude. Just fair service
              and straightforward work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-5xl font-black text-amber-300">03</p>
            <h3 className="mt-4 text-2xl font-bold">We document everything</h3>
            <p className="mt-3 leading-7 text-slate-300">
              We take pictures of every single step of the process and show
              them to the customer at the end as proof of our work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-5xl font-black text-amber-300">04</p>
            <h3 className="mt-4 text-2xl font-bold">Custom gutter colors</h3>
            <p className="mt-3 leading-7 text-slate-300">
              We install aluminum gutters in white and in more exclusive
              colors, helping customers match the look of their home.
            </p>
          </div>
        </div>
      </section>

      <section id="estimate" className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-r from-amber-400/20 to-sky-400/15 p-10 text-center shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            A note from Under Level
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Your home deserves real care
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-100">
            We know a roof is more than shingles and nails. It protects your
            loved ones, your memories, and the place you call home. At Under
            Level, we believe people deserve honest work, fair prices, and
            quality done the right way.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Call us today for a free estimate and let us help make your home
            safer, stronger, and better looking.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            We also take pictures throughout every part of the job and show
            them to you at the end, so you can clearly see the work that was
            done on your home.
          </p>

          <a
            href="tel:9188009737"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-950 shadow-xl transition hover:scale-[1.02]"
          >
            Call Under Level Today
          </a>

          <p className="mt-4 text-2xl font-semibold text-white">
            (918) 800-9737
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60 px-6 py-8 text-center text-slate-400">
        <p className="text-lg font-semibold text-white">Under Level Roofing</p>
        <p className="mt-2">
          Roofing with honest work, fair prices, and real care.
        </p>
        <p className="mt-2">
          Serving up to 150 miles from Bentonville, Arkansas
        </p>
        <p className="mt-2">Call: (918) 800-9737</p>
      </footer>
    </div>
  );
}
