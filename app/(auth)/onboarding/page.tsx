import AccountProfile from '@/components/forms/AccountProfile'
import React from 'react'

export default function page() {

    const userData = {
        id: "String",
        objectId: "String",
        username:" String",
        name: "String",
        bio: "String",
        image: "String",
    }

  return (
    <main className='mx-auto flex max-w-3xl flex-col items-center '>
        <h1 className='head-text'>Onboarding</h1>
        <p className='mt-3 text-base-regular text-light-1'>Complete your profile now to use Threads.</p>
        <section className='mt-9 bg-dark-2 p-10'>
            <AccountProfile user={userData} btnTitle="Continue"/>
        </section>
    
    </main>
  )
}
