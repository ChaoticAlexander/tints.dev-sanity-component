import {DEFAULT_MODE} from '~/lib/constants'
import {createDisplayColor} from '~/lib/createDisplayColor'
import type {Mode, SwatchValue} from '~/types'

type SwatchProps = {
  swatch: SwatchValue
  mode?: Mode,
  highlight: boolean,
}

export default function Swatch(props: SwatchProps) {
  const {swatch, mode = DEFAULT_MODE, highlight = false} = props

  let display = createDisplayColor(swatch.hex, mode)

  return (
    <div className="flex-1 flex flex-col gap-2 sm:gap-1">
      <div
        className="h-12 xl:h-16 w-full rounded shadow-inner flex flex-col items-center justify-center transition-colors duration-500"
        style={{backgroundColor: display || `transparent`}}
      />
      <div className="rotate-90 text-right sm:rotate-0 flex flex-col sm:flex-row sm:items-center lg:flex-col xl:flex-row xl:items-center justify-between px-1">
        {highlight ? (
          <div className="font-mono" style={{color: swatch.hex, fontWeight: 'bold'}}>
            {swatch.stop}
          </div>
        ) : (
          <div className="font-mono">{swatch.stop}</div>
        )}
      </div>
    </div>
  )
}
