import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
  },
  nameView: {
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
  },
  partView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: AppSizes.screen.widthThreeQuarters,
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
});

export default styles;
