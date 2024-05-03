import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { CirclesBackground } from '@/components/CirclesBackground'

export const metadata = {
  title: 'Tata Cara Hapus Akun Pengguna',
}

export default function Privacy_policy() {
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
            Tata Cara Permintaan Hapus Akun Pengguna
          </h1>
        <p className="mt-3 text-center text-lg text-gray-600">
            Berikut adalah tata cara permintaan penghapusan akun pengguna pada aplikasi &quot;Buku Nomor&quot;.
        </p>
        </div>
        <div>
        <header>
        <h1 className='font-bold mt-4'>
            Tata Cara Permintaan Hapus Akun Pengguna
        </h1>
        <p>Terakhir diperbarui: 3 Mei 2024</p>
    </header>
    
    <br />
    <section id="tata-cara" className='mb-4'>
        <ol className='list-decimal list-inside'>
            <li className='mb-2'>Kirim email ke <a href="mailto:maventama@gmail.com">maventama@gmail.com</a> dengan subjek &quot;Permintaan Hapus Akun&quot;.</li>
            <li className='mb-2'>Tuliskan alasan Anda ingin menghapus akun Anda.</li>
            <li className='mb-2'>Kami akan memproses permintaan Anda dalam waktu 7 hari kerja.</li>
            <li className='mb-2'>Setelah akun Anda dihapus, Anda tidak akan dapat mengakses data kontak yang disimpan dalam aplikasi.</li>
        </ol>
    </section>

    <footer>
        <p>&copy; 2024 Buku Nomor. Seluruh hak dilindungi.</p>
    </footer>
        </div>
      </div>
    </main>
  )
}
