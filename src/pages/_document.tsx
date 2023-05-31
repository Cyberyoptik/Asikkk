import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <Footer />
      </body>
    </Html>
  )
}