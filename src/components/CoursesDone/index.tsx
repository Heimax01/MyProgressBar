import React from 'react'

// import { Container } from './styles';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

const CoursesDone: React.FC = () => {
  const data = [
    {
      Introduction_Html: 1,
      Html_Beginers: 1,
      CSS_Introduction: 1,
      Javascript_Introduction: 1,
      SQL_Full: 1,
      CSharp_Full: 1,
      Asp_Net: 1,
      Net_Core: 0,
      Modern_Web: 0
    }
  ]

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} layout="vertical" barGap={15} barCategoryGap={10}>
        <XAxis type="number" hide domain={[0, 'dataMax']} />
        <YAxis dataKey="name" hide reversed type="category" />

        <Tooltip />
        <Bar barSize={30} dataKey="Introduction_Html" fill="#02990a" />
        <Bar barSize={30} dataKey="Html_Beginers" fill="#02990a" />
        <Bar barSize={30} dataKey="CSS_Introduction" fill="#02990a" />
        <Bar barSize={30} dataKey="Javascript_Introduction" fill="#02990a" />
        <Bar barSize={30} dataKey="SQL_Full" fill="#02990a" />
        <Bar barSize={30} dataKey="CSharp_Full" fill="#02990a" />
        <Bar barSize={30} dataKey="Asp_Net" fill="#02990a" />
        <Bar barSize={30} dataKey="Net_Core" fill="#00d9ff" />
        <Bar barSize={30} dataKey="Modern_Web" fill="#021b02" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CoursesDone
