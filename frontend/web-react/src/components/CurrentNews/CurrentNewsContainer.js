import React from 'react';
import { useLocation } from 'react-router-dom';
import CurrentNews from './CurrentNews';
import { connect } from 'react-redux';
import { setCards } from '../../store/cards/actions';
import { setHotNews } from '../../store/hotNews/actions';
import { setCurrentNews } from '../../store/currentNews/actions';
import { setOneCard } from '../../store/oneCard//actions'

function CurrentNewsContainer(props) {
  const location = useLocation();
  const { setHotNews, currentNews, oneCard, setOneCard } = props;
  return (
    <CurrentNews 
      key={location.key}
      setHotNews={setHotNews}
      currentNews={currentNews}
      setCurrentNews={setCurrentNews}
      oneCard={oneCard}
      setOneCard={setOneCard}
    />
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    currentNews: state.currentNews.currentNews,
    hotNews: state.hotNews.hotNews,
    oneCard: state.oneCard.oneCard
  };
};

const mapActionsToProps = {
  setCurrentNews,
  setCards,
  setHotNews,
  setOneCard
};

export default connect(mapStateToProps, mapActionsToProps)(CurrentNewsContainer);
