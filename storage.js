//ES6
class Storage{
   static addFilmStorage(newFilm){
        //storage üzerindeki 
      let films=this.getFilmsStorage(); //storage'da bulunan diziyi al
    
      films.push(newFilm); //filmi ekle 
      //film dizisine objeler gönderiliyor. 
        localStorage.setItem("films",JSON.stringify(films)); 
        //JSON.stringfy()
        //JSON.stringify  JavaScript nesnesini JSON metnine dönüştürür ve bunu JSON metni olarak bir dizide saklar
        //JSON-bir nesne/diziden bir JSON dizesi oluşturmaktır.
    }
    static getFilmsStorage(){
        let films;
        //gönderilen değere karşılık gelen bir key var mı 
        if(localStorage.getItem("films")===null){ //key yok -> boş bir array oluştur
            films=[];
        }
        else{
            films=JSON.parse(localStorage.getItem("films")); //key var ->  bu değeri al ve string ifadeye çevir.
        //JSON (JavaScript Object Notation) 
        //JSON.parse bir JSON metni dizesini bir JavaScript nesnesine dönüştürür
        }
        return films;
    }
    
    //filmi storage dan kaldırma
    static deleteFilmFromStorage(Filmtitle){
    
        let films=this.getFilmsStorage(); 
        
        //storage içerisinde bulunan tüm filmler içerisinde gezinerek aynı isme sahip olan filmin indexi alınır ve bu indexe göre silme işlemi yapılır.
        Filmtitle=Filmtitle.toUpperCase().trim();
        console.log(Filmtitle);
        films.forEach(function (film,index) {
            film=film.title.toUpperCase().trim();
            if(film===Filmtitle){    //!!if bloğuna girmiyor-> çözüm trim özelliği çalıştırılmalı 
                                                    //!!!  silme işleminden sonra bir önceki elemanı da siliyor -> çözüm hepsini büyük harfe çevir ve trim kullan
                films.splice(index,1);
            }
    
        });
    
        localStorage.setItem("films",JSON.stringify(films));  //silindikten sonra localStorage güncellenir
    }
    
    //bütün filmleri storage dan kaldırma
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films"); //films anahtarına sahip tüm değerleri LocalStorage üzerinden siler
    
    }
}




//ES6 öncesi 
// function Storage(){

// }
// Storage.prototype.addFilmStorage= function(newFilm){
//     //storage üzerindeki 
//   let films=this.getFilmsStorage(); //storage'da bulunan diziyi al

//   films.push(newFilm); //filmi ekle 
//   //film dizisine objeler gönderiliyor. 
//     localStorage.setItem("films",JSON.stringify(films)); 
//     //JSON.stringfy()
//     //JSON.stringify  JavaScript nesnesini JSON metnine dönüştürür ve bunu JSON metni olarak bir dizide saklar
//     //JSON-bir nesne/diziden bir JSON dizesi oluşturmaktır.
// }
// Storage.prototype.getFilmsStorage=function(){
//     let films;
//     //gönderilen değere karşılık gelen bir key var mı 
//     if(localStorage.getItem("films")===null){ //key yok -> boş bir array oluştur
//         films=[];
//     }
//     else{
//         films=JSON.parse(localStorage.getItem("films")); //key var ->  bu değeri al ve string ifadeye çevir.
//     //JSON (JavaScript Object Notation) 
//     //JSON.parse bir JSON metni dizesini bir JavaScript nesnesine dönüştürür
//     }
//     return films;
// }

// //filmi storage dan kaldırma
// Storage.prototype.deleteFilmFromStorage=function(Filmtitle){

//     let films=this.getFilmsStorage(); 
    
//     //storage içerisinde bulunan tüm filmler içerisinde gezinerek aynı isme sahip olan filmin indexi alınır ve bu indexe göre silme işlemi yapılır.
//     Filmtitle=Filmtitle.toUpperCase().trim();
//     console.log(Filmtitle);
//     films.forEach(function (film,index) {
//         film=film.title.toUpperCase().trim();
//         if(film===Filmtitle){    //!!if bloğuna girmiyor-> çözüm trim özelliği çalıştırılmalı 
//                                                 //!!!  silme işleminden sonra bir önceki elemanı da siliyor -> çözüm hepsini büyük harfe çevir ve trim kullan
//             films.splice(index,1);
//         }

//     });

//     localStorage.setItem("films",JSON.stringify(films));  //silindikten sonra localStorage güncellenir
// }

// //bütün filmleri storage dan kaldırma
// Storage.prototype.clearAllFilmsFromStorage=function(){
//     localStorage.removeItem("films"); //films anahtarına sahip tüm değerleri LocalStorage üzerinden siler

// }