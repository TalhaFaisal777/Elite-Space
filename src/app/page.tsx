import Image from "next/image";

/* -----------------------------------------------------------------------------
 * Data
 * ---------------------------------------------------------------------------*/

const NAV = [
  { label: "Living Room", active: true },
  { label: "Bedroom" },
  { label: "Dining" },
  { label: "Kitchen" },
  { label: "Office" },
  { label: "Outdoor" },
  { label: "Lighting" },
  { label: "Storage" },
  { label: "Sale", sale: true },
];

const ROOMS = [
  { name: "Living Room", count: "186 pieces", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop" },
  { name: "Bedroom",     count: "124 pieces", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop" },
  { name: "Dining Room", count: "98 pieces",  img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop" },
  { name: "Kitchen",     count: "87 pieces",  img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop" },
];

type BadgeKind = "new" | "save" | "best";

type Product = {
  name: string;
  material: string;
  price: number;
  was?: number;
  pct?: number;
  badge?: { kind: BadgeKind; text: string };
  swatches: string[];
  img: string;
};

const PRODUCTS: Product[] = [
  { name: "Oslo 3-Seat Sofa",       material: "Solid Walnut · Boucle Fabric",         price: 1890,             badge: { kind: "best", text: "Best Seller" }, swatches: ["#8B6914", "#4A3520", "#8a8278", "#c8b8a0"], img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=720&q=80&auto=format&fit=crop" },
  { name: "Haven King Bed Frame",   material: "Solid Oak · Upholstered Headboard",     price: 1199, was: 1499, pct: 20, badge: { kind: "save", text: "Save 20%" }, swatches: ["#c4973a", "#8a8278", "#2c5f3f"],            img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=720&q=80&auto=format&fit=crop" },
  { name: "Arvo Dining Table",      material: "White Oak · Extends 160–220cm",         price: 2450,             badge: { kind: "new",  text: "New" },         swatches: ["#c4973a", "#f5edd8", "#2c2c2c"],            img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=720&q=80&auto=format&fit=crop" },
  { name: "Nova Kitchen Cabinet",   material: "Solid Oak · 4-Door · Brass Handles",    price: 1640,             badge: { kind: "new",  text: "New" },         swatches: ["#c4973a", "#f5edd8", "#2c2c2c"],            img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=720&q=80&auto=format&fit=crop" },
  { name: "Lund Lounge Armchair",   material: "Beech Frame · Wool Blend",              price: 749,              badge: { kind: "new",  text: "New" },         swatches: ["#8B6914", "#2c5f3f", "#5c7a8c", "#8a8278"], img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=720&q=80&auto=format&fit=crop" },
  { name: "Nordic Sliding Wardrobe",material: "Walnut Veneer · 2-Door · Full Mirror",  price: 1380, was: 1650, pct: 16, badge: { kind: "best", text: "Best Seller" }, swatches: ["#8B6914", "#2c2c2c", "#f5edd8"],            img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=720&q=80&auto=format&fit=crop" },
  { name: "Fen Modular Bookshelf",  material: "Walnut Veneer · 6 Configurations",      price: 980,  was: 1200,         badge: { kind: "best", text: "Best Seller" }, swatches: ["#8B6914", "#2c2c2c", "#f5edd8"],            img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=720&q=80&auto=format&fit=crop" },
  { name: "Nest Coffee Table",      material: "Travertine Top · Brass Legs",           price: 850,  was: 999,  pct: 15, badge: { kind: "save", text: "Save 15%" },  swatches: ["#c8b8a0", "#c4973a", "#2c2c2c"],            img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=720&q=80&auto=format&fit=crop" },
];

const REVIEWS = [
  { name: "James Mitchell",   initials: "JM", color: "#8B6914", product: "Oslo Sofa",        location: "London, UK",
    quote: "I was nervous ordering a sofa online, but the quality is extraordinary. The walnut frame feels like it was made a hundred years ago and will last another hundred." },
  { name: "Sofia Rosenberg",  initials: "SR", color: "#2C5F3F", product: "Arvo Dining Table", location: "Berlin, DE",
    quote: "The white-glove delivery was worth every penny. Two guys assembled everything, placed it perfectly, and even took the packaging away. Impeccable service." },
  { name: "Naomi Chen",       initials: "NC", color: "#4A4540", product: "Full Living Room",  location: "NYC, USA",
    quote: "Used the free design consultation and it completely transformed my living room. My designer understood my vision better than I did. Absolutely exceptional experience." },
];

const FOOTER_COLUMNS = [
  { title: "Shop",    links: ["Living Room", "Bedroom", "Dining", "Kitchen", "Office", "Outdoor", "Sale"] },
  { title: "Help",    links: ["Size Guide", "Delivery Info", "Returns", "Assembly Guides", "Care Instructions", "Track Order"] },
  { title: "Company", links: ["Our Story", "Sustainability", "Design Services", "Trade Program", "Careers", "Press"] },
];

/* -----------------------------------------------------------------------------
 * Icons — match the reference site exactly
 * ---------------------------------------------------------------------------*/

const HeartIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const CartIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const HouseIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

/* -----------------------------------------------------------------------------
 * Sections
 * ---------------------------------------------------------------------------*/

function TopBar() {
  return (
    <div className="topbar">
      Free white glove delivery on orders over $999 &nbsp;·&nbsp;{" "}
      <b>New arrivals: Spring 2026 Collection</b>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="hdr">
        <div className="hdr-left">
          <span>Search</span>
          <span>Stores</span>
        </div>
        <div className="logo">
          Havn<sup>®</sup>
        </div>
        <div className="hicons">
          <button className="hico"><HeartIcon />Wishlist</button>
          <button className="hico"><CartIcon />Cart (2)</button>
          <button className="hico"><UserIcon />Account</button>
        </div>
      </div>
      <nav>
        {NAV.map((n) => (
          <div
            key={n.label}
            className={`ni ${n.active ? "on" : ""} ${n.sale ? "sale" : ""}`}
          >
            {n.label}
          </div>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hl">
        <div className="eyebrow">Spring / Summer 2026</div>
        <h1>
          Where Every<br />
          Room Finds Its<br />
          <em>Soul</em>
        </h1>
        <p className="sf">
          Thoughtfully crafted furniture for people who believe a home should feel as beautiful as it looks. Solid wood. Honest materials. Lasting design.
        </p>
        <div className="btns">
          <button className="bd">Shop New Arrivals</button>
          <button className="bg-btn">Explore All Rooms</button>
        </div>
      </div>
      <div className="hr-right">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&auto=format&fit=crop"
          alt="Oslo 3-Seat Walnut Sofa"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          preload
        />
        <div className="ptag">
          <p>Oslo Sofa · Walnut</p>
          <span>$1,890</span>
          <em>View Details →</em>
        </div>
      </div>
    </section>
  );
}

function DlBarTop() {
  return (
    <div className="dl-bar">
      <div className="dl-txt">
        <h4>Spring / Summer 2026 — Full Product Catalogue</h4>
        <p>400+ pieces across every room. Dimensions, finishes, lead times &amp; trade pricing — all in one PDF.</p>
      </div>
      <div className="dl-meta">
        <span>PDF · 48 MB</span>
        <span>400+ Products</span>
        <span>Updated May 2026</span>
      </div>
      <a className="dl-btn" href="#"><DownloadIcon />Download Catalogue</a>
    </div>
  );
}

function Features() {
  const feats = [
    { icon: <ArrowIcon />,  title: "White Glove Delivery", body: "Free assembly & in-room placement on orders over $999" },
    { icon: <ShieldIcon />, title: "10-Year Guarantee",    body: "Every piece built to outlast trends and last a decade" },
    { icon: <ClockIcon />,  title: "30-Night Trial",       body: "Love it or return it — hassle-free, no questions asked" },
    { icon: <HouseIcon />,  title: "Sustainably Sourced",  body: "FSC-certified wood and eco-conscious materials only" },
  ];
  return (
    <div className="feats">
      {feats.map((f) => (
        <div key={f.title} className="feat">
          <div className="fic">{f.icon}</div>
          <h4 className="sf">{f.title}</h4>
          <p className="sf">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

function BrowseRooms() {
  return (
    <section className="sec">
      <div className="sh">
        <div className="ey">Browse by Room</div>
        <h2>Find Your Perfect Space</h2>
        <p>Curated collections for every corner of your home</p>
      </div>
      <div className="catg">
        {ROOMS.map((r) => (
          <div key={r.name} className="cat">
            <div className="cat-img">
              <Image src={r.img} alt={r.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="clab">
              <h3>{r.name}</h3>
              <span>{r.count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  const badgeClass = p.badge?.kind === "new" ? "nb" : p.badge?.kind === "save" ? "sb" : "bb";
  return (
    <div className="pc">
      <div className="pi">
        <Image src={p.img} alt={p.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        {p.badge && <span className={`pb ${badgeClass}`}>{p.badge.text}</span>}
        <button className="pw" aria-label="Wishlist">♡</button>
      </div>
      <div className="pn">{p.name}</div>
      <div className="pm sf">{p.material}</div>
      <div className="pcs">
        {p.swatches.map((c, i) => (
          <div key={i} className="cd" style={{ background: c }} />
        ))}
      </div>
      <div className="pp">
        <span className="pnw">${p.price.toLocaleString()}</span>
        {p.was && <span className="po">${p.was.toLocaleString()}</span>}
        {p.pct && <span className="ps">−{p.pct}%</span>}
      </div>
    </div>
  );
}

function Bestsellers() {
  const tabs = ["All", "New In", "Best Sellers", "On Sale"];
  return (
    <section className="sec no-top">
      <div className="sh">
        <div className="ey">Featured Products</div>
        <h2>Bestsellers This Season</h2>
        <p>Handcrafted pieces your customers love most</p>
      </div>
      <div className="frow">
        <div className="ftbs">
          {tabs.map((t, i) => (
            <button key={t} className={`ftb ${i === 0 ? "on" : ""}`}>{t}</button>
          ))}
        </div>
        <select className="fsel">
          <option>Sort: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
      <div className="pg">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 42 }}>
        <button className="bg-btn">View All Products</button>
      </div>
    </section>
  );
}

function DlBarMid() {
  return (
    <div className="dl-bar mid">
      <div className="dl-txt">
        <h4>Need the Full Specs?</h4>
        <p>Download our complete collection guide — materials, dimensions, care instructions and customisation options for every product.</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
        <div style={{ textAlign: "right" }}>
          <div className="sf" style={{ fontSize: 20, fontWeight: 500, color: "var(--color-dark)" }}>400+</div>
          <div className="sf" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--color-muted)" }}>Products</div>
        </div>
        <div style={{ width: 1, height: 36, background: "var(--color-rule)" }} />
        <div style={{ textAlign: "right" }}>
          <div className="sf" style={{ fontSize: 20, fontWeight: 500, color: "var(--color-dark)" }}>48MB</div>
          <div className="sf" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--color-muted)" }}>PDF File</div>
        </div>
        <a className="dl-btn inv" href="#"><DownloadIcon />Download PDF</a>
      </div>
    </div>
  );
}

function Promos() {
  return (
    <div className="promos">
      <div className="prm dk">
        <div>
          <h3>Not Sure<br />Where to Start?</h3>
          <p className="sf">Our in-house designers will build a full room concept — free with any order over $2,000. Book a 30-minute virtual consultation today.</p>
          <span className="pcta">Book Free Consultation →</span>
        </div>
        <div className="pdco">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <rect x="20" y="30" width="80" height="70" fill="#ffffff" rx="2" />
            <rect x="20" y="20" width="80" height="14" fill="#ffffff" rx="2" opacity="0.6" />
            <rect x="28" y="40" width="30" height="22" fill="#ffffff" opacity="0.15" rx="1" />
            <rect x="62" y="40" width="30" height="22" fill="#ffffff" opacity="0.15" rx="1" />
            <rect x="28" y="68" width="64" height="22" fill="#ffffff" opacity="0.15" rx="1" />
          </svg>
        </div>
      </div>
      <div className="prm ok">
        <div>
          <h3>Mid-Season<br />Clearance</h3>
          <p className="sf">Up to 40% off last season&apos;s finest pieces. While stocks last.</p>
          <span className="pcta">Shop Clearance →</span>
        </div>
        <div className="pdco" style={{ right: 30 }}>
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="38" fill="#ffffff" opacity="0.15" />
            <circle cx="45" cy="45" r="26" fill="#ffffff" opacity="0.12" />
            <text x="45" y="52" textAnchor="middle" fontSize="22" fontFamily="Georgia" fill="#ffffff" opacity="0.5">%</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section className="rv">
      <div className="sh">
        <div className="ey">Customer Stories</div>
        <h2>Loved in 40,000+ Homes</h2>
        <p>Real rooms, real people, real happiness</p>
      </div>
      <div className="rg">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rc">
            <div className="rs">★★★★★</div>
            <p className="rt">&quot;{r.quote}&quot;</p>
            <div className="ra">
              <div className="rav" style={{ background: r.color }}>{r.initials}</div>
              <div>
                <div className="rn sf">{r.name}</div>
                <div className="rp sf">{r.product} · {r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <div className="nl">
      <h2>Join the Havn Community</h2>
      <p className="sf">Inspiration, new arrivals, and exclusive member offers — straight to your inbox.</p>
      <div className="nlf">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="dl-bar ftr">
        <div className="dl-txt">
          <h4>Havn Product Catalogue 2026</h4>
          <p>Full collection · PDF · 48 MB · Free download</p>
        </div>
        <a className="dl-btn" href="#"><DownloadIcon />Download Catalogue</a>
      </div>
      <div className="fg">
        <div>
          <div className="flo">Havn<sup>®</sup></div>
          <p className="fd">
            Thoughtful furniture for considered living. We design pieces that belong in a home — not just in a room. Sustainably made, honestly priced, beautifully built.
          </p>
          <div className="fsoc">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Houzz</span>
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="fc">
            <h4>{col.title}</h4>
            {col.links.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="fb">
        <p>© 2026 Havn Furniture Co. All rights reserved.</p>
        <div className="pays">
          {["VISA", "AMEX", "MC", "PayPal", "Klarna"].map((p) => (
            <span key={p} className="pay">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* -----------------------------------------------------------------------------
 * Page
 * ---------------------------------------------------------------------------*/

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <DlBarTop />
      <Features />
      <BrowseRooms />
      <Bestsellers />
      <DlBarMid />
      <Promos />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}
