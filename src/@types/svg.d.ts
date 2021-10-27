declare module "*.svg" {
  import React from 'react';
  import { svgProps } from 'react-native-svg';
  const content: React.Fc<SvgProps>;
  export default content;
};