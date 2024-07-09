"use client"

import React, { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver} from "@hookform/resolvers/zod"
import userValidation from '@/lib/validations/user'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import Image from 'next/image'
import { Textarea } from '../ui/textarea'

type AccountProfileTypes = {
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        bio:string,
        image:string,
    },
    btnTitle:string
}

export default function AccountProfile({ user, btnTitle}: AccountProfileTypes) {

    const form = useForm({
        resolver:zodResolver(userValidation),
        defaultValues:{
            profile_photo:user?.image || "",
            name:user?.name || "",
            username:user?.username || "",
            bio:user?.bio || "",
        }
    });
    function onSubmit(values:z.infer<typeof userValidation>){
        console.log(values);
    }

    function handleImage(e:ChangeEvent, fieldChange:(value:String) => void) {
      e.preventDefault();
    }
    return (
        <Form {...form}>
          <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="flex flex-col gap-4 justify-start"

          >
            <FormField
              control={form.control}
              name="profile_photo"
              render={({ field }) => (
                <FormItem className='flex items-center gap-4'>
                  <FormLabel className='account-form_image-label'>
                    {field.value ? (
                      <Image
                      src={field.value}
                      alt="profile photo"
                      width={96}
                      height={96}
                      priority={true}
                      className='rounded-full object-contain'
                      />
                    ) : (
                      <Image
                      src="/profile.svg"
                      alt="profile photo"
                      width={24}
                      height={24}
                      className='object-contain'
                      />
                    )

                    }
                  </FormLabel>
                  <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    <Input 
                    type='file' 
                    accept='image/*'
                    placeholder='Upload a photo'
                    className='account-form_image-input'
                    onChange={(e) =>  handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center gap-3 w-full px-2'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Name
                  </FormLabel>
                  <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    <Input 
                    type='text' 
                    placeholder='Name'
                    className='account-form_input no-focus'
                    {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center gap-3 w-full px-2'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Userame
                  </FormLabel>
                  <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    <Input 
                    type='text' 
                    placeholder='Name'
                    className='account-form_input no-focus'
                    {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center gap-3 w-full px-2'>
                  <FormLabel className='text-base-semibold text-light-2 '>
                    Bio
                  </FormLabel>
                  <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    <Textarea
                    rows={10}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className='bg-primary-500'>Submit</Button>
          </form>
        </Form>
      )
}
