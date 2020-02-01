import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const mockTrends = [
  {
    place: 'Brazil',
    hashtag: 'Presidente',
    quantity: 45,
  },
  {
    place: 'World',
    hashtag: 'World War',
    quantity: 45,
  },
  {
    place: 'São Paulo',
    hashtag: 'Carnaval',
    quantity: 45,
  },
  {
    place: 'São José dos Campos',
    hashtag: 'Corona',
    quantity: 45,
  },
];

const useStyles = makeStyles({
  trendsHeader: {
    marginTop: '23px',
    backgroundColor: '#f5f8fa',
    borderRadius: '16px 16px 0px 0px',
    borderBottom: '1px solid rgb(230, 236, 240)',
    height: '44px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    '& h2': {
      margin: 0,
      fontSize: '19px',
    },
  },
  trendsBottom: {
    backgroundColor: '#f5f8fa',
    borderRadius: '0 0 16px 16px',
    height: '44px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    '& h3': {
      margin: 0,
      fontSize: '15px',
      color: 'rgb(29, 161, 242)',
      fontWeight: 400,
    },
  },
  trendItemWrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '62px',
    padding: '8px 12px',
    borderBottom: '1px solid rgb(230, 236, 240)',
    backgroundColor: '#f5f8fa',
    '& span': {
      color: 'rgb(101, 119, 134)',
      fontSize: '13px',
    },
    '& strong': {
      fontSize: '15px',
    },
  },
});

const TrendItem = ({ place, hashtag, quantity }) => {
  const classes = useStyles();
  return (
    <div className={classes.trendItemWrapper}>
      <span>{`Trending in ${place}`}</span> 
      <strong>{hashtag}</strong>
      <span>{`${quantity}K Tweets`}</span>
    </div>
  );
}

const Trends = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.trendsHeader}>
        <h2>Trends for You</h2>
      </div>
      {mockTrends.map((mock, index) => (
        <TrendItem key={index} place={mock.place} hashtag={mock.hashtag} quantity={mock.quantity} />
      ))}
      <div className={classes.trendsBottom}>
        <h3>Show more</h3>
      </div>
    </>
  );
};

export default Trends;
