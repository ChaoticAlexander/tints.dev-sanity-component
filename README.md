# @chaoticalexander/tints-palette

A standalone palette component extracted from [tints.dev](https://github.com/SimeonGriggs/tints.dev).

This package contains just the palette component from the original tints.dev project, stripped down for easier reuse in other projects. All credit for the original implementation goes to [Simeon Griggs](https://github.com/SimeonGriggs).

## Changes from Original

- Extracted only the palette component
- Removed unnecessary dependencies
- Simplified for standalone use
- Added development environment for testing

## Installation

```bash
pnpm add @chaoticalexander/tints-palette
```

## Usage

```tsx
import { Palette } from '@chaoticalexander/tints-palette'
import '@chaoticalexander/tints-palette/dist/styles.css'

function App() {
  const [palette, setPalette] = useState({
    value: '2522FC',
    valueStop: 500,
    useLightness: true,
    h: 0,
    s: 0,
    lMin: 0,
    lMax: 100,
    mode: 'hex',
    swatches: []
  })

  return (
    <Palette
      palette={palette}
      updateGlobal={setPalette}
      currentMode="hex"
    />
  )
}
```

## Development

To test the component locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## License

MIT - Same as the original project

## Credits

- Original project: [tints.dev](https://github.com/SimeonGriggs/tints.dev)
- Original author: [Simeon Griggs](https://github.com/SimeonGriggs)
- Fork maintained by: [Alexander Tananica](https://github.com/ChaoticAlexander)
