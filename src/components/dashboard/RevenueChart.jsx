import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'
import { revenueData } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 8, padding: '10px 14px', fontSize: 13,
      }}>
        <p style={{ fontWeight: 600, marginBottom: 6, color: 'var(--text)' }}>{label}</p>
        <p style={{ color: '#6366F1' }}>Revenue: ${payload[0].value.toLocaleString()}</p>
        <p style={{ color: '#10B981' }}>Users: {payload[1]?.value?.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export default function RevenueChart() {
  return (
    <div className="chart-card">
      <div className="chart-title">Revenue & Users</div>
      <div className="chart-sub">Monthly performance over the last 12 months</div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366F1" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
            tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={2}
            fill="url(#revenueGrad)" dot={false} activeDot={{ r: 5, fill: '#6366F1' }} />
          <Area type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2}
            fill="url(#usersGrad)" dot={false} activeDot={{ r: 5, fill: '#10B981' }} />
        </AreaChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
        {[{ color: '#6366F1', label: 'Revenue' }, { color: '#10B981', label: 'Users' }].map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-secondary)' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}
