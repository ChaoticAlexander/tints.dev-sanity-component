import React from 'react'
import ReactDOM from 'react-dom/client'
import { Palette, createSwatches } from '../src'
import type { PaletteConfig } from '../src/types'

// Debug logging
console.log('Palette component:', Palette)

const basePalette: PaletteConfig = {
  value: '2522FC',
  valueStop: 500,
  useLightness: true,
  h: 0,
  s: 0,
  lMin: 0,
  lMax: 100,
  mode: 'hex',
  swatches: []
}

const DEFAULT_PALETTE: PaletteConfig = {
  ...basePalette,
  swatches: createSwatches(basePalette)
}

function DevApp() {
  const [palette, setPalette] = React.useState<PaletteConfig>(DEFAULT_PALETTE)
  const [error, setError] = React.useState<string | null>(null)

  const handlePaletteUpdate = (newPalette: PaletteConfig) => {
    setPalette(newPalette)
  }

  React.useEffect(() => {
    // Debug logging
    console.log('DevApp mounted')
    console.log('Palette component available:', !!Palette)
    console.log('Initial palette:', palette)
  }, [])

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Error</h2>
        <pre>{error}</pre>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Palette Component</h2>
        {Palette ? (
          <Palette
            palette={palette}
            updateGlobal={handlePaletteUpdate}
            currentMode="hex"
          />
        ) : (
          <div className="text-red-600">Palette component not loaded</div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Current Palette State</h2>
        <pre className="bg-gray-50 p-4 rounded overflow-auto">
          {JSON.stringify(palette, null, 2)}
        </pre>
      </div>
    </div>
  )
}

const appElement = document.getElementById('app')
if (!appElement) {
  throw new Error('App element not found')
}

ReactDOM.createRoot(appElement).render(
  <React.StrictMode>
    <DevApp />
  </React.StrictMode>
) 