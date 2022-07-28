import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Tech</span>Newz
        </h1>
        <p className={headerStyles.description}>
            Keep up to date with latest tech newz
        </p>
    </div>
  )
}

export default Header