import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
    alignItems: 'center',
  },
  scoresView: {
    flex: 1,
    width: AppSizes.screen.width,
  },
  newGameTouchableView: {
    flexDirection: 'row',
    width: AppSizes.screen.widthHalf,
    height: AppSizes.screen.width * 0.15,
    margin: 10,
    paddingHorizontal: 4,
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 50,
    borderColor: AppColors.palette.main.secondary,
    borderWidth: 2,
  },
  textNewGame: {
    flex: 1,
    color: AppColors.palette.main.primary,
    fontSize: AppFonts.t16.size,
    textAlign: 'center',
  },
  imagePlus: {
    height: AppSizes.screen.widthQuarter / 2.2,
    width: AppSizes.screen.widthQuarter / 2.2,
  },
});

export default styles;
