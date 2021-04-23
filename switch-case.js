let tanggal = 33; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2021; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let x = 3;
let y = 5;

if (y < 5 && x < 5 || x < y ) {
    console.log("ini true");
} else {
    console.log("ini false");
}

// if(
//     ((bulan === 1 || bulan === 3|| bulan === 5|| bulan === 7 ||bulan === 8||bulan === 10||bulan === 12) && tanggal>31 || tanggal<1)||
//     ((bulan === 4 || bulan === 6|| bulan === 9|| bulan === 11)  && tanggal>30 || tanggal < 1) || 
//     (tahun%4==0 && bulan === 2 && tanggal>29) || 
//     (tahun%4 != 0 && bulan === 2 && tanggal>28) || (tahun < 1900 || tahun > 2200)
//     ) {
//     console.log('masukkan tanggal yang benar!')
//     console.log(tanggal);
//     }
// else if (isNaN(tahun)){
//     console.log('masukkan tahun dengar format angka!')
// }
// else{
//     switch (bulan) {
//         case 1 :
//             console.log(`${tanggal} Januari ${tahun}`);
//             break;
//         case 2 :
//             console.log(`${tanggal} Februari ${tahun}`);
//             break;
//         case 3 :
//             console.log(`${tanggal} Maret ${tahun}`);
//             break;
//         case 4 :
//             console.log(`${tanggal} April ${tahun}`);
//             break;
//         case 5 :
//             console.log(`${tanggal} Mei ${tahun}`);
//             break;
//         case 6 :
//             console.log(`${tanggal} Juni ${tahun}`);
//             break;
//         case 7 :
//             console.log(`${tanggal} Juli ${tahun}`);
//             break;
//         case 8 :
//             console.log(`${tanggal} Agustus ${tahun}`);
//             break;
//         case 9 :
//             console.log(`${tanggal} September ${tahun}`);
//             break;
//         case 10 :
//             console.log(`${tanggal} Oktober ${tahun}`);
//             break;
//         case 11 :
//             console.log(`${tanggal} November ${tahun}`);
//             break;
//         case 12 :
//             console.log(`${tanggal} Desember ${tahun}`);
//             break;
//         default :
//             console.log('masukkan bulan yang benar!')
//     }
// }