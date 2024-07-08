"use client"

import React from 'react'

type AccountProfileTypes = {
    user:{
        id:String,
        objectId:String,
        username:String,
        name:String,
        bio:String,
        image:String,
    },
    btnTitle:String
}

export default function AccountProfile({ user, btnTitle}: AccountProfileTypes) {
  return (
    <section>
        <h1>
            Profile
        </h1>
    </section>
  )
}
