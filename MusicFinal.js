const mySounds = ["Musiqiler/Koroğlu Uvertürası - Niyazi (1981).mp3","Musiqiler/Şəbi Hicran Leyli və Məcnun operasından.mp3","Musiqiler/Üzeyir Hacıbəyov- Bu gələn yara bənzər.mp3","Musiqiler/Uzeir Hacibeyov  Arazbari.mp3","Musiqiler/Sona Aslanova - Aşiq oldum. mus. Üzeyir Hacıbəyli..mp3","Musiqiler/Üzeyir Hacıbəyovun ifasında Cəngi  bərpa videosu.mp3","Musiqiler/Müslüm Maqomayev - Sevgili Canan.mp3","Musiqiler/Муслим Магомаев - Без тебя ( Сенсиз ). Muslim Magomaev - Sensiz.mp3","Musiqiler/Soltan Hajibeyov  Caravan symphonic poem.mp3","Musiqiler/Cəfər Cabbarlı- Ölkəm.mp3","Musiqiler/Asaf Zeynally - Mughamsayagi (for violin and string orchestra).mp3","Musiqiler/Fikrət Əmirov.  Azərbaycan Kapriçiyosu.mp3","Musiqiler/Sevil operası - Dilbərin ariyası (Fikrət Əmirov).mp3","Musiqiler/Fikrət Əmirov - 1001 gecə baletindən Orgiya.mp3","Musiqiler/Fikrət Əmirov - 1001 gecə baletindən Şəhrizadın bayramı.mp3","Musiqiler/Qara Qarayev - Yeddi gözəl (vals) #qaraqarayev #garagareyev #gara #qara #karayev #karayev.mp3","Musiqiler/Q.Qarayev _ Yeddi Gözəl baletindən Ayşənin rəqsi.mp3","Musiqiler/Gara Garayev Ildırımlı yollarla baletindən Qızların rəqsi..mp3","Musiqiler/Джевдет Гаджиев  Jovdat Hajiyev_ Баллада (Ballada, 1952).mp3","Musiqiler/Arif Məlikov - Komdenin arzuları.mp3","Musiqiler/Triptix - Xəyyam Mirzəzadə.mp3","Musiqiler/A.Əlizadə. Bayatılar..mp3","Musiqiler/Franghiz Ali-Zadeh_ Reqs - Owls.mp3","Musiqiler/Rahilia Hasanova  Monad [w score].mp3","Musiqiler/Tofiq Quliyev - Sənə də qalmaz  Yalqızam (Rəşid Behbudov).mp3","Musiqiler/Rauf Haciyev - sevgilim.mp3","Musiqiler/Sovkət Ələkbərova - Hardasan.mp3","Musiqiler/Vaqif Mustafazadə - Düşüncə (Rəsmi Audio).mp3","Musiqiler/Rafiq Babayev Anlamaq İstəyirəm.mp3"];
function randomSound() {
    const index = Math.floor(Math.random() * mySounds.length); // Random index
    const audioElement = document.querySelector('.Audio audio'); // Target audio element
    audioElement.src = mySounds[index]; // Set random sound
    audioElement.play(); // Play sound
}