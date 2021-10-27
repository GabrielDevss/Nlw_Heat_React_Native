import { StyleSheet } from 'react-native';
import { fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 15,
      fontFamily: fonts.BOLD,
     
  },
  icon: {
    marginRight: 12
  }
});