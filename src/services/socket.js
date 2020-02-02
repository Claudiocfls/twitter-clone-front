import socket from 'socket.io-client';

class Socket {
  constructor() {
    this.io = socket('http://localhost:3001');
    this.tweetCallbacks = [];
    this.handleCallbacks = this.handleCallbacks.bind(this);
    this.io.on('tweet', this.handleCallbacks);
  }

  handleCallbacks(tweet) {
    this.tweetCallbacks.forEach(cb => {
      cb(tweet);
    });
  }

  subscribeToNewTweets(cb) {
    this.tweetCallbacks.push(cb);
  }
}

export default new Socket();
