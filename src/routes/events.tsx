import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

const events = [
  {
    id: 1,
    title: 'National Rally 2026',
    category: 'National',
    date: 'August 15-20, 2026',
    location: 'CAC National Secretariat, Lagos',
    desc: 'The annual flagship gathering of Royal Shepherds from all 36 states. Features worship, training, competitions, awards, and national leadership address.',
    icon: '🏆',
    spots: 5000,
    registered: 3240,
    schedule: ['Day 1: Arrival & Registration', 'Day 2: Opening Ceremony & Parade', 'Day 3: Training Sessions', 'Day 4: Evangelism Outreach', 'Day 5: Competitions', 'Day 6: Awards & Closing'],
  },
  {
    id: 2,
    title: 'South-West State Rally',
    category: 'State',
    date: 'July 5-7, 2026',
    location: 'CAC Good Women Camp, Ibadan',
    desc: 'Annual state rally for all Royal Shepherds units in the South-West. Featuring drill competitions, leadership training, and evangelism.',
    icon: '📍',
    spots: 2000,
    registered: 1450,
    schedule: ['Day 1: Arrival & State Parade', 'Day 2: Training & Competitions', 'Day 3: Awards & Closing Ceremony'],
  },
  {
    id: 3,
    title: 'Leadership Retreat 2026',
    category: 'Leadership',
    date: 'September 10-12, 2026',
    location: 'Joy Camp, Ile-Ife, Osun State',
    desc: 'An intensive retreat for national, regional, and state officers focused on strategic planning, team development, and spiritual renewal.',
    icon: '🏕️',
    spots: 200,
    registered: 187,
    schedule: ['Day 1: Arrival & Devotionals', 'Day 2: Strategic Sessions & Team Building', 'Day 3: Prayer, Vision & Commissioning'],
  },
  {
    id: 4,
    title: 'Annual Training Camp',
    category: 'Training',
    date: 'October 1-7, 2026',
    location: 'CAC Youth Centre, Abuja',
    desc: 'A week-long residential training camp covering drill, evangelism, leadership, and physical fitness training for cadets and officers.',
    icon: '⛺',
    spots: 500,
    registered: 321,
    schedule: ['Day 1-2: Drill & Ceremonial Training', 'Day 3-4: Leadership Workshops', 'Day 5: Evangelism Outreach', 'Day 6: Physical Fitness', 'Day 7: Closing Parade & Certificates'],
  },
  {
    id: 5,
    title: 'Constitution Examination',
    category: 'Training',
    date: 'November 20, 2026',
    location: 'All States (Simultaneous)',
    desc: 'National promotion examination written simultaneously across all states. Required for rank advancement from Cadet to Officer level.',
    icon: '✏️',
    spots: 10000,
    registered: 6720,
    schedule: ['8:00 AM: Registration', '9:00 AM: Examination begins', '12:00 PM: Submission', '3:00 PM: Results Processing'],
  },
  {
    id: 6,
    title: 'Christmas Carol & Evangelism',
    category: 'Evangelism',
    date: 'December 20-24, 2026',
    location: 'All Divisions Nationwide',
    desc: 'Annual Christmas evangelism drive where Royal Shepherds units visit hospitals, orphanages, prisons, and communities with the Gospel.',
    icon: '🕊️',
    spots: 25000,
    registered: 18000,
    schedule: ['Dec 20: Hospitals & Clinics', 'Dec 21: Prisons & Remand Homes', 'Dec 22: Orphanages & Old Peoples\' Homes', 'Dec 23: Street Evangelism', 'Dec 24: Carol Service'],
  },
]

const categories = ['All', 'National', 'State', 'Training', 'Leadership', 'Evangelism']

function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  const filtered = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory)

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Calendar</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Events & Programmes
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Stay up-to-date with upcoming rallies, camps, training programmes, and evangelism events
            across all units of The Royal Shepherds.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Events</span>
          </div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-8 sticky top-16 z-40" style={{background:'white', borderBottom:'1px solid #E5E7EB'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all filter-btn ${activeCategory === cat ? 'active' : ''}`}
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

      {/* Events Grid */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => {
              const pct = Math.round((event.registered / event.spots) * 100)
              return (
                <div key={event.id}
                  className="card-hover bg-white rounded-xl overflow-hidden cursor-pointer"
                  style={{border:'1px solid #E5E7EB'}}
                  onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}>
                  <div className="h-32 flex items-center justify-center text-6xl relative"
                    style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
                    {event.icon}
                    <span className="absolute top-3 right-3 badge-gold">{event.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                      {event.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-xs" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                        <span>📅</span> {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                        <span>📍</span> {event.location}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                      {event.desc}
                    </p>

                    {/* Registration progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
                        <span>{event.registered.toLocaleString()} registered</span>
                        <span>{pct}% full</span>
                      </div>
                      <div className="h-2 rounded-full" style={{background:'#E5E7EB'}}>
                        <div className="h-2 rounded-full transition-all progress-bar" style={{width:`${pct}%`}}></div>
                      </div>
                    </div>

                    {selectedEvent?.id === event.id && (
                      <div className="pt-4 mb-4" style={{borderTop:'1px solid #E5E7EB'}}>
                        <h4 className="text-xs font-bold uppercase tracking-wide mb-3" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                          Programme Schedule:
                        </h4>
                        <ul className="space-y-1">
                          {event.schedule.map((s, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'#D4AF37'}}></span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg text-xs font-bold text-center"
                        style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                        Register Now
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedEvent(selectedEvent?.id === event.id ? null : event) }}
                        className="px-3 py-2 rounded-lg text-xs font-bold border"
                        style={{borderColor:'#E5E7EB', color:'#6B7280', fontFamily:'Montserrat'}}>
                        {selectedEvent?.id === event.id ? '▲' : '▼'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Submit Events */}
      <section className="py-16" style={{background:'#0B1F3A'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Submit an Event
          </h2>
          <p className="mb-6" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
            State and Divisional commanders can submit upcoming events for listing on the national calendar.
          </p>
          <Link to="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-sm"
            style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
            Submit Event for Listing
          </Link>
        </div>
      </section>
    </div>
  )
}
