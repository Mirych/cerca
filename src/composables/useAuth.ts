import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
    const auth = useAuthStore()

    onMounted(() => {
        const token = localStorage.getItem('token')
        if (token) {
            auth.token = token
        }
    })

    return auth
}
