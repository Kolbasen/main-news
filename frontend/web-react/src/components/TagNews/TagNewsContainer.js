import React from 'react';
import { useLocation } from 'react-router-dom';
import TagNews from './TagNews';
import { connect } from 'react-redux';
import { setCurrentNews} from '../../store/currentNews/actions';
import { setHotNews } from '../../store/hotNews/actions';
import { setCards } from '../../store/cards/actions';

function TagNewsContainer(props) {
  const { cards, setCards, setCurrentNews } = props;
  const location = useLocation();
  return (
    <TagNews 
      cards={cards}
      setCards={setCards}
      key={location.key}
      setCurrentNews={setCurrentNews}
    />
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  hotNews: state.hotNews.hotNews
});

const mapActionsToProps = {
  setCurrentNews,
  setCards,
  setHotNews
};

export default connect(mapStateToProps, mapActionsToProps)(TagNewsContainer);