import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StageManager = create((set, get) => ({
  visitedModules: {},

  // Load the state from AsyncStorage asynchronously
  loadState: async () => {
    try {
      const storedState = await AsyncStorage.getItem("visitedModules");
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        const updatedState = {};

        // Reinitialize sets for each topic from the stored state
        for (const topicId in parsedState) {
          updatedState[topicId] = new Set(parsedState[topicId]); // Ensure sets are re-created
        }

        // Update store with loaded state
        set({ visitedModules: updatedState });
      }
    } catch (error) {
      console.error("Error loading state:", error);
      // You might want to reset to empty state in case of load failure
      set({ visitedModules: {} });
    }
  },

  // Save the state to AsyncStorage
  saveState: async (newState) => {
    try {
      const serializedState = {};

      // Convert sets to arrays before storing
      for (const topicId in newState) {
        serializedState[topicId] = Array.from(newState[topicId]);
      }

      await AsyncStorage.setItem("visitedModules", JSON.stringify(serializedState));
    } catch (error) {
      console.error("Error saving state:", error);
    }
  },

  setVisitedModules: (topicId, moduleId) =>
    set((state) => {
      // Ensure the set for this topic exists
      const topicModules = state.visitedModules[topicId] || new Set();
      topicModules.add(moduleId);

      const newVisitedModules = { ...state.visitedModules, [topicId]: topicModules };

      // Save the updated state to AsyncStorage
      state.saveState(newVisitedModules);

      return {
        visitedModules: newVisitedModules,
      };
    }),

  getVisitedModules: (topicId) => {
    const modules = get().visitedModules[topicId];
    return modules ? modules.size : 0; // Return the size of the Set (number of modules)
  },
}));

export default StageManager;
