import Image from "next/image";
import { getHomepageData, getAllWoods, getLocations, getAllContacts } from "@/lib/content";

export default function Home() {
  const homepage = getHomepageData();
  const woods = getAllWoods();
  const locations = getLocations();
  const contacts = getAllContacts();

  return (
    <>
      {/* EST. 2026 DECORATOR */}
      <div className="est-label" aria-hidden="true">Est. 2000</div>

      {/* FLOATING PILL NAV */}
      <nav className="pill-nav" aria-label="Main Navigation">
        <a href="#hero" className="active">Trang chủ</a>
        <a href="#lookbook">Loại Gỗ</a>
        <a href="#product">Về chúng tôi</a>
        <a className="hide" href="#process">Process</a>
        <a className="hide" href="#video">Story</a>
        <a href="#signature">Liên hệ</a>
      </nav>

      {/* MOBILE */}
      <button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
      <nav className="mobile-nav" aria-label="Mobile Navigation">
        <a href="#hero">Trang chủ</a>
        <a href="#lookbook">Loại Gỗ</a>
        <a href="#product">Về chúng tôi</a>
        <a className="hide" href="#process">Process</a>
        <a className="hide" href="#video">Story</a>
        <a href="#signature">Liên hệ</a>
      </nav>

      {/* MOUSE-FOLLOWING BUY CIRCLE */}
      <div className="buy-circle" id="buyCircle"><span></span></div>

      {/* THE CANVAS */}
      <main>

        {/* SECTION 1: HERO */}
        <section className="canvas-section hero" id="hero">
          <div className="hero-image">
            <img src="images/banner.jpg" alt="Elegant interior with natural textures" loading="eager" />
            <div className="hero-image-tag">Est. 2000</div>
          </div>
          <div className="hero-content">
            <div className="logo"><img src="images/logo.png" alt="Logo" loading="lazy" /></div>
            <div className="hero-eyebrow">Công Ty Gỗ</div>
            <h1 className="hero-title">Mộc Bảo Gia</h1>
            <p className="hero-desc">{homepage.company_desc}</p>
            <div className="hero-cta">
              <a href="#lookbook" className="cta-link">Kho gỗ của chúng tôi</a>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE LOOKBOOK */}
        <section className="canvas-section lookbook" id="lookbook">
          <div className="lookbook-header reveal">
            <h2 className="lookbook-title">Các Loại Gỗ</h2>
            <span className="lookbook-count">01 — {String(woods.length).padStart(2, '0')}</span>
          </div>
          <div className="lookbook-track">
            {woods.map((wood) => (
              <div key={wood.slug} className="lookbook-card">
                <img src={wood.image} alt={wood.title} loading="lazy" />
                <div className="lookbook-card-meta">
                  <span className="lookbook-card-offer">{wood.offer}</span>
                  <span className="lookbook-card-tag">{wood.price}</span>
                  <span className="lookbook-card-tag lookbook-card-tag--available">{wood.availability}</span>
                </div>
                <span className="lookbook-card-label">{String(wood.order).padStart(2, '0')} — {wood.title}</span>
              </div>
            ))}
          </div>
          <div className="lookbook-footer reveal">
            <a href="#" className="cta-link">Gọi ngay cho chúng tôi</a>
            <div className="lookbook-arrows">
              <button className="lookbook-arrow" id="lbPrev" aria-label="Previous">
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="lookbook-arrow" id="lbNext" aria-label="Next">
                <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: PRODUCT DETAIL */}
        <section className="canvas-section product" id="product">
          <div className="product-image-zone" id="productImageZone">
            <img src="images/ivory-flow-51.jpg" alt="Artisan lounge chair" loading="lazy" className="hide" />
            <iframe
              className="product-map"
              src={homepage.map_url}
              title="Bản đồ Mộc Bảo Gia"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="product-info">
            <div className="product-badge reveal">Về Chúng Tôi</div>
            <h2 className="product-name reveal">Mộc Bảo Gia</h2>
            <p className="product-desc reveal">{homepage.about_us}</p>
            <dl className="product-specs reveal">
              {locations.locations && locations.locations.map((loc, idx) => (
                <div key={idx} className="product-spec">
                  <dt>{loc.city}</dt>
                  <dd>{loc.address}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 6: THE SIGNATURE */}
        <section className="canvas-section signature" id="signature">
          <div className="signature-bg-logo" aria-hidden="true">Mộc Bảo Gia</div>
          <div className="signature-content reveal">
            <div className="signature-mark">Liên Hệ</div>
            {contacts.map((contact) => (
              <div key={contact.slug}>
                <h2 className="signature-heading">{contact.title}</h2>
                <p className="signature-text">{contact.position}</p>
                <a href={`mailto:${contact.email}`} className="signature-email">{contact.email}</a>
                <div className="signature-phone">{contact.phone}</div>
              </div>
            ))}
            <div className="signature-links">
              <a href="#" className="cta-link zalo">Zalo</a>
              <a href="#" className="cta-link facebook">Facebook</a>
              <a href="#" className="cta-link tiktok">Tiktok</a>
            </div>
          </div>
          <div className="signature-footer">
            <a href="mailto:vuhoangnguyen49@gmail.com">© 2026 - Web Developer</a> by Vu Hoang Nguyen
          </div>
        </section>
      </main>
    </>
  );
}
