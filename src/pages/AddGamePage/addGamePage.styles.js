import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
  },
  blueView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: AppColors.palette.main.quaternary,
  },
  input: {
    width: AppSizes.screen.width * 0.8,
    height: 40,
    marginVertical: 5,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: AppColors.palette.main.tertiary,
    backgroundColor: AppColors.palette.main.primary,
    borderColor: AppColors.palette.main.secondary,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: AppFonts.t16.size,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  partView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: AppSizes.screen.width,
    backgroundColor: AppColors.palette.white,
  },
  leftView: {
    width: 20,
    height: 45,
    backgroundColor: AppColors.palette.main.tertiary,
    marginRight: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  rightView: {
    width: 20,
    height: 45,
    backgroundColor: AppColors.palette.main.tertiary,
    marginLeft: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  text: {
    flex: 1,
    fontSize: AppFonts.t16.size,
    fontWeight: 'bold',
    textAlign: 'center',
    color: AppColors.palette.main.tertiary,
  },
});

export default styles;
