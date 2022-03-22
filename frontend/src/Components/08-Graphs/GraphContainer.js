import React from 'react';
import { Card, Row, Col } from 'antd';
import WeeklySleep from './WeeklySleep';
import MonthlySleep from './MonthlySleep';
import DayOfTheWeek from './DayOfTheWeek';

export default function GraphContainer() {
    return (
        <div style={{ padding: 24, minHeight: 360 }}>
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    <Col flex="auto">
                        <Card title="Chart 1" style={{minHeight: "30vh"}}>
                        Chart Content
                        </Card>
                    </Col>
                    <Col flex="auto">
                        <Card title="Chart 2" style={{minHeight: "30vh"}}>
                        Chart Content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginTop: "25px"}}>
                    <Col flex="auto">
                        <Card title="Chart 3" style={{minHeight: "40vh"}}>
                        Chart content
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}