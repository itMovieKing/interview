/**
 * 打字机效果
 */
export default class MessageManager {
  messageList = [];
  timer = null;
  timerDelay = 100;
  onFinish;
  onMessage;
  stopFlag = false; // 停止标志，如果设置了停止，但是队列没走完，就会等队列走完之后再停止

  constructor(
    messageList,
    timerDelay,
    onMessage,
    onFinish,
  ) {
    this.messageList = messageList;
    this.timerDelay = timerDelay;
    this.onFinish = onFinish;
    this.onMessage = onMessage;
  }

  start() {
    this.timer = setInterval(() => {
      if (this.messageList.length > 0) {
        this.consume();
      } else {
        if (this.stopFlag) {
          this.immediatelyStop();
        }
      }
    }, this.timerDelay);
  }

  consume() {
    if (this.messageList.length > 0) {
      const str = this.messageList.shift();
      str && this.onMessage(str);
    }
  }

  add(str) {
    if (!str) return;
    const strChars = str.split('');
    this.messageList = [...this.messageList, ...strChars];
  }

  stop() {
    this.stopFlag = true;
  }

  immediatelyStop() {
    // 立刻停止
    clearInterval(this.timer);
    this.timer = null;
    this.messageList = [];
    this.onFinish();
  }
}

