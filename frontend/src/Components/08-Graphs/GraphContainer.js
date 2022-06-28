import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import WeeklySleep from './WeeklySleep';
import MonthlySleep from './MonthlySleep';
import DayOfTheWeek from './DayOfTheWeek';

export default function GraphContainer() {
  const data = useOutletContext().data;

  return (
    <div style={{ padding: 5 }}>
      <Row gutter={[5, 5]}>
        <Col flex="auto">
          <Card>
            <WeeklySleep data={data} />
          </Card>
        </Col>
        <Col flex="auto">
          <Card>
            <MonthlySleep data={data} />
          </Card>
        </Col>
      </Row>
      <Row gutter={15}>
        <Col flex="auto">
          <Card style={{ minHeight: '40vh' }}>
            <DayOfTheWeek data={data} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
