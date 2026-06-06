import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/training')({
  component: TrainingPage,
})

const courses = [
  {
    id: 1,
    icon: '📜',
    title: 'Royal Shepherds Constitution',
    desc: 'Master the founding document, rules, and regulations of The Royal Shepherds organization.',
    modules: 8,
    duration: '4 weeks',
    level: 'Foundation',
    color: '#D4AF37',
    topics: ['History & Foundation', 'Membership Requirements', 'Ranks & Promotions', 'Code of Conduct', 'Rights & Privileges', 'Standing Orders', 'Disciplinary Procedures', 'Constitutional Amendments'],
  },
  {
    id: 2,
    icon: '⚔️',
    title: 'Drill & Ceremonial',
    desc: 'Learn military drill commands, parade formations, flag protocols, and ceremonial procedures.',
    modules: 10,
    duration: '6 weeks',
    level: 'Intermediate',
    color: '#0B1F3A',
    topics: ['Basic Drill Commands', 'Parade Formations', 'Flag Protocols', 'Saluting Procedures', 'Ceremonial Dress', 'Arms Drill', 'Guard Mounting', 'Inspection Procedures', 'Band Integration', 'Competition Drill'],
  },
  {
    id: 3,
    icon: '👑',
    title: 'Leadership Development',
    desc: 'Develop essential leadership skills for effective Christian leadership in church and community.',
    modules: 12,
    duration: '8 weeks',
    level: 'Advanced',
    color: '#8B0000',
    topics: ['Biblical Leadership Principles', 'Communication Skills', 'Team Building', 'Conflict Resolution', 'Strategic Planning', 'Decision Making', 'Emotional Intelligence', 'Public Speaking', 'Mentorship', 'Crisis Management', 'Vision Casting', 'Accountability'],
  },
  {
    id: 4,
    icon: '📢',
    title: 'Evangelism & Discipleship',
    desc: 'Equip yourself with practical tools and strategies for effective soul-winning and discipleship.',
    modules: 9,
    duration: '5 weeks',
    level: 'Foundation',
    color: '#D4AF37',
    topics: ['The Gospel Explained', 'Personal Testimony', 'Open-Air Evangelism', 'One-on-One Witnessing', 'Discipleship Models', 'Follow-Up Strategy', 'Intercession & Prayer', 'House-to-House Outreach', 'Digital Evangelism'],
  },
  {
    id: 5,
    icon: '✝️',
    title: 'Bible Knowledge',
    desc: 'Deepen your understanding of Scripture for spiritual growth and effective Christian service.',
    modules: 15,
    duration: '10 weeks',
    level: 'All Levels',
    color: '#122849',
    topics: ['Old Testament Survey', 'New Testament Survey', 'Books of the Bible', 'Key Biblical Themes', 'Prophecy & Fulfillment', 'The Life of Christ', 'Acts of the Apostles', 'Pauline Epistles', 'Revelation Study', 'Christian Doctrines', 'CAC Doctrinal Positions', 'Bible Study Methods', 'Memory Verses', 'Comparative Religion', 'Applied Theology'],
  },
  {
    id: 6,
    icon: '🏛️',
    title: 'Citizenship Education',
    desc: 'Understand your civic rights, responsibilities, and role as a godly citizen in society.',
    modules: 7,
    duration: '3 weeks',
    level: 'Foundation',
    color: '#4B5563',
    topics: ['Nigerian Constitution', 'Civic Rights & Duties', 'Government Structures', 'Community Development', 'Voting & Democracy', 'Anti-Corruption Values', 'National Unity'],
  },
  {
    id: 7,
    icon: '🤝',
    title: 'Public Service',
    desc: 'Learn frameworks for organizing and executing community service projects and social impact initiatives.',
    modules: 6,
    duration: '3 weeks',
    level: 'Intermediate',
    color: '#065F46',
    topics: ['Project Planning', 'Community Needs Assessment', 'Team Mobilization', 'Resource Management', 'Impact Measurement', 'Reporting & Documentation'],
  },
]

function TrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null)
  const [progress] = useState({ completed: 2, inProgress: 1, total: courses.length })

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Digital Academy</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Training Academy
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Access world-class Christian leadership training from anywhere. Our digital academy offers
            comprehensive courses designed for every level of Royal Shepherds membership.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Training</span>
          </div>
        </div>
      </div>

      {/* Progress Dashboard */}
      <section className="py-12" style={{background:'#D4AF37'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Courses', value: courses.length, icon: '📚' },
              { label: 'Completed', value: progress.completed, icon: '✅' },
              { label: 'In Progress', value: progress.inProgress, icon: '🔄' },
              { label: 'Completion Rate', value: '29%', icon: '📊' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-black mb-1" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{color:'rgba(11,31,58,0.7)', fontFamily:'Montserrat'}}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Overall Training Progress
              </span>
              <span className="text-xs font-bold" style={{color:'#0B1F3A', fontFamily:'Montserrat'}}>29%</span>
            </div>
            <div className="h-3 rounded-full" style={{background:'rgba(11,31,58,0.2)'}}>
              <div className="h-3 rounded-full transition-all" style={{width:'29%', background:'#0B1F3A'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{background:'#F5F3EE'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon:'🎬', title:'Video Lessons', desc:'HD video lectures with expert instructors' },
              { icon:'📄', title:'PDF Downloads', desc:'Downloadable study materials and notes' },
              { icon:'✏️', title:'Quizzes', desc:'Test your understanding after each module' },
              { icon:'🏅', title:'Certificates', desc:'Earn certificates upon course completion' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center card-hover" style={{border:'1px solid #E5E7EB'}}>
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{f.title}</h3>
                <p className="text-sm" style={{color:'#6B7280', fontFamily:'Poppins'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20" style={{background:'white'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold inline-block mb-4">Curriculum</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Course Catalog
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id}
                className="card-hover rounded-xl overflow-hidden cursor-pointer"
                style={{border:'1px solid #E5E7EB'}}
                onClick={() => setSelectedCourse(selectedCourse?.id === course.id ? null : course)}>
                <div className="h-3" style={{background: course.color}}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{course.icon}</div>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold"
                      style={{
                        background: course.level === 'Foundation' ? 'rgba(212,175,55,0.15)' :
                                    course.level === 'Advanced' ? 'rgba(139,0,0,0.1)' : 'rgba(11,31,58,0.08)',
                        color: course.level === 'Foundation' ? '#B8960F' :
                               course.level === 'Advanced' ? '#8B0000' : '#0B1F3A',
                        fontFamily:'Montserrat'
                      }}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                    {course.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color:'#6B7280', fontFamily:'Poppins'}}>
                    {course.desc}
                  </p>
                  <div className="flex items-center gap-4 text-xs mb-4" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>
                    <span>📚 {course.modules} modules</span>
                    <span>⏱️ {course.duration}</span>
                  </div>

                  {selectedCourse?.id === course.id && (
                    <div className="mt-4 pt-4" style={{borderTop:'1px solid #E5E7EB'}}>
                      <h4 className="text-xs font-bold uppercase tracking-wide mb-3" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                        Course Topics:
                      </h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {course.topics.map((t, ti) => (
                          <li key={ti} className="flex items-center gap-1 text-xs" style={{color:'#4B5563', fontFamily:'Poppins'}}>
                            <span style={{color:'#D4AF37'}}>•</span> {t}
                          </li>
                        ))}
                      </ul>
                      <Link to="/membership"
                        className="mt-4 w-full block text-center py-2 rounded-lg text-xs font-bold"
                        style={{background:'#0B1F3A', color:'#D4AF37', fontFamily:'Montserrat'}}>
                        Enroll in This Course →
                      </Link>
                    </div>
                  )}

                  {selectedCourse?.id !== course.id && (
                    <button className="text-xs font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>
                      View Curriculum ↓
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates section */}
      <section className="py-20" style={{background:'#0B1F3A'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge-gold inline-block mb-4">Recognition</div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
              Certificates & Promotions
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title:'Foundation Certificate', desc:'Awarded upon completing the Constitution, Evangelism, and Citizenship courses.', icon:'📋', color:'#D4AF37' },
              { title:'Advanced Leadership Certificate', desc:'Earned after completing Leadership Development, Drill, and Bible Knowledge courses.', icon:'🏆', color:'#8B0000' },
              { title:'Master Trainer Certificate', desc:'The highest training award, recognizing excellence across all 7 core curriculum areas.', icon:'⭐', color:'#0B6E4F' },
            ].map((cert, i) => (
              <div key={i} className="rounded-xl p-8 text-center card-hover"
                style={{background:'rgba(255,255,255,0.05)', border:`2px solid ${cert.color}33`}}>
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-3" style={{color: cert.color, fontFamily:'Playfair Display'}}>
                  {cert.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.65)', fontFamily:'Poppins'}}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/membership"
              className="inline-block px-10 py-4 rounded-lg font-bold text-sm"
              style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
              Start Your Training Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
