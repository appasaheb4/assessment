import React from 'react';
import Icon from 'react-native-remix-icon';
import * as Config from '@at/config';
import _ from 'lodash';

import {createIconSet} from 'react-native-vector-icons';
const glyphMap = require('../assets/gylphmap.json');
const RemixIcon = createIconSet(glyphMap, 'remixicon', 'remixicon.ttf');

const glyphMapLineAwesome = require('../assets/LineAwesome.json');
const LineAwesome = createIconSet(
  glyphMapLineAwesome,
  'lineawesome',
  'LineAwesome.ttf',
);

const iconSizeMap = {
  small: Config.Styles.MEASURE.SCALER.getScaledValue(10),
  medium: Config.Styles.MEASURE.SCALER.getScaledValue(15),
  large: Config.Styles.MEASURE.SCALER.getScaledValue(30),
};

interface IconProps {
  icon: string;
  size?: number | keyof typeof iconSizeMap;
  color?: string;
}

export const CustomeRemixIcon = (props: IconProps): JSX.Element => (
  <>
    <RemixIcon
      name={props.icon}
      size={props.size as number}
      color={props.color}
    />
  </>
);

export const CustomeLineAwsomeIcon = (props: IconProps): JSX.Element => (
  <>
    <LineAwesome
      name={props.icon}
      size={props.size as number}
      color={props.color}
    />
  </>
);

const MtIcon: React.FunctionComponent<IconProps> = props => {
  const size = _.isNumber(props.size)
    ? props.size
    : iconSizeMap[props.size as keyof typeof iconSizeMap];
  return <Icon name={props.icon} size={size} color={props.color} />;
};

MtIcon.defaultProps = {
  size: 'medium',
  color: Config.Styles.COLORS.BLACK,
};

export default MtIcon;
