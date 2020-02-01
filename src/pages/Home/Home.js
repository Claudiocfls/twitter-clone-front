import React from 'react';
import TweetList from '../../components/TweetList';
import Layout from '../../components/Layout';
import TweetTextArea from '../../components/TweetTextArea/TweetTextArea';

const Home = () => {
  return (
    <Layout>
      <TweetTextArea />
      <TweetList />
    </Layout>
  );
}

export default Home;