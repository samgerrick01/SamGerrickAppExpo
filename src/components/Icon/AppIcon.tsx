import React, { FC, useEffect } from 'react';
import { Image, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import images from '@assets/images';
import { timing } from '@shared/animation/timing';
import { Colors } from '@themes/index';

interface AppIconProps {
  /**
   * A custom style for contaienr.
   */
  customContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The size of the icon.
   */
  containerSize: number;

  /**
   * The size for the image itself.
   */
  imageSize?: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%';
}

/**
 * A component that will render app icon.
 *
 * @type {Function}
 * @returns {React.FC}
 */
const AppIcon: FC<AppIconProps> = ({ containerSize, imageSize, customContainerStyle }) => {
  const customWidth = containerSize * 2;
  const width = useSharedValue(customWidth);
  const height = useSharedValue(containerSize);

  const appIconDimension = useAnimatedStyle(() => ({
    height: height.value,
    width: width.value,
  }));

  const imageStyle = {
    height: imageSize,
    width: imageSize,
  };

  const changeValue = () => {
    width.value = timing(customWidth, 500);
    height.value = timing(containerSize, 500);
  };

  useEffect(() => {
    if (containerSize * 2 !== width.value) {
      changeValue();
    }
  }, [containerSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.View style={[appIconDimension, styles.root, customContainerStyle]}>
      <Image source={images.appLogoImage} style={[imageStyle, styles.imageStyle]} />
    </Animated.View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
});

AppIcon.defaultProps = {
  containerSize: 20,
  imageSize: '80%',
};
