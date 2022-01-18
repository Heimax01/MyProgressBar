import React from 'react'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'

const ProgressBar: React.FC = () => {
  const data = [
    {
      Introduction_Html: 1000,
      Html_Beginers: 6500,
      CSS_Introduction: 1500,
      Javascript_Introduction: 4500,
      SQL_Full: 4000,
      CSharp_Full: 17000,
      Asp_Net: 23000,
      Net_Core: 25500,
      Modern_Web: 97000
    }
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical" margin={{ top: 30 }}>
        <XAxis type="number" hide domain={[0, 'dataMax']} />
        <YAxis dataKey="name" hide reversed type="category" />

        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          margin={{ bottom: 50 }}
        />
        <Tooltip />
        <Bar
          barSize={100}
          stackId="a"
          dataKey="Introduction_Html"
          fill="#ff6f31"
        />
        <Bar barSize={100} stackId="a" dataKey="Html_Beginers" fill="#077207" />
        <Bar
          barSize={100}
          stackId="a"
          dataKey="CSS_Introduction"
          fill="#31a2ff"
        />
        <Bar
          barSize={100}
          stackId="a"
          dataKey="Javascript_Introduction"
          fill="#dd31ff"
        />
        <Bar barSize={100} stackId="a" dataKey="SQL_Full" fill="#6252b9" />
        <Bar barSize={100} stackId="a" dataKey="CSharp_Full" fill="#c8d600" />
        <Bar barSize={100} stackId="a" dataKey="Asp_Net" fill="#3f31ff" />
        <Bar barSize={100} stackId="a" dataKey="Net_Core" fill="#00d9ff" />
        <Bar barSize={100} stackId="a" dataKey="Modern_Web" fill="#021b02" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ProgressBar
