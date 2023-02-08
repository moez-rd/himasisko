import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [nim, setNim] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/oprec/${nim}`);
  };

  return (
    <>
      <Head>
        <title>Oprec Himasisko</title>
        <meta
          name="description"
          content="Pengumuman kelulusan calon staff Himasisko Universitas Sriwijaya 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <main className="mt-16 sm:mt-20 text-center">
          <Image
            src={logo}
            alt="Picture of the author"
            className="w-20 mx-auto sm:w-28"
          />
          <h1 className="text-2xl sm:text-4xl mt-4 font-black">
            Open Recruitment
          </h1>
          <p className="text-gray-500 ">Himasisko Universitas Sriwijaya 2023</p>
          <div className="bg-white flex flex-col items-center py-10 px-6 mx-2 sm:mx-auto sm:px-24 mt-20 sm:mt-28 border-2 rounded-lg sm:w-[600px]">
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              Pengumuman Kelulusan Calon Staff
            </h2>
            <p className="mb-2 text-gray-600">Silakan masukkan NIM</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className="border py-1 px-3 focus:outline-gray-600"
                placeholder="NIM"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-gray-700 text-gray-100 mt-4 py-1.5 px-8 font-bold hover:bg-gray-800"
              >
                Cek Hasil
              </button>
            </form>
          </div>
        </main>
        <footer className="flex flex-col items-center mt-32 text-sm text-gray-300">
          <p className="font-bold">Himasisko Unsri 2023</p>
          <p className="font-light">Built by Infokom Himasisko - 2023</p>
        </footer>
      </div>
    </>
  );
}
