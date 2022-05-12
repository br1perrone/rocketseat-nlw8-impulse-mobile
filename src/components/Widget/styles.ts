import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: theme.spaces.bottomSpace + 16,

    backgroundColor: theme.colors.brand,
  },

  indicator :{
    backgroundColor: theme.colors.background,
    width: 56,
    padding: 0,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: theme.spaces.bottomSpace + 16,
  },
});