<template>
  <form
    class="space-y-4"
    @submit.prevent="onSubmit">

    <input
      v-model="email"
      placeholder="Email">

    <input
      v-model="password"
      type="password"
      placeholder="Пароль">

    <button>Войти</button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  guestOnly: true
})

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const onSubmit = async () => {
  await auth.login(email.value, password.value)
  await navigateTo('/profile')
}
</script>
