import React from 'react'
import Header from '../../components/Header'
import LineChart from '../../components/charts/LineChart'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <LineChart/>
      </div>
    </div>
  )
}

export default Line