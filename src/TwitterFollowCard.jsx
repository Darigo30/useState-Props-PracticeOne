import { useState } from "react"
export function TwiiterFollowCard ({ userName, children, avatar }) {
  const [isFollowing, setIsFollowing] = useState(false)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName= isFollowing
  ? 'tw-followCard-button is-following'
  :  'tw-followCard-button'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
        className="tw-followCard-avatar"
        src= {`https://avatars.githubusercontent.com/u/${avatar}`}
        alt="Avatar GitHub " />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}