// Stats.jsx
import { TrendingUp } from 'lucide-react'

const stats = [
  { num: '10,000+', label: 'Active Users' },
  { num: '$2.4B',   label: 'Revenue Tracked' },
  { num: '99.9%',   label: 'Uptime SLA' },
  { num: '150+',    label: 'Integrations' },
]

export function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Pricing.jsx
const plans = [
  {
    name: 'Starter',
    price: '0',
    desc: 'Perfect for solo founders and side projects.',
    features: ['Up to 3 dashboards', '5K events/month', '7-day data retention', 'Email support', 'Basic charts'],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '49',
    desc: 'For growing teams that need serious analytics.',
    features: ['Unlimited dashboards', '500K events/month', '12-month data retention', 'Priority support', 'All chart types', 'A/B testing', 'Team workspace'],
    cta: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large teams with advanced needs.',
    features: ['Unlimited everything', 'Custom data retention', 'Dedicated CSM', 'SLA guarantee', 'SSO & SAML', 'Custom integrations', 'White-label option'],
    cta: 'Talk to Sales',
    featured: false,
  },
]

export function Pricing({ setView }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <TrendingUp size={13} /> Pricing
          </div>
          <h2 className="section-title">Simple, transparent <span className="gradient-text">pricing</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Start free. Upgrade when you need to. No hidden fees, no surprises.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">
                {plan.price === 'Custom' ? (
                  <span style={{ fontSize: 32 }}>Custom</span>
                ) : (
                  <>${plan.price}<span>/mo</span></>
                )}
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <span className="check-icon">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.featured ? 'btn-white' : 'btn-primary'} btn-sm`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setView('dashboard')}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Testimonials.jsx
const testimonials = [
  {
    quote: "Trackify replaced three separate tools for us. The dashboard is the first thing I open every morning — our whole team lives in it now.",
    name: 'Sree Jamuar',
    role: 'CEO, NovaSprint',
    initials: 'AM',
    color: '#6366F1',
    stars: 5,
  },
  {
    quote: "We saw a 23% increase in conversion rate within 6 weeks of using Trackify's A/B testing and funnel analytics. Genuinely impressive.",
    name: 'Shivansha',
    role: 'Head of Growth, Launchpad.io',
    initials: 'PS',
    color: '#8B5CF6',
    stars: 5,
  },
  {
    quote: "The onboarding took 10 minutes and we had our first dashboard live the same day. The integrations with Stripe and HubSpot are flawless.",
    name: 'Shreya',
    role: 'CTO, ScaleX Technologies',
    initials: 'RK',
    color: '#10B981',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 16px' }}>Testimonials</div>
          <h2 className="section-title">Trusted by <span className="gradient-text">fast-moving teams</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// CTA.jsx
export function CTA({ setView }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Ready to grow with data?</h2>
          <p className="cta-sub">Join 10,000+ teams who trust Trackify for their analytics. Start free — no card needed.</p>
          <div className="cta-actions">
            <button className="btn btn-white" onClick={() => setView('dashboard')}>
              Start Free Today
            </button>
            <button className="btn btn-white-outline">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Footer.jsx
import { BarChart3 } from 'lucide-react'

export function Footer() {
  const cols = [
    { title: 'Product',  links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'] },
    { title: 'Company',  links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
    { title: 'Resources',links: ['Documentation', 'API Reference', 'Community', 'Support', 'Privacy'] },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo">
              <div className="logo-icon"><BarChart3 size={16} /></div>
              Trackify
            </div>
            <p className="footer-brand-desc">
              The analytics platform built for growth-focused teams. Real-time data, beautiful dashboards, actionable insights.
            </p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <div className="footer-col-title">{col.title}</div>
              <ul className="footer-links">
                {col.links.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Trackify. All rights reserved.</span>
          <span>Created by Sreesti</span>
        </div>
      </div>
    </footer>
  )
}
