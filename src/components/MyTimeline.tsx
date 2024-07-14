import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function MyTimeline() {
  return (
    <Timeline >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>YMCA</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Gemini</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>IndusOS</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Airtel Payments Bank</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>C2FO</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
        </TimelineSeparator>
        <TimelineContent>Canada</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
