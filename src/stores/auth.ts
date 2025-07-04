import { defineStore } from 'pinia'
import type { AuthResponse } from '~/types/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as null | { id: number; name: string },
        token: null as null | string
    }),

    actions: {
        async login(email: string, password: string) {
            const res = await $fetch<AuthResponse>('/api/auth/login', {
                method: 'POST',
                body: { email, password }
            })

            this.token = res.token
            this.user = res.user

            localStorage.setItem('token', res.token)
        },

        async register(name: string, email: string, password: string) {
            const res = await $fetch<AuthResponse>('/api/auth/register', {
                method: 'POST',
                body: { name, email, password }
            })

            this.token = res.token
            this.user = res.user

            localStorage.setItem('token', res.token)
        },

        logout() {
            this.token = null
            this.user = null

            localStorage.removeItem('token')
        }
    }
})
