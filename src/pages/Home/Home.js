import React, { useEffect, useState } from 'react';
import TweetList from '../../components/TweetList';
import Layout from '../../components/Layout';
import TweetTextArea from '../../components/TweetTextArea/TweetTextArea';
import api from './../../services/api';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/tweets');
      setTweets(data);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <TweetTextArea />
      <hr style={{border: '8px solid #e6ecf0', margin: 0,}} />
      <TweetList tweets={tweets} />
    </Layout>
  );
}

export default Home;