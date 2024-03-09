import React from 'react'
import Stepper from './stepper';
import Header from '@/Components/shared/Header/Header';

const page=()=> {
  return (
      <div>
      <Header />
      <div className='mt-4 px-5'>
        <Stepper />
      </div>
    </div>
  )
}

export default page;