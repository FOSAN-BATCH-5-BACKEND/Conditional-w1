
//TASK IF-ELSE


let nama = 'Jamet';
let peran = '';

if (nama === ''){
    console.log('Nama harus diisi!');
}
    else if(peran === ''){
        console.log('Halo' + ' ' + nama + ',' + ' ' + 'Pilih peranmu untuk memulai game!');
}
    else if(peran === 'Fighter'){
        console.log('Selamat datang di Dunia Proxytia' + ',' + ' ' + nama);
        console.log('Halo Fighter' + ' ' + nama + ',' + ' ' + 'kamu dapat menyerang dengan senjatamu!');
}
    else if(peran === 'Support'){
        console.log('Selamat datang di Dunia Proxytia' + ',' + ' ' + nama);
        console.log('Halo Support' + ' ' + nama + ',' + ' ' + 'kamu akan membantu temanmu yang terluka.');
}
    else if(peran === 'Mage'){
        console.log('Selamat datang di Dunia Proxytia' + ',' + ' ' + nama);
        console.log('Halo Mage' + ' ' + nama + ',' + ' ' + 'ciptakan keajaiban yang membantu kemenanganmu!');
}

// HINT
/*
// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
*/