import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Apakah Buku Nomor aman?',
      answer:
        'Buku Nomor menggunakan enkripsi end-to-end untuk melindungi data kamu. Kami juga tidak pernah menyimpan data kamu di server kami.',
    },
    {
      question: 'Apakah Buku Nomor gratis?',
      answer:
        'Ya, Buku Nomor membatasi penggunaan gratisnya. Kamu bisa upgrade ke premium untuk mendapatkan fitur tambahan. Cuma 2.400/bulan.',
    },
    {
      question: 'Apakah Buku Nomor tersedia di Android?',
      answer:
        'Sudah ada di Android. Kamu bisa download di Play Store. Tapi, belum ada di iOS, tunggu ya!',
    },
  ],
  [
    {
      question: 'Mengapa Buku Nomor membatasi penggunaan gratis?',
      answer:
        'Ya, kami harus membatasi penggunaan gratis karena kami harus bayar server, developer, dan biaya operasional lainnya.',
    },
    {
      question: 'Siapa yang membuat Buku Nomor?',
      answer:
        'MavenTama. Kami pengembang yang berpengalaman di pemerintah, bank, sekolah, dan perusahaan swasta.',
    },
    {
      question: 'Apakah ada batasan usia untuk menggunakan Buku Nomor?',
      answer:
        'Tidak ada batasan usia, ini hanya aplikasi fungsional yang bisa digunakan oleh siapa saja.',
    },
  ],
  [
    {
      question: 'Kemana saya bisa mengirimkan saran?',
      answer:
        'Kamu bisa mengirimkan saran ke email kami di maventama@gmail.com. Kami akan sangat senang menerima saran dari kamu.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Sering banget ditanya
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Kalo kamu punya pertanyaan lain,{' '}
            <a
              href="mailto:maventama@gmail.com"
              className="text-gray-900 underline"
            >
              email kami
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
