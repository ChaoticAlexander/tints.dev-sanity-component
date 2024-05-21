import {Switch} from '@headlessui/react'
import {
  AdjustmentsHorizontalIcon,
  CodeBracketIcon,
  HashtagIcon,
  LinkIcon,
  TrashIcon,
} from '@heroicons/react/24/solid'
import React, {useEffect, useState} from 'react'
import {useCopyToClipboard} from 'usehooks-ts'

import Graphs from '~/components/Graphs'
import Swatch from '~/components/Swatch'
import {DEFAULT_PALETTE_CONFIG, DEFAULT_STOPS} from '~/lib/constants'
import {createSwatches} from '~/lib/createSwatches'
import {isHex, isValidName} from '~/lib/helpers'
import {createCanonicalUrl} from '~/lib/responses'
import type {Mode, PaletteConfig} from '~/types'

import ButtonIcon from './ButtonIcon'
import ColorPicker from './ColorPicker'
import StopSelect from './StopSelect'

const tweakInputs = [
  {
    name: `h`,
    title: `Hue`,
    value: DEFAULT_PALETTE_CONFIG.h,
  },
  {
    name: `s`,
    title: `Saturation`,
    value: DEFAULT_PALETTE_CONFIG.s,
  },
  {
    name: `lMax`,
    title: (useLightness: boolean) => (useLightness ? `Lightness Maximum` : `Luminance Maximum`),
    value: DEFAULT_PALETTE_CONFIG.lMax,
  },
  {
    name: `lMin`,
    title: (useLightness: boolean) => (useLightness ? `Lightness Minimum` : `Luminance Minimum`),
    value: DEFAULT_PALETTE_CONFIG.lMin,
  },
]

const paletteInputs = [
  {
    name: `name`,
    title: `Name`,
    value: ``,
    min: 3,
    max: 24,
    pattern: `[A-Za-z]{3,24}`,
    classes: ``,
  },
  {
    name: `value`,
    title: `Value`,
    value: ``,
    min: 6,
    max: 6,
    pattern: `[0-9A-Fa-f]{6}`,
    classes: `pl-7`,
  },
]

export const inputClasses = `w-full p-2 border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring focus:bg-gray-100 focus:border-gray-300 invalid:focus:border-dashed invalid:focus:border-red-500 invalid:focus:bg-red-100 invalid:border-red-500 invalid:bg-red-100`
export const labelClasses = `transition-color duration-200 text-xs font-bold`

type PaletteProps = {
  palette: PaletteConfig
  updateGlobal: (updatedPalette: PaletteConfig) => void
  deleteGlobal?: () => void
  currentMode: Mode
}

export default function Palette(props: PaletteProps) {
  const {palette, updateGlobal, deleteGlobal, currentMode} = props

  const [paletteState, setPaletteState] = useState({
    ...DEFAULT_PALETTE_CONFIG,
    ...palette,
    swatches: palette.swatches ?? createSwatches(palette),
  })
  const [showGraphs, setShowGraphs] = useState(false)
  const [, copy] = useCopyToClipboard()

  // Update global list every time local palette changes
  // ... if name and value are legit
  useEffect(() => {
    const validName = isValidName(paletteState.name) ? paletteState.name : null
    const validValue = isHex(paletteState.value) ? paletteState.value : null

    if (validName && validValue) {
      updateGlobal(paletteState)
    }
  }, [palette, paletteState, updateGlobal])

  const updateName = (name: string) => {
    // Remove current search param
    if (typeof document !== 'undefined' && isValidName(name)) {
      const currentUrl = new URL(window.location.href)
      currentUrl.searchParams.delete(paletteState.name)
      window.history.replaceState({}, '', currentUrl.toString())
    }

    setPaletteState({
      ...paletteState,
      name,
    })
  }

  const updateValue = (value: string) => {
    const newPalette = {
      ...paletteState,
      value,
    }

    const newSwatches = createSwatches(newPalette)

    setPaletteState({
      ...newPalette,
      swatches: newSwatches,
    })
  }

  const updateValueStop = (valueStop: number) => {
    if (!DEFAULT_STOPS.includes(valueStop)) {
      return
    }

    const newPalette = {
      ...paletteState,
      valueStop,
    }

    const newSwatches = createSwatches(newPalette)

    setPaletteState({
      ...newPalette,
      swatches: newSwatches,
    })
  }

  // Handle changes to name or value of palette
  const handlePaletteChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.currentTarget.name === 'name') {
      const newName = e.currentTarget.value ?? ``
      updateName(newName)
    } else if (e.currentTarget.name === 'value') {
      const newValue = e.currentTarget.value ? e.currentTarget.value.toUpperCase() : ``
      updateValue(newValue)
    }
  }

  const handleStopChange = (value: string) => {
    const newValueStop = parseInt(value, 10)
    if (DEFAULT_STOPS.includes(newValueStop)) {
      updateValueStop(newValueStop)
    }
  }

  // Handle any changes to the tweaks values
  const handleTweakChange = (e: React.FormEvent<HTMLInputElement>) => {
    const tweakName = e.currentTarget.name
    const newTweakValue = e.currentTarget.value ? parseInt(e.currentTarget.value, 10) : ``

    const newPalette = {
      ...paletteState,
      [tweakName]: newTweakValue,
    }

    // Don't update swatches if the new value is invalid
    if (!String(newTweakValue)) {
      setPaletteState(newPalette)
      return
    }

    setPaletteState({
      ...newPalette,
      swatches: createSwatches(newPalette),
    })
  }

  // Handle toggle between lightness and luminance
  const handleUseLightnessChange = () => {
    const newPalette = {
      ...paletteState,
      useLightness: !paletteState.useLightness,
    }

    setPaletteState({
      ...newPalette,
      swatches: createSwatches(newPalette),
    })
  }

  const handleCopyURL = () => {
    const shareUrl = createCanonicalUrl([paletteState])

    copy(shareUrl)
  }

  const handleOpenAPI = () => {
    if (typeof document !== 'undefined') {
      const apiUrl = createCanonicalUrl([paletteState], true)

      window.open(apiUrl, '_blank')
    }
  }

  // Handle change from color picker widget (debounced)
  // Do this by faking an event to handlePaletteChange
  const handleColorPickerChange = (newColor: string) => {
    if (newColor && isHex(newColor)) {
      updateValue(newColor.replace(`#`, ``).toUpperCase())
    }
  }

  const ringStyle = {
    '--tw-ring-color': palette.swatches[1].hex,
  } as React.CSSProperties

  return (
    <article id={`s-${palette.value}`} className="grid grid-cols-1 gap-4 text-gray-500">
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {paletteInputs.map((input) => (
          <div
            key={input.name}
            className="flex flex-col gap-1 col-span-2 focus-within:text-gray-900"
          >
            <label className={labelClasses} htmlFor={input.name}>
              {input.title}
            </label>
            <div className="relative flex gap-1 items-center">
              <input
                id={input.name}
                name={input.name}
                className={[inputClasses, input.classes].filter(Boolean).join(' ')}
                value={
                  input.name === 'name' || input.name === 'value' ? paletteState[input.name] : ``
                }
                style={ringStyle}
                onChange={handlePaletteChange}
                pattern={input.pattern}
                min={input.min}
                max={input.max}
                required
              />

              {input.name === 'value' ? (
                <>
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-start text-gray-400">
                    <HashtagIcon className="w-5 ml-2 h-auto" />
                  </div>
                  <ColorPicker
                    color={paletteState.value}
                    onChange={handleColorPickerChange}
                    ringStyle={ringStyle}
                  />
                  <StopSelect
                    value={paletteState.valueStop.toString()}
                    onChange={handleStopChange}
                  />
                </>
              ) : null}
            </div>
          </div>
        ))}
        <div className="col-span-4 sm:col-span-1 p-2 border border-dashed border-gray-200 flex flex-wrap lg:flex-nowrap items-center justify-center gap-2">
          <ButtonIcon
            testId="paletteCopy"
            title="Copy this Palette's URL to clipboard"
            onClick={handleCopyURL}
            icon={LinkIcon}
          />
          <ButtonIcon
            testId="paletteApi"
            title="Open this Palette's API URL"
            onClick={handleOpenAPI}
            icon={CodeBracketIcon}
          />
          <ButtonIcon
            testId="paletteGraphs"
            tone="success"
            onClick={() => setShowGraphs(!showGraphs)}
            tabIndex={-1}
            title={`${showGraphs ? 'Hide' : 'Show'} Graphs`}
            selected={showGraphs}
            icon={AdjustmentsHorizontalIcon}
          />
          <ButtonIcon
            testId="paletteDelete"
            tone="danger"
            onClick={typeof deleteGlobal === 'function' ? deleteGlobal : undefined}
            disabled={Boolean(!deleteGlobal)}
            tabIndex={-1}
            title={`Delete ${paletteState.name}`}
            icon={TrashIcon}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {tweakInputs.map((input) => (
          <div
            key={input.name}
            className="flex flex-col gap-1 justify-between focus-within:text-gray-900"
          >
            <label className={labelClasses} htmlFor={input.name}>
              {typeof input.title === 'string'
                ? input.title
                : input.title(paletteState.useLightness)}
            </label>
            <input
              id={input.name}
              onChange={handleTweakChange}
              className={inputClasses}
              name={input.name}
              value={paletteState[input.name] ?? input.value}
              type="number"
              style={ringStyle}
              required
            />
          </div>
        ))}
        <div className="col-span-4 sm:col-span-1 p-2 flex justify-center items-center gap-1 border border-dashed border-gray-200">
          <span
            className={[labelClasses, paletteState.useLightness ? `` : `text-gray-900`]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="inline lg:hidden">Lu</span>
            <span className="hidden lg:inline">Luminance</span>
          </span>
          <Switch
            checked={paletteState.useLightness}
            onChange={handleUseLightnessChange}
            style={{
              backgroundColor: paletteState.useLightness
                ? paletteState.swatches.find((swatch) => swatch.stop === 800)?.hex
                : paletteState.swatches.find((swatch) => swatch.stop === 300)?.hex,
            }}
            className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200 flex-shrink-0"
          >
            <span className="sr-only">Toggle Lightness or Luminance</span>
            <span
              className={`${
                paletteState.useLightness ? 'translate-x-6' : 'translate-x-1'
              } transition-transform duration-200 inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
          <span
            className={[labelClasses, paletteState.useLightness ? `text-gray-900` : ``]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="inline lg:hidden">Li</span>
            <span className="hidden lg:inline">Lightness</span>
          </span>
        </div>
      </div>

      <div className="grid gap-1 grid-cols-11 sm:grid-cols-4 lg:grid-cols-11 sm:gap-2 text-2xs sm:text-xs">
        {paletteState.swatches
          .filter((swatch) => ![0, 1000].includes(swatch.stop))
          .map((swatch) => (
            <Swatch key={swatch.stop} swatch={swatch} mode={currentMode} />
          ))}
      </div>

      {showGraphs && <Graphs palettes={[paletteState]} />}
    </article>
  )
}
