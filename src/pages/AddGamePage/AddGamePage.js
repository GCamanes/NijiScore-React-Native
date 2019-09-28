import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, Switch, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import styles from './addGamePage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class AddGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPlayers: 1,
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
        <View style={styles.nameView}>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({name})}
            placeholder="Name of the game"
            selectionColor={AppColors.palette.main.secondary}
            style={styles.input}
          />
        </View>
        <View style={styles.partView}>
          <View style={styles.leftView} />
          <Text>
            Minimum number of players
          </Text>
        </View>
        <View style={styles.partView}>
          <View style={styles.leftView} />
          <Text>
            Maximum number of players
          </Text>
        </View>
        <View style={styles.partView}>
          <View style={styles.leftView} />
          <Text>
            Minimum number of winners
          </Text>
        </View>
        <View style={styles.partView}>
          <View style={styles.leftView} />
          <Text>
            Points count per player :
          </Text>
          <Switch
            onValueChange={this.onTogglePointsCount}
            value={this.state.pointsCount}
            trackColor={{true: AppColors.palette.main.primary}}
            thumbColor={AppColors.palette.main.quaternary}
          />
        </View>

        {pointsCount && (
          <Text>
            Maximum number of points per victory 
          </Text>
        )}

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
