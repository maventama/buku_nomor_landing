'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Kenapa gak dari dulu? 😭',
    body: 'Buku Nomor ini bener-bener membantu banget. Gak perlu lagi buka-buka aplikasi lain buat nyari nomor penting.',
    author: 'Rizky Kurniawan',
    rating: 5,
  },
  {
    title: 'Aku beli premiumnya karena worth it banget!',
    body: 'Cuma 2.400/bulan, lebih murah ini ketimbang gorengan, aku bisa simpan semua nomor penting aku. Gak perlu lagi takut kehilangan nomor penting.',
    author: 'Ayu',
    rating: 5,
  },
  {
    title: 'Woi, ini beneran membantu banget!',
    body: 'Bokap gue yang udah tua banget aja bisa pake Buku Nomor ini. Gak perlu lagi nanya-nanya nomor ke aku.',
    author: 'Lintang',
    rating: 5,
  },
  {
    title: 'Keren banget!',
    body: 'Baru pake seminggu, udah gak perlu lagi buka-buka dompet buat nyari nomor penting. Gak perlu lagi takut kehilangan nomor penting.',
    author: 'Riko',
    rating: 5,
  },
  {
    title: 'Sekeluarga pake Buku Nomor!',
    body: 'Nomor token gue yang sering ilang, sekarang gak pernah ilang lagi. Gue, bokap, nyokap, semuanya pake Buku Nomor.',
    author: 'Windu',
    rating: 5,
  },
  {
    title: '29rb per tahun? ini beneran woi!!??',
    body: 'Tutup mulut gue, ini beneran murah banget. Gak perlu lagi takut kehilangan nomor penting.',
    author: 'Sarah',
    rating: 5,
  },
  {
    title: 'Gue berharap kasih 10 bintang!',
    body: 'Ini aplikasi tipikal daily use banget. Fungsionalitasnya bener-bener membantu banget.',
    author: 'Ihsan',
    rating: 5,
  },
  {
    title: 'Klien minta nomor rekening, tinggal buka, copy, paste!',
    body: 'Gak perlu lagi buka-buka aplikasi lain buat nyari nomor rekening. Tinggal buka Buku Nomor, copy, paste. Selesai.',
    author: 'Ahmad',
    rating: 5,
  },
  {
    title: 'Paling males buka dompet untuk liat nomor KTP',
    body: 'Gak perlu lagi buka dompet buat liat nomor KTP. Tinggal buka Buku Nomor, selesai.',
    author: 'Rizal',
    rating: 5,
  },
  {
    title: 'Jangan download aplikasi ini! kecuali...',
    body: 'Mau jadi lebih produktif, gak perlu lagi buka-buka aplikasi lain buat nyari nomor penting.',
    author: 'Richie',
    rating: 5,
  },
  {
    title: 'Ini buatan Indonesia? Keren banget!',
    body: 'Gak nyangka ini buatan Indonesia. Keren banget! Gak perlu lagi buka-buka aplikasi lain buat nyari nomor penting.',
    author: 'Hendro',
    rating: 5,
  },
  {
    title: 'Minimal coba dulu!',
    body: 'Abis itu gak bakal nyesel deh. Gak perlu lagi buka-buka aplikasi lain buat nyari nomor penting.',
    author: 'Ujang',
    rating: 5,
  },
  {
    title: 'Beneran membantu banget!',
    body: 'Gue download karena info dari temen. Ini aplikasi gak ada iklan, gak ada yang ribet. Gak perlu lagi buka-buka aplikasi lain buat nyari nomor penting.',
    author: 'Surya',
    rating: 5,
  },
  {
    title: 'Broo ini gak ada iklan!',
    body: 'Beneran gak ada iklan.',
    author: 'Jerry',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-blue-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Apa kata mereka yang sudah menggunakan Buku Nomor?
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Mereka sudah melewati batas produktivitas dengan Buku Nomor dengan mengoptimalkan waktu mereka.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
