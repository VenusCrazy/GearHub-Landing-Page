import AnimatedContent from './components/AnimatedContent/AnimatedContent.jsx'
import ClickSpark from './components/ClickSpark/ClickSpark.jsx'
import DotField from './components/DotField/DotField.jsx'
import './App.css'

const GITHUB_URL = 'https://github.com/jazzstack/Gear-Hub'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Devices', href: '#devices' },
  { label: 'Why offline', href: '#privacy' },
  { label: 'Download', href: '#download' },
]

const features = [
  {
    title: 'Device catalog',
    body: 'Keyboards, mice, headsets and mics in one place. Every connected device detected, listed and ready to configure.',
    mock: 'catalog',
  },
  {
    title: 'Overview, live',
    body: 'A single page with everything that matters — DPI, polling rate, lighting profile and firmware, read straight off the device.',
    mock: 'overview',
  },
  {
    title: 'Performance tuning',
    body: 'DPI sliders with presets, polling rate, and sensor options. Dial in a config and save it to the device itself.',
    mock: 'performance',
  },
  {
    title: 'RGB & lighting',
    body: 'Full lighting control. Modes, colors and brightness, applied to the device — not to a cloud account.',
    mock: 'lighting',
  },
]

const devices = [
  { brand: 'Razer', model: 'Viper Mini', type: 'Mouse' },
  { brand: 'Razer', model: 'Cobra', type: 'Mouse' },
  { brand: 'Redragon', model: 'K617 Fizz Pro', type: 'Keyboard' },
  { brand: 'Aula', model: 'F75 Max', type: 'Keyboard' },
  { brand: 'Logitech', model: 'G304', type: 'Mouse' },
  { brand: 'Logitech', model: 'G502 X', type: 'Mouse' },
  { brand: 'Logitech', model: 'G402 Hyperion Fury', type: 'Mouse' },
]

const stats = [
  { label: 'DPI', value: '1600' },
  { label: 'Polling', value: '1000 Hz' },
  { label: 'Debounce', value: '0 ms' },
  { label: 'Firmware', value: 'v1.4.2' },
]

function MockWindow({ children, title }) {
  return (
    <div className="mock-window">
      <div className="mock-titlebar">
        <span className="mock-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-title">{title}</span>
      </div>
      {children}
    </div>
  )
}

function CatalogMock() {
  const items = [
    { name: 'Razer Viper Mini', kind: 'Mouse', tag: 'CONNECTED' },
    { name: 'Redragon K617 Fizz Pro', kind: 'Keyboard', tag: 'CONNECTED' },
    { name: 'Aula F75 Max', kind: 'Keyboard', tag: 'CONNECTED' },
    { name: 'Logitech G304', kind: 'Mouse', tag: 'STANDBY' },
  ]
  return (
    <div className="mock-list">
      <div className="mock-list-head">
        <span>DEVICE</span>
        <span>TYPE</span>
        <span>STATUS</span>
      </div>
      {items.map((it) => (
        <div className="mock-list-row" key={it.name}>
          <span>{it.name}</span>
          <span>{it.kind}</span>
          <span className={it.tag === 'CONNECTED' ? 'tag on' : 'tag'}>{it.tag}</span>
        </div>
      ))}
    </div>
  )
}

function OverviewMock() {
  return (
    <div className="mock-overview">
      <div className="mock-stats">
        {stats.map((s) => (
          <div className="mock-stat" key={s.label}>
            <span className="mock-stat-value">{s.value}</span>
            <span className="mock-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="mock-device-row">
        <span className="mock-device-name">Razer Viper Mini</span>
        <span className="tag on">SAVED TO DEVICE</span>
      </div>
    </div>
  )
}

function PerformanceMock() {
  const presets = ['LOW', 'MED', 'HIGH', 'CUSTOM']
  return (
    <div className="mock-perf">
      <div className="mock-field">
        <div className="mock-field-head">
          <span>DPI</span>
          <span className="mock-value">1600</span>
        </div>
        <div className="mock-track">
          <i style={{ left: '44%' }} />
        </div>
        <div className="mock-presets">
          {presets.map((p) => (
            <span key={p} className={p === 'CUSTOM' ? 'active' : ''}>
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="mock-field">
        <div className="mock-field-head">
          <span>POLLING RATE</span>
          <span className="mock-value">1000 Hz</span>
        </div>
        <div className="mock-track">
          <i style={{ left: '100%' }} />
        </div>
      </div>
    </div>
  )
}

function LightingMock() {
  const swatches = ['#e7e7ea', '#8a8a96', '#3d3d4a']
  return (
    <div className="mock-lighting">
      <div className="mock-field">
        <div className="mock-field-head">
          <span>MODE</span>
          <span className="mock-value">WAVE</span>
        </div>
        <div className="mock-row">
          {['STATIC', 'BREATH', 'WAVE', 'REACT'].map((m) => (
            <span key={m} className={m === 'WAVE' ? 'chip active' : 'chip'}>
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="mock-field">
        <div className="mock-field-head">
          <span>COLOR</span>
          <span className="mock-value">#E7E7EA</span>
        </div>
        <div className="mock-row swatches">
          {swatches.map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mocks = {
  catalog: <CatalogMock />,
  overview: <OverviewMock />,
  performance: <PerformanceMock />,
  lighting: <LightingMock />,
}

function LogoVisual() {
  return (
    <div className="hero-logo-wrap">
      <div className="hero-logo-glow" aria-hidden="true" />
      <div className="hero-logo">
        <div className="hero-logo-inner">
          <span className="hero-logo-mark" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={8}
        sparkRadius={26}
        sparkCount={10}
        duration={500}
      >
        <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            GEAR HUB
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-dot-field" aria-hidden="true">
            <DotField
              dotRadius={1.8}
              dotSpacing={15}
              bulgeStrength={60}
              glowRadius={200}
              sparkle={false}
              waveAmplitude={0}
              gradientFrom="rgba(255, 255, 255, 0.38)"
              gradientTo="rgba(255, 255, 255, 0.12)"
              glowColor="#0b2e27"
            />
          </div>
          <div className="container hero-grid">
            <div className="hero-left">
              <AnimatedContent distance={20} duration={0.6} threshold={0.2}>
                <p className="eyebrow mono">
                  <span className="pill">v0.5.0</span>
                  <span>ELECTRON 33 · REACT 18 · 100% OFFLINE</span>
                </p>
              </AnimatedContent>
              <AnimatedContent distance={40} duration={0.9} delay={0.1} threshold={0.2}>
                <h1 className="hero-title">GearHub</h1>
                <p className="hero-sub">No cloud. No account. No drivers.</p>
              </AnimatedContent>
              <AnimatedContent distance={30} duration={0.9} delay={0.2} threshold={0.2}>
                <p className="hero-copy">
                  Gear Hub talks directly to your HID devices to control DPI, polling rate, RGB and
                  debounce — everything runs locally, and settings are saved to the device itself.
                </p>
              </AnimatedContent>
              <AnimatedContent distance={20} duration={0.8} delay={0.3} threshold={0.2}>
                <div className="hero-cta">
                  <a className="btn primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
                    Download 0.5.0
                  </a>
                  <a className="btn ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </div>
                <ul className="hero-meta mono">
                  <li>macOS + Windows</li>
                  <li>No drivers</li>
                  <li>Settings saved to device</li>
                </ul>
              </AnimatedContent>
            </div>

            <div className="hero-right">
              <AnimatedContent
                distance={60}
                direction="horizontal"
                duration={1}
                delay={0.2}
                threshold={0.2}
              >
                <LogoVisual />
              </AnimatedContent>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <AnimatedContent distance={24} duration={0.7} threshold={0.15}>
              <p className="section-index mono">01 / FEATURES</p>
              <h2 className="section-title">Everything your gear needs, on one panel</h2>
            </AnimatedContent>
            <div className="feature-grid">
              {features.map((f, i) => (
                <AnimatedContent
                  key={f.title}
                  distance={40}
                  duration={0.8}
                  delay={i * 0.08}
                  threshold={0.2}
                >
                  <article className="feature-card">
                    <MockWindow title={`${String(i + 1).padStart(2, '0')} · ${f.title.toUpperCase()}`}>
                      <div className="mock-body">{mocks[f.mock]}</div>
                    </MockWindow>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-body">{f.body}</p>
                  </article>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        <section id="devices" className="section">
          <div className="container">
            <AnimatedContent distance={24} duration={0.7} threshold={0.15}>
              <p className="section-index mono">02 / DEVICES</p>
              <h2 className="section-title">Supported devices</h2>
            </AnimatedContent>
            <AnimatedContent distance={30} duration={0.8} threshold={0.2}>
              <div className="device-table">
                <div className="device-table-head mono">
                  <span>BRAND</span>
                  <span>MODEL</span>
                  <span>TYPE</span>
                </div>
                {devices.map((d, i) => (
                  <AnimatedContent key={d.model} distance={18} duration={0.6} delay={i * 0.05} threshold={0.15}>
                    <div className="device-row">
                      <span className="device-brand">{d.brand}</span>
                      <span className="device-model mono">{d.model}</span>
                      <span className="device-type">{d.type}</span>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </AnimatedContent>
            <AnimatedContent distance={16} duration={0.7} delay={0.2} threshold={0.15}>
              <p className="device-note mono">MORE ON THE WAY — NEW DEVICES LAND WITH EVERY RELEASE</p>
            </AnimatedContent>
          </div>
        </section>

        <section id="privacy" className="section">
          <div className="container">
            <AnimatedContent distance={24} duration={0.7} threshold={0.15}>
              <p className="section-index mono">03 / PRIVACY</p>
              <h2 className="section-title">Why offline</h2>
            </AnimatedContent>
            <div className="privacy-grid">
              {[
                { big: '0', label: 'ACCOUNTS', copy: 'No login, no telemetry. Your gear is yours — nothing leaves your machine.' },
                { big: '0', label: 'CLOUD REQUEST', copy: 'Every read and write happens over local HID. Unplug the internet, everything still works.' },
                { big: '0', label: 'DRIVERS', copy: 'No vendor bloatware or background services. Gear Hub speaks HID directly to the device.' },
                { big: '100%', label: 'ON-DEVICE', copy: 'Settings are saved to the device itself, so your config follows your hardware — not your account.' },
              ].map((s, i) => (
                <AnimatedContent key={s.label} distance={40} duration={0.8} delay={i * 0.08} threshold={0.2}>
                  <div className="privacy-stat">
                    <p className="privacy-big mono">{s.big}</p>
                    <p className="privacy-label mono">{s.label}</p>
                    <p className="privacy-copy">{s.copy}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-adv">
          <div className="container">
            <AnimatedContent distance={24} duration={0.7} threshold={0.15}>
              <p className="section-index mono">04 / POWER USERS</p>
              <h2 className="section-title">Dev tools, for the curious</h2>
            </AnimatedContent>
            <AnimatedContent distance={40} duration={0.9} threshold={0.2}>
              <div className="adv-card">
                <div className="adv-text">
                  <p className="adv-heading">Raw HID. Full transparency.</p>
                  <p className="adv-copy">
                    An optional, advanced section exposes raw HID data and a report tester — inspect
                    exactly what your device sends, or probe a protocol you are reverse engineering.
                  </p>
                  <span className="tag mono">OPTIONAL · OFF BY DEFAULT</span>
                </div>
                <MockWindow title="RAW HID · REPORT TESTER">
                  <div className="mock-adv">
                    <div className="mock-adv-line">
                      <span className="mock-adv-label mono">OUT</span>
                      <code className="mono">05 00 01 00 00 00 00 00 00</code>
                    </div>
                    <div className="mock-adv-line">
                      <span className="mock-adv-label mono">IN</span>
                      <code className="mono">05 00 02 40 00 00 00 00 00</code>
                    </div>
                    <div className="mock-adv-line">
                      <span className="mock-adv-label mono">OUT</span>
                      <code className="mono">05 00 01 00 00 00 00 00 00</code>
                    </div>
                    <div className="mock-adv-send mono">SEND REPORT →</div>
                  </div>
                </MockWindow>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section id="download" className="section">
          <div className="container">
            <AnimatedContent distance={40} duration={0.9} threshold={0.2}>
              <div className="download-card">
                <p className="eyebrow mono">DOWNLOAD</p>
                <h2 className="download-title">Gear Hub 0.5.0</h2>
                <p className="download-copy">
                  Open source, MIT licensed. Grab the latest release from GitHub — no installers, no
                  accounts, no strings.
                </p>
                <div className="download-cta">
                  <a className="btn primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
                    Download for macOS
                  </a>
                  <a className="btn ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                    Get it on GitHub
                  </a>
                </div>
                <p className="download-meta mono">v0.5.0 · ELECTRON 33 · REACT 18 · macOS + WINDOWS</p>
              </div>
            </AnimatedContent>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand mono">GEAR HUB</p>
          <p className="footer-copy">
            Built for gamers who like their peripherals the way they bought them — without the
            cloud.
          </p>
          <a className="footer-link mono" href={GITHUB_URL} target="_blank" rel="noreferrer">
            github.com/Gear-Hub ↗
          </a>
        </div>
      </footer>
      </ClickSpark>
    </>
  )
}

export default App
