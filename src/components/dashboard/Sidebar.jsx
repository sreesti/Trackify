import { useState } from 'react'
import {
  BarChart3, LayoutDashboard, TrendingUp, FileText,
  Users, Megaphone, Settings, ChevronLeft, ChevronRight
} from 'lucide-react'

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Overview',   active: true  },
  { icon: <TrendingUp size={18} />,      label: 'Analytics',  active: false },
  { icon: <FileText size={18} />,        label: 'Reports',    active: false },
  { icon: <Users size={18} />,           label: 'Customers',  active: false },
  { icon: <Megaphone size={18} />,       label: 'Campaigns',  active: false },
  { icon: <Settings size={18} />,        label: 'Settings',   active: false },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-icon" style={{ flexShrink: 0 }}>
          <BarChart3 size={16} />
        </div>
        <span className="sidebar-logo-text">Trackify</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`nav-item ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={() => setCollapsed(c => !c)}>
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span style={{ fontSize: 13 }}>Collapse</span>}
        </button>
      </div>
    </aside>
  )
}
