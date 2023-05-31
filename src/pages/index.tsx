import Head from 'next/head'
import ItemNav from '../components/ItemNav'
import StaticMeta from '../components/StaticMeta'
export default function Home() {
  return (
    <>
      <Head>
        <title>Gemar Kode - Indonesian Information Technology Enthusiast</title>
        <StaticMeta />
      </Head>
      <ItemNav />
      <section className="overflow-hidden">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("../image/bg.png")',
            height: 500
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.60)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-gray-50 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8">
                  Gemar Kode Community
                </h1>
                <p className="text-gray-300 sm:text-xl mb-8">
                  Indonesian Information Technology Enthusiast
                </p>
                <a
                  className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="/about"
                  role="button"
                >
                  See More
                </a>
                <a
                  className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="/contact"
                  role="button"
                >
                  Join Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Our community is not just an ordinary discussion community. We also do some activities to fill our free time.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img src="./icon/code.svg" alt="" className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">Join Competition</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We participated in several competitions such as Coding Competition, CTF competition, and other IT competitions.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img src="./icon/share-fill.svg" alt="" className="w-3 h-3 text-primary-600 lg:w-4 lg:h-4 dark:text-primary-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">Sharing Session</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We actively share information, share knowledge, or share experiences with community members or community partners.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img src="./icon/stack.svg" alt="" className="w-3 h-3 text-primary-600 lg:w-4 lg:h-4 dark:text-primary-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">
                Building Learning Resources
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We build learning resources such as Coding learning sites, Capture The Flag learning sites, and Open Source Projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
