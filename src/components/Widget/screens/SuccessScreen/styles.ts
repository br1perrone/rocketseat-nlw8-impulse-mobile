import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 36,
    width: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    marginBottom: 24,
  },
  button: {
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 56,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
});