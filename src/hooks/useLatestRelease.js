import { useEffect, useState } from 'react'

const RELEASES_URL = 'https://api.github.com/repos/jazzstack/Gear-Hub/releases/latest'
const RELEASES_PAGE = 'https://github.com/jazzstack/Gear-Hub/releases/latest'

export default function useLatestRelease() {
  const [release, setRelease] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetch(RELEASES_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const asset = (data.assets || []).find(
          (a) => a.name.endsWith('.exe') && !a.name.endsWith('.blockmap'),
        )
        setRelease({
          version: (data.tag_name || '').replace(/^v/i, ''),
          downloadUrl: asset?.browser_download_url || data.html_url || RELEASES_PAGE,
        })
      })
      .catch(() => {
        if (!cancelled) setRelease({ version: '', downloadUrl: RELEASES_PAGE })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return release
}
