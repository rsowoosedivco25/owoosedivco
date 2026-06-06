import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/leadership')({
  component: LeadershipPage,
})

type Leader = {
  name: string
  rank: string
  position: string
  state?: string
  bio: string
  initials: string
  color: string
}

const nationalOfficers: Leader[] = [
  {
    name: 'Commander Emmanuel A. Oladele',
    rank: 'National Commander',
    position: 'National Commander, The Royal Shepherds',
    bio: 'Cdr. Oladele has served The Royal Shepherds for over 25 years, rising through the ranks from Cadet to National Commander. A passionate evangelist and leadership coach, he has led the organization through transformative growth, expanding its reach to all 36 states.',
    initials: 'EO',
    color: '#D4AF37',
  },
  {
    name: 'Cdr. Grace B. Adeyemi',
    rank: 'Deputy National Commander',
    position: 'Deputy National Commander (Operations)',
    bio: 'Cdr. Adeyemi oversees operational coordination across all regions. With a background in public administration and Christian ministry, she brings strategic depth to the national leadership team.',
    initials: 'GA',
    color: '#B8960F',
  },
  {
    name: 'Cdr. Paul O. Nwachukwu',
    rank: 'National Secretary',
    position: 'National Secretary-General',
    bio: 'Cdr. Nwachukwu has over 20 years in organizational management within CAC structures. He oversees all administrative functions, records, and inter-unit communications.',
    initials: 'PN',
    color: '#8B0000',
  },
  {
    name: 'Cdr. Esther T. Okafor',
    rank: 'National Training Officer',
    position: 'Director of Training & Education',
    bio: 'A certified trainer and educator, Cdr. Okafor developed the Royal Shepherds Training Academy curriculum. She is passionate about developing the next generation of Christian leaders.',
    initials: 'EO',
    color: '#122849',
  },
]

const regionalOfficers: Leader[] = [
  { name: 'Cdr. Samuel Eze', rank: 'Regional Commander', position: 'South-East Regional Commander', state: 'South-East', bio: 'Oversees Royal Shepherds operations across all states in the South-East geopolitical zone.', initials: 'SE', color: '#0B1F3A' },
  { name: 'Cdr. Funmilayo Ojo', rank: 'Regional Commander', position: 'South-West Regional Commander', state: 'South-West', bio: 'Coordinates programmes across Lagos, Ogun, Oyo, Osun, Ondo, and Ekiti States.', initials: 'FO', color: '#0B1F3A' },
  { name: 'Cdr. Ibrahim Musa', rank: 'Regional Commander', position: 'North-West Regional Commander', state: 'North-West', bio: 'Leads missionary and evangelism efforts across the North-West states with remarkable impact.', initials: 'IM', color: '#0B1F3A' },
  { name: 'Cdr. Amaka Nwosu', rank: 'Regional Commander', position: 'South-South Regional Commander', state: 'South-South', bio: 'Champions community service and youth empowerment across the Niger Delta region.', initials: 'AN', color: '#0B1F3A' },
  { name: 'Cdr. Daniel Abubakar', rank: 'Regional Commander', position: 'North-Central Commander', state: 'North-Central', bio: 'Coordinates inter-faith peace-building and Christian witness in the Middle Belt region.', initials: 'DA', color: '#0B1F3A' },
  { name: 'Cdr. Ruth Garba', rank: 'Regional Commander', position: 'North-East Regional Commander', state: 'North-East', bio: 'Leads discipleship and evangelism efforts across the challenging North-East region.', initials: 'RG', color: '#0B1F3A' },
]

function LeaderCard({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <div className={`card-hover rounded-xl overflow-hidden ${featured ? 'shadow-xl' : 'shadow-sm'}`}
      style={{border: featured ? `2px solid #D4AF37` : '1px solid #E5E7EB', background:'white'}}>
      <div className={`flex items-center justify-center ${featured ? 'h-48' : 'h-40'}`}
        style={{background: `linear-gradient(135deg, ${leader.color}, ${leader.color}cc)`}}>
        <div className={`rounded-full border-4 flex items-center justify-center font-black ${featured ? 'w-24 h-24 text-3xl' : 'w-20 h-20 text-2xl'}`}
          style={{borderColor:'rgba(255,255,255,0.3)', background:'rgba(255,255,255,0.15)', color:'white', fontFamily:'Montserrat'}}>
          {leader.initials}
        </div>
      </div>
      <div className={`p-5 ${featured ? 'p-6' : ''}`}>
        {featured && <span className="badge-gold mb-2 inline-block">National Leadership</span>}
        <h3 className={`font-bold mb-1 ${featured ? 'text-lg' : 'text-base'}`}
          style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
          {leader.name}
        </h3>
        <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
          {leader.rank}
        </div>
        <div className="text-xs mb-3" style={{color:'#9CA3AF', fontFamily:'Poppins'}}>
          {leader.position}
        </div>
        {showBio ? (
          <p className="text-xs leading-relaxed mb-3" style={{color:'#6B7280', fontFamily:'Poppins'}}>
            {leader.bio}
          </p>
        ) : null}
        <button onClick={() => setShowBio(!showBio)}
          className="text-xs font-bold transition-colors"
          style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
          {showBio ? '← Hide Bio' : 'Read Bio →'}
        </button>
      </div>
    </div>
  )
}

function LeadershipPage() {
  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Leadership</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Our Leaders
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Meet the dedicated officers who lead The Royal Shepherds at every level —
            from National Command to State and Regional Commands.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Leadership</span>
          </div>
        </div>
      </div>

      {/* National Officers */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">National Command</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              National Officers
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalOfficers.map((leader, i) => (
              <LeaderCard key={i} leader={leader} featured />
            ))}
          </div>
        </div>
      </section>

      {/* National Commander Feature */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl"
            style={{border:'2px solid #D4AF37'}}>
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 flex items-center justify-center p-12"
                style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
                <div>
                  <div className="w-32 h-32 rounded-full border-4 flex items-center justify-center font-black text-4xl mx-auto mb-4"
                    style={{borderColor:'#D4AF37', background:'rgba(212,175,55,0.1)', color:'#D4AF37', fontFamily:'Montserrat'}}>
                    NC
                  </div>
                  <div className="text-center">
                    <div className="text-xs tracking-widest uppercase" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                      National Commander
                    </div>
                    <div className="text-white font-bold" style={{fontFamily:'Playfair Display'}}>
                      The Royal Shepherds
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="badge-gold mb-4 inline-block">Commander's Message</div>
                <h2 className="text-2xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                  "We Are God's Army"
                </h2>
                <div className="text-3xl mb-4" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>"</div>
                <p className="leading-relaxed mb-4 italic" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                  The Royal Shepherds stands at a pivotal moment in history. As we face the challenges of a new generation,
                  we recommit ourselves to the mission that has always defined us: raising disciplined, spirit-filled young
                  people who will transform their communities, churches, and nation for the glory of God.
                </p>
                <p className="leading-relaxed italic" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                  Together, under the banner of One Fold, One Shepherd, we advance the kingdom with boldness, discipline,
                  and unwavering faith in Jesus Christ our Commander-in-Chief.
                </p>
                <div className="mt-6">
                  <div className="font-bold" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                    Commander Emmanuel A. Oladele
                  </div>
                  <div className="text-sm" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
                    National Commander, The Royal Shepherds – CAC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Officers */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Regional Command</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Regional Commanders
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalOfficers.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* State Officers note */}
      <section className="py-16" style={{background:'#0B1F3A'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl p-10 text-center" style={{border:'1px solid rgba(212,175,55,0.3)', background:'rgba(212,175,55,0.05)'}}>
            <div className="text-4xl mb-4">🏛️</div>
            <h2 className="text-2xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              State & Divisional Officers
            </h2>
            <p className="max-w-2xl mx-auto mb-6" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
              Each of our 36+ state commands and 120+ divisions is led by dedicated officers.
              State and Divisional officer profiles are maintained through the Members Portal.
              Officers can log in to view and update their unit directories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/membership"
                className="px-6 py-3 rounded-lg font-bold text-sm"
                style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Access Officers Portal
              </Link>
              <Link to="/contact"
                className="px-6 py-3 rounded-lg font-bold text-sm border"
                style={{borderColor:'rgba(212,175,55,0.4)', color:'rgba(255,255,255,0.8)', fontFamily:'Montserrat'}}>
                Find State Command
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
