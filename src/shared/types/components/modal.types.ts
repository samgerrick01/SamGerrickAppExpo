import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/** Modal */
export type TModal = 'CONFIRMATION' | 'CONDITIONAL';
export type TStatusModal = 'SUCCESS' | 'FAILED' | 'NONE';
export type TButtonConfig = {
  okay?: {
    title?: string;
    onPress?: Function;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
  };
  cancel?: {
    title?: string;
    onPress?: Function;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
  };
};
