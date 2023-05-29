import React from 'react'

import {ChartComponent,LineSeries,SeriesDirective,SeriesCollectionDirective,Inject,DateTime,Legend,SplineAreaSeries,Tooltip} from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../components/contexts/ContextProvider'
import {areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy'
import Header from '../../components/Header'
const Area = () => {
    const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in percentage"/>
   <ChartComponent
   id="area-chart"
   height="420px"
   primaryXAxis={areaPrimaryXAxis}
   primaryYAxis={areaPrimaryYAxis}
   chartArea={{border:{Width:0}}}
   tooltip={{enable:true}}
   background={currentMode==='Dark' ?
'#33373E':'#fff'}
   >
    <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
    <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=>
        <SeriesDirective key={index}{...item}/>)}
    </SeriesCollectionDirective>
   </ChartComponent>
   </div>
  )
}

export default Area