import React from 'react'

import * as S from './styles'

import ProgressBar from '../ProgressBar'
import Table from 'components/Table'
import CoursesDone from 'components/CoursesDone'
import SkillsChart from 'components/SkillsChart'

const ProgressBarPage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Heitor&apos;s Progress</S.Title>

      <S.ProgressContainer>
        <S.ProgressTitle>Courses Per Hour</S.ProgressTitle>
        <ProgressBar />
        <S.TableHourTextContainer>
          <S.TableHourText>Current progress per hour</S.TableHourText>
        </S.TableHourTextContainer>
        <Table />
      </S.ProgressContainer>
      <S.Container>
        <S.CoursesDoneContainer>
          <S.CoursesDoneTitle>Courses Done</S.CoursesDoneTitle>
          <S.CoursesDoneCore>
            <S.CoursesDoneLegendContainer>
              <S.CoursesDoneLegend className="course1">
                Html Intro.
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course2">
                Html Beginers
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course3">
                CSS intro.
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course4">
                JS Intro.
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course5">
                Sql Full
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course6">
                C# full
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course7">
                Asp.NET
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course8">
                .NET Core
              </S.CoursesDoneLegend>
              <S.CoursesDoneLegend className="course9">
                Modern Web
              </S.CoursesDoneLegend>
            </S.CoursesDoneLegendContainer>
            <CoursesDone />
          </S.CoursesDoneCore>
        </S.CoursesDoneContainer>
        <S.SkillsContainer>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          <SkillsChart />
        </S.SkillsContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default ProgressBarPage
