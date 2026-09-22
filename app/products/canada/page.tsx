import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const canadaProducts = [
  { name: 'Quebec (QC) Fake ID',                           img: '/images/quebec-1.jpg' },
  { name: 'British Columbia (B.C.) Fake ID',               img: '/images/british_columbia-1.jpg' },
  { name: 'Saskatchewan (SK) Fake ID',                     img: '/images/saskatchewan1.jpg' },
  { name: 'Manitoba (Man) Fake ID (2026 Version)',         img: '/images/manitoba-1.jpg' },
  { name: 'Alberta (Alta) Fake DL (2026 Version)',         img: '/images/alberta-1.jpg' },
  { name: 'British Columbia (B.C.) Fake ID (2025 Version)', img: '/images/british_columbia_2025-1.jpg' },
  { name: 'Ontario (ON) Fake ID (2025 version)',           img: '/images/ontario-1.jpg' },
]

function ProductCard({ name, img }: { name: string; img: string }) {
  const encodedName = encodeURIComponent(name)
  const encodedImg = encodeURIComponent(img)
  return (
    <article className="product-card">
      <div className="product-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={name} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        <p className="product-price">CA$95.00</p>
        <Link href={`/orders?product=${encodedName}&img=${encodedImg}&price=CA%2495.00`} className="btn-select">
          Place Order
        </Link>
      </div>
    </article>
  )
}

export default function CanadaProductsPage() {
  return (
    <>
      <SiteHeader active="Buy Fake ID" />
      <main>
        <PageHeader title="CANADA — PROVINCIAL IDs" />
        <div className="products-page shell">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/products" style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 600 }}>← Back to all countries</Link>
          </div>
          <section aria-labelledby="canada-heading">
            <h2 id="canada-heading" className="country-section-title">🇨🇦 Canada — Provincial IDs</h2>
            <div className="products-grid">
              {canadaProducts.map((p, i) => <ProductCard key={i} name={p.name} img={p.img} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
