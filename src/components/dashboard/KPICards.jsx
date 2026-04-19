import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react'

const kpis = [
  {
    label: 'Total Revenue',
    value: '$84,600',
    delta: '+12.4%',
    sub: 'vs last month',
    dir: 'up',
    icon: <DollarSign size={18} />,
    iconBg: '#EEF2FF',
    iconColor: '#6366F1',
  },
  {
    label: 'Active Users',
    value: '2,650',
    delta: '+8.1%',
    sub: 'vs last month',
    dir: 'up',
    icon: <Users size={18} />,
    iconBg: '#D1FAE5',
    iconColor: '#10B981',
  },
  {
    label: 'Conversion Rate',
    value: '3.82%',
    delta: '+0.4%',
    sub: 'vs last month',
    dir: 'up',
    icon: <Activity size={18} />,
    iconBg: '#EDE9FE',
    iconColor: '#8B5CF6',
  },
  {
    label: 'Monthly Growth',
    value: '18.2%',
    delta: '-1.3%',
    sub: 'vs last month',
    dir: 'down',
    icon: <TrendingUp size={18} />,
    iconBg: '#FEF3C7',
    iconColor: '#F59E0B',
  },
]

export default function KPICards() {
  return (
    <div className="kpi-grid">
      {kpis.map((k, i) => (
        <div className="kpi-card" key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="kpi-label">{k.label}</div>
            <div
              className="kpi-icon"
              style={{ background: k.iconBg, color: k.iconColor }}
            >
              {k.icon}
            </div>
          </div>
          <div className="kpi-value">{k.value}</div>
          <div className={`kpi-delta ${k.dir}`}>
            {k.dir === 'up' ? '↑' : '↓'} {k.delta}
            <span className="kpi-sub">{k.sub}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
