import React from 'react';
import Navbar from '../Navbar';

export default function Profil() {
  return (
    <div>
      <Navbar />

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/logo stmik.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STIE & STMIK JAYAKARTA</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ingin merasakan serunya kuliah dengan harga yang sangat terjangkau ? Yuk bergabung di kampus Jayakarta.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Daftar
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

      <div className="grid mb-8 border border-black-200 rounded-lg shadow-sm dark:border-black-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-black-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-black-800 dark:border-black-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Akademik STIE</h3>
            <p className="my-4">"Penanggung Jawab Mahasiswa Stie"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-20 h-20" src="/bu rina.jpg" alt="Profil" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bu Rina</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">0822-9800-0977</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-black-200 rounded-tr-lg dark:bg-black-800 dark:border-black-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Akademik STMIK</h3>
            <p className="my-4">Penanggung Jawab Mahasiswa STMIK"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-20 h-20" src="/bu asih.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bu Asih</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">0898-8999-370</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mahasiswa STMIK</h3>
            <p className="my-4">"Prodi Sistem Informasi"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-20 h-20" src="/uty.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Putri Agustin</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">21560022</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dosen STMIK</h3>
            <p className="my-4">"Dosen Pemrograman Web"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-20 h-20" src="/dosen.jpg" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Dimas Prasetyo Tegar Asmoro, S.Kom,M.Kom</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">0821-1475-1004</div>
            </div>
          </figcaption>
        </figure>
      </div>
  </div>
  
  );
}