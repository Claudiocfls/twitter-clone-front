import React, { useEffect, useState } from 'react';
import TweetList from '../../components/TweetList';
import Layout from '../../components/Layout';
import TweetTextArea from '../../components/TweetTextArea/TweetTextArea';
import api from './../../services/api';
import Loading from '../../components/Loading/Loading';
import { useAuth0 } from "../../react-auth0-spa";

const fetchTokenOrGetLocal = async (fetchToken) => {
  const tokenLocal = sessionStorage.getItem('twitter-clone-token');
  
  if (tokenLocal) {
    return Promise.resolve(tokenLocal);
  }

  const token = await fetchToken();
  
  sessionStorage.setItem('twitter-clone-token', token);
  
  return Promise.resolve(token);
};

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const { loading, user, getTokenSilently } = useAuth0();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = await fetchTokenOrGetLocal(getTokenSilently);
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

  useEffect(() => {
    if(user) {
      const { email } = user;
      setUserEmail(email);
    }
  }, [loading]);

  const showLoading = loading || tweets.length < 1;

  return (
    <Layout>
      <TweetTextArea />
      <hr style={{border: '8px solid #e6ecf0', margin: 0,}} />
      {showLoading && <Loading />}
      {!showLoading && <TweetList tweets={tweets} />}
    </Layout>
  );
}

export default Home;