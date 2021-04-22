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

