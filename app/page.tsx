"use client"

import  { useState } from 'react'
import QRCode from 'qrcode'
import Image from 'next/image'

const Page = () => {

  const [text , setText] = useState('')
  const [qrCodeUrl , setQrCodeUrl] = useState('')

  const generateQrCode = async ()=>{
    try{
      const url = await QRCode.toDataURL(text)
      setQrCodeUrl(url)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='flex gap-3  flex-col min-h-screen w-full justify-center items-center p-5'>
      
      <h1>generate qrcode</h1>
      <input type="text" 
      placeholder='enter url link '
      className='w-80 rounded-lg p-2 border-2'
      value={text}
      onChange={(e)=> setText(e.target.value)}
      />
      <button 
      onClick={generateQrCode}
      className='bg-amber-500 text-white rounded-lg px-4 py-3 '>generate</button>

      {qrCodeUrl &&
      <div className="mt-6">
          <Image  src={qrCodeUrl} alt="Generated QR Code" width={200} height={200} />
          <p className="mt-2 text-gray-400">Scan this QR to visit the link</p>
      </div>  
      }
    </div>
  )
}

export default Page
