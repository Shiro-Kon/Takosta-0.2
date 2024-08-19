import { Link } from 'react-router-dom'

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-sage-green">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-olive-drab sm:text-5xl">Сторінку не знайдено</h1>
        <p className="mt-6 text-base leading-7 text-olive-drab">На жаль, нам не вдалося знайти сторінку, яку ви шукаєте.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-olive-drab px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-olive-drab/80"
          >
            Повернутися до головної
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
