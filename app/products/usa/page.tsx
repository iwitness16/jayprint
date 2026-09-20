import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

/* ──────────────────────────────────────
   USA products — local images from /public/images/
   States without a matching local image are omitted.
   All priced at $100
─────────────────────────────────────── */
const usaProducts = [
  { name: 'Alabama Fake ID',                       img: '/images/alabama.jpg' },
  { name: 'Arizona Fake ID',                       img: '/images/arizona.jpg' },
  { name: 'California Fake ID (Teslin)',            img: '/images/california.jpg' },
  { name: 'California Fake ID (Polycarbonate)',     img: '/images/california.jpg' },
  { name: 'Colorado Fake ID',                      img: '/images/colorado.jpg' },
  { name: 'Connecticut Fake ID (Teslin)',           img: '/images/connecticut.jpg' },
  { name: 'Connecticut Fake ID (Polycarbonate)',    img: '/images/connecticut.jpg' },
  { name: 'Delaware Fake ID',                      img: '/images/delaware.jpg' },
  { name: 'Florida Fake ID',                       img: '/images/florida.jpg' },
  { name: 'Georgia Fake ID',                       img: '/images/georgia.jpg' },
  { name: 'Indiana Fake ID',                       img: '/images/indiana.jpg' },
  { name: 'Kansas Fake ID (Teslin)',                img: '/images/kansas.jpg' },
  { name: 'Kansas Fake ID (Polycarbonate)',         img: '/images/kansas.jpg' },
  { name: 'Maryland Fake ID',                      img: '/images/maryland.jpg' },
  { name: 'Massachusetts Fake ID',                 img: '/images/massachusetts.jpg' },
  { name: 'Michigan Fake ID (Teslin)',              img: '/images/michigan.jpg' },
  { name: 'Michigan Fake ID (Polycarbonate)',       img: '/images/michigan.jpg' },
  { name: 'Minnesota Fake ID (Teslin)',             img: '/images/minnesota.jpg' },
  { name: 'Minnesota Fake ID (Polycarbonate)',      img: '/images/minnesota.jpg' },
  { name: 'Mississippi Fake ID',                   img: '/images/mississippi.jpg' },
  { name: 'Missouri Fake ID (Teslin)',              img: '/images/missouri.jpg' },
  { name: 'Missouri Fake ID (Polycarbonate)',       img: '/images/missouri.jpg' },
  { name: 'Nebraska Fake ID (Teslin)',              img: '/images/nebraska.jpg' },
  { name: 'Nebraska Fake ID (Polycarbonate)',       img: '/images/nebraska.jpg' },
  { name: 'Nevada Fake ID (Teslin)',                img: '/images/nevada.jpg' },
  { name: 'Nevada Fake ID (Polycarbonate)',         img: '/images/nevada.jpg' },
  { name: 'New Jersey Fake ID (Teslin)',            img: '/images/newjersey.jpg' },
  { name: 'New Jersey Fake ID (Polycarbonate)',     img: '/images/newjersey.jpg' },
  { name: 'New York Fake ID',                      img: '/images/newyork.jpg' },
  { name: 'North Carolina Fake ID (Teslin)',        img: '/images/northcarolina.jpg' },
  { name: 'North Carolina Fake ID (Polycarbonate)', img: '/images/northcarolina.jpg' },
  { name: 'Ohio Fake ID',                          img: '/images/ohio.jpg' },
  { name: 'Pennsylvania Fake ID (Teslin)',          img: '/images/pennsylvania.jpg' },
  { name: 'Pennsylvania Fake ID (Polycarbonate)',   img: '/images/pennsylvania.jpg' },
  { name: 'Rhode Island Fake ID',                  img: '/images/rhodeisland.jpg' },
  { name: 'South Carolina Fake ID',                img: '/images/southcarolina.jpg' },
  { name: 'Tennessee Fake ID',                     img: '/images/tennessee.jpg' },
  { name: 'Texas Fake ID',                         img: '/images/texas.jpg' },
  { name: 'Utah Fake ID (Teslin)',                  img: '/images/utah.jpg' },
  { name: 'Utah Fake ID (Polycarbonate)',           img: '/images/utah.jpg' },
  { name: 'Virginia Fake ID',                      img: '/images/virginia.jpg' },
  { name: 'Washington Fake ID',                    img: '/images/washington.jpg' },
  { name: 'Wisconsin Fake ID',                     img: '/images/wisconsin.jpg' },
]

function ProductCard({ name, img }: { name: string; img: string }) {
  const encodedName = encodeURIComponent(name)
  const encodedImg = encodeURIComponent(img)
  return (
    <article className="product-card">
      <div className="product-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        <p className="product-price">$100.00</p>
        <Link
          href={`/orders?product=${encodedName}&img=${encodedImg}&price=%24100.00`}
          className="btn-select"
        >
          Place Order
        </Link>
      </div>
    </article>
  )
}

export default function USAProductsPage() {
  return (
    <>
      <SiteHeader active="Buy Fake ID" />
      <main>
        <PageHeader title="USA — STATE IDs" />
        <div className="products-page shell">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/products" style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 600 }}>
              ← Back to all countries
            </Link>
          </div>
          <section aria-labelledby="usa-heading">
            <h2 id="usa-heading" className="country-section-title">
              🇺🇸 United States — State IDs
            </h2>
            <div className="products-grid">
              {usaProducts.map((p, i) => (
                <ProductCard key={i} name={p.name} img={p.img} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
