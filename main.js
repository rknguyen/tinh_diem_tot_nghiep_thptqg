function tinhdiem() {
  let diem_toan = parseFloat(document.getElementById("diem_toan").value),
      diem_van = parseFloat(document.getElementById("diem_van").value),
      diem_anh = parseFloat(document.getElementById("diem_anh").value),
      diem_mon_1 = parseFloat(document.getElementById("diem_mon_1").value),
      diem_mon_2 = parseFloat(document.getElementById("diem_mon_2").value),
      diem_mon_3 = parseFloat(document.getElementById("diem_mon_3").value),
      diem_tb_12 = parseFloat(document.getElementById("diem_tb_12").value),
      diem_khuyen_khich = parseFloat(document.getElementById("diem_khuyen_khich").value),
      diem_uu_tien = parseFloat(document.getElementById("diem_uu_tien").value);

  let diem_tot_nghiep = (((diem_toan + diem_van + diem_anh + ((diem_mon_1 + diem_mon_2 + diem_mon_3) / 3.0)) / 4.0) * 7.0 + diem_tb_12 * 3.0) / 10.0 + diem_uu_tien
  document.getElementById("diem_tot_nghiep").innerHTML = diem_tot_nghiep.toFixed(2).toString()

  document.getElementById("result").style = ""
  document.getElementById(diem_tot_nghiep >= 5.0 ? "ok" : "fail").style = ""
}