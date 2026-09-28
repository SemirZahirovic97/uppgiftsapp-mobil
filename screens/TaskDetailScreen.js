import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { API_URL } from '../api';

export default function TaskDetailScreen({ route }) {
  const { task } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.text}>{task.description}</Text>
      <Text style={styles.text}>{task.isDone ? 'Klar' : 'Ej klar'}</Text>
      {task.imageUrl && (
        <Image
          source={{ uri: `${API_URL}${task.imageUrl}` }}
          style={styles.image}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 12,
  },
});