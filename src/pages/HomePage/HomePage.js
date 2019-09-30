import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import GameTile from '../../components/GameTile';
import styles from './homePage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';
import * as HomeActions from '../../redux/actions/home-actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initHomePage} = this.props;
    initHomePage();
  }

  onGamePress = game => {
    console.log('GAME CLICKED', game.name);
  }

  onGameLongPress = game => {
    Actions.jump(AppConstants.ROUTES.ADD_GAME, {game, title: 'Updating game'});
  }

  /**
   * Render function to display component.
   */
  render() {
    const {games, loadingStatus} = this.props;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.tertiary}
          />
        </View>
      );
    }
    return (
      <View style={styles.homeView}>
        <ScrollView style={styles.scoresView}>
          {games.map(game => (
            <GameTile game={game} key={game.name} onPress={this.onGamePress} onLongPress={this.onGameLongPress}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

HomePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  initHomePage: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

HomePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
  games: state.game.games,
});

export default connect(
  mapStateToProps,
  HomeActions,
)(HomePage);
