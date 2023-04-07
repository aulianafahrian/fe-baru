import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabelp1 } from "../temp/table.js";
export function isiTable(results) {
  results.forEach(isiRow);
}


function isiRow(value) {
  let content = 
  isiTabel.replace("#NAMA#", value.biodata_mahasiswa.nama)
          .replace("#NPM#", value.biodata_mahasiswa.npm)
          .replace("#JURUSAN#", value.biodata_mahasiswa.jurusan.nama)
          .replace("#PRODI#", value.biodata_mahasiswa.prodi.nama)
          .replace("#DOSENPEMBIMBING#", value.dosen_pembimbing.nama)
          .replace("#DOSENPENGUJI#", value.dosen_penguji.nama)
          .replace("#JUDUL#", value.judul)
          .replace("#TANGGALSIDANG#", value.tanggal_sidang)
          .replace("#WARNA#", getRandomColor())
          .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}

export function isiTablep1(results) {
  results.forEach(isiRowp1);
}


function isiRowp1(value) {
  let content = 
  isiTabelp1.replace("#NAMA#", value.biodata_mahasiswa.nama)
          .replace("#NPM#", value.biodata_mahasiswa.npm)
          .replace("#JURUSAN#", value.biodata_mahasiswa.jurusan.nama)
          .replace("#PRODI#", value.biodata_mahasiswa.prodi.nama)
          .replace("#DOSENPEMBIMBING#", value.dosen_pembimbing.nama)
          .replace("#DOSENPENGUJI#", value.dosen_penguji.nama)
          .replace("#JUDUL#", value.judul)
          .replace("#TANGGALSIDANG#", value.tanggal_sidang)
          replace("#WARNA#", getRandomColor())
          .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelp1", content);
}