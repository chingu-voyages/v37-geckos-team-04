import React from 'react';
import { Card, Row, Col } from 'antd';

export default function Temp() {
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="site-card-wrapper">
            <Row gutter={15}>
                <Col>
                <Card title="Chart 1" bordered={true} style={{ width: "39vw", height: 250}}>
                    Chart Content
                </Card>
                </Col>
                <Col>
                <Card title="Chart 2" bordered={false} style={{ width: "39vw", height: 250}}>
                    Chart Content
                </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 15 }}>
                <Col>
                <Card title="Chart 3" bordered={false} style={{ width: "79vw", height: 320}}>
                    Chart content
                </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}