import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type Props = {
  onPress: () => void;
  direction: 'RIGHT' | 'LEFT';
  color?: string;
};

const DirectionButton = ({onPress, direction, color}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress()}>
        {direction === 'LEFT' ? (
          <Icon name="arrow-back-ios" size={32} color="gray" />
        ) : (
          <Icon name="arrow-forward-ios" size={32} color="gray" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DirectionButton;

const styles = StyleSheet.create({});
