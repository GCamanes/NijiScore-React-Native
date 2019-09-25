import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import assets from '../assets';
import {AppColors, AppFonts, AppSizes} from '../theme';

const styles = StyleSheet.create({
  touchableGameView: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    alignItems: 'center',
  },
  letterView: {
    width: AppSizes.screen.width * 0.13,
    height: AppSizes.screen.width * 0.13,
    backgroundColor: AppColors.palette.white,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
  },
  letterText: {
    textAlign: 'center',
    fontSize: AppFonts.t22.size,
    fontWeight: 'bold',
    color: AppColors.palette.main.tertiary,
  },
  text: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: AppFonts.t20.size,
    fontWeight: 'bold',
    color: AppColors.palette.main.primary,
  },
  image: {
    width: AppSizes.screen.width * 0.13,
    height: AppSizes.screen.width * 0.13,
  },
});

export class GameTile extends Component {
  render() {
    const {game, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.touchableGameView} onPress={onPress}>
        <View style={styles.letterView}>
          <Text style={styles.letterText}>{game.name[0].toUpperCase()}</Text>
        </View>
        <Text style={styles.text}>{game.name}</Text>
        <Image source={assets.play} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

GameTile.propTypes = {
  game: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GameTile;
