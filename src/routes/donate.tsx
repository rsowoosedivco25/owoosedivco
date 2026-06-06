import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/donate')({
  component: DonatePage,
})

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000]

function DonatePage() {
  const [amount, setAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [sponsorType, setSponsorType] = useState('')

  const finalAmount = amount || Number(customAmount) || 0

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Give</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Support the Mission
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Your generosity fuels evangelism, leadership training, and community service that transforms
            lives across Nigeria and beyond. Every gift makes an eternal difference.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Donate</span>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <section style={{background:'#D4AF37'}}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value:'25,000+', label:'Members Supported' },
              { value:'₦50M+', label:'Raised This Year' },
              { value:'500+', label:'Units Funded' },
              { value:'36', label:'States Impacted' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black mb-1" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>{s.value}</div>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{color:'rgba(11,31,58,0.7)', fontFamily:'Montserrat'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - How your gift helps */}
            <div>
              <div className="badge-gold inline-block mb-4">Impact</div>
              <h2 className="text-3xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                How Your Gift Helps
              </h2>
              <div className="space-y-5">
                {[
                  { amount:'₦500', icon:'📖', label:'Provides study materials for one cadet for a month' },
                  { amount:'₦1,000', icon:'🎽', label:'Helps purchase uniform accessories for a new member' },
                  { amount:'₦2,500', icon:'🎓', label:'Funds one cadet\'s training academy module access' },
                  { amount:'₦5,000', icon:'📢', label:'Supports a local evangelism outreach event' },
                  { amount:'₦10,000', icon:'⛺', label:'Sponsors one cadet to attend annual training camp' },
                  { amount:'₦25,000', icon:'👑', label:'Funds a leadership development retreat for 5 officers' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl p-4 bg-white card-hover"
                    style={{border:'1px solid #E5E7EB'}}>
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="font-bold text-sm" style={{color:'#0B1F3A', fontFamily:'Poppins'}}>{item.label}</div>
                    </div>
                    <div className="font-black text-sm whitespace-nowrap" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Donation form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" style={{border:'2px solid #D4AF37'}}>
              <h2 className="text-2xl font-bold mb-6" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                Make a Donation
              </h2>

              {/* Type toggle */}
              <div className="flex rounded-xl overflow-hidden mb-6" style={{border:'1px solid #E5E7EB'}}>
                {(['one-time', 'monthly'] as const).map(type => (
                  <button key={type} onClick={() => setDonationType(type)}
                    className="flex-1 py-3 text-sm font-bold transition-all"
                    style={{
                      background: donationType === type ? '#D4AF37' : 'white',
                      color: donationType === type ? '#0B1F3A' : '#9CA3AF',
                      fontFamily:'Montserrat'
                    }}>
                    {type === 'one-time' ? 'One-Time Gift' : 'Monthly Partner'}
                  </button>
                ))}
              </div>

              {/* Amount grid */}
              <div className="mb-4">
                <label className="block text-xs font-bold uppercase tracking-wider mb-3"
                  style={{color:'#374151', fontFamily:'Montserrat'}}>
                  Select Amount (₦)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {donationAmounts.map(a => (
                    <button key={a} onClick={() => { setAmount(a); setCustomAmount('') }}
                      className="py-3 rounded-lg text-sm font-bold transition-all"
                      style={{
                        background: amount === a ? '#D4AF37' : '#F5F3EE',
                        color: amount === a ? '#0B1F3A' : '#6B7280',
                        border: amount === a ? 'none' : '1px solid #E5E7EB',
                        fontFamily:'Montserrat'
                      }}>
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{color:'#374151', fontFamily:'Montserrat'}}>
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold" style={{color:'#9CA3AF'}}>₦</span>
                  <input type="number" value={customAmount}
                    onChange={e => { setCustomAmount(e.target.value); setAmount(null) }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl text-sm outline-none"
                    style={{border:'1px solid #E5E7EB', fontFamily:'Poppins', color:'#0B1F3A'}} />
                </div>
              </div>

              {/* Sponsor type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{color:'#374151', fontFamily:'Montserrat'}}>
                  Giving Towards (Optional)
                </label>
                <select value={sponsorType} onChange={e => setSponsorType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{border:'1px solid #E5E7EB', fontFamily:'Poppins', color:'#0B1F3A'}}>
                  <option value="">General Fund</option>
                  <option>Sponsor a Member</option>
                  <option>Sponsor Training</option>
                  <option>Sponsor Equipment</option>
                  <option>Evangelism Outreach</option>
                  <option>Camp Scholarship</option>
                </select>
              </div>

              {/* Payment buttons */}
              <div className="space-y-3">
                <button disabled={finalAmount === 0}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
                  style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                  💳 Pay with Paystack
                  {finalAmount > 0 && ` — ₦${finalAmount.toLocaleString()}`}
                </button>
                <button disabled={finalAmount === 0}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
                  style={{background:'#0B1F3A', color:'white', fontFamily:'Montserrat'}}>
                  🔐 Pay with Flutterwave
                  {finalAmount > 0 && ` — ₦${finalAmount.toLocaleString()}`}
                </button>
              </div>

              <p className="text-xs text-center mt-4" style={{color:'#9CA3AF', fontFamily:'Poppins'}}>
                🔒 All transactions are secured and encrypted. Your gift is tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership tiers */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Partnership</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Partner With Us
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier:'Shepherd Partner',
                monthly:'₦2,500/month',
                color:'#D4AF37',
                icon:'🤝',
                perks:['Monthly newsletter', 'Prayer updates', 'Annual impact report', 'Partner certificate'],
              },
              {
                tier:'Royal Partner',
                monthly:'₦10,000/month',
                color:'#8B0000',
                icon:'👑',
                perks:['All Shepherd benefits', 'Named on website', 'Quarterly briefings', 'Event invitations', 'Special recognition at Rally'],
              },
              {
                tier:'Kingdom Partner',
                monthly:'₦25,000/month',
                color:'#D4AF37',
                icon:'⭐',
                perks:['All Royal benefits', 'Sponsor a company', 'Named in publications', 'Personal call from National Commander', 'Annual review meeting'],
              },
            ].map((tier, i) => (
              <div key={i} className={`card-hover rounded-2xl overflow-hidden ${i === 1 ? 'ring-2' : ''}`}
                style={{border:`2px solid ${tier.color}55`, ringColor: tier.color}}>
                <div className="p-8 text-center" style={{background: i === 1 ? tier.color : 'rgba(255,255,255,0.04)'}}>
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <h3 className="font-bold text-xl mb-1" style={{color: i === 1 ? '#0B1F3A' : 'white', fontFamily:'Playfair Display'}}>
                    {tier.tier}
                  </h3>
                  <div className="font-black text-lg" style={{color: i === 1 ? '#0B1F3A' : tier.color, fontFamily:'Montserrat'}}>
                    {tier.monthly}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {tier.perks.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-sm"
                        style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
                        <span style={{color:'#D4AF37'}}>✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl font-bold text-sm"
                    style={{background: tier.color, color:'#0B1F3A', fontFamily:'Montserrat'}}>
                    Become a {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
