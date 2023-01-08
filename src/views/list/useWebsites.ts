import useWebsiteStore from '../../store/websiteStore';
import { onMounted, inject } from 'vue'


const useWebistes = () => {
  const websiteStore = useWebsiteStore();
  const { keywords } = inject('searchbar-keywords') as searchState

  onMounted(() => {
    websiteStore.init();
  })
  return {
    websiteStore,
    keywords
  }
}

export default useWebistes