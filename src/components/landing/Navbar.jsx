import { Sun, Moon, BarChart3 } from 'lucide-react'

export default function Navbar({ dark, setDark, setView }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">

          <div className="nav-logo">
            <div className="logo-icon">
              <BarChart3 size={18} />
            </div>
            Trackify
          </div>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDark(d => !d)}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="btn btn-outline btn-sm" onClick={() => setView('dashboard')}>
              Sign In
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => setView('dashboard')}>
              Get Started
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}
