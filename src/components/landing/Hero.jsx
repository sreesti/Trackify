import { ArrowRight, Play, TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

export default function Hero({ setView }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">

          {/* Left — Copy */}
          <div>
            <div className="hero-eyebrow">
              <TrendingUp size={13} /> New — Real-time Analytics v2.0
            </div>

            <h1 className="hero-title">
              Analytics That <span className="gradient-text">Drive Growth</span>
            </h1>

            <p className="hero-sub">
              Trackify unifies your data into one powerful dashboard. Understand your users,
              track revenue, and make decisions backed by real-time insights.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setView('dashboard')}>
                View Live Dashboard <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline">
                <Play size={15} /> Watch Demo
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num gradient-text">10K+</div>
                <div className="hero-stat-label">Active users</div>
              </div>
              <div>
                <div className="hero-stat-num gradient-text">$2.4B</div>
                <div className="hero-stat-label">Data processed</div>
              </div>
              <div>
                <div className="hero-stat-num gradient-text">99.9%</div>
                <div className="hero-stat-label">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right — Dashboard Preview */}
          <div className="hero-preview">
            <div className="preview-header">
              <div className="preview-dot" style={{ background: '#EF4444' }} />
              <div className="preview-dot" style={{ background: '#F59E0B' }} />
              <div className="preview-dot" style={{ background: '#10B981' }} />
              <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--text-muted)' }}>Trackify Dashboard</span>
            </div>

            <div className="preview-kpis">
              {[
                { icon: <DollarSign size={14} />, val: '$84.6K', label: 'Revenue', delta: '+12.4%', color: '#10B981' },
                { icon: <Users size={14} />,      val: '2,650',  label: 'Users',   delta: '+8.1%',  color: '#6366F1' },
                { icon: <Activity size={14} />,   val: '3.8%',   label: 'Conv.',   delta: '+0.4%',  color: '#8B5CF6' },
                { icon: <TrendingUp size={14} />, val: '↑ 18%',  label: 'Growth',  delta: 'MoM',    color: '#F59E0B' },
              ].map((k, i) => (
                <div className="preview-kpi" key={i}>
                  <div style={{ color: k.color }}>{k.icon}</div>
                  <div className="preview-kpi-val">{k.val}</div>
                  <div className="preview-kpi-label">{k.label}</div>
                  <div className="preview-kpi-delta" style={{ color: k.color }}>{k.delta}</div>
                </div>
              ))}
            </div>

            <div className="preview-chart">
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>Revenue · Last 7 months</div>
              <div className="preview-bars">
                {[45, 62, 55, 78, 70, 85, 100].map((h, i) => (
                  <div key={i} className="preview-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                ))}
              </div>
            </div>

            <div className="preview-row">
              <div className="preview-mini" style={{ background: 'var(--card)' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Devices</div>
                <div style={{ display: 'flex', gap: 4, height: 36, alignItems: 'flex-end' }}>
                  {[
                    { h: '90%', c: '#6366F1' }, { h: '50%', c: '#8B5CF6' }, { h: '15%', c: '#10B981' }
                  ].map((b, i) => (
                    <div key={i} style={{ flex: 1, height: b.h, background: b.c, borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
                  ))}
                </div>
              </div>
              <div className="preview-mini" style={{ background: 'var(--card)' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Top channel</div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>Organic</div>
                <div style={{ fontSize: 11, color: '#10B981', fontWeight: 600 }}>18,400 visits</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
