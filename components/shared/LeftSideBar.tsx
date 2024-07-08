"use client"

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname,  useRouter } from 'next/navigation'
import { SignedIn, SignOutButton } from '@clerk/nextjs'
import { useClerk } from '@clerk/nextjs'

export default function LeftSideBar() {

  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk() 

  async function handleSignOut(){
    await signOut();
    router.push("/sign-in");
  }

  return (
    <section className='custom-scrollbar leftsidebar'>
        <ul className='flex w-full flex-1 flex-col gap-6 px-6'>
          {sidebarLinks.map((link, index) => {
            const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

            return(
              <li key={index}>
                <Link 
                href={link.route} 
                className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
                >
                  <Image 
                  src={link.imgURL} 
                  alt={link.label} 
                  height={24} 
                  width={24}
                  />
                  <p 
                  className='text-light-1 max-lg:hidden'
                  >
                    {link.label}
                  </p>
                </Link>
              </li>
            )})
          }
          <div className='mt-[5.50rem] px-4'>
            <SignedIn>
              <SignOutButton>
                <div className='flex cursor-pointer gap-4' onClick={handleSignOut}>
                  <Image
                  src="/logout.svg"
                  alt='logout'
                  width={24}
                  height={24}
                  />
                  <p className='text-light-2 max-lg:hidden'>Logout</p>
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </ul>
    </section>
  )
}
