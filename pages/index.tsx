import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Himasisko</title>
        <meta
          name="description"
          content="Situs resmi Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center h-screen">
        <main className="text-center">
          <Image
            src={logo}
            alt="Mahardika Abhipraya"
            className="w-20 mx-auto sm:w-28"
          />
          <h1 className="text-2xl sm:text-4xl mt-4 font-black">Coming Soon</h1>
          <p className="text-gray-500 ">Himasisko Universitas Sriwijaya 2023</p>
        </main>
      </div>
    </>
  );
}
