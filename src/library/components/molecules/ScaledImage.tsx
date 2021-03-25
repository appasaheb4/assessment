import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';

interface ScaledImageProps {
  ratio: number;
  align: 'top' | 'bottom';
  width: number;
  height?: number;
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
}

const ScaledImage: React.FunctionComponent<ScaledImageProps> = (props) => {
  const [ratio, setRatio] = React.useState(props.ratio);

  React.useEffect(() => {
    Image.getSize((props.image as any).uri, (width, height) => {
      setRatio(height / width);
    });
  }, [props.image]);

  return (
    <TouchableOpacity
      style={[props.style, {flex: 1, width: props.width, position: 'relative'}]}
      onPress={props.onPress}>
      <Image
        source={props.image}
        style={{
          position: 'absolute',
          bottom: props.align === 'bottom' ? 0 : undefined,
          top: props.align === 'top' ? 0 : undefined,
          width: props.width,
          height: '100%',
          maxHeight: Math.min(
            props.width * ratio,
            props.height || props.width * ratio,
          ),
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ScaledImage;
