import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const timeline = [
  { year: '10th May, 2002', title: 'Foundation', desc: 'The Royal Shepherds was founded within the Christ Apostolic Church as a paramilitary youth organization to instill Christian discipline and leadership.' },
  { year: '1960s', title: 'National Spread', desc: 'The organization expanded rapidly across Nigeria, establishing state commands and divisional councils in major cities.' },
  { year: '1980s', title: 'Formalization', desc: 'The Royal Shepherds Constitution was formalized, establishing ranks, structures, and operational procedures.' },
  { year: '2000s', title: 'Digital Era', desc: 'Introduction of modern training methods, digital records management, and expanded community service programmes.' },
  { year: '2002', title: 'Constitutional Grounding', desc: 'Established in compliance with the Nigerian constitution and the National Youth Policy of 2001, following the CAC General Executives Council meeting at Ikeji-Arakeji Camp on 10th May 2002, creating a distinct uniformed youth wing for the church.' },
]

const coreValues = [
  { icon: '⚔️', title: 'Discipline', desc: 'Military-grade discipline in spiritual and civic life.' },
  { icon: '📢', title: 'Evangelism', desc: 'Actively sharing the Gospel in every community.' },
  { icon: '🛡️', title: 'Integrity', desc: 'Upholding truth and moral uprightness in all dealings.' },
  { icon: '👑', title: 'Leadership', desc: 'Developing servant-leaders for church and society.' },
  { icon: '🤝', title: 'Service', desc: 'Selfless dedication to community development.' },
  { icon: '🌟', title: 'Excellence', desc: 'Pursuing the highest standard in all endeavors.' },
]

function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">About Us</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Who We Are
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-base" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Learn about the history, vision, mission, and values of The Royal Shepherds —
            a Christian paramilitary youth organization shaping leaders for Christ and society.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>About</span>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-gold inline-block mb-4">Our Identity</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                The Royal Shepherds of Christ Apostolic Church Nig. & Overseas
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="mb-4 leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                It is a universally accepted truism that many youths usually prefer to associate with various youth clubs which offer different appeals such as uniform wearing and which is regimental or paramilitary in nature. Such uniformed groups provide added advantages of instant recognition, authority and respect in the society. This explains why many of our church youths usually register as members of NGO’s such as Boys’ Brigade, Girls’ Brigade Scouts, Girl Guides, Red Cross, Man O’ War, WAI Brigade etc. And this also explains why many other Christian churches in Nigeria have established or integrated various types of disciplined, uniformed, regimental or para-military voluntary youth movements into their congregations. 
Following this enviable pattern, the Christ Apostolic church, at the meeting of the General Executives Council, held at Ikeji –Arakeji Camp on Wednesday 10th May, 2002, unanimously resolved to establish a distinct voluntary uniformed youth wing for this church immediately, following the CAC President’s initiative.
Also reference to the Nigeria constitution on the formation and inauguration of youth chapters at various levels , the authority of CAC in compliance with the Act of parliament of 25th August, 1964 and as amended through the National Youth Policy of 2001, decided to form this organization. Having noticed some flaws or lacuna in the 1st Edition of the POR which gave room for the 2nd Edition which is for the use of officers and men of this noble organization.
              </p>
              <p className="mb-4 leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                We are a movement of young men and women who have answered the call to be disciplined ambassadors of Christ—
                equipped, organized, and deployed for kingdom impact in every community, state, and nation.
              </p>
              <p className="leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                Our training combines spiritual development, physical discipline, civic education, and evangelism to produce
                holistic Christian leaders who excel in every sphere of life.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label:'Founded', value:'10th May, 2002', icon:'📅' },
                  { label:'National Body', value:'CAC Missionary Headquarters, General Secretariat, Basorun, P.O box 530, Ibadan, Oyo State.', icon:'🏛️' },
                  { label:'Motto', value:'One Fold, One Shepherd', icon:'✝️' },
                  { label:'Focus', value:'Youth 3 years and above', icon:'👥' },
                  { label:'Presence', value:'All 36 States', icon:'🗺️' },
                  { label:'Affiliation', value:'National Youth', icon:'🌍' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-5 text-center card-hover"
                    style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>{item.label}</div>
                    <div className="text-sm font-semibold" style={{color:'#0B1F3A', fontFamily:'Poppins'}}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-10" style={{background:'rgba(139,0,0,0.1)', border:'1px solid rgba(139,0,0,0.3)'}}>
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4" style={{color:'white', fontFamily:'Playfair Display'}}>Our Vision</h3>
              <p className="leading-relaxed" style={{color:'rgba(255,255,255,0.75)', fontFamily:'Poppins'}}>
                The primary aim of this youth movement is character development; to make people “Born again” be disciples of Christ and good citizen.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{background:'rgba(212,175,55,0.08)', border:'1px solid rgba(212,175,55,0.3)'}}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>Our Mission</h3>
              <p className="leading-relaxed" style={{color:'rgba(255,255,255,0.75)', fontFamily:'Poppins'}}>
                This vision shall be achieved by: 
i.	Teaching members the need for a sound knowledge of the word of God 
ii.	Making members lead truly prayerful lives that are totally committed to private, regular, incessant daily prayers 
iii.	Inculcating in every member the need to receive, possess and maintain the Holy spirit of God, including the spiritual gifts, fruit and power, as enjoyed by the early Christians 
iv.	Encouraging members towards steadfast love, honest, chastity deeply spiritual and holy lives and worthy ambassadors of Jesus Christ at all times 
v.	Training members in the principle and method of soul winning and evangelism and then making them go and covert all unbelievers by all peaceful and persuasive means as Christ’s witnesses always 
vi.	Encouraging members towards good citizenship self –reliance, resourcefulness, obedience, loyalty, mental alertness, and thoughtfulness for others 
vii.	Promoting their physical development, training them in services useful to the public, handicrafts and professional skills useful to themselves
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{background:'rgba(139,0,0,0.1)', border:'1px solid rgba(139,0,0,0.3)'}}>
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4" style={{color:'white', fontFamily:'Playfair Display'}}>Our Vision</h3>
              <p className="leading-relaxed" style={{color:'rgba(255,255,255,0.75)', fontFamily:'Poppins'}}>
                A generation of Royal Shepherds who serve as the moral, spiritual, and civic backbone of every community,
                state, and nation—transforming society from within through godly character, disciplined service,
                and bold proclamation of the Gospel of Jesus Christ.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl p-10 text-center" style={{background:'rgba(212,175,55,0.1)', border:'2px solid #D4AF37'}}>
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-2xl font-bold mb-2" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>Our Motto</h3>
            <div className="text-3xl font-bold italic mb-4" style={{color:'white', fontFamily:'Playfair Display'}}>
              "One Fold, One Shepherd"
            </div>
            <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
              Rooted in John 10:16, our motto reflects our unity under the lordship of Jesus Christ. We stand as one body,
              one organization, one movement — advancing the same mission under the same banner across every state and community.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-20" style={{background:'#F5F3EE'}}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Our Journey</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              History of The Royal Shepherds
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5" style={{background:'linear-gradient(180deg,#D4AF37,#0B1F3A)'}}></div>
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                    style={{background:'#D4AF37', borderColor:'#0B1F3A'}}></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 bg-white rounded-xl p-6 shadow-sm card-hover">
                    <span className="badge-gold mb-2 inline-block">{item.year}</span>
                    <h3 className="font-bold text-lg mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">What Drives Us</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Our Core Values
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <div key={i} className="card-hover rounded-xl p-8 text-center"
                style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                <div className="text-5xl mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Our Purpose</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Organizational Objectives
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Promote evangelism and soul-winning within and outside the church',
              'Develop disciplined, principled, and godly youth leaders',
              'Foster Christian character formation and moral development',
              'Encourage active community service and nation-building',
              'Train members in citizenship education and civic responsibility',
              'Support the programmes and vision of Christ Apostolic Church',
              'Create a structured platform for youth empowerment',
              'Promote unity and fellowship among young Christians',
              'Advance the Great Commission through organized outreach',
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg p-4"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(212,175,55,0.15)'}}>
                <span className="text-gold font-bold mt-0.5" style={{color:'#D4AF37'}}>✓</span>
                <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.75)', fontFamily:'Poppins'}}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{background:'#D4AF37'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
            Be Part of This Movement
          </h2>
          <p className="mb-6" style={{color:'rgba(11,31,58,0.8)', fontFamily:'Poppins'}}>
            Join thousands of young Christians who are making a difference in their communities as Royal Shepherds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="px-8 py-3 rounded-lg font-bold text-sm"
              style={{background:'#0B1F3A', color:'white', fontFamily:'Montserrat'}}>
              Join Today
            </Link>
            <Link to="/structure" className="px-8 py-3 rounded-lg font-bold text-sm border-2"
              style={{borderColor:'#0B1F3A', color:'#0B1F3A', fontFamily:'Montserrat'}}>
              View Structure
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
