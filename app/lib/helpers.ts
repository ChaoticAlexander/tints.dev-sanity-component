import {nanoid} from 'nanoid'

import {createDistributionValues, createHueScale, createSaturationScale} from './scales'
import {PaletteConfig} from '~/types/palette'
import {DEFAULT_PALETTE_CONFIG, RANDOM_PALETTES} from '~/lib/constants'

export function luminanceFromRGB(r: number, g: number, b: number) {
  // Formula from WCAG 2.0
  const [R, G, B] = [r, g, b].map(function (c) {
    c /= 255 // to 0-1 range
    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 21.26 * R + 71.52 * G + 7.22 * B
}

export function luminanceFromHex(H: string) {
  return round(luminanceFromRGB(...Object.values(hexToRGB(H))), 2)
}

export function lightnessFromHSLum(H: number, S: number, Lum: number) {
  const vals = {}
  for (let L = 99; L >= 0; L--) {
    vals[L] = Math.abs(Lum - luminanceFromRGB(...Object.values(HSLtoRGB(H, S, L))))
  }

  // Run through all these and find the closest to 0
  let lowestDiff = 100
  let newL = 100
  for (let i = Object.keys(vals).length - 1; i >= 0; i--) {
    if (vals[i] < lowestDiff) {
      newL = i
      lowestDiff = vals[i]
    }
  }

  return newL
}

export function hexToRGB(H: string) {
  if (H.length === 6 && !H.startsWith(`#`)) {
    H = `#${H}`
  }

  let r = `0`
  let g = `0`
  let b = `0`
  if (H.length === 4) {
    r = `0x${H[1]}${H[1]}`
    g = `0x${H[2]}${H[2]}`
    b = `0x${H[3]}${H[3]}`
  } else if (H.length === 7) {
    r = `0x${H[1]}${H[2]}`
    g = `0x${H[3]}${H[4]}`
    b = `0x${H[5]}${H[6]}`
  }

  return {r, g, b}
}

export function hexToHSL(H: string) {
  if (H.length === 6 && !H.startsWith(`#`)) {
    H = `#${H}`
  }

  // Convert hex to RGB first
  let {r, g, b} = hexToRGB(H)
  // Then to HSL
  r /= 255
  g /= 255
  b /= 255
  const cmin = Math.min(r, g, b)
  const cmax = Math.max(r, g, b)
  const delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  //   return `hsl(${h},${s}%,${l}%)`;
  return {h, s, l}
}

export function HSLtoRGB(h: number, s: number, l: number) {
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (h >= 0 && h < 60) {
    r = c
    g = x
    b = 0
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
    b = 0
  } else if (h >= 120 && h < 180) {
    r = 0
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    r = 0
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    g = 0
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    g = 0
    b = x
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  }
}

export function HSLToHex(h, s, l) {
  let {r, g, b} = HSLtoRGB(h, s, l)

  // Having obtained RGB, convert channels to hex
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  // Prepend 0s, if necessary
  if (r.length === 1) r = `0${r}`
  if (g.length === 1) g = `0${g}`
  if (b.length === 1) b = `0${b}`

  return `#${r}${g}${b}`
}

export function isHex(value: string) {
  if (value.length === 6 && !value.startsWith(`#`)) {
    value = `#${value}`
  }

  const re = new RegExp(/^#[0-9A-F]{6}$/i)

  return re.test(value.toUpperCase())
}

export function isValidName(name: string) {
  const re = new RegExp(/^[A-Za-z]{3,24}$/i)

  return re.test(name)
}

export function round(value: number, precision: number = 0) {
  const multiplier = Math.pow(10, precision)
  return Math.round(value * multiplier) / multiplier
}

export function createSwatches(palette: PaletteConfig) {
  const {value} = palette

  // Tweaks may be passed in, otherwise use defaults
  const useLightness = palette.useLightness ?? DEFAULT_PALETTE_CONFIG.useLightness
  const h = palette.h ?? DEFAULT_PALETTE_CONFIG.h
  const s = palette.s ?? DEFAULT_PALETTE_CONFIG.s
  const lMin = palette.lMin ?? DEFAULT_PALETTE_CONFIG.lMin
  const lMax = palette.lMax ?? DEFAULT_PALETTE_CONFIG.lMax

  // Create hue and saturation scales based on tweaks
  const hueScale = createHueScale(h)
  const saturationScale = createSaturationScale(s)

  // Get the base hex's H/S/L values
  const {h: valueH, s: valueS, l: valueL} = hexToHSL(value)

  // Create lightness scales based on tweak + lightness/luminance of current value
  const lightnessValue = useLightness ? valueL : luminanceFromHex(value)
  const distributionScale = createDistributionValues(lMin, lMax, lightnessValue)

  const swatches = hueScale.map(({key, tweak}, i) => {
    // Hue value must be between 0-360
    // todo: fix this inside the function
    let newH = valueH + hueScale[i].tweak
    newH = newH < 0 ? 360 + newH - 1 : newH
    newH = newH > 720 ? newH - 360 : newH
    newH = newH > 360 ? newH - 360 : newH

    // Saturation must be between 0-100
    // todo: fix this inside the function
    let newS = valueS + saturationScale[i].tweak
    newS = newS > 100 ? 100 : newS

    const newL = useLightness
      ? distributionScale[i].tweak
      : lightnessFromHSLum(newH, newS, distributionScale[i].tweak)

    const newHex = HSLToHex(newH, newS, newL)
    const paletteI = key

    return {
      // Used to display swatches
      stop: paletteI,
      hex: newHex,
      // Used in graphs
      h: newH,
      hScale: hueScale[i].tweak,
      s: newS,
      sScale: saturationScale[i].tweak,
      l: newL,
    }
  })

  return swatches
}

export function createRandomPalette(currentValues: string[] = []) {
  const randomsWithoutCurrentValues = RANDOM_PALETTES.filter((p) =>
    currentValues?.length
      ? !currentValues.map((v) => v.toUpperCase()).includes(p.value.toUpperCase())
      : true
  )

  const defaults = {
    id: nanoid(),
    ...randomsWithoutCurrentValues[Math.floor(Math.random() * randomsWithoutCurrentValues.length)],
    useLightness: DEFAULT_PALETTE_CONFIG.useLightness,
    swatches: [],
  }

  const palette = {
    ...defaults,
    swatches: createSwatches(defaults),
  }

  return palette
}

export function removeTrailingSlash(s: string) {
  return s.endsWith('/') ? s.slice(0, -1) : s
}