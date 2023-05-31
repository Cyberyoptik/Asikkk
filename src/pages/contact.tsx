import Head from 'next/head'
import ItemNav from '../components/ItemNav'
import StaticMeta from '../components/StaticMeta'
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact - Gemar Kode</title>
                <StaticMeta />
            </Head>
            <ItemNav />
            <section className="bg-white dark:bg-gray-900 sm:py-16 lg:px-6">
                <div className="px-4 py-5 mx-auto max-w-screen-xl">
                    <div className="max-w-screen-md">
                        <h2 className="mb-4 text-4xl text-primary-900 tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Contact us
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            We are a non-profit community, we are not talking about business for profit. You can contact us by email below.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl py-4 px-4">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary-900 dark:text-white">
                                <a href="#">Email</a>
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                gemarkode@gmail.com
                            </p>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary-900 dark:text-white">
                                <a href="#">Alternative Email</a>
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                pemalang.gemarkode@gmail.com
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="bg-green-50 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md">
                        <h2 className="mb-4 text-4xl text-primary-900 tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Join Telegram Forum
                        </h2>
                        <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            We have a forum on Telegram, it is a not very active forum. we have an active WhatsApp forum, you can contact us if you want to join our WhatsApp forum.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://t.me/gemarkode"
                                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                Join Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
