import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { colors } from '../../theme';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export function SignInBox(){
  const { signIn, isSignIn  } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        backgroundColor={colors.YELLOW}
        color={colors.BLACK_PRIMARY}
        icon="github"
        onPress={signIn}
        isLoading={isSignIn}
      />
    </View>
  );
}