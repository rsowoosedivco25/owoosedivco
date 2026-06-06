import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/structure')({
  component: StructurePage,
})

type OrgNode = {
  title: string
  code: string
  desc: string
  color: string
  children?: string[]
  count?: string
}

const orgChart: OrgNode[] = [
  {
    title: 'National Command',
    code: 'NC',
    desc: 'The supreme governing body of The Royal Shepherds, headed by the National Commander appointed by CAC. Responsible for policy, direction, and national programmes.',
    color: '#D4AF37',
    count: '1 National Body',
    children: ['Regional Command'],
  },
  {
    title: 'Regional Command',
    code: 'RC',
    desc: 'Regional Commands oversee operations across geo-political zones. Each region is led by a Regional Commander who coordinates state activities.',
    color: '#C49B2E',
    count: '6 Regions',
    children: ['State Command'],
  },
  {
    title: 'State Command',
    code: 'SC',
    desc: 'State Commands operate in all 36 states plus FCT, managing divisional activities, state rallies, and state-level programmes.',
    color: '#B88825',
    count: '36+ States',
    children: ['Divisional Council'],
  },
  {
    title: 'Divisional Council',
    code: 'DC',
    desc: 'Divisional Councils coordinate multiple battalions within a local government area or church division.',
    color: '#0B1F3A',
    count: '120+ Divisions',
    children: ['Battalion Council'],
  },
  {
    title: 'Battalion Council',
    code: 'BC',
    desc: 'Battalions are intermediate units comprising multiple companies. They conduct battalion-level training, competitions, and outreach.',
    color: '#122849',
    count: '450+ Battalions',
    children: ['Company'],
  },
  {
    title: 'Company',
    code: 'CO',
    desc: 'The primary operational unit of The Royal Shepherds. A Company is attached to a local CAC assembly and is led by a Company Commander.',
    color: '#1A3560',
    count: '1800+ Companies',
    children: ['Squad'],
  },
  {
    title: 'Squad',
    code: 'SQ',
    desc: 'The smallest unit of organization. A Squad consists of 8-12 members under a Squad Leader, conducting local evangelism and service.',
    color: '#8B0000',
    count: '5000+ Squads',
  },
]

const ranks = [
  { rank: 'Commander-in-Chief', abbr: 'CIC', level: 'National' },
  { rank: 'National Commander', abbr: 'NC', level: 'National' },
  { rank: 'Deputy National Commander', abbr: 'DNC', level: 'National' },
  { rank: 'Regional Commander', abbr: 'RC', level: 'Regional' },
  { rank: 'State Commander', abbr: 'SC', level: 'State' },
  { rank: 'Divisional Commander', abbr: 'DC', level: 'Division' },
  { rank: 'Battalion Commander', abbr: 'BC', level: 'Battalion' },
  { rank: 'Company Commander', abbr: 'CC', level: 'Company' },
  { rank: 'Platoon Commander', abbr: 'PC', level: 'Platoon' },
  { rank: 'Squad Leader', abbr: 'SL', level: 'Squad' },
  { rank: 'Cadet', abbr: 'CDT', level: 'Member' },
]

function StructurePage() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Organization</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Organizational Structure
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            The Royal Shepherds operates through a clear, disciplined command structure that ensures effective
            governance from national headquarters to the local squad level.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Structure</span>
          </div>
        </div>
      </div>

      {/* Org Chart - Interactive */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Hierarchy</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Command Hierarchy
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-sm" style={{color:'#6B7280', fontFamily:'Poppins'}}>
              Click on each level to learn more about its role and responsibilities.
            </p>
          </div>

          <div className="space-y-3">
            {orgChart.map((node, i) => (
              <div key={i}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full org-node rounded-xl overflow-hidden text-left"
                  style={{border: `2px solid ${expanded === i ? node.color : 'transparent'}`}}
                >
                  <div className="flex items-center gap-4 p-5"
                    style={{background: expanded === i ? node.color : '#F5F3EE'}}>
                    {/* Level indicator */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0"
                      style={{
                        background: expanded === i ? 'rgba(0,0,0,0.2)' : node.color,
                        color: expanded === i ? 'white' : 'white',
                        fontFamily: 'Montserrat'
                      }}>
                      {node.code}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg" style={{
                        color: expanded === i ? 'white' : '#0B1F3A',
                        fontFamily: 'Playfair Display'
                      }}>
                        {node.title}
                      </div>
                      {node.count && (
                        <div className="text-xs" style={{
                          color: expanded === i ? 'rgba(255,255,255,0.7)' : '#9CA3AF',
                          fontFamily: 'Montserrat'
                        }}>
                          {node.count}
                        </div>
                      )}
                    </div>
                    <div style={{color: expanded === i ? 'white' : '#9CA3AF', fontSize: '1.2rem'}}>
                      {expanded === i ? '▲' : '▼'}
                    </div>
                  </div>
                  {expanded === i && (
                    <div className="p-6" style={{background:'white', borderTop:`2px solid ${node.color}`}}>
                      <p className="mb-4 leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>{node.desc}</p>
                      {node.children && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wide" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
                            Reports to:
                          </span>
                          <span className="badge-gold">{node.children[0]}</span>
                        </div>
                      )}
                    </div>
                  )}
                </button>
                {i < orgChart.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-6" style={{background:'linear-gradient(#D4AF37,#E5E7EB)'}}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranks Table */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Ranks & Grades</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Rank Structure
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{border:'1px solid rgba(212,175,55,0.3)'}}>
            <div className="grid grid-cols-3 px-6 py-3 text-xs font-bold uppercase tracking-widest"
              style={{background:'rgba(212,175,55,0.15)', color:'#D4AF37', fontFamily:'Montserrat'}}>
              <div>Rank Title</div>
              <div>Abbreviation</div>
              <div>Level</div>
            </div>
            {ranks.map((r, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 text-sm transition-colors hover:bg-white/5 ${
                i < ranks.length - 1 ? 'border-b' : ''
              }`} style={{borderColor:'rgba(255,255,255,0.07)'}}>
                <div className="font-semibold" style={{color:'white', fontFamily:'Poppins'}}>{r.rank}</div>
                <div className="font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>{r.abbr}</div>
                <div>
                  <span className="px-2 py-0.5 rounded text-xs" style={{
                    background: r.level === 'National' ? 'rgba(212,175,55,0.2)' :
                                r.level === 'Member' ? 'rgba(139,0,0,0.2)' : 'rgba(255,255,255,0.1)',
                    color: r.level === 'National' ? '#D4AF37' : 'rgba(255,255,255,0.7)',
                    fontFamily:'Montserrat'
                  }}>
                    {r.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Departments</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Standing Departments
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon:'🎓', name:'Training & Education', desc:'Manages all training programmes, academy courses, and promotion examinations.' },
              { icon:'📢', name:'Evangelism & Outreach', desc:'Coordinates all evangelism campaigns, soul-winning drives, and missionary activities.' },
              { icon:'⚙️', name:'Administration', desc:'Handles records management, correspondence, and organizational administration.' },
              { icon:'💰', name:'Finance & Accounts', desc:'Manages funds, dues, donations, and financial reporting at all levels.' },
              { icon:'📣', name:'Public Relations', desc:'Manages communications, publications, social media, and public image.' },
              { icon:'🏥', name:'Welfare & Social', desc:'Attends to members\' welfare, hospital visits, and community social activities.' },
              { icon:'🎵', name:'Band & Music', desc:'Trains and deploys the Royal Shepherds band for parades and events.' },
              { icon:'🏆', name:'Sports & Recreation', desc:'Organizes inter-unit competitions, sports meets, and recreational activities.' },
            ].map((dept, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-6" style={{border:'1px solid #E5E7EB'}}>
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h3 className="font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{dept.name}</h3>
                <p className="text-sm leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
