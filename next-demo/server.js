const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5001;
const getTime = () => new Date().toLocaleTimeString();
const contentStr = "很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。很高兴为您服务，我是模拟的 ChatGPT 机器人。".split('')

app.get("/sse", function (req, res) {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  req.on('close', function () {
    console.log('close')
    clearInterval(interval)
  })
  let count = 0;
  const groupSize = 10;
  const interval = setInterval(() => {
    if (count >= contentStr.length) {
      res.write(
        `data:${JSON.stringify({
          time: getTime(),
          event: 'done',
        })}`
      );
      res.write("\n\n");
      res.end();
      clearInterval(interval);
      return;
    }
    const chunk = contentStr.slice(count, count + groupSize).join('');
    res.write(
      `data:${JSON.stringify({
        time: getTime(),
        event: 'message',
        content: chunk
      })}`
    );
    res.write("\n\n");
    count += groupSize;
  }, 300);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
}).on('error', err => {
  console.error('Listen error:', err);
});
