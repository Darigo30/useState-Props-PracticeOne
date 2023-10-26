import './App.css'
import { TwiiterFollowCard } from './TwitterFollowCard'
export function App () {

  //Ej de pasar objetos como props
  const darigo30 = { userName: 'darigo30', avatar: '39928174', name: 'Dariana Gómez Reyes'}

  return (
    <section className='App'>
      <TwiiterFollowCard { ...darigo30 }/>
      <TwiiterFollowCard userName="storoe1992" avatar="24356771" name="Sergio Toro Escofet"/>
    </section>  
  )
}