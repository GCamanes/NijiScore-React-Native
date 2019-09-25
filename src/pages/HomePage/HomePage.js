import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.secondary}
          />
        </View>
      );
    }
    return (
      <View style={AppStyles.mainView}>
        <Text>TEST</Text>
      </View>
    );
  }
}

HomePage.propTypes = {
  loadingStatus: PropTypes.object,
};

HomePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
});

export default connect(
  mapStateToProps,
  null,
)(HomePage);
