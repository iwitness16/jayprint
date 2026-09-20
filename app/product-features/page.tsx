import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const features = [
  {
    img: '/images/ft1.png',
    title: 'Scannable',
    desc: 'Scan the barcode on the back to obtain fake ID card information, which can be verified by most applications, software and systems.',
  },
  {
    img: '/images/ft2.png',
    title: 'Hologram',
    desc: 'Each state uses a unique holographic pattern, creating a 3D effect via light reflection/refraction, enhancing fake ID authenticity.',
  },
  {
    img: '/images/ft3.png',
    title: 'UV Mark',
    desc: 'Using UV or black light, the card will reveal a specific pattern or marking that matches the appearance of a real ID card.',
  },
  {
    img: '/images/ft4.png',
    title: 'Advanced Technology',
    desc: 'Anti-counterfeiting, embossing, and laser technologies ensure the card info is fade-resistant and raised, enhancing tactile texture.',
  },
  {
    img: '/images/ft5.png',
    title: 'Strong Durability',
    desc: 'Fake ID cards are resistant to tearing, water resistance and chemical corrosion.',
  },
  {
    img: '/images/ft6.png',
    title: 'High Quality',
    desc: 'Made from premium materials. Bending tests show they are not easily broken.',
  },
]

export default function ProductFeaturesPage() {
  return (
    <>
      <SiteHeader active="Product Features" />
      <main>
        <PageHeader title="PRODUCT FEATURES" />

        <div className="shell" style={{ padding: '56px 0 80px' }}>

          {/* ── PRODUCT FEATURES GRID ── */}
          <h2 style={{ fontSize: 'clamp(18px, 2.4vw, 24px)', fontWeight: 700, marginBottom: '36px' }}>
            Product Features
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px 60px',
            marginBottom: '72px',
          }}>
            {features.map(({ img, title, desc }) => (
              <div key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', maxWidth: '380px', aspectRatio: '1.6', overflow: 'hidden', borderRadius: '8px', marginBottom: '16px', background: '#f4f4f5' }}>
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px' }}>{desc}</p>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 64px' }} />

          {/* ── PRODUCT PARAMETER DESCRIPTION ── */}
          <h2 style={{ fontSize: 'clamp(18px, 2.4vw, 24px)', fontWeight: 700, marginBottom: '12px' }}>
            Product Parameter Description
          </h2>
          <p style={{ color: 'var(--red)', fontWeight: 600, fontSize: '14px', marginBottom: '32px' }}>
            You can customise the following card information
          </p>

          <div style={{ maxWidth: '780px', margin: '0 auto 16px', position: 'relative' }}>
            <Image
              src="/images/productinfo.png"
              alt="Product parameter description — customisable ID fields"
              width={780}
              height={520}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
            />
          </div>

          <p style={{
            fontSize: '13px',
            color: '#b91c1c',
            fontWeight: 600,
            marginBottom: '64px',
            lineHeight: 1.6,
          }}>
            <strong>Important Note:</strong> After placing the order successfully, please be sure to contact us to confirm the card information to ensure your card is accurately produced.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 64px' }} />

          {/* ── SHIPPING STATUS ── */}
          <h2 style={{ fontSize: 'clamp(18px, 2.4vw, 24px)', fontWeight: 700, marginBottom: '32px' }}>
            Shipping Status
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '48px',
          }}>
            <div>
              <Image
                src="/images/shipping.png"
                alt="Shipping and delivery"
                width={520}
                height={360}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--foreground)' }}>
                Currently, you can receive your customised card in about{' '}
                <strong style={{ color: 'var(--red)' }}>4 days</strong> at the fastest.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8a000', fontSize: '16px', flexShrink: 0 }}>★</span>
                  <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    <strong>Ordinary production:</strong> 1–2 days, free of charge
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e8a000', fontSize: '16px', flexShrink: 0 }}>★</span>
                  <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    <strong>Expedited production:</strong> 1–2 days, charge ($20 for 1–2 cards, additional $10 for each subsequent card)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PACKAGE TRANSPORTATION TIME ── */}
          <h2 style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, marginBottom: '20px' }}>
            Package Transportation Time
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            {[
              { label: 'Standard shipping:', detail: '5–7 days, USD 10' },
              { label: 'Express shipping:', detail: '2–4 days, USD 30' },
            ].map(({ label, detail }) => (
              <div key={label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#e8a000', fontSize: '16px', flexShrink: 0 }}>★</span>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  <strong>{label}</strong> {detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/orders" className="btn-yellow">Order Now</Link>
            <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
