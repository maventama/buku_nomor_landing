import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import logoPlaystore from '@/images/download-playstore.png'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="#"
      aria-label="Download on the Play Store"
    >
        <Image style={{
            width: '200px',
            height: 'auto'
        }} src={logoPlaystore} alt="Google Play" unoptimized />
    </Link>
  )
}
