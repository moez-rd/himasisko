import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import logo from "../../public/logo.png";
import staffs from "../../staff";
import { useRouter } from "next/router";
import Link from 'next/link'

interface Staff {
  nama: string;
  nim: string;
  lulus: boolean;
  dinas: string | null;
  divisi: string | null;
}

export default function Home() {
  const router = useRouter();
  const { nim } = router.query;

  const staff: Staff = staffs.filter(function (item) {
    return item.nim == nim;
  })[0];

  console.log(staff != undefined);

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

          {/* CARD */}
          <div className="bg-white flex flex-col items-center py-10 px-6 mx-2 sm:mx-auto sm:px-24 mt-20 sm:mt-28 border-2 rounded-lg sm:w-[600px]">
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              Pengumuman Kelulusan Calon Staff
            </h2>
            {staff != undefined ? (
              staff.lulus ? (
                <Fragment>
                  <div className="w-full text-left">
                    <p className="mb-2">
                      <span className="font-bold">Selamat!</span> kepada
                    </p>
                    <div className="flex">
                      <p className="mb-2 w-20 flex-none font-bold">Nama</p>
                      <p className="mb-2 font-bold">:&nbsp;</p>
                      <p className="mb-2">{staff.nama}</p>
                    </div>
                    <div className="flex">
                      <p className="mb-2 w-20 flex-none font-bold">NIM</p>
                      <p className="mb-2 font-bold">:&nbsp;</p>
                      <p className="mb-2">{staff.nim}</p>
                    </div>
                    <p className="mb-2">
                      dinyatakan{" "}
                      <span className="font-bold text-green-600 bg-green-200 inline-block px-0.5 rounded">
                        LULUS
                      </span>{" "}
                      sebagai BPH Himpunan Mahasiswa Sistem Komputer Unsri 2023
                      pada
                    </p>
                    <div className="flex">
                      <p className="mb-2 w-20 flex-none font-bold">Dinas</p>
                      <p className="mb-2 font-bold">:&nbsp;</p>
                      <p className="mb-2">{staff.dinas}</p>
                    </div>
                    {staff.divisi && (
                      <div className="flex">
                        <p className="mb-2 w-20 flex-none font-bold">Divisi</p>
                        <p className="mb-2 font-bold">:&nbsp;</p>
                        <p className="mb-2">{staff.divisi}</p>
                      </div>
                    )}
                    <p className="mb-2">
                      Silakan bergabung ke grup WhatsApp kabinat Mahardika
                      Abhipraya.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => router.back()}
                      className="rounded-lg border border-gray-400 mt-4 py-1.5 px-8 font-bold hover:bg-gray-100"
                    >
                      Kembali
                    </button>
                    <Link
                      href="https://chat.whatsapp.com/EwP2SwY3CnaBUV3NlIKfEJ"
                      className="rounded-lg bg-gray-700 text-gray-100 mt-4 py-1.5 px-8 font-bold hover:bg-gray-800"
                    >
                      Link WhatsApp
                    </Link>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-full">
                    <p className="mb-2">
                      <span className="font-bold">Mohon maaf!</span> kepada
                    </p>
                    <div className="flex">
                      <p className="mb-2 w-20 flex-none font-bold">Nama</p>
                      <p className="mb-2 font-bold">:&nbsp;</p>
                      <p className="mb-2">{staff.nama}</p>
                    </div>
                    <div className="flex">
                      <p className="mb-2 w-20 flex-none font-bold">NIM</p>
                      <p className="mb-2 font-bold">:&nbsp;</p>
                      <p className="mb-2">{staff.nim}</p>
                    </div>
                    <p className="mb-2">
                      dinyatakan{" "}
                      <span className="font-bold text-red-600 bg-red-200 inline-block px-0.5 rounded">
                        TIDAK LULUS
                      </span>{" "}
                      sebagai BPH Himpunan Mahasiswa Sistem Komputer Unsri 2023.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => router.back()}
                      className="rounded-lg border border-gray-400 mt-4 py-1.5 px-8 font-bold hover:bg-gray-100"
                    >
                      Kembali
                    </button>
                  </div>
                </Fragment>
              )
            ) : (
              <Fragment>
                <p className="mb-2 text-center text-gray-400">
                  Mohon maaf, NIM yang dimasukkan tidak valid atau tidak
                  terdaftar sebagai calon staff Himasisko.
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => router.back()}
                    className="rounded-lg border border-gray-400 mt-4 py-1.5 px-8 font-bold hover:bg-gray-100"
                  >
                    Kembali
                  </button>
                </div>
              </Fragment>
            )}
          </div>
          {/* END OF CARD */}
        </main>
        <footer className="flex flex-col items-center mt-32 text-sm text-gray-300">
          <p className="font-bold">Himasisko Unsri 2023</p>
          <p className="font-light">Built by Infokom Himasisko - 2023</p>
        </footer>
      </div>
    </>
  );
}
