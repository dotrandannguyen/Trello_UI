import {useState} from 'react'
  import { Button } from "@/components/ui/button"
export function App(){
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count +1)
  
}

return (
  <div className = 'w-full h-[200px] b-[150px] bg-red-500'>
  <button onClick = {handleClick} >
      <Button>Click me</Button>
    push:{count}
  </button></div>
)
}