import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { API_URL } from '../api';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`);
      if (!response.ok) {
        throw new Error('Servern svarade med fel');
      }
      const data = await response.json();
      setTasks(data);
      setError('');
    } catch {
      setError('Kunde inte hämta uppgifter. Kontrollera att API:et körs.');
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  async function onRefresh() {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
      {error !== '' && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          error === '' ? <Text style={styles.empty}>Inga uppgifter ännu.</Text> : null
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Detalj', { task: item })}
          >
            <Text style={[styles.title, item.isDone && styles.done]}>
              {item.title}
            </Text>
            <Text>{item.isDone ? 'Klar' : 'Ej klar'}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 12,
  },
  error: {
    backgroundColor: '#fdecea',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  errorText: {
    color: '#b3261e',
  },
  empty: {
    textAlign: 'center',
    marginTop: 24,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});