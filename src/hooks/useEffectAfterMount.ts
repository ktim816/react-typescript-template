import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

const useEffectAfterMount = (
  callback: EffectCallback,
  deps?: DependencyList,
) => {
  const componentJustMount = useRef(true)

  useEffect(() => {
    if (!componentJustMount.current) {
      return callback()
    }

    componentJustMount.current = false
  }, deps)
}

export default useEffectAfterMount
