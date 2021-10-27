import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

import avatarImg from '../../assets/avatar.png';
import { colors } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

const Sizes = {
  Small: {
    containerSize: 32,
    avatarSize: 28,
  },
  Normal: {
    containerSize: 48,
    avatarSize: 42,
  }
}

interface Props {
  imageUri: string | undefined,
  sizes?: 'Small' | 'Normal'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'Normal' }: Props) {
  const { containerSize, avatarSize } = Sizes[sizes];

  return (
    <LinearGradient
      colors={[ colors.PINK, colors.YELLOW]}
      start={{x: 0, y: 0.8}}
      end={{x: 0.9, y: 1}}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        }
      ]
      }
    >
      <Image source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }
        ]}
      />
    </LinearGradient>
  )
}