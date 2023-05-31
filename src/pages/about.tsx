import Head from 'next/head'
import ItemNav from '../components/ItemNav'
import StaticMeta from '../components/StaticMeta'
export default function About() {
    return (
        <>
            <Head>
                <title>About - Gemar Kode</title>
                <StaticMeta />
            </Head>
            <ItemNav />
            <section className="bg-white dark:bg-gray-900">
                <div className="items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img
                        className="w-full"
                        src="./image/gemarkode.png"
                        alt="about"
                    />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl text-primary-900 tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Learn IT with the Community is Fun
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            Gemar Kode is a Information Technology Enthusiast Community.
                            A community that focuses on developing Human Resources to create an ethical IT Enthusiast Ecosystem.
                        </p>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            We join Competitions, and active in Sharing Sessions in our free time. We balance Soft Skills with Hard Skills. We also build relationships with other communities.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="text-dark-600 dark:text-gray-200 py-8 px-5 text-center">
                    <h2 className="mb-5 py-5 text-4xl tracking-tight font-extrabold text-primary-900 text-gray-900 dark:text-white">
                        Our Partner
                    </h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
                        <div className="mb-8 lg:mb-0">
                            <a href="https://t.me/hacktheboxindo">
                                <img
                                    src="./image/2.png"
                                    className="img-fluid px-6 md:px-12"
                                    alt="partner"
                                />
                            </a>
                        </div>
                        <div className="mb-8 lg:mb-0">
                            <a href="https://t.me/naitocode">
                                <img
                                    src="./image/1.png"
                                    className="img-fluid px-6 md:px-12"
                                    alt="partner"
                                />
                            </a>
                        </div>
                        <div className="mb-8 lg:mb-0">
                            <a href="https://t.me/thecyberswat">
                                <img
                                    src="./image/3.png"
                                    className="img-fluid px-6 md:px-12"
                                    alt="partner"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
