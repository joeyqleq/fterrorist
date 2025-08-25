"use client"

import { TetrisLoading } from "@/components/ui/tetris-loader"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <TetrisLoading />
    </div>
  )
}
