import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const stateContacts = [
  { state: 'Lagos', commander: 'Cdr. Funmilayo Ojo', phone: '+234 801 000 0001', email: 'lagos@royalshepherds.org' },
  { state: 'Rivers', commander: 'Cdr. Amaka Nwosu', phone: '+234 801 000 0002', email: 'rivers@royalshepherds.org' },
  { state: 'Oyo', commander: 'Cdr. Samuel Taiwo', phone: '+234 801 000 0003', email: 'oyo@royalshepherds.org' },
  { state: 'Anambra', commander: 'Cdr. Grace Obi', phone: '+234 801 000 0004', email: 'anambra@royalshepherds.org' },
  { state: 'Kano', commander: 'Cdr. Ibrahim Musa', phone: '+234 801 000 0005', email: 'kano@royalshepherds.org' },
  { state: 'FCT Abuja', commander: 'Cdr. Daniel Abubakar', phone: '+234 801 000 0006', email: 'abuja@royalshepherds.org' },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', state: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: string, value: string) =>
    setFormData(p => ({ ...p, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    color: '#0B1F3A',
    outline: 'none',
    background: 'white',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: '700',
    marginBottom: '5px',
    color: '#374151',
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  }

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Get in Touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Contact Us
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Reach out to the National Headquarters, find your State Command,
            or send us a message. We'd love to hear from you.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon:'🏛️',
                title:'National Headquarters',
                lines:['Christ Apostolic Church', 'National Secretariat', 'Lagos, Nigeria'],
                color:'#D4AF37',
              },
              {
                icon:'📞',
                title:'Phone & WhatsApp',
                lines:['+234 800 000 0000', '+234 800 000 0001', 'Mon–Fri: 9am–5pm'],
                color:'#25D366',
              },
              {
                icon:'📧',
                title:'Email',
                lines:['info@royalshepherds.org', 'training@royalshepherds.org', 'media@royalshepherds.org'],
                color:'#0B1F3A',
              },
            ].map((card, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-8 text-center" style={{border:'1px solid #E5E7EB'}}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{background:`${card.color}15`}}>
                  {card.icon}
                </div>
                <h3 className="font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{card.title}</h3>
                <div className="space-y-1">
                  {card.lines.map((line, li) => (
                    <p key={li} className="text-sm" style={{color:'#6B7280', fontFamily:'Poppins'}}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="badge-gold inline-block mb-4">Send a Message</div>
              <h2 className="text-3xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Get In Touch
              </h2>

              {submitted ? (
                <div className="rounded-2xl p-10 text-center" style={{background:'#F5F3EE', border:'2px solid #D4AF37'}}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                    Message Sent!
                  </h3>
                  <p style={{color:'#6B7280', fontFamily:'Poppins'}}>
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-lg font-bold text-sm"
                    style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input style={inputStyle} required value={formData.name}
                        onChange={e => update('name', e.target.value)} placeholder="Your full name" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" style={inputStyle} required value={formData.email}
                        onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input type="tel" style={inputStyle} value={formData.phone}
                        onChange={e => update('phone', e.target.value)} placeholder="+234 000 000 0000" />
                    </div>
                    <div>
                      <label style={labelStyle}>Your State</label>
                      <input style={inputStyle} value={formData.state}
                        onChange={e => update('state', e.target.value)} placeholder="Which state are you from?" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Subject *</label>
                    <select style={inputStyle} required value={formData.subject}
                      onChange={e => update('subject', e.target.value)}>
                      <option value="">Select a subject</option>
                      <option>Membership Enquiry</option>
                      <option>Training Information</option>
                      <option>Partnership / Donation</option>
                      <option>Media / Press</option>
                      <option>Find State Command</option>
                      <option>Complaint / Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea style={{...inputStyle, height:'140px', resize:'vertical'}} required
                      value={formData.message} onChange={e => update('message', e.target.value)}
                      placeholder="Tell us how we can help you..." />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm"
                    style={{background:'#0B1F3A', color:'#D4AF37', fontFamily:'Montserrat'}}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder + Social */}
            <div>
              <div className="badge-gold inline-block mb-4">Find Us</div>
              <h2 className="text-3xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Our Location
              </h2>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden mb-6 flex items-center justify-center h-64"
                style={{background:'linear-gradient(135deg, #0B1F3A, #122849)', border:'2px solid #D4AF37'}}>
                <div className="text-center text-white">
                  <div className="text-5xl mb-3">🗺️</div>
                  <p style={{fontFamily:'Poppins'}}>Christ Apostolic Church</p>
                  <p style={{color:'rgba(255,255,255,0.6)', fontFamily:'Montserrat', fontSize:'12px'}}>
                    National Secretariat, Lagos, Nigeria
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 rounded-lg text-xs font-bold"
                    style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Social media */}
              <h3 className="font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Follow Us Online
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon:'📘', platform:'Facebook', handle:'@RoyalShepherdsCAC', color:'#1877F2' },
                  { icon:'📸', platform:'Instagram', handle:'@royalshepherdscac', color:'#E4405F' },
                  { icon:'🐦', platform:'Twitter/X', handle:'@RoyalShepherds_', color:'#1DA1F2' },
                  { icon:'▶️', platform:'YouTube', handle:'Royal Shepherds CAC', color:'#FF0000' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl card-hover cursor-pointer"
                    style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                    <div className="text-2xl">{s.icon}</div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{s.platform}</div>
                      <div className="text-xs" style={{color:'#9CA3AF', fontFamily:'Poppins'}}>{s.handle}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm w-full"
                style={{background:'#25D366', color:'white', fontFamily:'Montserrat'}}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* State Contacts */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge-gold inline-block mb-4">State Commands</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              State Command Contacts
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stateContacts.map((sc, i) => (
              <div key={i} className="rounded-xl p-5 card-hover"
                style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,175,55,0.2)'}}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                    style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                    {sc.state.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                      {sc.state} State Command
                    </div>
                    <div className="text-xs mb-1" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>{sc.commander}</div>
                    <div className="text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>{sc.phone}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Poppins'}}>
            Showing 6 of 36+ state commands. Contact National HQ for the complete directory.
          </p>
        </div>
      </section>
    </div>
  )
}
