import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <header>
      <nav className='topbar'>
        <div className='flex gap-2'>
          <Link 
          href="/"
          className="flex items-center gap-4"
          >
            <Image 
            src="logo.svg" 
            alt='logo' 
            width={28} 
            height={28}
            />
          </Link>
          <p className='text-heading3-bold text-light-1 max-sx:hidden'>
            Threads
          </p>
        </div>

        <div className='flex items-center gap-1'>
          <div className='block md:hidden'>
            <SignedIn>
              <SignOutButton>
                <div className='flex cursor-pointer'>
                  <Image
                  src="/logout.svg"
                  alt='logout'
                  width={24}
                  height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
          <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger:"py-2 px-4 text-white"
            }
          }}
          />
        </div>
      </nav>
    </header>
  )
}
