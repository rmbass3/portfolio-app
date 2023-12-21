import Image from "next/image"
import Profile from "../public/profile.png"

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className="grid grid-cols-2">
        <div className="container flex flex-col">
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl my-3 text-nowrap">I&apos;m Ryan Bass, <br/> a Software Engineer.</h1>
          <h5 className="text-sm sm:text-base md:text-xl lg:text-3xl my-3 text-nowrap">Here&apos;s what I&apos;ve been working on.</h5>
          <button className="rounded bg-purple w-1/2 md:w-1/3 text-sm md:text-base py-1 md:py-2 px-3 my-3">Projects</button>
        </div>

        <div className="container flex justify-end">
          <Image className="size-64" src={Profile} alt="profile-picture"/>
        </div>
      </div>
    </main>
  )
}
