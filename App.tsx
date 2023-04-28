import {Text, View} from 'react-native';
import StorybookUIRoot from './.ondevice/Storybook';
import DirectionButton from './components/Button/DirectionButton';
export {StorybookUIRoot as default};

const App = () => {
  return (
    <View>
      <Text>hello</Text>
      <DirectionButton
        direction="LEFT"
        onPress={() => {
          console.log('clicked');
        }}
      />
    </View>
  );
};

// export default App;
