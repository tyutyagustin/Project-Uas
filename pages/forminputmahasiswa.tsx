import { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';

const koneksiMahasiswa = axios.create({
  baseURL: "http://127.0.0.1:5000/api/mahasiswa"
});

export default function FormMahasiswa() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("2018-07-22");
  const [alamat, setAlamat] = useState("");
  const [foto, setFoto] = useState("");
  const [prodi, setProdi] = useState("");
  const [mahasiswa, setMahasiswa] = useState([]);
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);

  function formatDate(date) {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiMahasiswa
      .post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const address = `/${selectedMahasiswa.nim}`;
    const formData = {
      nim: selectedMahasiswa.nim,
      nama,
      alamat,
      prodi,
      tanggal_lahir: tanggalLahir,
    };
    koneksiMahasiswa
      .put(address, formData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    setAddVisible(true);
    setEditVisible(false);
    setSelectedMahasiswa(null);
    resetForm();
  };

  const handleCancelAdd = () => {
    setAddVisible(false);
    resetForm();
  };

  const handleCancelEdit = () => {
    setEditVisible(false);
    resetForm();
  };

  const handleDelete = (nim) => {
    koneksiMahasiswa
      .delete(`/${nim}`)
      .then((response) => {
        console.log('Data berhasil dihapus:', response.data);
        setMahasiswa(mahasiswa.filter((mhs) => mhs.nim !== nim));
      })
      .catch((error) => {
        console.error('Gagal menghapus data:', error);
      });
  };

  const handleEdit = (mahasiswa) => {
    setNama(mahasiswa.nama);
    setNim(mahasiswa.nim);
    setAlamat(mahasiswa.alamat);
    setTanggalLahir(formatDate(mahasiswa.tanggal_lahir));
    setFoto(mahasiswa.foto);
    setProdi(mahasiswa.prodi);
    setAddVisible(false);
    setEditVisible(true);
    setSelectedMahasiswa(mahasiswa);
  };

  const resetForm = () => {
    setNama("");
    setNim("");
    setAlamat("");
    setTanggalLahir(formatDate("2018-07-22"));
    setFoto("");
    setProdi("");
  };

  useEffect(() => {
    async function getMahasiswa() {
      try {
        const response = await koneksiMahasiswa.get("/");
        setMahasiswa(response.data.data);
      } catch (error) {
        console.error('Error from mahasiswa in api mahasiswa:', error);
      }
    }
    getMahasiswa();
  }, []);


  return (
    <div>
      <button id="btnadd" onClick={handleAdd}>
        Add
      </button>
      
      {addVisible && (
        <form id="formadd" onSubmit={handleSubmitAdd}>
          <table border={0}>
            <tbody>
              <tr>
                <td>
                  <label>nim:</label>
                </td>
                <td>
                  <input type="text" id="nim" name="nim" className="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>nama:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Foto:</label>
                </td>
                <td>
                  <input type="file" name="images" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Tanggal Lahir:</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="tanggal_lahir"
                    className="text"
                    min="1970-01-01"
                    max="2025-12-31"
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>alamat:</label>
                </td>
                <td>
                  <textarea
                    id="address"
                    style={{ resize: "none" }}
                    name="alamat"
                    className="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
              <td>
                  <label>Prodi:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="prodi"
                    name="prodi"
                    className="text"
                    value={prodi}
                    onChange={(e) => setProdi(e.target.value)}
                  />
                </td>
                </tr>
            </tbody>
          </table>
          <div className="row-btn">
            <input type="submit" className="btn btn-blue" value="Simpan" />
            <input
              type="button"
              value="Cancel"
              onClick={handleCancelAdd}
              className="btn btn-blue"
            />
          </div>
        </form>
      )}

      {editVisible && selectedMahasiswa && (
        <form id="formedit" onSubmit={handleSubmitEdit}>
          <table border={0}>
            <tbody>
              <tr>
                <td>
                  <label>nim:</label>
                </td>
                <td>
                  <input type="text" id="nim" value={nim} name="nim" readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label>nama:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="nama"
                    value={nama}
                    name="nama"
                    onChange={(e) => setNama(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Foto:</label>
                </td>
                <td>
                  <img src={foto} width="80" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Tanggal Lahir:</label>
                </td>
                <td>
                  <input
                    type="date"
                    value={tanggalLahir}
                    name="tanggal_lahir"
                    onChange={(e) => setTanggalLahir(e.target.value)}
                    min="1970-01-01"
                    max="2025-12-31"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>alamat:</label>
                </td>
                <td>
                  <textarea
                    id="address"
                    style={{ resize: "none" }}
                    value={alamat}
                    name="alamat"
                    onChange={(e) => setAlamat(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>prodi:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="prodi"
                    value={prodi}
                    name="prodi"
                    onChange={(e) => setProdi(e.target.value)}
                  />
                </td>
              </tr> 
            </tbody>
          </table>
          <input type="submit" className="btn btn-blue" value="Simpan Perubahan" />
          <input
            type="button"
            value="Cancel"
            onClick={handleCancelEdit}
            className="btn btn-blue"
          />
        </form>
        
      )}

      <br />
      <br />

      <h1>Mahasiswa Yang Sudah Terdaftar</h1>
      <div>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-2 lg:-mx-5">
            {mahasiswa.map((mhs) => (
              <div
                key={mhs.nim}
                className="box my-2 px-2 w-full md:w-20 lg:my-3 lg:px-3 lg:w-1/3"
                className="border-double border-4 border-gray-600 bg-gray-300 px-2 py-2 m-1 rounded-lg">
                <a href="#">
                  <img className="rounded-t-lg" src={mhs.foto} alt="" />
                </a>
                

                <div className="p-30">
                  <a href="#">
                    <h5 className="mb-3 text-2x1 font-bold tracking-tigh dark:text-blue">
                      {mhs.prodi}
                    </h5>
                  </a>
                  <p className="mb-2 font-normal text-gray-800 dark:text-gray-800">
                   Nim: {mhs.nim}
                  </p>
                  <p className="mb-2 font-normal text-gray-800 dark:text-gray-800">
                   Nama: {mhs.nama}
                  </p>
                  <p className="mb-2 font-normal text-gray-800 dark:text-gray-800">
                   Alamat: {mhs.alamat}
                  </p>
                  <div className="row-btn">
                    <button
                      className="btn btn-blue"
                      onClick={() => handleEdit(mhs)}
                    >
                      Edit &nbsp; <i className="fas fa-heart"></i>{" "}
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-blue"
                      onClick={() => handleDelete(mhs.nim)}
                    >
                      Delete &nbsp; <i className="fas fa-exchange-alt"></i>{" "}

                      
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
