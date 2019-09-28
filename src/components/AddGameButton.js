import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../assets';
import {AppSizes} from '../theme';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';

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

const AddGameButton = () => (
  <TouchableOpacity style={styles.addGameView} onPress={() => Actions.jump(AppConstants.ROUTES.ADD_GAME)}>
    <Image source={assets.plus} style={styles.image} />
  </TouchableOpacity>
);

export default AddGameButton;
