import { useState } from 'react'
import { Search } from 'lucide-react'
import { transactions } from '../../data/mockData'

const statusClass = {
  Paid:    'badge badge-success',
  Pending: 'badge badge-warning',
  Failed:  'badge badge-danger',
  Free:    'badge badge-primary',
}

export default function DataTable() {
  const [search, setSearch]   = useState('')
  const [filter, setFilter]   = useState('All')

  const filtered = transactions.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                        t.email.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || t.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="chart-card">
      <div className="chart-title">Recent Transactions</div>
      <div className="chart-sub">Latest customer activity</div>

      <div className="table-controls">
        <div className="table-search">
          <Search size={14} />
          <input
            placeholder="Search customers…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="table-filter">
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            {['All', 'Paid', 'Pending', 'Failed', 'Free'].map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map(t => (
              <tr key={t.id}>
                <td>
                  <div className="customer-cell">
                    <div className="mini-avatar" style={{ background: t.color }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 13 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.email}</div>
                    </div>
                  </div>
                </td>
                <td><span style={{ fontSize: 13 }}>{t.plan}</span></td>
                <td><span style={{ fontWeight: 600, fontSize: 13 }}>{t.amount}</span></td>
                <td><span className={statusClass[t.status]}>{t.status}</span></td>
                <td><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{t.date}</span></td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 24 }}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
