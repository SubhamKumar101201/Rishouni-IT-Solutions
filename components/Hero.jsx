'use client'
import { useEffect, useState } from 'react'
import styles from './component.module.css'

const CARD_SLIDES = [{ tag: "Digital Experiences", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Web, Mobile & Digital Presence", description: "Launch premium web and mobile experiences that feel fast, modern and trustworthy for your customers.", }, { tag: "Cloud & Infrastructure", image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Cloud, Data & Modern IT Infrastructure", description: "Design secure, scalable infrastructure that keeps your business always-on and ready to grow.", }, { tag: "Managed IT & Security", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Managed IT, Data & Cyber Security", description: "Protect your business with always-on monitoring, data-driven insights and security-first systems.", },];

export default function Hero() {
  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCardIndex((p) => (p + 1) % CARD_SLIDES.length), 7000)
    return () => clearInterval(timer)
  }, [])

  const slide = CARD_SLIDES[cardIndex]

  return (
    // root is DIV not SECTION to avoid browser default section behavior
    <div id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://tyro.ae/assets/img/hero-bg.jpg" alt="hero background" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.24) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.78) 100%)' }} />
      </div>


      <div className="relative z-10 w-full px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.6fr_1.1fr] py-20">
          {/* LEFT: static text */}
          <div>
            {/* spacer so heading starts where the hashtag line was */}
            <div className="mb-4 h-4" />

            <h1 className="text-[2.6rem] leading-[1.02] text-white sm:text-5xl md:text-[3.5rem] lg:text-[3.9rem] font-extrabold">
              Bring Your Business Online
            </h1>
            <h2 className="mt-2 text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl">
              With Rishouni IT Solutions
            </h2>

            <p className="mt-5 max-w-xl text-sm text-(--text-muted) sm:text-base md:text-[17px]">
              A Dubai-born technology partner delivering end-to-end solutions —
              from web and mobile apps to cloud infrastructure, networking,
              enterprise storage, data, AI and cyber security. We help you
              modernise, secure and scale every layer of your digital business.
            </p>

            {/* chips */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className={styles.serviceChip}>
                Web &amp; Mobile Development
              </span>
              <span className={styles.serviceChip}>
                Cloud &amp; Hybrid Infrastructure
              </span>
              <span className={styles.serviceChip}>
                Managed IT &amp; Security Operations
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">
                Talk to Our Team
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>

              <div className="flex items-center gap-2 text-xs text-(--text-muted) sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span>Serving businesses across UAE &amp; beyond</span>
              </div>
            </div>

            {/* stats */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-bold text-gold md:text-4xl">
                  100+
                </dt>
                <dd className="mt-1 text-xs text-(--text-muted) sm:text-sm">
                  Projects Delivered
                </dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-gold md:text-4xl">
                  80+
                </dt>
                <dd className="mt-1 text-xs text-(--text-muted) sm:text-sm">
                  Clients &amp; Partners
                </dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-gold md:text-4xl">
                  10+
                </dt>
                <dd className="mt-1 text-xs text-(--text-muted) sm:text-sm">
                  Specialized Service Lines
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT: card carousel */}
          <div className="mx-auto w-full max-w-md">
            <div className="relative">
              {/* glow border */}
              <div className={styles.goldGlowFrame} />

              {/* glass card */}
              <div className={styles.glassCard}>
                <div className="relative px-6 pt-5 pb-6">
                  {/* image */}
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    <img
                      key={slide.image}
                      src={slide.image}
                      alt={slide.title}
                      className="h-44 w-full scale-[1.03] object-cover object-center transition-transform duration-500"
                    />
                  </div>

                  {/* running gradient tag */}
                  <p
                    className={`${styles.gradientRun} mb-2 text-[10px] font-medium uppercase tracking-[0.18em]`}
                  >
                    {slide.tag}
                  </p>

                  <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mb-4 text-xs text-(--text-muted) sm:text-sm">
                    {slide.description}
                  </p>

                  {/* <ul className="mb-5 space-y-1.5 text-xs text-gray-100 sm:text-sm">
                    {slide.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul> */}

                  {/* controls */}
                  <div className="mt-1 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setCardIndex(
                          cardIndex === 0
                            ? CARD_SLIDES.length - 1
                            : cardIndex - 1
                        )
                      }
                      className={styles.carouselBtn}
                    >
                      ←
                    </button>

                    <div className={styles.carouselDots}>
                      {CARD_SLIDES.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCardIndex(i)}
                          className={`${styles.carouselDot} ${i === cardIndex ? styles.carouselDotActive : ""
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setCardIndex((cardIndex + 1) % CARD_SLIDES.length)
                      }
                      className={styles.carouselBtn}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-(--text-muted) sm:text-sm">
              A single partner to take care of your{" "}
              <span className="text-gold">
                apps, infrastructure and security
              </span>{" "}
              — end to end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
