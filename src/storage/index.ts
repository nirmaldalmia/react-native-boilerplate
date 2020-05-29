import AsyncStorage from "@react-native-community/async-storage";

const _storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.warn("Async insert Error-->" + error.message());
  }
};
const _retrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    //console.log("Checking in async storage", key, value);
    return value;
  } catch (error) {
    // Error retrieving data
    console.warn("Async read Error-->" + error.message());
  }
};

export { _storeData, _retrieveData };
