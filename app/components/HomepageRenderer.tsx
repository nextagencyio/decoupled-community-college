'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { GraduationCap, BookOpen, Users, Building2, Globe, Laptop, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: GraduationCap, title: 'Academic Excellence', description: 'Rigorous academic programs designed to prepare students for university transfer and career success.' },
  { icon: BookOpen, title: 'Diverse Programs', description: 'Over 120 degree and certificate programs spanning arts, sciences, technology, and vocational training.' },
  { icon: Users, title: 'Student Support', description: 'Comprehensive counseling, tutoring, and mentoring services to help every student succeed.' },
  { icon: Building2, title: 'Modern Facilities', description: 'State-of-the-art classrooms, laboratories, and learning spaces equipped with the latest technology.' },
  { icon: Globe, title: 'Global Perspective', description: 'International programs and diverse student body fostering cross-cultural understanding.' },
  { icon: Laptop, title: 'Online Learning', description: 'Flexible online and hybrid courses that fit your schedule without compromising quality.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&fit=crop', alt: 'Campus building' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop', alt: 'Students studying' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&fit=crop', alt: 'Library' },
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&fit=crop', alt: 'Graduation ceremony' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Why Choose Crestwood</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Crestwood Community College offers an exceptional educational experience with personalized attention and real-world preparation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Campus Life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience the vibrant academic community and modern facilities at Crestwood.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><GraduationCap className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">Crestwood</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Empowering students through accessible, quality education since 1965.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>500 College Drive<br />Crestwood, CA 90210</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 234-5678</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Programs</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/programs" className="hover:text-white transition-colors">All Programs</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Transfer Degrees</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Career Certificates</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Online Programs</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Continuing Education</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Campus</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty Directory</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Campus Map</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Library</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Students</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Apply Now</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Financial Aid</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Student Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Bookstore</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Visit Campus</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Alumni</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Stay Informed</h4><p className="text-primary-300 text-sm">Get campus news, event announcements, and enrollment updates delivered to your inbox.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Crestwood Community College. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}
