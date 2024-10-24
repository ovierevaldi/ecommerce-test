import React from 'react'

// Icons
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"

export default function ShopAlert() {
  return (
    <Alert className='absolute bg-primary text-white'>
        <AlertTitle>Purchase success</AlertTitle>
        <AlertDescription>
          Your items is on shipping, Please check the purchase history menu under account to track your item.
        </AlertDescription>
    </Alert>
  )
}
