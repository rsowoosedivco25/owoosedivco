import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

// Replace these with real image URLs when available
const galleryImages = [
  {
    src: 'https://picsum.photos/seed/rs-rally-2025/1200/800',
    alt: 'Royal Shepherds National Rally 2025',
    caption: 'Cadets assembled at the 2025 National Rally parade ground in Lagos',
    category: 'Parade',
  },
  {
    src: 'https://picsum.photos/seed/rs-camp-2025/1200/800',
    alt: 'Annual Training Camp 2025 Opening Ceremony',
    caption: 'Opening ceremony of the Annual Training Camp, Abuja 2025',
    category: 'Camp',
  },
  {
    src: 'https://picsum.photos/seed/rs-outreach-aba/1200/800',
    alt: 'Street Evangelism Outreach in Aba',
    caption: 'Cadets sharing the Gospel on the streets of Aba, Abia State',
    category: 'Evangelism',
  },
  {
    src: 'https://picsum.photos/seed/rs-awards-2025/1200/800',
    alt: 'Promotion and Awards Ceremony 2025',
    caption: 'Officers receive promotion scrolls at the 2025 Promotion Ceremony',
    category: 'Awards',
  },
]

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))]

function cdnUrl(src: string, w: number, h?: number, q = 80): string {
  let url = `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fit=cover&fm=avif&q=${q}`
  if (h) url += `&h=${h}`
  return url
}

function buildSrcSet(src: string, h?: number): string {
  return [400, 800, 1200].map(w => `${cdnUrl(src, w, h)} ${w}w`).join(', ')
}

type GalleryImage = typeof galleryImages[0]

interface LightboxProps {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const img = images[index]
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(7,21,41,0.97)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-bold transition-colors flex items-center gap-2"
          style={{ fontFamily: 'Montserrat', letterSpacing: '0.08em' }}
        >
          <span>ESC</span>
          <span className="text-lg">✕</span>
        </button>

        {/* Counter */}
        <div
          className="absolute -top-12 left-0 text-sm"
          style={{ color: 'rgba(212,175,55,0.8)', fontFamily: 'Montserrat' }}
        >
          {index + 1} / {images.length}
        </div>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden" style={{ background: '#0B1F3A' }}>
          <img
            key={img.src}
            src={cdnUrl(img.src, 1200, 800, 90)}
            srcSet={buildSrcSet(img.src, 800)}
            sizes="(max-width: 768px) 100vw, 80vw"
            alt={img.alt}
            className="w-full max-h-[72vh] object-contain"
            style={{ display: 'block' }}
          />

          {/* Prev button */}
          <button
            onClick={e => { e.stopPropagation(); onPrev() }}
            disabled={!hasPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: hasPrev ? 'rgba(212,175,55,0.9)' : 'rgba(255,255,255,0.1)',
              color: hasPrev ? '#0B1F3A' : 'rgba(255,255,255,0.3)',
              cursor: hasPrev ? 'pointer' : 'default',
              fontFamily: 'Montserrat',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={e => { e.stopPropagation(); onNext() }}
            disabled={!hasNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: hasNext ? 'rgba(212,175,55,0.9)' : 'rgba(255,255,255,0.1)',
              color: hasNext ? '#0B1F3A' : 'rgba(255,255,255,0.3)',
              cursor: hasNext ? 'pointer' : 'default',
              fontFamily: 'Montserrat',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}
          >
            ›
          </button>
        </div>

        {/* Caption */}
        <div
          className="mt-4 px-2 flex items-start justify-between gap-4"
          style={{ borderTop: '1px solid rgba(212,175,55,0.25)', paddingTop: '1rem' }}
        >
          <div>
            <span
              className="badge-gold inline-block mb-2 text-xs"
              style={{ fontFamily: 'Montserrat' }}
            >
              {img.category}
            </span>
            <p className="text-white text-sm" style={{ fontFamily: 'Poppins' }}>
              {img.caption}
            </p>
          </div>
          <div
            className="text-xs whitespace-nowrap mt-1"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Montserrat' }}
          >
            ← → to navigate
          </div>
        </div>
      </div>
    </div>
  )
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i)), [])
  const nextImage = useCallback(
    () => setLightboxIndex(i => (i !== null && i < filtered.length - 1 ? i + 1 : i)),
    [filtered.length]
  )

  // Columns in first visible row at widest breakpoint (4 columns)
  const firstRowCount = 4

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{ background: 'linear-gradient(135deg, #0B1F3A, #122849)' }}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Photo Gallery</div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Events Gallery
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Poppins' }}
          >
            A visual journey through the events, parades, outreach, and celebrations
            of The Royal Shepherds across Nigeria and beyond.
          </p>
          <div
            className="flex justify-center gap-2 mt-6 text-xs"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Montserrat' }}
          >
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{ color: '#D4AF37' }}>Gallery</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section
        className="py-6 sticky top-16 z-40"
        style={{ background: 'white', borderBottom: '1px solid #E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? '#D4AF37' : '#F5F3EE',
                  color: activeCategory === cat ? '#0B1F3A' : '#6B7280',
                  fontFamily: 'Montserrat',
                  border: activeCategory === cat ? 'none' : '1px solid #E5E7EB',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16" style={{ background: '#F5F3EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((img, i) => {
                const isFirstRow = i < firstRowCount
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 card-hover"
                    style={{
                      border: '1px solid #E5E7EB',
                      aspectRatio: '4/3',
                      background: '#0B1F3A',
                    }}
                    aria-label={`View: ${img.alt}`}
                  >
                    <img
                      src={cdnUrl(img.src, 400, 300)}
                      srcSet={buildSrcSet(img.src, 300)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      alt={img.alt}
                      loading={isFirstRow ? undefined : 'lazy'}
                      {...(i === 0 ? { fetchPriority: 'high' } : {})}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(7,21,41,0.9) 0%, transparent 60%)' }}
                    >
                      <span
                        className="badge-gold mb-2 text-xs"
                        style={{ fontFamily: 'Montserrat' }}
                      >
                        {img.category}
                      </span>
                      <p
                        className="text-white text-xs text-center line-clamp-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {img.caption}
                      </p>
                    </div>

                    {/* Zoom icon */}
                    <div
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(212,175,55,0.9)' }}
                    >
                      <svg width="14" height="14" fill="none" stroke="#0B1F3A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <p style={{ color: '#9CA3AF', fontFamily: 'Poppins' }}>No images in this category yet.</p>
            </div>
          )}

          <p
            className="text-center mt-8 text-xs"
            style={{ color: '#9CA3AF', fontFamily: 'Montserrat' }}
          >
            Click any image to view full size · Use arrow keys to navigate · Press Esc to close
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20" style={{ background: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge-gold inline-block mb-4">Video Gallery</div>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Video Highlights
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '2025 National Rally Highlights', duration: '12:34', icon: '🏆' },
              { title: 'Annual Training Camp 2025', duration: '8:45', icon: '⛺' },
              { title: 'Christmas Evangelism 2025', duration: '15:20', icon: '🕊️' },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden card-hover cursor-pointer"
                style={{ border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <div
                  className="relative h-48 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #122849, #0B1F3A)' }}
                >
                  <div className="text-6xl">{v.icon}</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                      style={{ background: 'rgba(212,175,55,0.9)' }}
                    >
                      <span className="text-2xl ml-1">▶</span>
                    </div>
                  </div>
                  <span
                    className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded"
                    style={{ background: 'rgba(0,0,0,0.7)', color: 'white', fontFamily: 'Montserrat' }}
                  >
                    {v.duration}
                  </span>
                </div>
                <div className="p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Poppins' }}>
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
