const services = [
  {
    number: "01",
    title: "CNC Machining",
    description:
      "Precision-machined components with tight tolerances and production-ready finishes.",
  },
  {
    number: "02",
    title: "Sheet Metal",
    description:
      "Flexible fabrication solutions for prototypes and production components.",
  },
  {
    number: "03",
    title: "Injection Molding",
    description:
      "Reliable tooling and repeatable molded components for scalable manufacturing.",
  },
  {
    number: "04",
    title: "3D Printing",
    description:
      "Fast prototypes and complex geometries using modern additive technologies.",
  },
];

const industries = [
  "Aerospace",
  "Automotive",
  "Medical",
  "Consumer Products",
  "Climate Tech",
  "Robotics",
  "Semiconductor",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero min-h-screen overflow-hidden px-5 text-white sm:px-8 lg:px-12">
        {/* Header */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/15 py-6">
          <a href="#" className="text-xl font-bold tracking-[-0.04em]">
            TRINIT<span className="text-cyan-300">PRO</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>

            <a className="transition hover:text-white" href="#industries">
              Industries
            </a>

            <a className="transition hover:text-white" href="#about">
              About
            </a>
          </div>

          <a href="#contact" className="button button-light">
            Get in touch
          </a>
        </nav>

        {/* Hero content */}
        <div className="mx-auto grid max-w-7xl gap-14 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow text-cyan-300">
              Manufacturing, made intelligent
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Your designs.
              <br />
              Built with precision.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              From prototype to production, TrinitPro connects ambitious
              engineering teams with dependable manufacturing capabilities
              across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="button button-primary">
                Explore capabilities
                <ArrowIcon />
              </a>

              <a href="#contact" className="button button-outline">
                Talk to an engineer
              </a>
            </div>
          </div>

          {/* Decorative manufacturing graphic */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-[8%] rounded-full border border-cyan-300/30" />
            <div className="absolute inset-[22%] rounded-full border border-cyan-300/20" />

            <div className="absolute inset-[34%] grid place-items-center rounded-full bg-cyan-300 text-center text-slate-950 shadow-[0_0_80px_rgba(103,232,249,0.3)]">
              <span className="text-sm font-bold uppercase tracking-[0.18em]">
                Precision
                <br />
                at scale
              </span>
            </div>

            <div className="orbit-dot left-[4%] top-1/2" />
            <div className="orbit-dot right-[13%] top-[13%]" />
            <div className="orbit-dot bottom-[11%] right-[18%]" />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-blue-700">
              Built for engineering teams
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Prototype · Validate · Manufacture
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl">
              A simpler path from CAD file to finished component.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We combine engineering expertise, qualified manufacturing
              partners, and quality-focused execution to help teams move faster
              with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-slate-50 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-blue-700">Core capabilities</p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
              Manufacturing services
            </h2>

            <p className="max-w-md leading-7 text-slate-600">
              One partner for rapid prototyping, complex components, and
              repeatable production.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-white p-8 transition hover:bg-slate-950 sm:p-10"
              >
                <span className="text-sm font-semibold text-blue-600 group-hover:text-cyan-300">
                  {service.number}
                </span>

                <h3 className="mt-16 text-2xl font-semibold tracking-tight text-slate-950 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-600 group-hover:text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="bg-white px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-blue-700">Industries</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
                Engineered for demanding applications.
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="flex items-center justify-between py-4 text-lg font-medium text-slate-800"
                >
                  <span>{industry}</span>

                  <span className="text-sm text-slate-400">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-blue-700 px-5 py-24 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cyan-200">Start a conversation</p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Ready to manufacture what comes next?
            </h2>
          </div>

          <a
            href="mailto:info@trinitpro.com"
            className="button button-light shrink-0"
          >
            Contact TrinitPro
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-8 text-sm text-slate-400 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>© 2026 TrinitPro. Demo website.</p>
          <p>Built with Next.js · Ready for Cloudflare Pages</p>
        </div>
      </footer>
    </main>
  );
}