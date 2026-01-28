import type { FC } from 'react'

const formatDimensions = (width?: number, height?: number) => {
  if (!width || !height) return '—'
  return `${width} × ${height}px`
}

type UploadPanelProps = {
  isDragging: boolean
  dimensions: { width?: number; height?: number }
  onPick: () => void
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void
  onDragLeave: () => void
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void
}

const UploadPanel: FC<UploadPanelProps> = ({
  isDragging,
  dimensions,
  onPick,
  onDragOver,
  onDragLeave,
  onDrop,
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 rounded border-4 
        border-dashed px-6 py-16 text-center ${ isDragging ? 'border-cta bg-white/5 text-white' 
          : 'border-white/10 text-white/70' } max-w-xl`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <p className="text-base font-medium">Drop an image here</p>
      <p className="text-xs text-white/50">
        PNG or JPG
        {/* · {formatDimensions(dimensions.width, dimensions.height)} */}
      </p>
      <button
        className="roundedbg-cta px-5 py-2 text-lg font-semibold text-white transition 
          hover:brightness-110 hover:underline !cursor-pointer"
        onClick={onPick}
        type="button"
      >
        Upload Image
      </button>
    </div>
  )
}

export default UploadPanel
