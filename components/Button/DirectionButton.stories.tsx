import DirectionButton from './DirectionButton';

export default {
  title: 'DirectionButton',
  component: DirectionButton,
};

export const Left = {
  args: {
    direction: 'LEFT',
    onPress: () => console.log('left clicked'),
  },
};

export const Right = {
  args: {
    direction: 'RIGHT',
    onPress: () => console.log('right clicked'),
  },
};
