const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5001;
const getTime = () => new Date().toLocaleTimeString();
const contentStr = "很高兴为您服务，我是模拟的 ChatGPT 机器人。".split('')

app.get("/sse", function (req, res) {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  // 正常的 sse 结束，需要从客户端触发 close 事件，如果从服务端触发，客户端会收到 error 
  req.on('close', function () {
    console.log('close')
    clearInterval(interval)
  })
  let count = 0
  // 此处用计时器来模拟大模型的查询结果
  // 通过发送字符数组的长度，来模拟 SSE 服务的 start、cmpl、done 状态
  const interval = setInterval(() => {
    // 如果前端没有正确触发 SSE 的 close 事件，服务端判断如果数据已发送完成，也会主动关闭事件
    if (count > contentStr.length) {
      res.end()
      clearInterval(interval)
      return
    } else if (count === 0) {
      res.write(
        `data:${JSON.stringify({
          time: getTime(),
          event: 'start',
          content: contentStr[count]
        })}`
      );
      res.write("\n\n");
    } else if (count === contentStr.length) {
      res.write(
        `data:${JSON.stringify({
          time: getTime(),
          event: 'done',
        })}`
      );
      res.write("\n\n");
    }
    else {
      res.write(
        `data:${JSON.stringify({
          time: getTime(),
          event: 'message',
          content: contentStr[count]
        })}`
      );
      res.write("\n\n");
    }
    count++
  }, 100);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
}).on('error', err => {
  console.error('Listen error:', err);
});
