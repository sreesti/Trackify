// TrafficChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { trafficData } from '../../data/mockData'

export function TrafficChart() {
  return (
    <div className="chart-card">
      <div className="chart-title">Traffic by Channel</div>
      <div className="chart-sub">Visitor sources this month</div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={trafficData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="channel" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false}
            tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}
            labelStyle={{ color: 'var(--text)', fontWeight: 600 }}
            formatter={v => [v.toLocaleString(), 'Visitors']}
          />
          <Bar dataKey="visitors" radius={[6, 6, 0, 0]}>
            {trafficData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// DeviceChart.jsx — Donut using PieChart
import { PieChart, Pie, Cell as PieCell, Tooltip as PieTooltip } from 'recharts'
import { deviceData } from '../../data/mockData'

export function DeviceChart() {
  const total = deviceData.reduce((s, d) => s + d.value, 0)

  return (
    <div className="chart-card">
      <div className="chart-title">Device Breakdown</div>
      <div className="chart-sub">Traffic by device type</div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
        <PieChart width={160} height={160}>
          <Pie
            data={deviceData}
            cx={75} cy={75}
            innerRadius={48} outerRadius={72}
            dataKey="value"
            strokeWidth={0}
          >
            {deviceData.map((entry, i) => (
              <PieCell key={i} fill={entry.color} />
            ))}
          </Pie>
          <PieTooltip
            contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}
            formatter={v => [`${v}%`, '']}
          />
        </PieChart>
      </div>

      <div className="donut-legend">
        {deviceData.map((d, i) => (
          <div className="legend-item" key={i}>
            <div className="legend-dot-label">
              <div className="legend-dot" style={{ background: d.color }} />
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{d.name}</span>
            </div>
            <span className="legend-pct">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
