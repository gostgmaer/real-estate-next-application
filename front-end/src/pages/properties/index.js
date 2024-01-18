import React from 'react'

const Index = () => {
  return (
    <div>index</div>
  )
}

export default Index


export const getServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: '/properties/search',
      permanent: true,
    },
  };
};
