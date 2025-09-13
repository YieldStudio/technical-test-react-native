import { ActivityIndicator, Button, Image, ScrollView, Text, View } from 'react-native';
import tw from '../components/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-base-white p-6`}>
      <Text style={tw`text-xl`}>Hello, good luck :)</Text>
    </SafeAreaView>
  );
}
