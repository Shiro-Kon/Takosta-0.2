import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-olive-drab to-sage-green px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center p-6 sm:p-10 bg-white/80 rounded-xl shadow-xl max-w-lg sm:max-w-xl"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          <h1 className="text-6xl sm:text-9xl font-extrabold text-olive-drab">404</h1>
        </motion.div>
        <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sage-green">
          Ой, ви заблукали!
        </h2>
        <p className="mt-4 text-sm sm:text-lg lg:text-xl leading-6 sm:leading-7 text-olive-drab">
          Здається, ми не змогли знайти сторінку, яку ви шукаєте. Але не хвилюйтеся, ми допоможемо вам повернутися!
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            to="/"
            className="inline-block rounded-lg bg-olive-drab px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white shadow-lg hover:bg-olive-drab/90 transition-transform transform hover:scale-105"
          >
            Повернутися на головну
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

export default NotFoundPage;
