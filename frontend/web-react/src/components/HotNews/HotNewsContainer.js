import React from 'react';
import { useLocation } from 'react-router-dom';
import HotNews from './HotNews';
import { connect } from 'react-redux';
import { setCurrentNews } from '../../store/currentNews/actions';

function HotNewsContainer(props) {
  const { hotNews, setCurrentNews } = props;
  const location = useLocation();
  return (
    <HotNews 
      key={location.key}
      hotNews={hotNews}
      setCurrentNews={setCurrentNews}
    />
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  id: state.id.id,
  hotNews: state.hotNews.hotNews
});
  
const mapActionsToProps = {
  setCurrentNews,
};

export default connect(mapStateToProps, mapActionsToProps)(HotNewsContainer);