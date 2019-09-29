import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, Switch, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import NumberSelector from '../../components/NumberSelector';
import styles from './addGamePage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class AddGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPlayers: 2,
      maxPoints: 1,
      maxWinners: 1,
      minPlayers: 2,
      name: '',
      pointsCount: false,
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

  render() {
    const {loadingStatus} = this.props;
    const {maxPlayers,
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
            value={this.state.name}
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
        <View style={styles.blueView}>

        </View>
      </View>
    );
  }
}

AddGamePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  addGame: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
};

AddGamePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.ADD_GAME],
});

export default connect(
  mapStateToProps,
  null,
)(AddGamePage);
