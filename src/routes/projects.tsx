import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const projects = [
  {
    id: 1,
    category: 'Community Service',
    title: 'Operation Clean Nigeria',
    desc: 'A nationwide environmental cleanup initiative carried out simultaneously by Royal Shepherds units across all 36 states, clearing over 500 tonnes of waste and planting 10,000 trees.',
    icon: '🌿',
    impact: ['36 States', '25,000+ Participants', '500 Tonnes Cleared', '10,000 Trees Planted'],
    status: 'Ongoing',
    color: '#065F46',
  },
  {
    id: 2,
    category: 'Youth Empowerment',
    title: 'Royal Skills Academy',
    desc: 'A vocational training programme equipping youth with skills in tailoring, baking, computing, phone repairs, and agriculture. Over 3,000 youth trained and supported to start micro-enterprises.',
    icon: '🔧',
    impact: ['3,000+ Trained', '12 Skills Areas', '800+ Enterprises Started', '₦15M Micro-Grants'],
    status: 'Ongoing',
    color: '#7C3AED',
  },
  {
    id: 3,
    category: 'Evangelism',
    title: 'Mission Nigeria 2025',
    desc: 'The largest Royal Shepherds evangelism campaign, deploying 10,000 cadets across Nigeria for 7 days of simultaneous door-to-door, market, hospital, and open-air evangelism.',
    icon: '📢',
    impact: ['10,000 Evangelists', '500,000 Contacts', '25,000 Decisions', '150 Churches Planted'],
    status: 'Completed',
    color: '#8B0000',
  },
  {
    id: 4,
    category: 'Community Service',
    title: 'School Renovation Initiative',
    desc: 'Partnering with state governments and corporates to renovate and equip public primary schools. 120 schools renovated, providing better learning environments for over 50,000 pupils.',
    icon: '🏫',
    impact: ['120 Schools Renovated', '50,000 Pupils Benefited', '₦30M Worth of Work', '12 States Covered'],
    status: 'Ongoing',
    color: '#0B1F3A',
  },
  {
    id: 5,
    category: 'Agricultural Projects',
    title: 'Royal Shepherds Farm Initiative',
    desc: 'An agricultural empowerment project providing land, seedlings, fertilizers, and training to unemployed youth. Producing food and generating income while teaching stewardship.',
    icon: '🌾',
    impact: ['500 Youth Farmers', '200 Hectares Farmed', '₦8M Revenue Generated', '10 States Active'],
    status: 'Ongoing',
    color: '#4D7C0F',
  },
  {
    id: 6,
    category: 'Community Service',
    title: 'Prison Ministry & Rehabilitation',
    desc: 'Regular visits to prisons, remand homes, and rehabilitation centres with the Gospel, counseling, and practical support. Many inmates have come to faith and been successfully reintegrated.',
    icon: '🕊️',
    impact: ['50+ Facilities Visited', '5,000 Inmates Reached', '1,200 Decisions', 'Monthly Follow-up'],
    status: 'Ongoing',
    color: '#1A3560',
  },
]

const categories = ['All', 'Community Service', 'Youth Empowerment', 'Evangelism', 'Agricultural Projects']

function ProjectsPage() {
  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Community Impact</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Our Projects
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            From evangelism to environmental care, skills training to school renovation —
            The Royal Shepherds are making a measurable difference in communities across Nigeria.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Projects</span>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <section style={{background:'#D4AF37'}}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value:'500K+', label:'Lives Touched' },
              { value:'6', label:'Active Projects' },
              { value:'36', label:'States Reached' },
              { value:'₦53M+', label:'Impact Generated' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black mb-1" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{s.value}</div>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{color:'rgba(11,31,58,0.7)', fontFamily:'Montserrat'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="card-hover bg-white rounded-2xl overflow-hidden"
                style={{border:'1px solid #E5E7EB'}}>
                <div className="h-48 flex items-center justify-center text-7xl relative"
                  style={{background:`linear-gradient(135deg, ${project.color}, ${project.color}bb)`}}>
                  {project.icon}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="badge-gold">{project.category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold`}
                      style={{
                        background: project.status === 'Completed' ? 'rgba(34,197,94,0.15)' : 'rgba(59,130,246,0.15)',
                        color: project.status === 'Completed' ? '#16a34a' : '#2563eb',
                        fontFamily:'Montserrat'
                      }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                    {project.desc}
                  </p>
                  {/* Impact metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.impact.map((metric, i) => (
                      <div key={i} className="text-xs rounded-lg px-3 py-2"
                        style={{background:'#F5F3EE', color:'#0B1F3A', fontFamily:'Montserrat', fontWeight:'600'}}>
                        ✓ {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge-gold inline-block mb-4">Global Alignment</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Our Projects Align with SDGs
            </h2>
            <div className="section-divider mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
              The Royal Shepherds community projects contribute directly to the United Nations Sustainable Development Goals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sdg:'SDG 1', title:'No Poverty', icon:'🏠' },
              { sdg:'SDG 3', title:'Good Health', icon:'❤️' },
              { sdg:'SDG 4', title:'Quality Education', icon:'📚' },
              { sdg:'SDG 8', title:'Decent Work', icon:'💼' },
              { sdg:'SDG 10', title:'Reduced Inequalities', icon:'⚖️' },
              { sdg:'SDG 11', title:'Sustainable Cities', icon:'🌆' },
              { sdg:'SDG 15', title:'Life on Land', icon:'🌿' },
              { sdg:'SDG 16', title:'Peace & Justice', icon:'🕊️' },
            ].map((s, i) => (
              <div key={i} className="text-center rounded-xl p-4 card-hover"
                style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,175,55,0.15)'}}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wide" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>{s.sdg}</div>
                <div className="text-xs mt-1" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{background:'#D4AF37'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
            Partner With Our Projects
          </h2>
          <p className="mb-6" style={{color:'rgba(11,31,58,0.8)', fontFamily:'Poppins'}}>
            Sponsor a project, volunteer your skills, or donate to help expand our community impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="px-8 py-3 rounded-lg font-bold text-sm"
              style={{background:'#0B1F3A', color:'white', fontFamily:'Montserrat'}}>
              Sponsor a Project
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-lg font-bold text-sm border-2"
              style={{borderColor:'#0B1F3A', color:'#0B1F3A', fontFamily:'Montserrat'}}>
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
