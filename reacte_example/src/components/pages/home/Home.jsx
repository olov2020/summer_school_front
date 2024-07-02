import './home.css'

const Home = () => {
  return (
    <div className="home">
      <a href="/Blog" className="home__title">
        <div>
          <h1>Посты</h1>
        </div>
      </a>

      <a href="/Video" className="home__title">
        <div>
          <h1>Видео-семинары</h1>
        </div>
      </a>

      <a href="/Account" className="home__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </a>
    </div>
  )
}

export default Home