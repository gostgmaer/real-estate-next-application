import Table from '@/components/global/blocks/Table';
import Layout from '@/components/global/layout';
import React from 'react'
import { MdEdit,MdDelete , MdPageview } from 'react-icons/md';

const Index = () => {

  const data = React.useMemo(
    () => [
      { id: 1, name: 'Property 1', price: '$500,000', location: 'City A' },
      { id: 2, name: 'Property 2', price: '$600,000', location: 'City B' },
      // Add more properties as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Price', accessor: 'price' },
      { Header: 'Location', accessor: 'location' },
    ],
    []
  );

  const buttons = [
    {
      label: <MdEdit/>,
      onClick: (property) => {
        console.log('Edit property:', property);
      },
    },
    {
      label: <MdPageview/>,
      onClick: (property) => {
        console.log('View property:', property);
      },
    },
    {
      label: <MdDelete/>,
      onClick: (property) => {
        console.log('Delete property:', property);
      },
    },
    // Add more buttons as needed
  ];


  return (
   <Layout>
     <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Property Listings</h1>
      <Table columns={columns} data={data} buttons={buttons} />
    </div>
   </Layout>
  )
}

export default Index