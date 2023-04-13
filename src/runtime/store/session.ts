import { defineStore } from 'pinia';
import { Models } from 'appwrite';

const useSessionStore = defineStore('session', () => {
  const { $appwrite } = useNuxtApp();

  const sessionCookie = useCookie(`a-session-${useRuntimeConfig().public.APPWRITE_PROJECT_ID}`);
  const session = ref<Models.Account<Models.Preferences> | undefined | null>(null)

  watch(sessionCookie, async (token) => {
    if (token) {
      const account = await $appwrite.account.get();
      session.value = account;
    } else {
      session.value = null;
    }
  })

  return session;
});

export default useSessionStore;