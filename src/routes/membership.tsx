import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/membership')({
  component: MembershipPage,
})

function generateMemberNumber() {
  const year = new Date().getFullYear()
  const rand = Math.floor(Math.random() * 90000) + 10000
  return `RS-${year}-${rand}`
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  state: string
  division: string
  battalion: string
  company: string
  gender: string
  dob: string
  occupation: string
  emergencyContact: string
}

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
]

function MembershipPage() {
  const [step, setStep] = useState(1)
  const [memberNumber, setMemberNumber] = useState('')
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', state: '', division: '',
    battalion: '', company: '', gender: '', dob: '', occupation: '', emergencyContact: '',
  })

  const handleSubmit = () => {
    const num = generateMemberNumber()
    setMemberNumber(num)
    setStep(3)
  }

  const update = (field: keyof FormData, value: string) =>
    setFormData(p => ({ ...p, [field]: value }))

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    background: 'white',
    color: '#0B1F3A',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '4px',
    color: '#374151',
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Join Us</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Membership Portal
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Become a member of The Royal Shepherds and join thousands of young Christians making
            a difference for Christ and society.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Membership</span>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Member Benefits
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon:'🪪', title:'Digital ID Card', desc:'Get your official Royal Shepherds digital membership card' },
              { icon:'🎓', title:'Training Access', desc:'Full access to the digital training academy and courses' },
              { icon:'🏆', title:'Competitions', desc:'Participate in drill, quiz, and leadership competitions' },
              { icon:'🤝', title:'Network', desc:'Connect with Royal Shepherds across all 36 states' },
              { icon:'📅', title:'Events', desc:'Priority registration for camps, rallies, and retreats' },
              { icon:'📋', title:'Promotions', desc:'Advance through ranks via the promotion examination system' },
              { icon:'💼', title:'Opportunities', desc:'Access leadership roles, scholarships, and skill programmes' },
              { icon:'🌍', title:'CAC Network', desc:'Join the broader Christ Apostolic Church youth community' },
            ].map((b, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-5 text-center" style={{border:'1px solid #E5E7EB'}}>
                <div className="text-3xl mb-2">{b.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{color:'#6B7280', fontFamily:'Poppins'}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-3xl mx-auto px-4">
          {/* Steps */}
          <div className="flex items-center mb-12">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  step >= s ? 'text-navy' : 'text-gray-400'
                }`}
                  style={{
                    background: step >= s ? '#D4AF37' : '#E5E7EB',
                    color: step >= s ? '#0B1F3A' : '#9CA3AF',
                    fontFamily:'Montserrat'
                  }}>
                  {step > s ? '✓' : s}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className="text-xs font-bold" style={{color: step >= s ? '#0B1F3A' : '#9CA3AF', fontFamily:'Montserrat'}}>
                    {s === 1 ? 'Personal Info' : s === 2 ? 'Unit Details' : 'Confirmation'}
                  </div>
                </div>
                {s < 3 && (
                  <div className="flex-1 h-0.5 mx-4"
                    style={{background: step > s ? '#D4AF37' : '#E5E7EB'}}></div>
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Personal Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input style={inputStyle} value={formData.firstName}
                    onChange={e => update('firstName', e.target.value)} placeholder="Enter first name" />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input style={inputStyle} value={formData.lastName}
                    onChange={e => update('lastName', e.target.value)} placeholder="Enter last name" />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" style={inputStyle} value={formData.email}
                    onChange={e => update('email', e.target.value)} placeholder="your@email.com" />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" style={inputStyle} value={formData.phone}
                    onChange={e => update('phone', e.target.value)} placeholder="+234 000 000 0000" />
                </div>
                <div>
                  <label style={labelStyle}>Gender *</label>
                  <select style={inputStyle} value={formData.gender}
                    onChange={e => update('gender', e.target.value)}>
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Date of Birth *</label>
                  <input type="date" style={inputStyle} value={formData.dob}
                    onChange={e => update('dob', e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Occupation</label>
                  <input style={inputStyle} value={formData.occupation}
                    onChange={e => update('occupation', e.target.value)} placeholder="Student / Professional / etc." />
                </div>
                <div>
                  <label style={labelStyle}>Emergency Contact</label>
                  <input type="tel" style={inputStyle} value={formData.emergencyContact}
                    onChange={e => update('emergencyContact', e.target.value)} placeholder="+234 000 000 0000" />
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!formData.firstName || !formData.lastName || !formData.email}
                className="mt-8 w-full py-4 rounded-xl font-bold text-sm disabled:opacity-50"
                style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Continue to Unit Details →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Unit Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>State *</label>
                  <select style={inputStyle} value={formData.state}
                    onChange={e => update('state', e.target.value)}>
                    <option value="">Select state</option>
                    {nigerianStates.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Division</label>
                  <input style={inputStyle} value={formData.division}
                    onChange={e => update('division', e.target.value)} placeholder="Your Division name" />
                </div>
                <div>
                  <label style={labelStyle}>Battalion</label>
                  <input style={inputStyle} value={formData.battalion}
                    onChange={e => update('battalion', e.target.value)} placeholder="Your Battalion name" />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input style={inputStyle} value={formData.company}
                    onChange={e => update('company', e.target.value)} placeholder="Your Company name/number" />
                </div>
              </div>

              <div className="mt-6 rounded-xl p-5" style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                <p className="text-sm leading-relaxed" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                  By registering, you affirm that you are a member or intend to join the Christ Apostolic Church
                  and agree to uphold the standards and values of The Royal Shepherds as outlined in the Constitution
                  and Standing Orders.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-xl font-bold text-sm border"
                  style={{borderColor:'#E5E7EB', color:'#6B7280', fontFamily:'Montserrat'}}>
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.state}
                  className="flex-1 py-4 rounded-xl font-bold text-sm disabled:opacity-50"
                  style={{background:'#0B1F3A', color:'white', fontFamily:'Montserrat'}}>
                  Complete Registration
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="text-7xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Welcome to The Royal Shepherds!
              </h2>
              <p className="mb-8" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                Your membership registration has been submitted successfully.
                Your application will be reviewed and confirmed by your state command.
              </p>

              {/* Digital ID Card */}
              <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8"
                style={{border:'3px solid #D4AF37'}}>
                <div className="py-6 px-6" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold tracking-widest text-white" style={{fontFamily:'Montserrat'}}>
                      THE ROYAL SHEPHERDS
                    </div>
                    <div className="text-xs" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>CAC</div>
                  </div>
                  <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center font-black text-2xl mx-auto mb-4"
                    style={{borderColor:'#D4AF37', background:'rgba(212,175,55,0.1)', color:'#D4AF37', fontFamily:'Montserrat'}}>
                    {formData.firstName[0]}{formData.lastName[0]}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white text-lg" style={{fontFamily:'Playfair Display'}}>
                      {formData.firstName} {formData.lastName}
                    </div>
                    <div className="text-xs" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Montserrat'}}>
                      CADET
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4" style={{background:'#D4AF37'}}>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div style={{color:'rgba(11,31,58,0.6)', fontFamily:'Montserrat'}}>MEMBER NO.</div>
                      <div className="font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{memberNumber}</div>
                    </div>
                    <div>
                      <div style={{color:'rgba(11,31,58,0.6)', fontFamily:'Montserrat'}}>STATE</div>
                      <div className="font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{formData.state || 'N/A'}</div>
                    </div>
                    <div>
                      <div style={{color:'rgba(11,31,58,0.6)', fontFamily:'Montserrat'}}>COMPANY</div>
                      <div className="font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{formData.company || 'N/A'}</div>
                    </div>
                    <div>
                      <div style={{color:'rgba(11,31,58,0.6)', fontFamily:'Montserrat'}}>STATUS</div>
                      <div className="font-bold" style={{color:'#8B0000', fontFamily:'Montserrat'}}>PENDING</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 rounded-lg font-bold text-sm"
                  style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                  Download ID Card
                </button>
                <Link to="/training"
                  className="px-6 py-3 rounded-lg font-bold text-sm border"
                  style={{borderColor:'#E5E7EB', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                  Start Training
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
