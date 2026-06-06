import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

const categories = ['All', 'Parade', 'Evangelism', 'Camp', 'Training', 'Community Service', 'Awards']

const galleryItems = [
  { id: 1, cat: 'Parade', title: 'National Parade 2025', emoji: '🎖️', color: '#0B1F3A', desc: 'Royal Shepherds march at the 2025 National Rally parade in Lagos' },
  { id: 2, cat: 'Evangelism', title: 'Street Evangelism – Aba', emoji: '📢', color: '#8B0000', desc: 'Cadets sharing the Gospel at the popular Ariaria market, Aba' },
  { id: 3, cat: 'Camp', title: 'Annual Training Camp 2025', emoji: '⛺', color: '#065F46', desc: 'Cadets at the residential annual training camp, Abuja 2025' },
  { id: 4, cat: 'Training', title: 'Drill Competition Finals', emoji: '⚔️', color: '#1A3560', desc: 'Competition drill display at the 2025 National Rally' },
  { id: 5, cat: 'Community Service', title: 'Hospital Visitation', emoji: '🏥', color: '#7C3AED', desc: 'Royal Shepherds distributing gifts and praying for patients' },
  { id: 6, cat: 'Awards', title: 'Promotion Ceremony 2025', emoji: '🏆', color: '#D4AF37', desc: 'Officers receive their promotion scrolls at the 2025 ceremony' },
  { id: 7, cat: 'Parade', title: 'State Rally Parade – Ibadan', emoji: '🎺', color: '#0B1F3A', desc: 'South-West State Rally parade, CAC Good Women Camp Ibadan' },
  { id: 8, cat: 'Evangelism', title: 'Prison Outreach', emoji: '🕊️', color: '#8B0000', desc: 'Evangelism and counseling at the Kirikiri Prison, Lagos' },
  { id: 9, cat: 'Training', title: 'Leadership Workshop', emoji: '👑', color: '#B8960F', desc: 'Officers in a leadership development session at Joy Camp' },
  { id: 10, cat: 'Community Service', title: 'School Renovation Project', emoji: '🏫', color: '#065F46', desc: 'Community service — renovating a government primary school' },
  { id: 11, cat: 'Camp', title: 'Morning Devotions at Camp', emoji: '🙏', color: '#1A3560', desc: 'Early morning worship and prayer at the annual training camp' },
  { id: 12, cat: 'Awards', title: 'Best Company Awards', emoji: '⭐', color: '#D4AF37', desc: 'Top-performing companies receive their trophies at the national rally' },
  { id: 13, cat: 'Parade', title: 'Independence Day March', emoji: '🇳🇬', color: '#0B1F3A', desc: 'Royal Shepherds participating in Nigeria Independence Day parade' },
  { id: 14, cat: 'Evangelism', title: 'Open-Air Crusade', emoji: '✝️', color: '#8B0000', desc: 'Mass evangelism crusade in a rural community, Osun State' },
  { id: 15, cat: 'Training', title: 'First Aid Training', emoji: '🩺', color: '#1A3560', desc: 'Cadets learning first aid and emergency response skills' },
  { id: 16, cat: 'Community Service', title: 'Environmental Cleanup', emoji: '🌿', color: '#065F46', desc: 'Green community cleanup initiative by Lagos State Command' },
]

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null)

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.cat === activeCategory)

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Photo Gallery</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Gallery
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            A visual journey through the activities, events, and impact of The Royal Shepherds
            across Nigeria and beyond.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Gallery</span>
          </div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-8 sticky top-16 z-40" style={{background:'white', borderBottom:'1px solid #E5E7EB'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? '#D4AF37' : '#F5F3EE',
                  color: activeCategory === cat ? '#0B1F3A' : '#6B7280',
                  fontFamily:'Montserrat',
                  border: activeCategory === cat ? 'none' : '1px solid #E5E7EB'
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div key={item.id}
                className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer group card-hover ${
                  i % 5 === 0 ? 'aspect-square' : i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                }`}
                onClick={() => setSelected(item)}
                style={{border:'1px solid #E5E7EB', background:item.color}}>
                <div className="w-full h-full flex flex-col items-center justify-center p-4 relative"
                  style={{minHeight:'150px'}}>
                  <div className="text-6xl mb-2">{item.emoji}</div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-4">
                    <span className="badge-gold mb-2">{item.cat}</span>
                    <p className="text-white text-xs text-center font-semibold" style={{fontFamily:'Poppins'}}>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <p style={{color:'#9CA3AF', fontFamily:'Poppins'}}>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(0,0,0,0.9)'}}
          onClick={() => setSelected(null)}>
          <div className="max-w-2xl w-full rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-center p-16 text-9xl" style={{background:selected.color}}>
              {selected.emoji}
            </div>
            <div className="p-6" style={{background:'#0B1F3A'}}>
              <span className="badge-gold mb-3 inline-block">{selected.cat}</span>
              <h3 className="text-xl font-bold text-white mb-2" style={{fontFamily:'Playfair Display'}}>
                {selected.title}
              </h3>
              <p style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>{selected.desc}</p>
              <button onClick={() => setSelected(null)}
                className="mt-4 text-xs font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge-gold inline-block mb-4">Video Gallery</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Video Highlights
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title:'2025 National Rally Highlights', duration:'12:34', icon:'🏆' },
              { title:'Annual Training Camp 2025', duration:'8:45', icon:'⛺' },
              { title:'Christmas Evangelism 2025', duration:'15:20', icon:'🕊️' },
            ].map((v, i) => (
              <div key={i} className="rounded-xl overflow-hidden card-hover cursor-pointer"
                style={{border:'1px solid rgba(212,175,55,0.2)'}}>
                <div className="relative h-48 flex items-center justify-center"
                  style={{background:'linear-gradient(135deg, #122849, #0B1F3A)'}}>
                  <div className="text-6xl">{v.icon}</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                      style={{background:'rgba(212,175,55,0.9)'}}>
                      <span className="text-2xl ml-1">▶</span>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded"
                    style={{background:'rgba(0,0,0,0.7)', color:'white', fontFamily:'Montserrat'}}>
                    {v.duration}
                  </span>
                </div>
                <div className="p-4" style={{background:'rgba(255,255,255,0.05)'}}>
                  <p className="text-sm font-semibold text-white" style={{fontFamily:'Poppins'}}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
