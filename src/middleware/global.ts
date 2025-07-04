import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    const requiresAuth = to.meta.requiresAuth === true
    const guestOnly = to.meta.guestOnly === true

    if (requiresAuth && !auth.token) {
        return navigateTo('/login')
    }

    if (guestOnly && auth.token) {
        return navigateTo('/profile')
    }
})
