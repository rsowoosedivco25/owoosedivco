import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/news')({
  component: NewsPage,
})

const categories = ['All', 'Announcements', 'Training', 'Leadership', 'Testimonies', 'Events']

const articles = [
  {
    id: 1,
    cat: 'Announcements',
    date: 'June 2, 2026',
    title: 'National Rally 2026 Registration Now Open',
    excerpt: 'The Royal Shepherds is pleased to announce that registration for the 2026 National Rally is now open. This year\'s theme is "Disciplined for Dominion" and promises to be the largest gathering in the organization\'s history.',
    author: 'National HQ',
    icon: '📣',
    featured: true,
  },
  {
    id: 2,
    cat: 'Training',
    date: 'May 28, 2026',
    title: 'Digital Training Academy Reaches 10,000 Enrolled Members',
    excerpt: 'The Royal Shepherds Training Academy has crossed a major milestone with over 10,000 members now enrolled in digital training programmes. The online academy, launched in 2024, has transformed how members access training.',
    author: 'Training Dept.',
    icon: '🎓',
    featured: true,
  },
  {
    id: 3,
    cat: 'Leadership',
    date: 'May 15, 2026',
    title: '2026 Promotion Examination Results Released',
    excerpt: 'Results for the 2026 National Promotion Examination have been officially released. A total of 3,240 cadets and officers successfully passed the examination across all levels, recording a 78% pass rate.',
    author: 'Exam Board',
    icon: '🏆',
    featured: false,
  },
  {
    id: 4,
    cat: 'Testimonies',
    date: 'May 10, 2026',
    title: '"The Royal Shepherds Changed My Life" — A Member\'s Story',
    excerpt: 'Cadet Sandra Effiong shares how joining the Royal Shepherds transformed her from a struggling teenager into a confident community leader. Her story is one of thousands across Nigeria.',
    author: 'Editorial Team',
    icon: '✝️',
    featured: false,
  },
  {
    id: 5,
    cat: 'Events',
    date: 'May 5, 2026',
    title: 'South-West State Rally Draws Record Attendance',
    excerpt: 'The 2026 South-West State Rally held at CAC Good Women Camp, Ibadan recorded an unprecedented attendance of over 4,500 Royal Shepherds, breaking the previous record of 3,200 set in 2023.',
    author: 'SW Regional Command',
    icon: '📅',
    featured: false,
  },
  {
    id: 6,
    cat: 'Training',
    date: 'April 22, 2026',
    title: 'New Drill Manual Published for All Units',
    excerpt: 'The National Training Department has published a revised Drill and Ceremonial Manual incorporating modern standards while maintaining the unique Royal Shepherds traditions.',
    author: 'Training Dept.',
    icon: '📖',
    featured: false,
  },
  {
    id: 7,
    cat: 'Announcements',
    date: 'April 15, 2026',
    title: 'New State Command Inaugurated in Cross River',
    excerpt: 'The Royal Shepherds Cross River State Command was formally inaugurated at a colourful ceremony in Calabar, expanding the organization\'s official presence to all 36 states.',
    author: 'National HQ',
    icon: '🏛️',
    featured: false,
  },
  {
    id: 8,
    cat: 'Testimonies',
    date: 'April 8, 2026',
    title: 'Royal Shepherds Unit Wins National Drill Competition',
    excerpt: 'The Lagos State Command Company B has won the National Drill Competition, defeating 47 other companies from across the country in a tightly contested competition at the National Rally.',
    author: 'Editorial Team',
    icon: '⭐',
    featured: false,
  },
  {
    id: 9,
    cat: 'Leadership',
    date: 'March 30, 2026',
    title: 'National Commander Addresses Divisional Commanders Summit',
    excerpt: 'The National Commander delivered a strategic address at the Divisional Commanders Summit, outlining the five-year growth plan and calling for greater accountability in divisional administration.',
    author: 'National HQ',
    icon: '👑',
    featured: false,
  },
]

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.cat === activeCategory)
  const featured = filtered.filter(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Publications</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            News & Publications
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            The latest news, announcements, testimonies, and publications from The Royal Shepherds
            and Christ Apostolic Church.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>News</span>
          </div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-6 sticky top-16 z-40" style={{background:'white', borderBottom:'1px solid #E5E7EB'}}>
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

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16" style={{background:'#F5F3EE'}}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-8" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map(article => (
                <div key={article.id} className="card-hover bg-white rounded-xl overflow-hidden"
                  style={{border:'2px solid #D4AF37'}}>
                  <div className="h-48 flex items-center justify-center text-7xl"
                    style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
                    {article.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-gold">{article.cat}</span>
                      <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{article.date}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>By {article.author}</span>
                      <button onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                        className="text-xs font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                        Read Full Article →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          {rest.length > 0 && (
            <h2 className="text-xl font-bold mb-8" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              {featured.length > 0 ? 'More Articles' : 'All Articles'}
            </h2>
          )}
          <div className="space-y-4">
            {rest.map(article => (
              <div key={article.id} className="card-hover rounded-xl overflow-hidden"
                style={{border:'1px solid #E5E7EB', background:'white'}}>
                <div className="flex gap-6 p-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{background:'#F5F3EE'}}>
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="badge-gold">{article.cat}</span>
                      <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{article.date}</span>
                    </div>
                    <h3 className="font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>By {article.author}</span>
                      <button className="text-xs font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{background:'#0B1F3A'}}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Stay Updated</div>
          <h2 className="text-2xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
            Get the latest news, event announcements, and training updates delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
              style={{background:'rgba(255,255,255,0.1)', border:'1px solid rgba(212,175,55,0.3)', color:'white', fontFamily:'Poppins'}} />
            <button className="px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap"
              style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
