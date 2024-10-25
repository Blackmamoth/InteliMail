import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='px-8 md:px-10  pt-6 pb-12 max-w-7xl md:mx-auto'>
       {children}
    </div>
  )
}

export default MaxWidthWrapper
