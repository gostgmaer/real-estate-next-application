import ProductFilter from '@/components/global/blocks/ProductFilter'
import Layout from '@/components/global/layout'
import React from 'react'

const Index = () => {
  return (
   <Layout>
     <div className='flex py-10 max-w-7xl m-auto'>
<div className=' flex-1'><ProductFilter/></div>
<div className=' flex-[3]'></div>

     </div>
   </Layout>
  )
}

export default Index