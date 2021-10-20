import * as SecureStore from "expo-secure-store";

export default abstract class SecureStorage {
  public static async Save<T>(key: string, value: string): Promise<void> {
    await SecureStore.setItemAsync(key, value);
  }

  public static async Retrieve(key: string): Promise<string | null> {
    return await SecureStore.getItemAsync(key);
  }

  public static async Delete(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  }
}
