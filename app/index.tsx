import { ActivityIndicator, Button, Image, ScrollView, Text, View } from 'react-native';
import tw from '../components/tailwind';
import { usePhotosQuery } from '../hooks/use-photos-query';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const { data: photos, isLoading } = usePhotosQuery();

  return (
    <SafeAreaView style={tw`flex-1 bg-base-white p-6`}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView contentContainerStyle={tw`gap-y-4`}>
          {photos?.map((photo) => (
            <View key={photo.id}>
              <Image style={tw`h-40 w-full rounded-xl`} source={{ uri: photo.url }} />
              <Text style={tw`text-md text-center p-1`}>{photo.title}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
