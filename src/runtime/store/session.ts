import { defineStore } from 'pinia';
import { Models } from 'appwrite';

const useSessionStore = defineStore('session', () => {
  const session = ref<Models.Account<Models.Preferences> | undefined | null>(null)

  return { session };
});

export default useSessionStore;