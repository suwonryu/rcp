import {useClock} from './hooks'
import Clock from './pages/Colck'

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}
