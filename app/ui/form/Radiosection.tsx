import React from 'react'

const Radiosection = ({children, title, description}:{children:React.ReactNode, title:string, description?: string}) => {
  return (
    <div className="sm:col-span-2">
      <fieldset>
        <legend className="text-sm/6 font-semibold text-gray-900">{title}</legend>
        {!!description && <p className="mt-1 text-sm/6 text-gray-600">{description}</p>}
        <div className="mt-6 space-y-6">
          {children}
        </div>
      </fieldset>
    </div>
  )
}

export default Radiosection