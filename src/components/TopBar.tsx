import type { FC } from 'react'

const TopBar: FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 bg-panel px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded bg-cta" />
        <h1 className="text-lg font-semibold text-white">Background Remover</h1>
      </div>
      <div />
    </header>
  )
}

export default TopBar
