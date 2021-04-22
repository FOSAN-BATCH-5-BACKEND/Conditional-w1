//TASK IF-ELSE

let nama = 'Tomy'
let nama1 = 'Nina'
let nama2 = 'Danu'


let peran = 'Ksatria' 
let peran1 = 'Tabib'
let peran2 = 'Penyihir'

if (nama === '' && peran === ''){
    console.log('nama saya ' + nama);
} else{
    console.log('Nama harus diisi');
}


if (nama === 'Tomy'){
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else{
    console.log('Nama harus diisi');
}

if (nama === 'Tomy' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia,'+ nama);
    console.log('Halo '+ peran + ' '+ nama +', kamu dapat menyerang dengan senjatamu!');
} else {
    console.log('Nama harus diisi');
} 

if (nama1 === 'Nina' && peran1 === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia,'+nama1);
    console.log('Halo '+ peran1 + ' '+nama1 +', kamu akan membantu temanmu yang terluka.');
} else {
    console.log('Nama harus diisi');
}

if (nama2 === 'Danu' && peran2 === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia,'+nama2);
    console.log('Halo '+ peran2 + ' '+ nama2 +', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    console.log('Nama harus diisi');
}

//TASK SWITCH-CASE

let tanggal = 5;
let bulan = 2;
let tahun = 1945;

switch (bulan){
    case 1 :
         console.log(`${tanggal} Januari ${tahun} `);
    break;
    case 2 :
        console.log(`${tanggal} Februari ${tahun} `);
    break;
    case 3 :
        console.log(`${tanggal} Maret ${tahun} `);
    case 4 :
        console.log(`${tanggal} April ${tahun} `);
    break;
    case 5 :
         console.log(`${tanggal} Mei ${tahun} `);
    break;
    case 6 :
        console.log(`${tanggal} Juni ${tahun} `);
    case 7 :
         console.log(`${tanggal} Juli ${tahun} `);
    break;
    case 8 :
        console.log(`${tanggal} Agustus ${tahun} `);
    break;
    case 9 :
        console.log(`${tanggal} September ${tahun} `);
    case 10 :
        console.log(`${tanggal} Oktober ${tahun} `);
    break;
    case 11 :
        console.log(`${tanggal} November ${tahun} `);
    break;
    case 12 :
        console.log(`${tanggal} Desember ${tahun} `);
    break;
    default:
    console.log('Tanggal yang dimasukan salah');
}


