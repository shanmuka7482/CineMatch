import React from 'react'
import logo from "./images/logo.png" 
function Footer() {
  return (
    <section class="pb-5 bg-gray-50">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <hr class="mt-16 mb-5 border-gray-200" />
        <div class="flex justify-between items-center">
          <div><img src={logo} alt="logo" class="w-24" /></div>
          <p class="text-sm text-center text-gray-600">
            © Copyright 2021, All Rights Reserved by Cinematch
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer