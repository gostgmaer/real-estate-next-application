import { PropertyForm } from '@/components/global/forms/addproperty'
import Layout from '@/components/global/layout'
import React from 'react'

const Index = () => {
  return (
    <Layout>
     <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold  m-auto text-center mb-10">Property Listings</h1>
      <div>
        <PropertyForm/>
      </div>
    </div>
   </Layout>
  )
}

export default Index