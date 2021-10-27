import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   },

   logoutButton: {
    flexDirection: 'row',
    alignItems: 'center'
   },

   logoutText: {
    fontSize: 15,
    fontFamily: fonts.REGULAR,
    color: colors.WHITE,
    marginRight: 16,
   }
  
})