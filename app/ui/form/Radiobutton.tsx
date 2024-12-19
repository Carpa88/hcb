'use client'
import React, { useState } from 'react'

const Radiobutton = (
  {name, value, label, checked}:
  {name: string; value: string; label:string; checked?: string  }) => {
 
  const [selectedOption, setSelectedOption] = useState('');
  const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSelectedOption(val); 
  };
  return (
    <div className="flex items-center gap-x-3">
      <input
        defaultValue={checked}
        id={value}
        name={name}
        value={value}
        type="radio"
        onChange={onChecked}
        checked={selectedOption === value}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
      />
      <label htmlFor={value} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
    </div>
  )
}

export default Radiobutton