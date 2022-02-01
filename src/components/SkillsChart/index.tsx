import React from 'react'

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts'

const data = [
  {
    subject: 'Front End',
    A: 95,
    fullMark: 150
  },
  {
    subject: 'Back End',
    A: 85,
    fullMark: 150
  },
  {
    subject: 'Design',
    A: 96,
    fullMark: 150
  },
  {
    subject: 'POO',
    A: 80,
    fullMark: 150
  },
  {
    subject: 'MVC',
    A: 86,
    fullMark: 150
  },
  {
    subject: 'SQL',
    A: 110,
    fullMark: 150
  }
]

const SkillsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Heitor"
          dataKey="A"
          stroke="#7a75d4"
          fill="#7a75d4"
          fillOpacity={0.6}
        />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default SkillsChart
