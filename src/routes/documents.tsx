import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/documents')({
  component: DocumentsPage,
})

const categories = ['All', 'Constitution & P.O.R.', 'Training Manuals', 'Circulars', 'Standing Orders', 'Forms', 'Annual Reports']

const documents = [
  { id: 1, cat: 'Constitution & P.O.R.', title: 'The Royal Shepherds Constitution (2022 Edition)', desc: 'The founding document of The Royal Shepherds, outlining membership, ranks, governance, and disciplinary procedures.', size: '2.4 MB', pages: 84, icon: '📜', year: 2022 },
  { id: 2, cat: 'Constitution & P.O.R.', title: 'Programme of Regulations (P.O.R.) 2020', desc: 'Official regulations governing day-to-day operations, training standards, and programme management.', size: '1.8 MB', pages: 60, icon: '📋', year: 2020 },
  { id: 3, cat: 'Training Manuals', title: 'Drill and Ceremonial Manual', desc: 'Comprehensive guide to Royal Shepherds drill commands, parade formations, and ceremonial procedures.', size: '3.1 MB', pages: 120, icon: '⚔️', year: 2023 },
  { id: 4, cat: 'Training Manuals', title: 'Evangelism Training Manual', desc: 'A practical guide for effective evangelism, soul-winning strategies, and discipleship follow-up.', size: '1.5 MB', pages: 48, icon: '📢', year: 2023 },
  { id: 5, cat: 'Training Manuals', title: 'Leadership Development Course Notes', desc: 'Study notes for the Royal Shepherds leadership development programme — Levels 1-3.', size: '2.2 MB', pages: 96, icon: '👑', year: 2024 },
  { id: 6, cat: 'Circulars', title: 'National Circular 2026/001 — National Rally Guidelines', desc: 'Official guidelines and requirements for participation in the 2026 National Rally.', size: '0.8 MB', pages: 12, icon: '📣', year: 2026 },
  { id: 7, cat: 'Circulars', title: 'National Circular 2025/004 — Promotion Examination Guidelines', desc: 'Rules and procedures for the 2025 National Promotion Examination.', size: '0.5 MB', pages: 8, icon: '📣', year: 2025 },
  { id: 8, cat: 'Standing Orders', title: 'National Standing Orders (2024)', desc: 'Current standing orders of the National Command governing all units of The Royal Shepherds.', size: '1.2 MB', pages: 40, icon: '📌', year: 2024 },
  { id: 9, cat: 'Forms', title: 'Membership Registration Form', desc: 'Official form for registering new members into a company. Available in PDF format.', size: '0.3 MB', pages: 2, icon: '📝', year: 2024 },
  { id: 10, cat: 'Forms', title: 'Promotion Examination Application', desc: 'Application form for the national promotion examination.', size: '0.2 MB', pages: 2, icon: '📝', year: 2024 },
  { id: 11, cat: 'Forms', title: 'Event Registration Form', desc: 'Standard form for registering units for national and state events.', size: '0.2 MB', pages: 2, icon: '📝', year: 2024 },
  { id: 12, cat: 'Annual Reports', title: 'Annual Report 2025', desc: 'Comprehensive report of all Royal Shepherds activities, financial summary, and impact metrics for 2025.', size: '5.2 MB', pages: 64, icon: '📊', year: 2025 },
  { id: 13, cat: 'Annual Reports', title: 'Annual Report 2024', desc: 'Complete organizational review, financials, and impact report for the 2024 calendar year.', size: '4.8 MB', pages: 60, icon: '📊', year: 2024 },
]

function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = documents.filter(doc => {
    const matchCat = activeCategory === 'All' || doc.cat === activeCategory
    const matchSearch = !search || doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Digital Library</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Documents Library
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Access official Royal Shepherds documents including the Constitution, training manuals,
            circulars, standing orders, forms, and annual reports.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Documents</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <section className="py-8 sticky top-16 z-40" style={{background:'white', borderBottom:'1px solid #E5E7EB'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none"
                style={{border:'1px solid #E5E7EB', fontFamily:'Poppins', color:'#0B1F3A'}} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
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
        </div>
      </section>

      {/* Documents */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          {/* More category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.slice(4).map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
                style={{
                  background: activeCategory === cat ? '#D4AF37' : 'white',
                  color: activeCategory === cat ? '#0B1F3A' : '#6B7280',
                  fontFamily:'Montserrat',
                  border: activeCategory === cat ? 'none' : '1px solid #E5E7EB'
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-4 text-sm" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
            Showing {filtered.length} document{filtered.length !== 1 ? 's' : ''}
          </div>

          <div className="space-y-3">
            {filtered.map(doc => (
              <div key={doc.id} className="card-hover bg-white rounded-xl overflow-hidden flex gap-4 p-5"
                style={{border:'1px solid #E5E7EB'}}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{background:'#F5F3EE'}}>
                  {doc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="badge-gold">{doc.cat}</span>
                    <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{doc.year}</span>
                  </div>
                  <h3 className="font-bold mb-1 truncate" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                    {doc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                    {doc.desc}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
                    <span>📄 {doc.pages} pages</span>
                    <span>💾 {doc.size}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button className="px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1"
                    style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                    ⬇ Download
                  </button>
                  <button className="px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 border"
                    style={{borderColor:'#E5E7EB', color:'#6B7280', fontFamily:'Montserrat'}}>
                    👁 Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📂</div>
              <p style={{color:'#9CA3AF', fontFamily:'Poppins'}}>
                No documents found for your search. Try a different keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Document submission */}
      <section className="py-16" style={{background:'#0B1F3A'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Need a Document Not Listed Here?
          </h2>
          <p className="mb-6" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
            Officers and members can request specific documents through the National Secretariat.
            For older historical documents, contact the Archives Department.
          </p>
          <Link to="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-sm"
            style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
            Request a Document
          </Link>
        </div>
      </section>
    </div>
  )
}
