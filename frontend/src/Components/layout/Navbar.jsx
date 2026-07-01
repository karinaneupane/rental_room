import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around mt-4.5 items-center">
        <div className="logo flex items-center gap-1.5">
            <div code-path="src/components/layouts/LandingLayout.tsx:38:17" class="w-8 h-8 rounded-lg bg-linear-to-br from-[#5E35B1] to-[#7C4DFF] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-4 h-4 text-white" aria-hidden="true" code-path="src/components/layouts/LandingLayout.tsx:39:19"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
            <h2 className="webName font-bold text-2xl">RentNest</h2>
        </div>
        <div className="midNav flex gap-12 text-[#737a88] text-xl font-medium">
            <a href="#"><p className="cursor-pointer">Browse</p></a>
            <a href="#"><p className="cursor-pointer">How it works</p></a>
            <a href="#"><p className="cursor-pointer">Cities</p></a>
            <a href="#"><p className="cursor-pointer">Support</p></a>
        </div>
        <div className="getStarted flex gap-8">
            <button className="signIn text-[#737a88] text-xl font-medium cursor-pointer">Sign in</button>
            <button className="getStarted bg-[#5e35b1] rounded-3xl w-30 h-10 text-white font-semibold text-[17px] cursor-pointer">Get Started</button>
        </div>
      </nav>
     </div>
  )
}

export default Navbar
