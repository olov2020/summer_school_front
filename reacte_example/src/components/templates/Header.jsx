import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header__title">
        <div>
          <h1>Домашняя</h1>
        </div>
      </a>

      <a href="/Blog" className="header__title">
        <div>
          <h1>Посты</h1>
        </div>
      </a>

      <a href="/Video" className="header__title">
        <div>
          <h1>Видео-семинары</h1>
        </div>
      </a>

      <a href="/Account" className="header__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </a>
    </div>
  )
}

export default Header