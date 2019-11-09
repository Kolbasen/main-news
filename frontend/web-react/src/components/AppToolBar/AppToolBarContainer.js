import React from 'react';
import { connect } from 'react-redux';
import AppToolBar from './AppToolBar';
import { setOneCard } from '../../store/oneCard/actions'

function AppToolBarContainer(props) {
  const { cards, oneCard } = props;
  return (
    <AppToolBar 
      cards={cards}
      oneCard={oneCard}
    />
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  oneCard: state.oneCard.oneCard
});


export default connect(mapStateToProps)(AppToolBarContainer);