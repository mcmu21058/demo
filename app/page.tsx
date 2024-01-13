import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
// In your /app/page.tsx file, import the component from next/image. Then, add the image under the comment:
import Image from 'next/image';


// the next line of code imported the css module. This can replace the css utility called Tailwind.These are common ways of styling Next.JS apps. Whether you use one or the other is a matter of preference.
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

          {/* The next line respresents Tailwind Utility CSS */}
          {/* <div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/> */}

          {/* Then, inside your /app/page.tsx file import the styles and replace the Tailwind class names from the <div> you've added with styles.shape: */}



          <div className={styles.shape}></div>

          {/* <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> */}

          {/* added lusitana to paragraph */}
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to The Technology Overlay.</strong> Dana McMullen, Accessibility Specialist{' '}
            <a href="https://techoverlay.life" className="text-blue-500">
              Services Page
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">

          {/* Add Desktop Hero Images Here you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image.

You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens. */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          {/* Add Mobile Hero Images Here. add another <Image> component for hero-mobile.png.

The image should have a width of 560 and height of 620 pixels.
It should be shown on mobile screens, and hidden on desktop. */}

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />

        </div>
      </div>
    </main>
  );
}
