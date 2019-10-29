import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { setCurrentNews} from '../../store/currentNews/actions';
import { setHotNews } from '../../store/hotNews/actions';
import { setCards } from '../../store/cards/actions';

function CardsContainer(props) {
  const { cards, setCards, setCurrentNews } = props;
  return (
    <Cards 
      cards={cards}
      setCards={setCards}
      setCurrentNews={setCurrentNews}
    />
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
});

const mapActionsToProps = {
  setCurrentNews,
  setCards,
};

export default connect(mapStateToProps, mapActionsToProps)(CardsContainer);