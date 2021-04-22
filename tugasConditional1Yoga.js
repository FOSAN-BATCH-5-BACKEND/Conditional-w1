let nama = 'ucok';
let peran = 'Penyihir';

if (nama == false && peran == false ){
    console.log("Nama harus diisi!");
} else if (nama != false && peran == false){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama != false && peran == "Ksatria"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama} ` + `
    Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
}
    else if (nama != false && peran == "Tabib"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama} ` + `
    Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
}
    else if (nama != false && peran == "Penyihir"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama} ` + `
    Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
else{
    console.log('Nama sudah diisi');
}