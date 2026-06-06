import { HeadContent, Link, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'The Royal Shepherds - Christ Apostolic Church' },
      { name: 'description', content: 'The Royal Shepherds is a Christian Paramilitary Youth Organization of Christ Apostolic Church (CAC) dedicated to evangelism, discipleship, and Christian leadership development.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/structure', label: 'Structure' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/training', label: 'Training' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/membership', label: 'Membership' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouterState()
  const currentPath = router.location.pathname

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-deep-red text-white text-xs py-1.5 hidden md:block" style={{background:'#8B0000'}}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between font-montserrat">
          <span className="tracking-widest uppercase">One Fold, One Shepherd</span>
          <div className="flex items-center gap-6">
            <span>Christ Apostolic Church (CAC) Youth Wing</span>
            <Link to="/membership" className="bg-gold text-navy px-3 py-0.5 rounded text-xs font-bold hover:bg-gold-light transition-colors" style={{background:'#D4AF37',color:'#0B1F3A'}}>
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}
        style={{background: '#0B1F3A', borderBottom: '2px solid #D4AF37'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-sm"
                style={{borderColor:'#D4AF37', color:'#D4AF37', fontFamily:'Montserrat'}}>
                RS
              </div>
              <div>
                <div className="font-bold text-sm leading-tight" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>
                  The Royal Shepherds
                </div>
                <div className="text-xs leading-tight" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
                  CAC Youth Organization
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-xs font-semibold rounded transition-all duration-200 whitespace-nowrap ${
                    currentPath === link.to
                      ? 'text-gold bg-white/10'
                      : 'text-white/80 hover:text-gold hover:bg-white/5'
                  }`}
                  style={{fontFamily:'Montserrat', letterSpacing:'0.05em',
                    color: currentPath === link.to ? '#D4AF37' : undefined}}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/quiz" className="ml-2 px-4 py-2 rounded text-xs font-bold transition-all"
                style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat', letterSpacing:'0.05em'}}>
                Take Quiz
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2 rounded hover:bg-white/10">
              <div className={`w-6 flex flex-col gap-1.5 transition-all ${mobileOpen ? 'gap-0' : ''}`}>
                <span className={`block h-0.5 bg-gold transition-all ${mobileOpen ? 'rotate-45 translate-y-0.5' : ''}`} style={{background:'#D4AF37'}}></span>
                <span className={`block h-0.5 bg-gold transition-all ${mobileOpen ? 'opacity-0' : ''}`} style={{background:'#D4AF37'}}></span>
                <span className={`block h-0.5 bg-gold transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{background:'#D4AF37'}}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t mobile-menu-enter" style={{borderColor:'rgba(212,175,55,0.3)', background:'#071529'}}>
            <div className="px-4 py-4 grid grid-cols-2 gap-1">
              {[...navLinks, {to:'/quiz', label:'Take Quiz'}].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 text-sm rounded text-center transition-all ${
                    currentPath === link.to ? 'text-navy font-bold' : 'text-white/80'
                  }`}
                  style={{
                    fontFamily:'Montserrat',
                    background: currentPath === link.to ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                    color: currentPath === link.to ? '#0B1F3A' : undefined
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

function Footer() {
  return (
    <footer style={{background:'#071529', borderTop:'2px solid #D4AF37'}}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-base"
                style={{borderColor:'#D4AF37', color:'#D4AF37', fontFamily:'Montserrat'}}>
                RS
              </div>
              <div>
                <div className="font-bold text-base" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>The Royal Shepherds</div>
                <div className="text-xs" style={{color:'rgba(255,255,255,0.5)', fontFamily:'Montserrat'}}>CAC Youth Organization</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
              Raising disciplined Christian leaders for Christ and society through evangelism, discipleship, and community service.
            </p>
            <div className="text-xs italic" style={{color:'#D4AF37', fontFamily:'Playfair Display'}}>
              "One Fold, One Shepherd"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                {to:'/about', label:'About Us'},
                {to:'/structure', label:'Organization Structure'},
                {to:'/leadership', label:'Leadership'},
                {to:'/training', label:'Training Academy'},
                {to:'/documents', label:'Documents Library'},
                {to:'/events', label:'Events'},
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-gold transition-colors"
                    style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
              Programs
            </h4>
            <ul className="space-y-2">
              {[
                {to:'/membership', label:'Join Membership'},
                {to:'/quiz', label:'Constitution Quiz'},
                {to:'/gallery', label:'Gallery'},
                {to:'/news', label:'News & Publications'},
                {to:'/projects', label:'Community Projects'},
                {to:'/donate', label:'Support Us'},
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-gold transition-colors"
                    style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
              Contact Us
            </h4>
            <div className="space-y-3 text-sm" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1" style={{color:'#D4AF37'}}>National HQ</div>
                <div>Christ Apostolic Church</div>
                <div>National Secretariat, Nigeria</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1" style={{color:'#D4AF37'}}>Email</div>
                <a href="mailto:info@royalshepherds.org" className="hover:text-gold transition-colors">
                  info@royalshepherds.org
                </a>
              </div>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90"
                style={{background:'#25D366', color:'white', fontFamily:'Montserrat'}}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{borderTop:'1px solid rgba(212,175,55,0.2)'}}>
          <p className="text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            © {new Date().getFullYear()} The Royal Shepherds – Christ Apostolic Church. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/about" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        {/* WhatsApp Float */}
        <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer"
          className="whatsapp-float w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          style={{background:'#25D366'}}>
          <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <Scripts />
      </body>
    </html>
  )
}
