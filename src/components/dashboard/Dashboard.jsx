import { Sun, Moon, Bell, Search, ArrowLeft } from 'lucide-react'
import Sidebar from './Sidebar'
import KPICards from './KPICards'
import RevenueChart from './RevenueChart'
import { TrafficChart, DeviceChart } from './Charts'
import DataTable from './DataTable'

export default function Dashboard({ dark, setDark, setView }) {
  const now = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="dashboard-shell">
      <Sidebar />

      <div className="dash-main">
        {/* Header */}
        <header className="dash-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button className="back-btn" onClick={() => setView('landing')}>
              <ArrowLeft size={14} /> Back to Landing
            </button>
            <span className="dash-title">Overview</span>
          </div>

          <div className="dash-header-right">
            <div className="dash-search">
              <Search size={14} />
              <span>Search…</span>
            </div>

            <button className="theme-toggle" onClick={() => setDark(d => !d)}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="notif-btn">
              <Bell size={16} />
              <div className="notif-dot" />
            </button>

            <div className="user-avatar">SR</div>
          </div>
        </header>

        {/* Body */}
        <main className="dash-body">
          <div className="dash-date">{now}</div>

          {/* KPI Cards */}
          <KPICards />

          {/* Charts row */}
          <div className="charts-row">
            <RevenueChart />
            <TrafficChart />
          </div>

          {/* Bottom row */}
          <div className="bottom-row">
            <DeviceChart />
            <DataTable />
          </div>
        </main>
      </div>
    </div>
  )
}
