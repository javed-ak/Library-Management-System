import HomeIntro from "../components/HomeIntro";

export default function Home() {
  return (
    <div>
      <div className="text-6xl h-72 font-bold text-yellow-400 flex justify-center items-center bg-[url('./public/Img_bg.jpg')] bg-blend-darken bg-center bg-cover">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-yellow-50 to-yellow-400">Welcome To The Library</div>
      </div>
      <HomeIntro />
      <div class="h-screen bg-gradient-to-r from-cyan-500 to-yellow-400 flex justify-center items-center font-bold text-4xl text-zinc-50">Work in Progress</div>
    </div>
  )
}
