import React, { useEffect, useState } from 'react';
import TweetList from '../../components/TweetList';
import Layout from '../../components/Layout';
import TweetTextArea from '../../components/TweetTextArea/TweetTextArea';
import api from './../../services/api';
import { useAuth0 } from "../../react-auth0-spa";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const use = useAuth0();

  useEffect(() => {
    async function fetchData() {
      const token = await use.getTokenSilently();
      const { data } = await api.get('/tweets', {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      });
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