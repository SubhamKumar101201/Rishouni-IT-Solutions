'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './component.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const startX = useRef(null)

  // small threshold so navbar appears quickly on slight scroll
  const SCROLL_THRESHOLD = 24

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      if (!menuOpen) setScrolled(y > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    requestAnimationFrame(() => onScroll())
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.dataset.navScrollY = String(scrollY)
    } else {
      const saved = document.body.dataset.navScrollY
      if (saved) {
        const scrollY = parseInt(saved, 10)
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
        delete document.body.dataset.navScrollY
      } else {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      delete document.body.dataset.navScrollY
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navItems = [
    ['home', 'Home'],
    ['about', 'About'],
    ['services', 'Services'],
    ['portfolio', 'Portfolio'],
    ['contact', 'Contact'],
    ['faq', 'FAQ'],
  ]

  const handleNavClick = (e, id) => {
    e?.preventDefault()
    setActive(id)
    setMenuOpen(false)
    const target = id === 'home' ? document.querySelector('#home') : document.getElementById(id)
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
  }

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const handleTouchStart = (e) => (startX.current = e.touches?.[0]?.clientX ?? null)
  const handleTouchEnd = (e) => {
    if (startX.current == null) return
    const endX = e.changedTouches?.[0]?.clientX ?? 0
    if (endX - startX.current > 80) closeMenu()
    startX.current = null
  }

  // headerInner gets scrolled class to animate visible dark bar
  const headerInnerClass = scrolled ? `${styles.headerInner} ${styles.headerInnerScrolled}` : styles.headerInner

  return (
    <>
      {/* full-width fixed header (div, not semantic header) */}
      <div className={styles.siteHeader} role="banner" aria-hidden="false">
        <div className={`mx-auto w-full p-2 ${headerInnerClass}`}>
          {/* inner row uses flex and responsive paddings (full width on mobile) */}
          <div className="flex items-center justify-between px-4 md:px-6">
            <img src="/logo.png" alt="Rishouni logo" className="h-10 md:h-12 lg:h-14 object-contain" />

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map(([id, label]) => (
                <button key={id} onClick={(e) => handleNavClick(e, id)}
                  className={`text-base transition-colors ${active === id ? 'text-[#D9B96E] font-semibold' : 'text-white/90 hover:text-white'}`}>
                  {label}
                </button>
              ))}
              <button onClick={(e) => handleNavClick(e, 'contact')} className="btn-gold ml-2">Get Started</button>
            </nav>

            {/* mobile hamburger (always flush to right) */}
            {!menuOpen && (
              <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-white/10 bg-transparent text-white"
                onClick={openMenu} aria-label="Open menu">
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {menuOpen && <div className={styles.mobileBackdrop} onClick={closeMenu} />}

      {menuOpen && (
        <div className={styles.mobileMenuOverlay} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} role="dialog" aria-modal="true">
          <div className={`${styles.menuHeader} ${styles.menuHeaderPadding} flex items-center justify-between p-4`}>
            <img src="/logo.png" alt="Rishouni logo" className={styles.mobileMenuLogo} />
            <button className={styles.closeBtn} aria-label="Close menu" onClick={closeMenu}>✕</button>
          </div>

          <nav className="w-full px-4" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navItems.map(([id, label], index) => (
                <li key={id} className={styles.menuItem} style={{ animationDelay: `${index * 70}ms` }}>
                  <button onClick={(e) => handleNavClick(e, id)} className={`w-full text-left text-lg px-4 py-3 rounded-lg ${active === id ? 'bg-white/10 text-[#D9B96E] font-semibold' : 'text-white/90 hover:bg-white/10'}`}>
                    {label}
                  </button>
                </li>
              ))}
              <li className={styles.menuItem} style={{ animationDelay: `${navItems.length * 70}ms` }}>
                <button onClick={(e) => handleNavClick(e, 'contact')} className="btn-gold w-full text-center text-lg mt-2">Get Started</button>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pb-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Rishouni IT Solutions</div>
        </div>
      )}
    </>
  )
}
