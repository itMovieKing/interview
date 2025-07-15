'use client' 
import React, { useState, useRef } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';

const SSEFetchEventSource = () => {
    const [value, setValue] = useState('');
    const queueRef = useRef([]); // 存储待显示的内容
    const timerRef = useRef(null);

    const showNextChar = () => {
        if (queueRef.current.length === 0) {
            timerRef.current = null;
            return;
        }
        const nextChar = queueRef.current.shift();
        setValue(prev => prev + nextChar);
        timerRef.current = setTimeout(showNextChar, 500); // 50ms/字，可调整
    };

    const handleMessage = (content) => {
        // 把新内容拆成字符，加入队列
        queueRef.current.push(...content.split(''));
        // 如果没有在显示，就启动动画
        if (!timerRef.current) {
            showNextChar();
        }
    };

    const handleClick = () => {
        setValue('思考中...');
        queueRef.current = [];
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        fetchEventSource('http://localhost:5001/sse', {
            onopen() { setValue(''); },
            onmessage(res) {
                try {
                    const jsonData = JSON.parse(res.data);
                    if (jsonData.event === 'start' || jsonData.event === 'message') {
                        handleMessage(jsonData.content);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            onerror(err) { console.log('错误:', err); }
        });
    };

    return <div className='m-[20px] ml-[40px]'>
        <h2 className='mb-[10px] text-[20px] font-bold'>Fetch 请求 + ReadableStream </h2>
        <div className=' p-[10px] w-[400px] h-[200px] bg-slate-200'>
            <div className='w-[80px] h-[30px]  text-center rounded-[10px] bg-blue-300 cursor-pointer' onClick={handleClick}><span>发起请求</span></div>
            <div>
                <div>输出结果：</div>
                <div className='text-[#333] w-[300px] '>{value}</div>
            </div>
        </div>
    </div>
};

export default SSEFetchEventSource;
