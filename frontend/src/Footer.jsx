import React from 'react'
import logo from "./images/logo.png" 
function Footer() {
  const date = new Date();

  return (
    <section className="pb-5 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <hr className="mt-16 mb-5 border-gray-200" />
        <div className="flex justify-between items-center">
          <div><img src={logo} alt="logo" className="w-24" /></div>
          <p className="text-sm text-center text-gray-600">

            © Copyright {date.getFullYear()}, All Rights Reserved by Cinematch
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer