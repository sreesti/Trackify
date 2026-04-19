import { BarChart3, Zap, Users, Download, Shield, Puzzle } from 'lucide-react'

const features = [
  {
    icon: <BarChart3 size={22} />,
    title: 'Real-time Dashboards',
    desc: 'Watch your metrics update live. No more refreshing — data flows in as it happens, so you always have the full picture.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Instant Alerts',
    desc: 'Set custom thresholds and get notified the moment something needs your attention. Never miss a critical change again.',
  },
  {
    icon: <Users size={22} />,
    title: 'Team Workspaces',
    desc: 'Invite your team, assign roles, and collaborate on dashboards. Everyone sees what they need — nothing more, nothing less.',
  },
  {
    icon: <Download size={22} />,
    title: 'One-click Export',
    desc: 'Export any report to PDF, CSV, or PNG in seconds. Share with stakeholders who aren\'t in the platform effortlessly.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified, end-to-end encryption, SSO support. Your data is locked down and fully compliant.',
  },
  {
    icon: <Puzzle size={22} />,
    title: '150+ Integrations',
    desc: 'Connect Stripe, HubSpot, Salesforce, Google Analytics, and 150 more in one click. All your data, one place.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-label"><BarChart3 size={13} /> Features</div>
        <h2 className="section-title">Everything you need to <span className="gradient-text">grow faster</span></h2>
        <p className="section-sub">
          Trackify gives your team the analytics tools that used to require a full data engineering team to build.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
