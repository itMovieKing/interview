'use client' 
import React, { useState } from 'react';
import { fetchEventSource } from '@microsoft/fetch-event-source';

const SSEFetchEventSource = () => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setValue('思考中...')
        fetchEventSource('http://localhost:5001 /sse', {
            headers: {
                'authorization': 'test sse'
            },
            onopen(res) {
                console.log('连接:', res)
                setValue('')
            },
            onmessage(res) {
                try {
                    const jsonData = JSON.parse(res.data);
                    if (jsonData.event === 'start' || jsonData.event === 'message') {
                        setValue(prevData => prevData + jsonData.content);
                    } else if (jsonData.event === 'done') {
                        // 因为本质还是 fetch 接口，当消息发送完毕时，
                        // 接收到 done 的事件，如无特殊逻辑可以不做处理，有特殊逻辑可以做其他逻辑处理
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            onerror(err) {
                console.log('错误:', err)
            }
        })
    }


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
