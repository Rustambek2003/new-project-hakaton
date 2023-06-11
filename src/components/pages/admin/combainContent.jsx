import React from 'react'
import { Route, Routes } from 'react-router'

import Content from './content/Content'

const CombainContent = () => {
  return (
    <div>
        <Routes>
                <Route path='/' element={<Content />} />
                {/* <Route path='/about' element={<About />} /> */}
            </Routes>
    </div>
  )
}

export default CombainContent
