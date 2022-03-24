import React from 'react';
import { Card, Row, Col } from 'antd';
import WeeklySleep from './WeeklySleep';
import MonthlySleep from './MonthlySleep';
import DayOfTheWeek from './DayOfTheWeek';

export default function GraphContainer() {
    return (
        <div style={{ padding: 24, minHeight: 360 }}>
            <div className="site-card-wrapper">
                <Row gutter={[5, 5]}>
                    <Col flex="auto">
                        <Card style={{minHeight: "30vh"}}>
                            <WeeklySleep />
                        </Card>
                    </Col>
                    <Col flex="auto">
                        <Card style={{minHeight: "30vh"}}>
                            <MonthlySleep />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={15} style={{marginTop: "25px"}}>
                    <Col flex="auto">
                        <Card style={{minHeight: "40vh"}}>
                            <DayOfTheWeek />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}