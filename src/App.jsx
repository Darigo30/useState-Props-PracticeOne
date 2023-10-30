import './App.css'
import { TwiiterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'darigo30',
    avatar: '39928174',
    name: 'Dariana Gómez Reyes'
  },
  {
    userName: 'storoe1992',
    avatar: '24356771',
    name: 'Sergio Toro Escofet'
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(({userName, name, avatar}) =>
          <TwiiterFollowCard key={userName} userName={userName} avatar={avatar}> {name} </TwiiterFollowCard>
        )
      }
    </section>
  )
}