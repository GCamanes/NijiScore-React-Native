import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import NumberSelector from '../../components/NumberSelector';
import assets from '../../assets';
import showAlert from '../../utils/showAlert';
import styles from './addGamePage.styles';
import * as GameActions from '../../redux/actions/game-actions';
import {AppColors, AppStyles} from '../../theme';
import { updateGame } from '../../redux/actions/game-actions';

class AddGamePage extends Component {
  constructor(props) {
    super(props);
    const {game} = props;
    this.state = {
      maxPlayers: game ? game.maxPlayers : 2,
      maxPoints: game ? game.maxPoints : 1,
      maxWinners: game ? game.maxWinners : 1,
      minPlayers: game ? game.minPlayers : 2,
      name: game ? game.name : '',
      pointsCount: game ? game.pointsCount : false,
    };
  }

  onMinusPress = (changedState) => {
    this.setState({[changedState]: this.state[changedState] - 1});
  }

  onPlusPress = (changedState) => {
    const {minPlayers, maxPlayers} = this.state;
    if (changedState === 'minPlayers' && minPlayers + 1 > maxPlayers) {
      this.setState({
        minPlayers: minPlayers + 1,
        maxPlayers: minPlayers + 1,
      });
    } else {
      this.setState({[changedState]: this.state[changedState] + 1});
    }
  }

  onTogglePointsCount = value => {
    this.setState({pointsCount: value});
  };

  addGame = () => {
    const {addGame, connectivity, game, updateGame} = this.props;
    if (connectivity) {
      if (this.state.name.length > 0) {
        game ? updateGame(this.state, game.id) : addGame(this.state);
      } else {
        showAlert('Please enter a game name');
      }
    } else {
      showAlert('No internet connection');
    }
  };

  render() {
    const {loadingStatus, game} = this.props;
    const {
      maxPlayers,
      maxWinners,
      minPlayers,
      name,
      pointsCount,
      maxPoints,
    } = this.state;

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
      <View style={styles.container}>
        <View style={styles.blueView}>
          <TextInput
            value={name}
            onChangeText={name => this.setState({name})}
            placeholder="Name of the game"
            selectionColor={AppColors.palette.main.secondary}
            style={styles.input}
          />
        </View>
        <ScrollView>
          <View style={styles.partView}>
            <View style={styles.leftView} />
            <Text style={styles.text}>
              Minimum number of players
            </Text>
            <View style={styles.rightView} />
          </View>
          <NumberSelector
            number={minPlayers}
            minusAvailable={minPlayers > 2}
            onMinusPress={this.onMinusPress}
            onPlusPress={this.onPlusPress}
            changedState="minPlayers"
            plusAvailable
          />

          <View style={styles.partView}>
            <View style={styles.leftView} />
            <Text style={styles.text}>
              Maximum number of players
            </Text>
            <View style={styles.rightView} />
          </View>
          <NumberSelector
            number={maxPlayers}
            minusAvailable={maxPlayers > minPlayers}
            onMinusPress={this.onMinusPress}
            onPlusPress={this.onPlusPress}
            changedState="maxPlayers"
            plusAvailable
          />

          <View style={styles.partView}>
            <View style={styles.leftView} />
            <Text style={styles.text}>
              Maximum number of winners
            </Text>
            <View style={styles.rightView} />
          </View>
          <NumberSelector
            number={maxWinners}
            minusAvailable={maxWinners > 1}
            onMinusPress={this.onMinusPress}
            onPlusPress={this.onPlusPress}
            changedState="maxWinners"
            plusAvailable={maxWinners < maxPlayers - 1}
          />

          <View style={styles.partView}>
            <View style={styles.leftView} />
            <Text style={styles.text}>
              Points count per player :
            </Text>
            <View style={styles.rightView} />
          </View>
          <View style={{flex: 1, alignItems: 'center', marginTop: 5, marginBottom: 15,}}>
            <Switch
              onValueChange={this.onTogglePointsCount}
              value={this.state.pointsCount}
              trackColor={{true: AppColors.palette.main.quaternary}}
              thumbColor={AppColors.palette.main.tertiary}
            />
          </View>

          {pointsCount && (
            <View>
              <View style={styles.partView}>
                <View style={styles.leftView} />
                <Text style={styles.text}>
                  Maximum number of points per victory
                </Text>
                <View style={styles.rightView} />
              </View>
              <NumberSelector
                number={maxPoints}
                minusAvailable={maxPoints > 1}
                onMinusPress={this.onMinusPress}
                onPlusPress={this.onPlusPress}
                changedState="maxPoints"
                plusAvailable
              />
            </View>
          )}
        </ScrollView>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.playTouchableView} onPress={this.addGame}>
            <Text style={styles.textPlay}>{game ? 'Update game' : 'Add game'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AddGamePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  addGame: PropTypes.func.isRequired,
  game: PropTypes.object,
  loadingStatus: PropTypes.object,
  updateGame: PropTypes.func.isRequired,
};

AddGamePage.defaultProps = {
  game: null,
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.ADD_GAME],
});

export default connect(
  mapStateToProps,
  GameActions,
)(AddGamePage);
