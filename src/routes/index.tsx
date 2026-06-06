import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const stats = [
  { label: 'States Covered', value: 36, suffix: '+' },
  { label: 'Divisions', value: 120, suffix: '+' },
  { label: 'Battalions', value: 450, suffix: '+' },
  { label: 'Companies', value: 1800, suffix: '+' },
  { label: 'Active Members', value: 25000, suffix: '+' },
]

const coreValues = [
  { icon: '⚔️', title: 'Discipline', desc: 'Military-grade discipline in spiritual and civic life, building character through structured training and accountability.' },
  { icon: '📢', title: 'Evangelism', desc: 'Actively sharing the Gospel of Christ in every community, driven by love and the Great Commission.' },
  { icon: '🛡️', title: 'Integrity', desc: 'Upholding truth, honesty, and moral uprightness in all dealings as ambassadors of Christ.' },
  { icon: '👑', title: 'Leadership', desc: 'Developing servant-leaders who influence their communities with wisdom, humility, and godly character.' },
  { icon: '🤝', title: 'Service', desc: 'Selfless dedication to community development, humanitarian aid, and nation-building.' },
  { icon: '🌟', title: 'Excellence', desc: 'Pursuing the highest standard in spiritual growth, academic achievement, and professional conduct.' },
]

const programs = [
  { icon: '🎓', title: 'Training Academy', desc: 'Structured courses in leadership, evangelism, drill, and citizenship education.', to: '/training' },
  { icon: '📋', title: 'Membership Portal', desc: 'Join our growing family. Get your digital ID and track your progress.', to: '/membership' },
  { icon: '📖', title: 'Constitution Quiz', desc: 'Test your knowledge of the Royal Shepherds Constitution and earn certificates.', to: '/quiz' },
  { icon: '📅', title: 'Upcoming Events', desc: 'Rallies, camps, leadership retreats, and training programmes near you.', to: '/events' },
  { icon: '🏆', title: 'Community Projects', desc: 'Impacting lives through service, empowerment, and evangelism campaigns.', to: '/projects' },
  { icon: '💰', title: 'Support Our Mission', desc: 'Partner with us through donations, sponsorships, and volunteer service.', to: '/donate' },
]

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const duration = 2000
          const step = end / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    { name: 'Cdr. Adewale Okonkwo', rank: 'National Commander', quote: 'The Royal Shepherds has been God\'s instrument in raising a generation of disciplined, purpose-driven Christian youth who are transforming their communities.' },
    { name: 'Cdt. Blessing Adeyemi', rank: 'State Commander, Lagos', quote: 'Joining the Royal Shepherds changed my life. I learned discipline, faith, and leadership that I apply every day in serving God and my community.' },
    { name: 'Cdt. Emmanuel Taiwo', rank: 'Battalion Commander', quote: 'Our evangelism outreaches have reached thousands. The Royal Shepherds is not just an organization—it\'s a movement of God\'s young warriors.' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{background:'#0B1F3A'}}>
        {/* Background pattern */}
        <div className="absolute inset-0 military-pattern"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{background:'#D4AF37'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{background:'#8B0000'}}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                style={{borderColor:'rgba(212,175,55,0.4)', background:'rgba(212,175,55,0.1)'}}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{background:'#D4AF37'}}></span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                  Christ Apostolic Church – Youth Wing
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 hero-text-shadow"
                style={{fontFamily:'Playfair Display', color:'white'}}>
                Raising{' '}
                <span className="gold-shimmer">Disciplined</span>
                {' '}Christian Leaders
                <br />
                <span style={{color:'rgba(255,255,255,0.85)'}}>For Christ & Society</span>
              </h1>

              <p className="text-base md:text-lg mb-8 leading-relaxed" style={{color:'rgba(255,255,255,0.75)', fontFamily:'Poppins'}}>
                A Christian Paramilitary Youth Organization of Christ Apostolic Church committed to evangelism,
                discipleship, leadership development, and transformative community impact across Nigeria.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/membership"
                  className="pulse-gold px-8 py-4 rounded-lg font-bold text-sm transition-all hover:scale-105 flex items-center gap-2"
                  style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
                  <span>⚔️</span> Join Royal Shepherds
                </Link>
                <Link to="/about"
                  className="px-8 py-4 rounded-lg font-bold text-sm border-2 transition-all hover:bg-white/10 flex items-center gap-2"
                  style={{borderColor:'rgba(255,255,255,0.4)', color:'white', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
                  <span>📖</span> Learn More
                </Link>
              </div>

              {/* Motto */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1" style={{background:'rgba(212,175,55,0.3)'}}></div>
                <span className="text-sm italic" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>
                  "One Fold, One Shepherd"
                </span>
                <div className="h-px flex-1" style={{background:'rgba(212,175,55,0.3)'}}></div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Central emblem */}
                <div className="w-80 h-80 mx-auto rounded-full border-4 flex flex-col items-center justify-center relative"
                  style={{borderColor:'#D4AF37', background:'rgba(212,175,55,0.05)'}}>
                  <div className="text-7xl mb-2">✝️</div>
                  <div className="text-center">
                    <div className="font-bold text-lg" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>
                      The Royal Shepherds
                    </div>
                    <div className="text-xs tracking-widest" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Montserrat'}}>
                      CAC • EST. 1940s
                    </div>
                  </div>
                </div>

                {/* Orbiting elements */}
                {[
                  { icon:'🙏', label:'Faith', angle: 0 },
                  { icon:'⚔️', label:'Discipline', angle: 72 },
                  { icon:'📢', label:'Evangelism', angle: 144 },
                  { icon:'👑', label:'Leadership', angle: 216 },
                  { icon:'🤝', label:'Service', angle: 288 },
                ].map((item, i) => {
                  const rad = (item.angle - 90) * Math.PI / 180
                  const x = 50 + 42 * Math.cos(rad)
                  const y = 50 + 42 * Math.sin(rad)
                  return (
                    <div key={i} className="absolute flex flex-col items-center gap-1"
                      style={{left:`${x}%`, top:`${y}%`, transform:'translate(-50%,-50%)'}}>
                      <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg"
                        style={{borderColor:'rgba(212,175,55,0.5)', background:'rgba(11,31,58,0.8)'}}>
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Montserrat'}}>
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-1"
            style={{borderColor:'rgba(212,175,55,0.4)'}}>
            <div className="w-1 h-3 rounded-full animate-bounce" style={{background:'#D4AF37'}}></div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section style={{background:'#D4AF37'}}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="stat-number text-3xl md:text-4xl font-black mb-1" style={{color:'#0B1F3A'}}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{color:'rgba(11,31,58,0.7)', fontFamily:'Montserrat'}}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon:'🎯', title:'Our Mission', desc:'To raise disciplined, spirit-filled Christian youth who are equipped to impact their communities through evangelism, discipleship, and selfless service.' },
              { icon:'🔭', title:'Our Vision', desc:'A generation of Royal Shepherds who are the moral, spiritual, and civic backbone of every community, state, and nation across Africa and beyond.' },
              { icon:'📜', title:'Our Motto', desc:'"One Fold, One Shepherd" – Rooted in John 10:16, we stand united under the lordship of Jesus Christ, moving as one body with one purpose.' },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-8 border-l-4 shadow-sm"
                style={{borderLeftColor:'#D4AF37'}}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Our Foundation</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'white', fontFamily:'Playfair Display'}}>
              Core Values
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-sm" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
              Six pillars that define who we are and guide everything we do as Royal Shepherds.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <div key={i} className="card-hover rounded-xl p-6 group"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(212,175,55,0.2)'}}>
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors"
                  style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">What We Offer</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Our Programs & Portals
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-sm" style={{color:'#6B7280', fontFamily:'Poppins'}}>
              Everything you need to grow, serve, and lead as a Royal Shepherd.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <Link key={i} to={prog.to}
                className="card-hover rounded-xl p-6 group block"
                style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-gold-dark transition-colors"
                  style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                  {prog.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                  {prog.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider"
                  style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Testimonials</div>
          <h2 className="text-3xl font-bold mb-12" style={{color:'white', fontFamily:'Playfair Display'}}>
            Voices from the Field
          </h2>

          <div className="relative">
            {testimonials.map((t, i) => (
              <div key={i}
                className={`transition-all duration-500 ${i === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <div className="rounded-2xl p-8 md:p-12"
                  style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,175,55,0.2)'}}>
                  <div className="text-5xl mb-6" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>"</div>
                  <p className="text-lg md:text-xl leading-relaxed mb-8" style={{color:'rgba(255,255,255,0.85)', fontFamily:'Poppins', fontStyle:'italic'}}>
                    {t.quote}
                  </p>
                  <div>
                    <div className="font-bold" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>{t.name}</div>
                    <div className="text-sm" style={{color:'rgba(255,255,255,0.5)', fontFamily:'Montserrat'}}>{t.rank}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'w-8' : ''}`}
                style={{background: i === activeTestimonial ? '#D4AF37' : 'rgba(255,255,255,0.3)'}}></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{background:'linear-gradient(135deg, #D4AF37 0%, #B8960F 100%)'}}>
        <div className="absolute inset-0 military-pattern opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
            Ready to Join the Royal Shepherds?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color:'rgba(11,31,58,0.8)', fontFamily:'Poppins'}}>
            Be part of a movement that is changing communities, raising leaders, and advancing God's kingdom.
            Your journey begins today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership"
              className="px-10 py-4 rounded-lg font-bold text-sm transition-all hover:scale-105"
              style={{background:'#0B1F3A', color:'white', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
              Register as Member
            </Link>
            <Link to="/contact"
              className="px-10 py-4 rounded-lg font-bold text-sm border-2 transition-all hover:bg-navy/10"
              style={{borderColor:'#0B1F3A', color:'#0B1F3A', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-20" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="badge-gold inline-block mb-3">Latest Updates</div>
              <h2 className="text-3xl font-bold" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                News & Announcements
              </h2>
            </div>
            <Link to="/news" className="text-sm font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { cat:'Events', date:'June 2026', title:'National Rally 2026 – Registration Now Open', desc:'The annual national rally brings together Royal Shepherds from all 36 states for a week of worship, training, and leadership development.' },
              { cat:'Training', date:'May 2026', title:'New Online Training Portal Launched for All Members', desc:'Members can now access drill training, evangelism courses, and Bible knowledge modules from anywhere through the new digital academy.' },
              { cat:'Leadership', date:'April 2026', title:'2026 Promotion Examination Results Released', desc:'Congratulations to all members who successfully completed the 2026 promotion examinations. Results are now available on the portal.' },
            ].map((news, i) => (
              <div key={i} className="card-hover bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 flex items-center justify-center text-6xl"
                  style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
                  {i === 0 ? '📅' : i === 1 ? '🎓' : '🏆'}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge-gold">{news.cat}</span>
                    <span className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{news.date}</span>
                  </div>
                  <h3 className="font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{news.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>{news.desc}</p>
                  <Link to="/news" className="inline-block mt-4 text-xs font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
