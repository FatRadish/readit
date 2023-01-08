import { ref } from 'vue'

const useIndex = () => {
  const currentIndex = ref(0)

  const handleItemIndex = (i: number, url: string) => {
    currentIndex.value = i
    window.open(url, '_blank')
  }

  return {
    currentIndex,
    handleItemIndex
  }
}

export default useIndex