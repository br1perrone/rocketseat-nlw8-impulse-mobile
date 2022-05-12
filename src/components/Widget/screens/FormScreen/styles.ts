import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',

  },
  header: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  backButton: {},
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  input: {
    height: 112,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sendButton: {},
  buttonText: {},
  // container: {},
});