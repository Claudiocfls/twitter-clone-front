import socket from 'socket.io-client';

class Socket {
  constructor() {
    this.io = socket('http://localhost:3001');
    this.tweetCallbacks = [];
    this.likeCallbacks = [];

    this.handleTweetCallbacks = this.handleTweetCallbacks.bind(this);
    this.io.on('tweet', this.handleTweetCallbacks);

    this.handleLikeCallbacks = this.handleLikeCallbacks.bind(this);
    this.io.on('like', this.handleLikeCallbacks);
  }

  handleTweetCallbacks(tweet) {
    this.tweetCallbacks.forEach(cb => {
      cb(tweet);
    });
  }

  handleLikeCallbacks(tweet) {
    this.likeCallbacks.forEach(cb => {
      cb(tweet);
    });
  }

  subscribeToNewTweets(cb) {
    this.tweetCallbacks.push(cb);
  }

  subscribeToNewLikes(cb) {
    this.likeCallbacks.push(cb);
  }
}

export default new Socket();
