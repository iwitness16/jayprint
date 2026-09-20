'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Footer, SiteHeader } from '@/components/site-shell'

/* ── uses data ── */
const uses = [
  {
    img: 'use-entertainment.jpg',
    title: 'Enter entertainment venues',
    desc: "Don't be afraid of security checks and easily enter nightclubs, bars and other entertainment venues.",
  },
  {
    img: 'use-event.jpg',
    title: 'Attend an event or competition',
    desc: 'Feel free to attend parties and social events, and legally participate in sporting events.',
  },
  {
    img: 'use-travel.jpg',
    title: 'Travel car rental and hotel stay',
    desc: 'Easily rent a car for cross-state travel in the United States and quickly check into your hotel.',
  },
]

/* ── how-to steps ── */
const steps = [
  'Fill in your fake ID and shipping address info',
  'Submit order, contact us, complete payment',
  'Get electronic fake ID preview (fastest 3 days)',
  'Get package tracking number (2 days later)',
  'Get fake ID package (fastest 5–7 days)',
]

/* ── review wall screenshot slots ── */
const reviewSlots = [
  'review-chat-1.jpg',
  'review-chat-2.jpg',
  'review-chat-3.jpg',
  'review-chat-4.jpg',
  'review-chat-5.jpg',
  'review-chat-6.jpg',
]

export default function HomePage() {
  return (
    <>
      <SiteHeader active="Home" />
      <main>

        {/* ── HERO BANNER — full width, no side panels, no zoom ── */}
        <section className="hero-banner" aria-label="JayPrint hero banner">
          <Image
            src="/images/cartelhero.jpg"
            alt="JayPrint — Premium Fake IDs"
            width={1400}
            height={400}
            priority
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </section>

        {/* ── HERO LANDING SECTION — REDESIGNED ── */}
        <section className="hero-landing" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '60px 0 40px' }}>
          <div className="shell">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '40px', 
              alignItems: 'center'
            }}
            className="hero-redesign-grid"
            >
              
              {/* Image with overlay badge */}
              <div style={{ position: 'relative', order: 2 }} className="hero-redesign-image">
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', maxWidth: '500px', margin: '0 auto' }}>
                  <Image
                    src="/images/landinggirl.png"
                    alt="Lady holding a JayPrint fake ID"
                    width={480}
                    height={540}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                  />
                </div>
                
                {/* Floating quality badge */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20px', 
                  right: '50%',
                  transform: 'translateX(50%)',
                  background: 'white', 
                  padding: '16px 20px', 
                  borderRadius: '16px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                className="hero-floating-badge"
                >
                  <div style={{ fontSize: '32px', lineHeight: 1 }}>✓</div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#111' }}>20.5K+</div>
                    <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ order: 1 }} className="hero-redesign-content">
                {/* Premium badge */}
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: '#fff', 
                  padding: '8px 16px', 
                  borderRadius: '50px', 
                  marginBottom: '20px',
                  border: '1px solid #e5e7eb'
                }}>
                  <span style={{ fontSize: '20px' }}>⭐</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#666' }}>Premium Quality • Since 2010</span>
                </div>

                <h1 style={{ 
                  fontSize: 'clamp(28px, 5vw, 48px)', 
                  fontWeight: 900, 
                  lineHeight: 1.2, 
                  marginBottom: '16px',
                  color: '#111'
                }}>
                  Authentic-Looking{' '}
                  <span style={{ 
                    background: 'linear-gradient(135deg, #00b4d8 0%, #0096c7 100%)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Scannable IDs
                  </span>
                  {' '}Delivered Discreetly
                </h1>

                <p style={{ 
                  fontSize: 'clamp(15px, 2vw, 18px)', 
                  color: '#555', 
                  lineHeight: '1.6', 
                  marginBottom: '28px' 
                }}>
                  Professional-grade identification cards with advanced security features. 
                  Fast worldwide shipping with tracking included.
                </p>

                {/* Features grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                  gap: '12px', 
                  marginBottom: '28px' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: '#dcfce7', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>✓</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>Scannable</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>Barcode verified</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: '#fef3c7', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>🔒</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>Secure</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>UV & Holograms</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: '#dbeafe', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>🚀</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>Fast</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>Ships in 10 days</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: '#fce7f3', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>💰</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>From $65</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>Best pricing</div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <Link 
                    href="/orders" 
                    style={{ 
                      padding: '16px 32px', 
                      background: 'linear-gradient(135deg, #0096c7 0%, #0077b6 100%)', 
                      color: 'white', 
                      borderRadius: '12px', 
                      fontWeight: 700, 
                      fontSize: '16px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      boxShadow: '0 4px 14px rgba(0, 150, 199, 0.4)',
                      transition: 'transform 0.2s',
                      textAlign: 'center',
                      flex: '1 1 auto',
                      minWidth: '160px'
                    }}
                  >
                    Start Your Order →
                  </Link>
                  <Link 
                    href="/contact" 
                    style={{ 
                      padding: '16px 32px', 
                      background: 'white', 
                      color: '#111', 
                      borderRadius: '12px', 
                      fontWeight: 700, 
                      fontSize: '16px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: '2px solid #e5e7eb',
                      transition: 'transform 0.2s',
                      textAlign: 'center',
                      flex: '1 1 auto',
                      minWidth: '160px'
                    }}
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Trust indicators */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {['man1.jpg', 'man2.jpg', 'man3.jpg'].map((img, idx) => (
                      <Image
                        key={img}
                        src={`/images/${img}`}
                        alt="Customer"
                        width={32}
                        height={32}
                        style={{ 
                          borderRadius: '50%', 
                          border: '2px solid white',
                          marginLeft: idx > 0 ? '-8px' : '0'
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    Trusted by <strong style={{ color: '#111' }}>thousands</strong> worldwide
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <style jsx>{`
          @media (min-width: 768px) {
            .hero-redesign-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 60px !important;
            }
            .hero-redesign-image {
              order: 1 !important;
            }
            .hero-redesign-content {
              order: 2 !important;
            }
            .hero-floating-badge {
              right: -20px !important;
              bottom: 30px !important;
              transform: none !important;
            }
          }
        `}</style>

        {/* ── MINIMAL INTRO ── */}
        <section className="home-intro">
          <div className="shell">
            <div className="home-intro-inner">
              <p className="home-intro-eyebrow">Trusted Since 2010 · Your #1 Fake ID Source</p>
              <h2>JayPrint</h2>
              <p className="home-intro-lead">
                Polycarbonate-grade, fully scannable IDs for USA, Canada, UK &amp; Europe.
                Every order ships with a free duplicate — discreetly delivered worldwide.
              </p>
              <div className="home-intro-pills">
                {['Scannable Barcode', 'UV Security', 'Free Duplicate', 'Discreet Shipping'].map(p => (
                  <span className="home-pill" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── 3-CARD BROWSE SECTION — JayCards.png ── */}
        <section className="features-section">
          <div className="shell">
            <div className="features-grid">

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Shop Fake IDs"
                  width={400}
                  height={270}
                  className="feature-card-img"
                  style={{ objectFit: 'contain' }}
                />
                <h3>Shop Fake IDs</h3>
                <p>
                  Best selection of quality{' '}
                  <a href="/products">scannable fake IDs</a> customised with your photo and
                  information. Every card ships with a free duplicate.
                </p>
                <Link href="/products" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Premium Fake ID Maker"
                  width={400}
                  height={270}
                  className="feature-card-img"
                  style={{ objectFit: 'contain' }}
                />
                <h3>Premium Fake ID Maker</h3>
                <p>
                  JayPrint uses high-quality laser card printers, printing exclusively on polycarbonate
                  material identical to real government-issued IDs.
                </p>
                <Link href="/product-features" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Real JayPrint Est. 2010"
                  width={400}
                  height={270}
                  className="feature-card-img"
                  style={{ objectFit: 'contain' }}
                />
                <h3>Real JayPrint — Est. 2010</h3>
                <p>
                  <a href="/about">JayPrint</a> is the official and authentic fake ID maker with over 15
                  years of experience. Don&apos;t be fooled by imitations.
                </p>
                <Link href="/about" className="view-more-link">View more →</Link>
              </div>

            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── SECURITY FEATURES SECTION ── */}
        <section className="features-section" aria-labelledby="security-features-heading">
          <div className="shell">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 id="security-features-heading" style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, marginBottom: '16px' }}>
                Real Security. Real Confidence.
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--muted)', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 32px' }}>
                Every card ships with the full stack of security layers found on real government-issued IDs — so you walk in with complete confidence.
              </p>
              
              {/* Main image */}
              <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px' }}>
                <Image
                  src="/images/midhome.jpg"
                  alt="Security features showcase"
                  width={900}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
                Polycarbonate cards, UV ink, laser microprint, working barcodes and magnetic strips — the same features inspectors look for on a genuine ID.
              </p>
            </div>

            {/* Security features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px 30px', marginTop: '32px' }}>
              {[
                { icon: '🔍', title: 'Scannable PDF417 Barcode' },
                { icon: '🧲', title: 'Working Magnetic Strip' },
                { icon: '💡', title: 'UV / Blacklight Layer' },
                { icon: '✨', title: 'Holographic Overlay' },
                { icon: '🔬', title: 'Laser Microprint' },
                { icon: '💎', title: 'Polycarbonate Material' },
              ].map(({ icon, title }) => (
                <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                  <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── POLY CALLOUT ── */}
        <section style={{ padding: '52px 0 40px' }}>
          <div className="shell poly-section">
            <h2>Don&apos;t risk getting caught with a fake id!</h2>
            <p>
              It is vital that your fake ID be printed on the correct material — polycarbonate.
              A real card makes a distinct metallic sound, like a DVD disc. Many states now require this
              material: California, New York, Florida, and more. Rest assured that JayPrint
              uses genuine polycarbonate stock on every single order.
            </p>
          </div>
        </section>

        {/* ── WHAT A SCANNABLE ID CAN DO FOR YOU ── */}
        <section className="uses-section" aria-labelledby="uses-heading" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)', padding: '80px 0' }}>
          <div className="shell">
            <h2 id="uses-heading" style={{ color: 'white', textAlign: 'center', marginBottom: '48px' }}>What a scannable ID card can do for you?</h2>
            <div className="uses-grid">
              {uses.map((use) => (
                <div className="use-card" key={use.title} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                  <Image
                    src={`/images/${use.img}`}
                    alt={use.title}
                    width={400}
                    height={258}
                    className="use-card-img"
                    style={{ width: '100%', aspectRatio: '1.55', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ color: '#111', marginBottom: '8px' }}>{use.title}</h3>
                    {use.desc && <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{use.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO GET THE BEST FAKE ID ── */}
        <section className="howto-section" aria-labelledby="howto-heading">
          <div className="shell">
            <h2 id="howto-heading">How to Get the Best Fake ID</h2>
            <div className="howto-grid">
              <div>
                <Image
                  src="/images/howto-delivery.jpg"
                  alt="Fake ID delivery"
                  width={480}
                  height={560}
                  className="howto-img"
                  style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '0.85', display: 'block', background: '#222' }}
                />
              </div>
              <div className="howto-steps">
                {steps.map((step, i) => (
                  <div key={i}>
                    <div className="howto-step">
                      <span className="step-num">{i + 1}.</span>
                      <span className="step-text">{step}</span>
                    </div>
                    {i < steps.length - 1 && <span className="step-arrow">↓</span>}
                  </div>
                ))}
                <div className="howto-actions">
                  <Link href="/pricing" className="btn-yellow">Order Now</Link>
                  <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOUCH DOWN REVIEWS ── */}
        <section className="review-wall-section" aria-labelledby="touchdown-heading">
          <div className="shell">
            <h2 id="touchdown-heading">Touch Down Reviews</h2>
            <p>Real customer proof. Every screenshot is authentic — we deliver every time.</p>
            <div className="review-wall-grid">
              {reviewSlots.map((img, i) => (
                <div className="review-wall-item" key={i}>
                  <Image
                    src={`/images/${img}`}
                    alt={`Customer review ${i + 1}`}
                    width={360}
                    height={420}
                    style={{ width: '100%', aspectRatio: '0.85', objectFit: 'cover', display: 'block', borderRadius: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-label="Buy fake id call to action">
          <Image
            src="/images/cartelhero.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            aria-hidden="true"
          />
          <div className="cta-banner-bg" />
          <div className="shell cta-banner-content">
            <h2>Ready to get your fake id?</h2>
            <Link href="/products" className="btn-outline-white">BUY FAKE ID</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
