const { width } = useWindowSize()

const isMobile = computed(() => {
  return width.value < 768
})

export const useIsMobile = () => {
  return { isMobile }
}
