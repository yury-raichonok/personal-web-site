import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { ImBook } from 'react-icons/im';
import styled from 'styled-components';

const ChapterTitle = styled.div`
  text-align: center;
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  padding: 100px;

  @media (max-width: 500px) {
    font-size: 32px;
    padding: 50px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  background: #e3e3e3;
`;

const TimlineTitle = styled.div`
  font-family: Bebas Neue;
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const TimelineDescription = styled.div`
  font-size: 15px;
`;

const ExpirienceAndAducation = () => {
  return (
    <TimelineContainer id="work">
      <ChapterTitle>
        Work expirience & aducation
      </ChapterTitle>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="09.2021 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <TimlineTitle>EPAM Systems, Grodno, Belarus</TimlineTitle>
          <TimelineDescription>
            Junior Software Engineer
          </TimelineDescription>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12.2020 - 08.2021"
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255 59 0 / 85%)' }}
          iconStyle={{ background: 'rgb(255 59 0 / 85%)', color: '#fff' }}
          icon={<ImBook />}
        >
          <TimlineTitle>IT-Academy, Belarus</TimlineTitle>
          <TimelineDescription>
            Training on courses: "Java Core", "Technologies for developing enterprise solutions in Java"
          </TimelineDescription>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12.2017 - 12.2020"
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <TimlineTitle>AO "GUOV", Saint-Petersburg, Russia</TimlineTitle>
          <TimelineDescription>
            Chief specialist of project manager service
          </TimelineDescription>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12.2016 - 11.2017"
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <TimlineTitle>OOO "ART-KLIMAT", Saint-Petersburg, Russia</TimlineTitle>
          <TimelineDescription>
            Foreman
          </TimelineDescription>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="08.2014 - 11.2015"
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <TimlineTitle>OOO "Borisovspecproject", Borisov, Belarus</TimlineTitle>
          <TimelineDescription>
            Design engineer
          </TimelineDescription>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="09.2009 - 07.2014"
          contentStyle={{ background: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255 59 0 / 85%)' }}
          iconStyle={{ background: 'rgb(255 59 0 / 85%)', color: '#fff' }}
          icon={<ImBook />}
        >
          <TimlineTitle>BNTU, Minsk, Belarus</TimlineTitle>
          <TimelineDescription>
            Higher education in the specialty: Heat and gas supply, ventilation and air protection
          </TimelineDescription>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  )
}

export default ExpirienceAndAducation
