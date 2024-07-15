import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {SwatchIcon} from '@heroicons/react/24/solid'
import React, {useEffect} from 'react'
import {HexColorPicker} from 'react-colorful'
import {useDebounceValue} from 'usehooks-ts'

export default function StrippedColorPicker({
  color,
  onChange,
  ringStyle,
}: {
  color: string
  onChange: Function
  ringStyle: React.CSSProperties
}) {
  const [value, setValue] = useDebounceValue(color, 500)

  // Update local `value` on form change
  useEffect(() => {
    setValue(color)
  }, [color, setValue])

  // Update global `value` on picker change
  useEffect(() => {
    if (value) {
      onChange(value.toUpperCase())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Popover className="relative">
      <PopoverButton
        style={ringStyle}
        className="w-full p-2 border border-gray-200 bg-gray-50 focus:outline-none focus:ring focus:bg-gray-100 focus:border-gray-300 text-gray-500 focus:text-gray-900"
      >
        <SwatchIcon className="w-6 h-auto" />
        <span className="sr-only">Open Color Picker</span>
      </PopoverButton>

      <PopoverPanel className="absolute right-0 z-50 bg-white rounded-lg shadow p-1 pb-2 translate-y-1">
        {({close}) => (
          <div className="flex flex-col items-justify-center gap-4">
            <HexColorPicker
              color={value.startsWith(`#`) ? value : `#${value}`}
              onChange={setValue}
            />
          </div>
        )}
      </PopoverPanel>
    </Popover>
  )
}
