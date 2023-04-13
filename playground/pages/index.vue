<template>
  <h1>test</h1>
  <p v-if="session">{{ session.$id }}</p>
</template>

<script setup lang="ts">
// import useSessionStore from '~~/../src/runtime/store/session';

const session = useAuthSession();

onMounted(async () => {
  console.log(useSessionStore())
  // console.log(await useAppwrite().account.createEmailSession('emoureton@gmail.com', 'MineZorg69&'));
})
</script>
