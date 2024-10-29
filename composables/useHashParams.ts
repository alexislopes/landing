
const params = useUrlSearchParams('hash-params')

export const useHashParams = () => {

  function setParam(to: string) {
    delete params.to
    params.to = to
  }

  watch(params, (value) => {
    document ? document.getElementById(value.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) : null
  },
    { immediate: true })

  return {
    params,
    setParam
  }

}
