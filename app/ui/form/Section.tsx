import React from 'react'

const Section = ({children, title, description}: {children: React.ReactNode; title?: string; description?: string}) => {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">{title}</h2>
      {!!description && <p className="mt-1 text-sm/6 text-gray-600">{description}</p>}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {children}        
      </div>
    </div>
  )
}

export default Section