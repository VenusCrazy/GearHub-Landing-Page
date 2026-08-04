import AnimatedContent from './components/AnimatedContent/AnimatedContent.jsx'
import ClickSpark from './components/ClickSpark/ClickSpark.jsx'
import DotField from './components/DotField/DotField.jsx'
import './App.css'

const GITHUB_URL = 'https://github.com/jazzstack/Gear-Hub'
const ISSUES_URL = 'https://github.com/jazzstack/Gear-Hub/issues'
const VERSION = '0.5.14'

const navLinks = [
  { label: 'Devices', href: '#devices' },
  { label: 'Why offline', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
]

const deviceBrands = [
  { brand: 'Razer', models: ['Viper Mini', 'Cobra', 'Huntsman Mini'] },
  { brand: 'Redragon', models: ['K617 Fizz Pro', 'K552 Kumara'] },
  { brand: 'Aula', models: ['F75 Max'] },
  { brand: 'Logitech', models: ['G304 Lightspeed', 'G502 X', 'G402 Hyperion Fury'] },
  { brand: 'Kreo', models: ['Chimera V2'] },
]

const privacyStats = [
  {
    big: '0',
    label: 'ACCOUNTS',
    copy: 'No login, no telemetry. Your gear is yours — nothing leaves your machine.',
  },
  {
    big: '0',
    label: 'CLOUD REQUESTS',
    copy: 'Every read and write happens over local HID. Unplug the internet, everything still works.',
  },
  {
    big: '0',
    label: 'DRIVERS',
    copy: 'No vendor bloatware or background services. Gear Hub speaks HID directly to the device.',
  },
  {
    big: '100%',
    label: 'ON-DEVICE',
    copy: 'Settings are saved to the device itself, so your config follows your hardware — not your account.',
  },
]

const faqs = [
  {
    q: 'Is my data uploaded anywhere?',
    a: 'No. Gear Hub talks to your devices over HID only. Device info and settings never leave your machine — configuration is saved to the device itself.',
  },
  {
    q: 'Does Gear Hub work with every mouse and keyboard?',
    a: 'Not yet. Support is added one device at a time, each with its own HID driver. New devices land with every release.',
  },
  {
    q: 'Do I need to install drivers?',
    a: 'No. Gear Hub speaks HID directly to supported hardware — no vendor software, background services, or drivers to install.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. Everything runs locally, so it works even with the internet unplugged. Updates are optional and install only when you run them.',
  },
  {
    q: 'How do updates work?',
    a: 'The app checks GitHub Releases on launch. When an update is available, download it and restart to install — all from the Settings page.',
  },
  {
    q: 'Is it open source?',
    a: 'Yes, MIT licensed, with the code on GitHub. More devices — including other peripheral types — can be added through the device registry and a driver module.',
  },
]

function Icon({ name }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    cursor: <path d="m5 4 6.5 16 2.3-6.2L20 11.5 5 4Z" />,
    download: <path d="M12 4v11M8 11l4 4 4-4M5 20h14" />,
    github: (
      <path d="M9 19c-4 1.2-4-2-5-2m10 4v-3.1c0-.9.1-1.3-.4-1.9 2.8-.3 5.7-1.4 5.7-6.2 0-1.2-.5-2.4-1.3-3.3.1-.3.6-1.6-.1-3.2 0 0-1.1-.3-3.5 1.3a12.2 12.2 0 0 0-6.4 0C5.6 3 4.5 3.3 4.5 3.3c-.7 1.6-.2 2.9-.1 3.2A4.8 4.8 0 0 0 3 9.8C3 14.6 6 15.7 8.8 16c-.4.5-.6 1-.6 1.9V21" />
    ),
    mouse: (
      <>
        <path d="M12 3a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Z" />
        <path d="M12 3v6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 7.8 7 10 4.2-2.2 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sliders: <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" />,
  }
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function SettingsMock() {
  return (
    <div className="mock-settings">
      <div className="mock-field">
        <div className="mock-field-head">
          <span>ABOUT</span>
          <span className="mock-value">v0.5.14 · MIT</span>
        </div>
      </div>
      <div className="mock-update">
        <span className="mock-update-tag">UPDATE AVAILABLE</span>
        <span className="mock-update-size">12.4 MB</span>
      </div>
      <div className="mock-progress">
        <i />
      </div>
      <div className="mock-links">
        <span>GITHUB ↗</span>
        <span>REPORT A BUG</span>
      </div>
    </div>
  )
}

function ControlPreview() {
  return (
    <div className="control-preview" aria-hidden="true">
      <div className="preview-sidebar">
        <span className="preview-logo">
          <img src="/logo.png" alt="" />
        </span>
        <div className="preview-nav">
          <span className="active">
            <Icon name="sliders" />
          </span>
          <span>
            <Icon name="mouse" />
          </span>
          <span>
            <Icon name="shield" />
          </span>
        </div>
        <Icon name="cursor" />
      </div>
      <div className="preview-main">
        <div className="preview-topbar">
          <div>
            <small>Device</small>
            <strong>Razer Viper Mini</strong>
          </div>
          <span className="preview-status">
            <i /> Connected
          </span>
        </div>
        <div className="preview-content">
          <div className="preview-heading">
            <small>Performance</small>
            <strong>Fine-tune your mouse</strong>
          </div>
          <div className="preview-card preview-dpi">
            <div>
              <small>DPI sensitivity</small>
              <strong>
                1600 <em>DPI</em>
              </strong>
            </div>
            <span className="preview-profile">Profile 1</span>
            <div className="preview-range">
              <i />
            </div>
            <div className="range-labels">
              <span>100</span>
              <span>8,500</span>
            </div>
          </div>
          <div className="preview-grid">
            <div className="preview-card">
              <small>Polling rate</small>
              <strong>
                1000 <em>Hz</em>
              </strong>
            </div>
            <div className="preview-card">
              <small>Lighting</small>
              <strong>Wave</strong>
            </div>
          </div>
          <div className="preview-save">Save changes</div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ClickSpark sparkColor="#ffffff" sparkSize={6} sparkRadius={20} sparkCount={8} duration={450}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Gear Hub home">
          <img className="wordmark-mark" src="/logo.png" alt="" />
          <span>Gear Hub</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="github-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Icon name="github" />
            <span>GitHub</span>
          </a>
          <a className="header-cta" href="#download">
            <Icon name="download" />
            Download {VERSION}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-dots" aria-hidden="true">
            <DotField
              dotRadius={1.8}
              dotSpacing={15}
              cursorRadius={380}
              bulgeOnly
              bulgeStrength={50}
              glowRadius={200}
              glowColor="#0a0a0a"
              gradientFrom="rgba(255, 255, 255, 0.38)"
              gradientTo="rgba(255, 255, 255, 0.12)"
            />
          </div>
          <div className="hero-copy-block">
            <p className="launch-notice" role="status">
              <span className="launch-notice-dot" aria-hidden="true"></span>
              v{VERSION} · Windows · MIT licensed
            </p>
            <h1>
              All your gear.
              <br />
              <span>One control panel.</span>
            </h1>
            <p className="hero-copy">
              Gear Hub is an offline control panel for supported gaming mice and keyboards. It talks
              directly to your hardware over HID — no cloud, no account, no drivers.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                Download {VERSION} <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
            <div className="compatibility" aria-label="Platform support">
              <span className="compatibility-label">Windows</span>
              <ul>
                <li>NSIS installer</li>
                <li className="supported">Auto-updates</li>
                <li className="supported">No drivers</li>
              </ul>
            </div>
          </div>

          <div className="product-stage" aria-label="Gear Hub control panel preview">
            <div className="stage-orbit stage-orbit-one" aria-hidden="true"></div>
            <div className="stage-orbit stage-orbit-two" aria-hidden="true"></div>
            <div className="device-visual">
              <span className="device-caption">Gear Hub</span>
              <img src="/razer_viper_mini.png" alt="Razer Viper Mini" />
              <div className="device-meta">
                <span>Offline control</span>
                <span className="connected">
                  <i></i> Local HID
                </span>
              </div>
            </div>
            <ControlPreview />
          </div>
        </section>

        <section className="principles" aria-label="Gear Hub principles">
          <article>
            <span className="icon-box">
              <Icon name="shield" />
            </span>
            <div>
              <h2>Offline by design</h2>
              <p>Every read and write happens over local HID. Unplug the internet — everything still works.</p>
            </div>
          </article>
          <article>
            <span className="icon-box">
              <Icon name="mouse" />
            </span>
            <div>
              <h2>No drivers, no bloatware</h2>
              <p>Gear Hub speaks HID directly to the hardware. No vendor utilities or background services.</p>
            </div>
          </article>
          <article>
            <span className="icon-box">
              <Icon name="sliders" />
            </span>
            <div>
              <h2>One interface</h2>
              <p>Every supported device uses the same clear layout, showing only what that device provides.</p>
            </div>
          </article>
        </section>

        <section id="devices" className="devices section-block">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Compatibility</p>
              <h2>
                Verified on
                <br />
                <span>real hardware.</span>
              </h2>
            </div>
            <p>Every model below ships with its own HID driver. Available controls vary by device.</p>
          </div>
          <div className="brand-marquee" aria-hidden="true">
            <div className="brand-track">
              <div className="brand-group">
                {['Razer', 'Redragon', 'Aula', 'Logitech', 'Kreo', 'More soon'].map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
              <div className="brand-group">
                {['Razer', 'Redragon', 'Aula', 'Logitech', 'Kreo', 'More soon'].map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>
          </div>
          <ul className="supported-index">
            {deviceBrands.map((b) => (
              <li className="supported-brand" key={b.brand}>
                <h3>{b.brand}</h3>
                <ul>
                  {b.models.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="support-request">
            More devices — including other peripheral types — land with every release.{' '}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              See the full list on GitHub.
            </a>
          </p>
        </section>

        <section id="privacy" className="offline section-block">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Privacy</p>
              <h2>
                Why offline
                <br />
                <span>matters.</span>
              </h2>
            </div>
            <p>Gear Hub is built around one idea: your gear is yours. Nothing leaves your machine.</p>
          </div>
          <div className="offline-grid">
            {privacyStats.map((s, i) => (
              <AnimatedContent key={s.label} distance={30} duration={0.8} delay={i * 0.06} threshold={0.2}>
                <div className="offline-stat">
                  <p className="offline-big">{s.big}</p>
                  <p className="offline-label">{s.label}</p>
                  <p className="offline-copy">{s.copy}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        <section id="settings" className="settings section-block">
          <div className="settings-card">
            <div className="settings-intro">
              <span className="icon-box icon-box-light">
                <Icon name="sliders" />
              </span>
              <p className="eyebrow">Settings</p>
              <h2>
                Self-updating,
                <br />
                transparent to the core.
              </h2>
              <p>
                The Settings page packs app info, live update status with download and restart-to-install,
                GitHub and website links, and a one-click Report a bug — all in the sidebar footer.
              </p>
              <a className="settings-cta" href={ISSUES_URL} target="_blank" rel="noreferrer">
                Report a bug <Icon name="arrow" />
              </a>
            </div>
            <div className="settings-panel">
              <SettingsMock />
            </div>
          </div>
        </section>

        <section id="download" className="closing">
          <p className="eyebrow">Download</p>
          <h2>
            Gear Hub {VERSION}.
            <br />
            <span>Offline, one device at a time.</span>
          </h2>
          <p>
            Open source, MIT licensed. One-click Windows installer from GitHub — install once, and the
            app updates itself in place from then on.
          </p>
          <div className="closing-actions">
            <a className="button button-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Download for Windows <Icon name="download" />
            </a>
            <a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Get it on GitHub
            </a>
          </div>
          <p className="closing-meta">
            v{VERSION} · ELECTRON 33 · REACT 18 · WINDOWS · NSIS INSTALLER
          </p>
        </section>

        <section id="faq" className="faq section-block">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>
                A few quick
                <br />
                <span>answers.</span>
              </h2>
            </div>
            <p>The essentials about privacy, compatibility, updates, and contributing.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark footer-wordmark" href="#top">
          <img className="wordmark-mark" src="/logo.png" alt="" />
          <span>Gear Hub</span>
        </a>
        <span>Offline control for your gaming gear.</span>
        <div className="footer-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={ISSUES_URL} target="_blank" rel="noreferrer">
            Report a bug
          </a>
        </div>
      </footer>
    </ClickSpark>
  )
}

export default App
