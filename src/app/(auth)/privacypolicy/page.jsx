import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { CirclesBackground } from '@/components/CirclesBackground'

export const metadata = {
  title: 'Sign In',
}

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <CirclesBackground
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            Kebijakan Privasi
          </h1>
        <p className="mt-3 text-center text-lg text-gray-600">
            Ketika Anda menggunakan aplikasi "Buku Nomor", berarti Anda setuju dengan Kebijakan Privasi kami.
        </p>
        </div>
        <div>
        <header>
        <h1 className='font-bold'>Kebijakan Privasi</h1>
        <p>Terakhir diperbarui: 3 Mei 2024</p>
    </header>
    
    <br />
    <section id="introduction" className='mb-4'>
        <h2 className='font-bold mb-2'>Pengantar</h2>
        <p>Kami di "Buku Nomor" menghargai dan menghormati privasi pengguna kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi yang mungkin kami peroleh dari Anda melalui penggunaan aplikasi kami.</p>
    </section>

    <section id="information-collection" className='mb-4'>
        <h2 className='font-bold mb-2'>Informasi yang Kami Kumpulkan</h2>
        <p>Ketika Anda menggunakan aplikasi "Buku Nomor", kami tidak secara otomatis mengumpulkan informasi pribadi apa pun dari Anda. Namun, sebagai aplikasi untuk menyimpan nomor telepon dan kontak lainnya, Anda memiliki opsi untuk secara sukarela memasukkan dan menyimpan informasi kontak dalam aplikasi.</p>
    </section>

    <section id="use-of-information" className='mb-4'>
        <h2 className='font-bold mb-2'>Penggunaan Informasi</h2>
        <p>Informasi yang Anda masukkan ke dalam aplikasi "Buku Nomor" akan digunakan secara eksklusif untuk menyimpan dan mengelola kontak Anda. Kami tidak akan menggunakan informasi tersebut untuk tujuan lain atau membagikannya kepada pihak ketiga tanpa izin Anda.</p>
    </section>

    <section id="data-security" className='mb-4'>
        <h2 className='font-bold mb-2'>Keamanan Data</h2>
        <p>Kami mengambil langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi yang Anda simpan dalam aplikasi "Buku Nomor". Kami menggunakan praktik-praktik industri yang umum untuk melindungi informasi tersebut dari akses, penggunaan, atau pengungkapan yang tidak sah.</p>
        <p>Harap diingat bahwa tidak ada metode transmisi atau penyimpanan data elektronik yang sepenuhnya aman. Meskipun kami berusaha keras untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin keamanan mutlak.</p>
    </section>

    <section id="policy-changes" className='mb-4'>
        <h2 className='font-bold mb-2'>Perubahan Kebijakan Privasi</h2>
        <p>Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu sebagai tanggapan terhadap perubahan dalam praktik kami atau perubahan peraturan yang relevan. Perubahan tersebut akan berlaku segera setelah diposting di halaman ini.</p>
        <p>Kami mendorong Anda untuk secara berkala meninjau kebijakan privasi kami untuk tetap up-to-date dengan cara kami melindungi informasi pribadi Anda.</p>
    </section>

    <section id="contact-us" className='mb-4'>
        <h2 className='font-bold mb-2'>Kontak Kami</h2>
        <p>Jika Anda memiliki pertanyaan atau masalah tentang Kebijakan Privasi ini, atau jika Anda ingin memperbarui, mengoreksi, atau menghapus informasi pribadi yang kami simpan, silakan hubungi kami melalui email di <a href="mailto:maventama@gmail.com">maventama@gmail.com</a>.</p>
    </section>

    <footer>
        <p>&copy; 2024 Buku Nomor. Seluruh hak dilindungi.</p>
    </footer>
        </div>
      </div>
    </main>
  )
}
