import SiteHeader from "@/components/site-header";
import CopyrightYear from "@/components/copyright-year";

const MENU = [
  {
    section: "Espresso Bar",
    items: [
      { name: "Espresso", price: "$3.50", note: "Double shot of the house blend" },
      { name: "Cortado", price: "$4.25", note: "Equal parts espresso and steamed milk" },
      { name: "Cappuccino", price: "$4.75", note: "Classic, with a thick cloud of foam" },
      { name: "Vanilla Latte", price: "$5.25", note: "House-made vanilla bean syrup" },
    ],
  },
  {
    section: "Brew Bar",
    items: [
      { name: "Drip Coffee", price: "$3.25", note: "Bottomless before 9 a.m." },
      { name: "Pour Over", price: "$5.75", note: "Single origin, rotating weekly" },
      { name: "Cold Brew", price: "$4.75", note: "Steeped for 18 hours" },
      { name: "Iced Mocha", price: "$5.50", note: "Dark chocolate, cold foam" },
    ],
  },
  {
    section: "From the Kitchen",
    items: [
      { name: "Butter Croissant", price: "$4.00", note: "Laminated in-house each morning" },
      { name: "Sourdough Toast", price: "$6.50", note: "Cultured butter and sea salt" },
      { name: "Banana Bread", price: "$4.50", note: "Toasted walnuts, brown butter" },
      { name: "Granola Bowl", price: "$7.25", note: "Yogurt, honey, seasonal fruit" },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The kind of place where the barista remembers your order and the light makes everyone look like they are in a movie.",
    name: "Maya R.",
    role: "Regular since day one",
  },
  {
    quote:
      "I have written two chapters of my thesis at the window seat. The cortados are undefeated and nobody rushes you out.",
    name: "Daniel K.",
    role: "Freelance writer",
  },
  {
    quote:
      "We catered our gallery opening with Cozy. Sixty cups of pour over, zero fuss, and half the guests asked for the beans.",
    name: "Priya S.",
    role: "Riverside Arts Collective",
  },
];

function CupIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="A steaming cup of coffee"
      className="h-auto w-full max-w-xs"
    >
      {/* Steam */}
      <path
        d="M130 92c-10-14 8-22-2-36"
        fill="none"
        stroke="#6f4e37"
        strokeWidth="5"
        strokeLinecap="round"
        className="steam"
      />
      <path
        d="M162 84c-10-14 8-22-2-36"
        fill="none"
        stroke="#6f4e37"
        strokeWidth="5"
        strokeLinecap="round"
        className="steam-delay"
      />
      <path
        d="M194 92c-10-14 8-22-2-36"
        fill="none"
        stroke="#6f4e37"
        strokeWidth="5"
        strokeLinecap="round"
        className="steam"
      />
      {/* Saucer */}
      <ellipse cx="160" cy="256" rx="118" ry="22" fill="#e4d2ba" />
      {/* Cup */}
      <path
        d="M92 140h136l-10 84a34 34 0 0 1-34 30h-48a34 34 0 0 1-34-30z"
        fill="#fffdf9"
        stroke="#2b1a12"
        strokeWidth="6"
      />
      {/* Handle */}
      <path
        d="M232 158h18a26 26 0 0 1 0 52h-22"
        fill="none"
        stroke="#2b1a12"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Coffee surface */}
      <ellipse cx="160" cy="142" rx="66" ry="14" fill="#6f4e37" />
      <ellipse cx="160" cy="141" rx="48" ry="9" fill="#8a6244" />
      {/* Logo dot */}
      <circle cx="160" cy="196" r="12" fill="#c05f3c" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foam">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-latte/60 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-caramel/30 blur-3xl"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
                Est. 2019 · Maple Street
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl lg:text-6xl">
                A warm cup,
                <br />
                a quiet corner,
                <br />
                <span className="italic text-coffee">
                  your kind of morning.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-md text-base leading-7 text-coffee md:mx-0 md:text-lg">
                Small-batch beans, pastries out of the oven at seven, and a
                window seat with your name on it. Pull up a chair — Cozy is
                open.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#menu"
                  className="w-full rounded-full bg-espresso px-8 py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-coffee sm:w-auto"
                >
                  See the menu
                </a>
                <a
                  href="#visit"
                  className="w-full rounded-full border border-espresso/20 px-8 py-3.5 text-center text-sm font-semibold text-espresso transition-colors hover:border-espresso hover:bg-latte/40 sm:w-auto"
                >
                  Visit us today
                </a>
              </div>
              <p className="mt-8 text-sm text-coffee/80">
                Open daily · 7 a.m. – 6 p.m. · Free refills before 9 a.m.
              </p>
            </div>
            <div className="flex justify-center">
              <CupIllustration />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3 md:py-24">
            <div className="md:col-span-1">
              <h2 className="font-display text-3xl font-semibold text-espresso">
                Our story
              </h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-ember">
                Since 2019
              </p>
            </div>
            <div className="space-y-5 text-base leading-7 text-coffee md:col-span-2 md:text-lg">
              <p>
                Cozy started with a second-hand roaster, six chairs, and a
                stubborn belief that coffee should taste like somewhere — not
                like a vending machine. We roast in small batches every
                Tuesday, rest the beans through the week, and pull shots by
                ear, not by timer.
              </p>
              <p>
                The kitchen grew out of regulars asking for “something warm”
                before their first cup. Now the croissants are folded by hand
                at five in the morning, and the banana bread rarely makes it
                past noon.
              </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="bg-sand">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
                Brewed &amp; baked daily
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-espresso md:text-4xl">
                The menu
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {MENU.map((group) => (
                <div
                  key={group.section}
                  className="rounded-2xl border border-espresso/10 bg-foam p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-espresso">
                    {group.section}
                  </h3>
                  <ul className="mt-4 divide-y divide-espresso/10">
                    {group.items.map((item) => (
                      <li key={item.name} className="py-3.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-medium text-espresso">
                            {item.name}
                          </span>
                          <span className="font-display text-sm font-semibold text-ember">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm leading-5 text-coffee/85">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-coffee">
              Oat, soy, and almond milk available on request · Half-caf and
              decaf on every grinder
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-espresso">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <h2 className="text-center font-display text-3xl font-semibold text-cream md:text-4xl">
              Words from the window seat
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-cream/10 bg-coffee/30 p-6"
                >
                  <blockquote className="text-sm leading-6 text-cream/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-semibold text-caramel">{t.name}</span>
                    <span className="block text-cream/60">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                Visit us
              </h2>
              <p className="mt-4 text-base leading-7 text-coffee md:text-lg">
                Find us on the corner of Maple Street and 4th — look for the
                green door and the smell of fresh bread. Bikes welcome, dogs
                adored, laptops welcome at any table before 4 p.m.
              </p>
              <address className="mt-6 not-italic">
                <p className="font-medium text-espresso">
                  214 Maple Street, Riverside
                </p>
                <p className="mt-1 text-coffee">
                  <a
                    href="tel:+15550142278"
                    className="transition-colors hover:text-espresso"
                  >
                    (555) 014-2278
                  </a>
                </p>
              </address>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=214+Maple+Street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-coffee"
                >
                  Get directions
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-espresso/20 px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:border-espresso hover:bg-latte/40"
                >
                  Order ahead
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-espresso/10 bg-foam p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-espresso">
                Hours
              </h3>
              <dl className="mt-4 divide-y divide-espresso/10 text-sm">
                <div className="flex justify-between py-3">
                  <dt className="text-coffee">Monday – Friday</dt>
                  <dd className="font-medium text-espresso">
                    7:00 a.m. – 6:00 p.m.
                  </dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-coffee">Saturday</dt>
                  <dd className="font-medium text-espresso">
                    8:00 a.m. – 6:00 p.m.
                  </dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-coffee">Sunday</dt>
                  <dd className="font-medium text-espresso">
                    8:00 a.m. – 4:00 p.m.
                  </dd>
                </div>
              </dl>
              <p className="mt-4 rounded-xl bg-latte/50 px-4 py-3 text-sm text-coffee">
                🥐 Kitchen serves pastries until they run out — usually before
                noon on weekends.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-cream/10 bg-espresso">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-cream">
              Cozy Coffee House
            </p>
            <p className="mt-1 text-sm text-cream/60">
              214 Maple Street, Riverside · Open daily
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-cream/70">
            <a href="#story" className="transition-colors hover:text-caramel">
              Our Story
            </a>
            <a href="#menu" className="transition-colors hover:text-caramel">
              Menu
            </a>
            <a href="#visit" className="transition-colors hover:text-caramel">
              Visit
            </a>
          </nav>
          <p className="text-sm text-cream/50">
            © <CopyrightYear /> Cozy Coffee House
          </p>
        </div>
      </footer>
    </div>
  );
}

