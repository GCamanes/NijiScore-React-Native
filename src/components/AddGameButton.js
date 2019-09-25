import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../assets';
import * as GameActions from '../redux/actions/game-actions';
import {AppSizes} from '../theme';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  addGameView: {
    flex: 1,
    marginRight: 8,
  },
  image: {
    height: AppSizes.screen.width * 0.12,
    width: AppSizes.screen.width * 0.12,
  },
});

const AddGameButton = ({goToAddGamePage}) => (
  <TouchableOpacity style={styles.addGameView} onPress={() => goToAddGamePage()}>
    <Image source={assets.plus} style={styles.image} />
  </TouchableOpacity>
);

AddGameButton.propTypes = {
  goToAddGamePage: PropTypes.func.isRequired,
};

export default connect(
  null,
  GameActions,
)(AddGameButton);
