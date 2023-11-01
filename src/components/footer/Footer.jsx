import React from 'react'

const Footer = () => {
  return (
    <div className='h-[15dvh] flex justify-between items-center px-4 py-5'>
      <button className='h-2/3 rounded-sm text-center text-gray-500 px-3'>Go Back</button>
      <button className='bg-[#172A57] h-2/3 rounded-sm text-center text-white px-3'>Next Step</button>
    </div>
  )
}

export default Footer