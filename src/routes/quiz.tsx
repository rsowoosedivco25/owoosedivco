import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/quiz')({
  component: QuizPage,
})

type Question = {
  id: number
  question: string
  options: string[]
  correct: number
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What is the official motto of The Royal Shepherds?',
    options: ['One Body, One Lord', 'One Fold, One Shepherd', 'United in Christ', 'Forward in Faith'],
    correct: 1,
    category: 'Identity',
  },
  {
    id: 2,
    question: 'Which church does The Royal Shepherds belong to?',
    options: ['Redeemed Christian Church of God', 'Deeper Life Bible Church', 'Christ Apostolic Church', 'Living Faith Church'],
    correct: 2,
    category: 'Identity',
  },
  {
    id: 3,
    question: 'What is the smallest unit of organization in The Royal Shepherds?',
    options: ['Company', 'Platoon', 'Battalion', 'Squad'],
    correct: 3,
    category: 'Structure',
  },
  {
    id: 4,
    question: 'What is the highest rank in The Royal Shepherds?',
    options: ['National Commander', 'Commander-in-Chief', 'Regional Commander', 'General'],
    correct: 1,
    category: 'Ranks',
  },
  {
    id: 5,
    question: 'How many members typically make up a Squad?',
    options: ['4-6 members', '8-12 members', '15-20 members', '25-30 members'],
    correct: 1,
    category: 'Structure',
  },
  {
    id: 6,
    question: 'Which Bible verse directly inspires the motto "One Fold, One Shepherd"?',
    options: ['John 3:16', 'Psalm 23:1', 'John 10:16', 'Matthew 28:19'],
    correct: 2,
    category: 'Bible',
  },
  {
    id: 7,
    question: 'What is the primary purpose of The Royal Shepherds?',
    options: [
      'Military training for youth',
      'Sports and recreation',
      'Christian leadership and evangelism',
      'Academic excellence',
    ],
    correct: 2,
    category: 'Identity',
  },
  {
    id: 8,
    question: 'Which of these is NOT a department of The Royal Shepherds?',
    options: ['Training & Education', 'Finance & Accounts', 'Immigration', 'Public Relations'],
    correct: 2,
    category: 'Structure',
  },
  {
    id: 9,
    question: 'What does the abbreviation "CAC" stand for?',
    options: ['Christian Apostolic Congregation', 'Christ Apostolic Church', 'Church of Apostolic Christians', 'Christ Assembly Church'],
    correct: 1,
    category: 'Identity',
  },
  {
    id: 10,
    question: 'What comes directly above the Battalion in the Royal Shepherds command structure?',
    options: ['Company', 'Divisional Council', 'State Command', 'Regional Command'],
    correct: 1,
    category: 'Structure',
  },
  {
    id: 11,
    question: 'Which colour is primarily associated with The Royal Shepherds identity?',
    options: ['Red and White', 'Navy Blue and Gold', 'Green and White', 'Black and Silver'],
    correct: 1,
    category: 'Identity',
  },
  {
    id: 12,
    question: 'How many geopolitical zones does Nigeria have, matching the Royal Shepherds regional commands?',
    options: ['4', '5', '6', '7'],
    correct: 2,
    category: 'Citizenship',
  },
  {
    id: 13,
    question: 'The Great Commission recorded in Matthew 28:19-20 calls believers to do what?',
    options: ['Build churches', 'Go and make disciples of all nations', 'Study the Bible daily', 'Support the poor'],
    correct: 1,
    category: 'Bible',
  },
  {
    id: 14,
    question: 'What type of organization is The Royal Shepherds classified as?',
    options: ['Military Organisation', 'Christian Paramilitary Youth Organisation', 'Political Youth Movement', 'Academic Club'],
    correct: 1,
    category: 'Identity',
  },
  {
    id: 15,
    question: 'Which unit is attached directly to a local CAC assembly?',
    options: ['Battalion', 'Division', 'Company', 'Region'],
    correct: 2,
    category: 'Structure',
  },
]

const QUIZ_TIME = 15 * 60 // 15 minutes

function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (!quizStarted || submitted) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); handleSubmit(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [quizStarted, submitted])

  const handleAnswerSelect = (idx: number) => {
    if (showAnswer) return
    setSelectedAnswer(idx)
    const newAnswers = [...answers]
    newAnswers[currentQ] = idx
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    setShowAnswer(true)
    setTimeout(() => {
      setShowAnswer(false)
      setSelectedAnswer(null)
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
      } else {
        handleSubmit()
      }
    }, 1200)
  }

  const handleSubmit = () => setSubmitted(true)

  const score = answers.filter((a, i) => a === questions[i].correct).length
  const pct = Math.round((score / questions.length) * 100)

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

  const q = questions[currentQ]

  const leaderboard = [
    { rank: 1, name: 'Cdt. Adewale O.', state: 'Lagos', score: 100, time: '8:23' },
    { rank: 2, name: 'Cdt. Blessing E.', state: 'Rivers', score: 100, time: '9:11' },
    { rank: 3, name: 'Cdt. Samuel A.', state: 'Oyo', score: 93, time: '10:05' },
    { rank: 4, name: 'Cdt. Grace N.', state: 'Anambra', score: 87, time: '11:30' },
    { rank: 5, name: 'Cdt. Daniel M.', state: 'Kano', score: 87, time: '12:45' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="py-20 relative" style={{background:'linear-gradient(135deg, #0B1F3A, #122849)'}}>
        <div className="absolute inset-0 military-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="badge-gold inline-block mb-4">Examination Portal</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:'Playfair Display'}}>
            Constitution Quiz
          </h1>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.7)', fontFamily:'Poppins'}}>
            Test your knowledge of The Royal Shepherds Constitution, ranks, structure, and core values.
            Earn certificates and rise up the national leaderboard.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-xs" style={{color:'rgba(255,255,255,0.4)', fontFamily:'Montserrat'}}>
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span style={{color:'#D4AF37'}}>Quiz</span>
          </div>
        </div>
      </div>

      {!quizStarted && !submitted && (
        <section className="py-20" style={{background:'white'}}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon:'❓', title:'15 Questions', desc:'Multiple choice questions on constitution, structure, Bible knowledge, and citizenship' },
                { icon:'⏱️', title:'15 Minutes', desc:'Timed examination — manage your time wisely for the best score' },
                { icon:'🏆', title:'Auto Graded', desc:'Instant results with detailed feedback on each question' },
                { icon:'🏅', title:'Certificates', desc:'Score 80%+ to earn your Royal Shepherds Quiz Certificate' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl" style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
                  <div className="text-3xl">{f.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>{f.title}</h3>
                    <p className="text-sm" style={{color:'#6B7280', fontFamily:'Poppins'}}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-8 mb-8 text-center" style={{background:'#0B1F3A', border:'2px solid #D4AF37'}}>
              <div className="text-5xl mb-4">📜</div>
              <h2 className="text-2xl font-bold text-white mb-2" style={{fontFamily:'Playfair Display'}}>
                Ready to Test Your Knowledge?
              </h2>
              <p className="mb-6" style={{color:'rgba(255,255,255,0.6)', fontFamily:'Poppins'}}>
                15 questions • 15 minutes • Multiple categories
              </p>
              <button onClick={() => setQuizStarted(true)}
                className="px-12 py-4 rounded-xl font-bold text-sm pulse-gold"
                style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Start Quiz Now →
              </button>
            </div>

            {/* Leaderboard */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                🏆 Leaderboard
              </h3>
              <div className="rounded-xl overflow-hidden" style={{border:'1px solid #E5E7EB'}}>
                {leaderboard.map((entry, i) => (
                  <div key={i} className={`flex items-center gap-4 px-6 py-4 ${i < leaderboard.length - 1 ? 'border-b' : ''}`}
                    style={{background: i === 0 ? 'rgba(212,175,55,0.08)' : 'white', borderColor:'#E5E7EB'}}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm`}
                      style={{
                        background: i === 0 ? '#D4AF37' : i === 1 ? '#9CA3AF' : i === 2 ? '#CD7F32' : '#F5F3EE',
                        color: i < 3 ? 'white' : '#6B7280',
                        fontFamily:'Montserrat'
                      }}>
                      {entry.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm" style={{color:'#0B1F3A', fontFamily:'Poppins'}}>{entry.name}</div>
                      <div className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{entry.state} State</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold" style={{color:'#D4AF37', fontFamily:'Montserrat'}}>{entry.score}%</div>
                      <div className="text-xs" style={{color:'#9CA3AF', fontFamily:'Montserrat'}}>{entry.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {quizStarted && !submitted && (
        <section className="py-16" style={{background:'#F5F3EE'}}>
          <div className="max-w-2xl mx-auto px-4">
            {/* Timer & Progress */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-sm font-semibold" style={{color:'#6B7280', fontFamily:'Montserrat'}}>
                  Question {currentQ + 1} of {questions.length}
                </span>
                <div className="h-2 w-48 rounded-full mt-1" style={{background:'#E5E7EB'}}>
                  <div className="h-2 rounded-full transition-all progress-bar"
                    style={{width:`${((currentQ + 1) / questions.length) * 100}%`}}></div>
                </div>
              </div>
              <div className={`text-lg font-bold px-4 py-2 rounded-lg ${timeLeft < 60 ? 'text-red-600' : ''}`}
                style={{
                  background: timeLeft < 60 ? 'rgba(239,68,68,0.1)' : 'rgba(11,31,58,0.08)',
                  color: timeLeft < 60 ? '#DC2626' : '#0B1F3A',
                  fontFamily:'Montserrat'
                }}>
                ⏱ {formatTime(timeLeft)}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{border:'1px solid #E5E7EB'}}>
              <div className="badge-gold mb-4 inline-block">{q.category}</div>
              <h2 className="text-xl font-bold mb-8" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
                {q.question}
              </h2>

              <div className="space-y-3 mb-8">
                {q.options.map((opt, i) => {
                  let bg = 'white'
                  let borderColor = '#E5E7EB'
                  let textColor = '#374151'
                  if (showAnswer) {
                    if (i === q.correct) { bg = 'rgba(34,197,94,0.1)'; borderColor = '#22c55e' }
                    else if (i === selectedAnswer && i !== q.correct) { bg = 'rgba(239,68,68,0.1)'; borderColor = '#ef4444' }
                  } else if (selectedAnswer === i) {
                    bg = 'rgba(212,175,55,0.12)'; borderColor = '#D4AF37'
                  }
                  return (
                    <button key={i} onClick={() => handleAnswerSelect(i)}
                      className="w-full text-left p-4 rounded-xl quiz-option transition-all"
                      style={{background: bg, border:`2px solid ${borderColor}`, color: textColor}}>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0"
                          style={{borderColor, fontFamily:'Montserrat'}}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span style={{fontFamily:'Poppins'}}>{opt}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="flex-1 py-3 rounded-xl font-bold text-sm disabled:opacity-50 transition-all"
                  style={{background:'#0B1F3A', color:'#D4AF37', fontFamily:'Montserrat'}}>
                  {currentQ === questions.length - 1 ? 'Submit Quiz' : 'Next Question →'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {submitted && (
        <section className="py-20" style={{background:'white'}}>
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="text-7xl mb-6">{pct >= 80 ? '🏆' : pct >= 60 ? '📋' : '📚'}</div>
            <h2 className="text-3xl font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>
              Quiz Complete!
            </h2>

            <div className="text-6xl font-black mb-2" style={{color: pct >= 80 ? '#D4AF37' : pct >= 60 ? '#0B1F3A' : '#8B0000', fontFamily:'Montserrat'}}>
              {pct}%
            </div>
            <p className="text-lg mb-2" style={{color:'#6B7280', fontFamily:'Poppins'}}>
              {score} out of {questions.length} correct
            </p>

            <div className={`inline-block px-6 py-2 rounded-full font-bold text-sm mb-8`}
              style={{
                background: pct >= 80 ? 'rgba(212,175,55,0.15)' : 'rgba(239,68,68,0.1)',
                color: pct >= 80 ? '#B8960F' : '#DC2626',
                fontFamily:'Montserrat'
              }}>
              {pct >= 80 ? '✓ PASSED — Certificate Earned!' : pct >= 60 ? '⚠ FAIR — Try again to earn certificate' : '✗ NEEDS IMPROVEMENT — Study more and retry'}
            </div>

            <div className="rounded-2xl p-6 mb-8 text-left" style={{background:'#F5F3EE', border:'1px solid #E5E7EB'}}>
              <h3 className="font-bold mb-4" style={{color:'#0B1F3A', fontFamily:'Playfair Display'}}>Question Review:</h3>
              <div className="space-y-2">
                {questions.map((q, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className={answers[i] === q.correct ? 'text-green-500' : 'text-red-500'}>
                      {answers[i] === q.correct ? '✓' : '✗'}
                    </span>
                    <span style={{color:'#4B5563', fontFamily:'Poppins'}} className="flex-1 truncate">{q.question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => { setSubmitted(false); setQuizStarted(false); setCurrentQ(0); setAnswers(new Array(questions.length).fill(null)); setTimeLeft(QUIZ_TIME) }}
                className="px-8 py-3 rounded-lg font-bold text-sm"
                style={{background:'#D4AF37', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Try Again
              </button>
              <Link to="/training"
                className="px-8 py-3 rounded-lg font-bold text-sm border"
                style={{borderColor:'#E5E7EB', color:'#0B1F3A', fontFamily:'Montserrat'}}>
                Study More
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
