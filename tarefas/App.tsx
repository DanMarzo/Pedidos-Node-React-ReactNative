import { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Text>{count}</Text>
      <Text>Teset</Text>
      <Button title={`${count}`} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
