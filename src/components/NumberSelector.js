import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import assets from '../assets';
import {AppSizes, AppFonts, AppColors} from '../theme';
import AppConstants from '../app/app.constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: AppSizes.screen.width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  image: {
    height: AppSizes.screen.width * 0.11,
    width: AppSizes.screen.width * 0.11,
  },
  text: {
    width: AppSizes.screen.widthThird,
    color: AppColors.palette.main.tertiary,
    fontSize: AppFonts.t16.size,
    textAlign: 'center',
  },
});

const NumberSelector = ({changedState, minusAvailable, number, onMinusPress, onPlusPress, plusAvailable}) => (
  <View style={styles.container}>
    {minusAvailable && (
      <TouchableOpacity onPress={() => onMinusPress(changedState)}>
        <Image source={assets.minus} style={styles.image} />
      </TouchableOpacity>
    )}
    {!minusAvailable && (
      <View style={styles.image} />
    )}
    <Text style={styles.text}>
      {number}
    </Text>
    {plusAvailable && (
      <TouchableOpacity onPress={() => onPlusPress(changedState)}>
        <Image source={assets.plus} style={styles.image} />
      </TouchableOpacity>
    )}
    {!plusAvailable && (
      <View style={styles.image} />
    )}
  </View>
);

NumberSelector.propTypes = {
  changedState: PropTypes.string.isRequired,
  minusAvailable: PropTypes.bool,
  number: PropTypes.number.isRequired,
  onMinusPress: PropTypes.func,
  onPlusPress: PropTypes.func,
  plusAvailable: PropTypes.bool,
};

NumberSelector.defaultProps = {
  minusAvailable: true,
  minusAvailable: true,
  onMinusPress: () => true,
  onPlusPress: () => true,
};

export default NumberSelector;