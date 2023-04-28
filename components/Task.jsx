import {StyleSheet, TextInput, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Task = ({task: {id, title, state}, onArchiveTask, onPinTask}) => {
  return (
    <View style={styles.listItem}>
      <TextInput value={title} editable={false} />
    </View>
  );
};
