function Storage(){
}
Storage.prototype.addToStorage= function(newFilm){
    //Storage üzerinde bulunan diziyi almak için
    let films=this.getStorage();
    films.push(newFilm);
    //Js nesnesini JSON metnine dönüştürdük. 
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getStorage=function(){
    let films;
    //films adında dizi localstorage içerisinde yoksa boş bir dizi oluştur
    if(localStorage.getItem("films")===null){
        films=[];
    }
    //varsa bunu dizi olarak al
    else{
        films=JSON.parse(localStorage.getItem("films"));
        //JSON.parse ile bir JSON dizesini Js nesnesine dönüştürdü.
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage=function(filmAdi){
    let films=this.getStorage(); 
    //storage içerisinde bulunan tüm filmler içerisinde gezinerek aynı isme sahip olan
    //filmin indexi alınır ve bu indexe göre silme işlemi yapılır.
    filmAdi=filmAdi.toUpperCase().trim();
    films.forEach(function (film,index) {
        film=film.title.toUpperCase().trim(); 
        if(film===filmAdi){    //!!if bloğuna girmiyor-> çözüm trim özelliği çalıştırılmalı                                        //!!!  silme işleminden sonra bir önceki elemanı da siliyor -> çözüm hepsini büyük harfe çevir ve trim kullan
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));  //silindikten sonra localStorage güncellenir
}
Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films"); //films anahtarına sahip tüm değerleri LocalStorage üzerinden siler
}