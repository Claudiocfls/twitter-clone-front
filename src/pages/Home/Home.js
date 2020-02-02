import React from 'react';
import TweetList from '../../components/TweetList';
import Layout from '../../components/Layout';
import TweetTextArea from '../../components/TweetTextArea/TweetTextArea';

const Home = () => {
  return (
    <Layout>
      <TweetTextArea />
      <hr style={{border: '8px solid #e6ecf0', margin: 0,}} />
      <TweetList />
    </Layout>
  );
}

export default Home;