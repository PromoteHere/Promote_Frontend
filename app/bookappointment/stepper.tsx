"use client"
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import BookingMode from './components/BookingMode';
const steps = [
    {
        title: 'BookingMode',
        content: <BookingMode />,
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const Stepper: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps?.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <div className='px-40'>
                <Steps current={current} items={items} status="process" />
            </div>
            <div className='flex justify-center my-10'>{steps[current].content}</div>
            <div style={{ marginTop: 24 }} className='flex justify-center'>
                {current < steps.length - 1 && (
                    <Button className='bg-blue-500 ' onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button className='bg-red-300 ml-5' onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default Stepper;