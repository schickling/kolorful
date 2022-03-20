import cn from 'classnames'
import { RgbColorPicker } from 'react-colorful'
import { useAppState } from 'src/hooks/useAppState'
import { rgb } from 'src/utils/color'

export function Sidebar() {
  return (
    <aside
      className={cn(
        'w-[32rem] flex flex-col overflow-y-auto',
        'p-4 space-y-8',
        'bg-neutral-900 ',
        'border-l border-neutral-800',
      )}
    >
      <ImagePreview />
      <ColorPickers />
    </aside>
  )
}

function ImagePreview() {
  const { image, colors } = useAppState()

  if (!image) return null

  return (
    <section className={cn('flex flex-col space-y-2', 'pb-4 border-b border-neutral-800')}>
      <span className="text-sm text-neutral-50">Original Image</span>

      <div className="max-h-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Preview" src={image} className="max-h-full rounded" />
      </div>

      <div className="flex gap-2 flex-wrap">
        {colors.map((c, i) => (
          <div key={i} className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: rgb(c) }} />
        ))}
      </div>
    </section>
  )
}

function ColorPickers() {
  const { colors, setColor } = useAppState()

  return (
    <section className="flex flex-col space-y-4">
      <span className="text-sm text-neutral-50">Derived Colors</span>

      {colors.map((c, idx) => (
        <RgbColorPicker
          key={idx}
          color={{
            r: c.value[0],
            g: c.value[1],
            b: c.value[2],
          }}
          onChange={(c) => {
            setColor(idx, { type: 'rgb', value: [c.r, c.g, c.b] })
          }}
        />
      ))}
    </section>
  )
}