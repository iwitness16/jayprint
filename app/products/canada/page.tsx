import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const canadaProducts = [
  { name: 'British Columbia Fake ID', img: '/images/britishcolumbia.jpg' },
  { name: 'Ontario Fake ID',          img: '/images/ontario.jpg' },
  { name: 'Quebec Fake ID',           img: '/images/quebec.jpg' },
  { name: 'Alberta Fake ID',          img: '/images/canada.jpg' },
  { name: 'Manitoba Fake ID',         img: '/images/canada.jpg' },
  { name: 'Nova Scotia Fake ID',      img: '/images/canada.jpg' },
  { name: 'Saskatchewan Fake ID',     img: '/images/canada.jpg' },
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
        <p className="product-price">CA$100.00</p>
        <Link href={`/orders?product=${encodedName}&img=${encodedImg}&price=CA%24100.00`} className="btn-select">
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
