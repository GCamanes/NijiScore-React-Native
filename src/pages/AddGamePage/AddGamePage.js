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
      maxPlayers: 1,
      maxPoints: 1,
      maxWinners: 1,
      minPlayers: 1,
      name: '',
      pointsCount: false,
    };
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
            plusAvailable
          />

          <View style={styles.partView}>
            <View style={styles.leftView} />
            <Text style={styles.text}>
              Points count per player :
            </Text>
            <View style={styles.rightView} />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Switch
              onValueChange={this.onTogglePointsCount}
              value={this.state.pointsCount}
              trackColor={{true: AppColors.palette.main.primary}}
              thumbColor={AppColors.palette.main.quaternary}
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
