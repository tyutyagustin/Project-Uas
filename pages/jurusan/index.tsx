import { table } from 'console'
import Link from 'next/link'
import Navbar from '../Navbar'


export default function Jurusan() {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold underline">JURUSAN STIE DAN STMIK JAYAKARTA</h1>
            <ul>
                <li>
                    <Link href="/mahasiswa">Mahasiswa Angkatan 2023/2024</Link>
                </li>

            </ul>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-center text-blue-500 dark:text-blue-400">
                    <thead className="text-xs text-blue-700 uppercase bg-blue-50 dark:bg-blue-700 dark:text-blue-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Perguruan Tinggi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Prodi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tingkat Sarjana
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Biaya Semester
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STIE JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Manajemen
                            </td>
                            <td className="px-6 py-4">
                                S1
                            </td>
                            <td className="px-6 py-4">
                                Rp 5.400.000
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STIE JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Akuntansi
                            </td>
                            <td className="px-6 py-4">
                                S1
                            </td>
                            <td className="px-6 py-4">
                                Rp 5.400.000
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STIE JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Akuntansi
                            </td>
                            <td className="px-6 py-4">
                                D3
                            </td>
                            <td className="px-6 py-4">
                                Rp 4.900.000
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STMIK JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Teknik Informatika
                            </td>
                            <td className="px-6 py-4">
                                S1
                            </td>
                            <td className="px-6 py-4">
                                Rp 5.400.000
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STMIK JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Sistem Informasi
                            </td>
                            <td className="px-6 py-4">
                                S1
                            </td>
                            <td className="px-6 py-4">
                                Rp 5.400.000
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                STMIK JAYAKARTA
                            </th>
                            <td className="px-6 py-4">
                                Manajemen Informatika
                            </td>
                            <td className="px-6 py-4">
                                D3
                            </td>
                            <td className="px-6 py-4">
                                Rp 4.900.000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
