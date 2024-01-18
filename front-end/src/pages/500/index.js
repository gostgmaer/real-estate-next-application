import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
        <p className="text-2xl text-gray-600 mb-8">Internal Server Error</p>
        <Link href="/">
        Go back home
        </Link>
      </div>
    </div>
  )
}

export default Index