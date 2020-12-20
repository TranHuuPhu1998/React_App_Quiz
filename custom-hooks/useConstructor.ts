import { type } from 'os'
import {useRef} from 'react'

type constructorFunc = () => void
function useConstructor(callback : constructorFunc):void
{
  const isRun = useRef(false)
  if(isRun.current === false){
    callback();
    isRun.current = true
  }
}
export default useConstructor