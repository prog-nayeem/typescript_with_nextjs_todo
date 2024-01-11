import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl absolute bg-orange-400 min-h-96 rounded-3xl min-w-96 items-center justify-center font-mono lg:flex">
        <h2 className=" w-full text-center text-xl font-bold text-white">
          Make your todo here!
        </h2>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div> */}
      </div>
    </main>
  );
}
