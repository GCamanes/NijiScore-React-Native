import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import styles from './addGamePage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class AddGamePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {loadingStatus} = this.props;
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
    return null;
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
