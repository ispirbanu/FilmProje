//ES6 
//DOM işlemleri 
//ana Js dosyası

//film form  
const form= document.getElementById("film-form");

//inputlar
const titleElement= document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement= document.querySelector("#url");
const genreElement= document.querySelector("#genre");

const cardbody=document.getElementsByClassName("card-body")[1];

//bütün filmleri sil butonu
const clear=document.getElementById("clear-films");



//Eventleri yükleme
addEventListeners();

function addEventListeners(){
    form.addEventListener("submit",addFilm); //Filmi ekleme
    //döküman yüklendiğinde local storage üzerinde bulunan filmleri sayfaya geri yükle
    document.addEventListener("DOMContentLoaded", function(){
        let films=Storage.getFilmsStorage();
        UI.loadAllFilms(films);
    });

    //Film silme
    cardbody.addEventListener("click",deleteFilm);

    //bütün filmleri sil
    clear.addEventListener("click",clearAllfilms);

}


function addFilm(e){
    //girilen element değerlerini almak
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    const genre=genreElement.value;


    if(title==="" || director==="" || url==="" || genre===""){
        //Hata 
        UI.Messages("Lütfen tüm alanları doldurun.","danger");
    }
    
    else{
        // yeni film oluşturma
        const newFilm=new Film(title,director,url,genre);
        console.log(newFilm.title);


        //Film daha önce varsa ekleme yapmamalı
        let films=Storage.getFilmsStorage(); 
        
        //storage içerisinde bulunan tüm filmler içerisinde gezinerek aynı isme sahip olan filmin indexi alınır ve bu indexe göre silme işlemi yapılır.
        Filmtitle=newFilm.title.toUpperCase().trim();
    
        films.forEach(function (film) {
            film=film.title.toUpperCase().trim();
            if(film===Filmtitle){    
                                                   
                UI.Messages("Bu film daha önce eklenmiş","warning");                                    
            }
            else{
                    UI.addFilmToUi(newFilm); //filmi arayüze ekleme
            // clearInput(); //project sayfasında ınputları temizleme fonksiyonu

            //filmleri storage' a eklemek
            Storage.addFilmStorage(newFilm); 
            //mesaj
            UI.Messages("Ekleme işlemi tamamlandı.","success");
            }
    
        });

     UI.clearAllInput(titleElement,directorElement,urlElement,genreElement); //ui içerisinde inputları temizleme 
    e.preventDefault();//sayfanın yenilenmesini engeller
    }

    }
   

//filmleri temizleme

function deleteFilm(e){
    // film sil butonuna tıklandığında
//     <tr>
//          <td>
//              <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
//          </td>
//     </tr>

    //a nın bağlı olduğu td ve tr blokları silinecek 
    //2 parent olayı gerçekleşir
    if(e.target.id==="delete-film"){
       
        //elementin içerisinde filmin ismini almak için

        // <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        //     <td> ${newFilm.title} </td>
        //     <td> ${newFilm.director} </td>
        //     <td> ${newFilm.genre} </td>
        //     <td>
        //        <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
        //</td>
        //a elementinin parent üzerindeki kardeşlerinde gezinerek title özelliği alınır
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        
        // silme işlemi onayı
        let answer=confirm(`${e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`+"isimli filmi silmek istediğinize emin misiniz?" );
        if(answer){
             UI.deleteFilmFromUi(e.target);
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        
            //bilgilendirme mesajı
            UI.Messages("Film başarıyla silindi.","success");
        }
        
        
    }

}

function clearAllfilms(){
    let answer=confirm("Bütün filmleri temizlemek istediğinize emin misiniz?");
        if(answer){
            UI.clearAllFilmsFromUi();
            Storage.clearAllFilmsFromStorage();
            UI.Messages("Bütün filmler silindi.","success");
        }
}


//inputları temizleme
// function clearInput(){
//     titleElement.value="";
//     directorElement.value="";
//     urlElement.value="";
//     genreElement.value="";
// }















//ES6 Öncesi

//Ana Js dosyası
//DOM işlemleri

// //film form  
// const form= document.getElementById("film-form");

// //inputlar
// const titleElement= document.querySelector("#title");
// const directorElement= document.querySelector("#director");
// const urlElement= document.querySelector("#url");
// const genreElement= document.querySelector("#genre");

// const cardbody=document.getElementsByClassName("card-body")[1];

// //bütün filmleri sil butonu
// const clear=document.getElementById("clear-films");

// //UI objesi
// const ui= new UI();

// //Storage objesi
// const storage= new Storage();

// //Eventleri yükleme
// addEventListeners();

// function addEventListeners(){
//     form.addEventListener("submit",addFilm); //Filmi ekleme
//     //döküman yüklendiğinde local storage üzerinde bulunan filmleri sayfaya geri yükle
//     document.addEventListener("DOMContentLoaded", function(){
//         let films=storage.getFilmsStorage();
//         ui.loadAllFilms(films);
//     });

//     //Film silme
//     cardbody.addEventListener("click",deleteFilm);

//     //bütün filmleri sil
//     clear.addEventListener("click",clearAllfilms);

// }


// function addFilm(e){
//     //girilen element değerlerini almak
//     const title=titleElement.value;
//     const director=directorElement.value;
//     const url=urlElement.value;
//     const genre=genreElement.value;

//     //filmleri storage dan almak
//     let filmss=storage.getFilmsStorage();


//     if(title==="" || director==="" || url==="" || genre===""){
//         //Hata 
//         ui.Messages("Lütfen tüm alanları doldurun.","danger");
//     }
    
//     else{
//         // yeni film oluşturma
//         const newFilm=new Film(title,director,url,genre);
        
//         ui.addFilmToUi(newFilm); //filmi arayüze ekleme
//         // clearInput(); //project sayfasında ınputları temizleme fonksiyonu

//         //filmleri storage' a eklemek
//         storage.addFilmStorage(newFilm); 
//         //mesaj
//         ui.Messages("Ekleme işlemi tamamlandı.","success");
        

//     }
//     ui.clearAllInput(titleElement,directorElement,urlElement,genreElement); //ui içerisinde inputları temizleme 
//     e.preventDefault();//sayfanın yenilenmesini engeller
// }

// //filmleri temizleme

// function deleteFilm(e){
//     // film sil butonuna tıklandığında
// //     <tr>
// //          <td>
// //              <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
// //          </td>
// //     </tr>

//     //a nın bağlı olduğu td ve tr blokları silinecek 
//     //2 parent olayı gerçekleşir
//     if(e.target.id==="delete-film"){
       
//         //elementin içerisinde filmin ismini almak için

//         // <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
//         //     <td> ${newFilm.title} </td>
//         //     <td> ${newFilm.director} </td>
//         //     <td> ${newFilm.genre} </td>
//         //     <td>
//         //        <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
//         //</td>
//         //a elementinin parent üzerindeki kardeşlerinde gezinerek title özelliği alınır
//         //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        
//         // silme işlemi onayı
//         let answer=confirm(`${e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`+"isimli filmi silmek istediğinize emin misiniz?" );
//         if(answer){
//              ui.deleteFilmFromUi(e.target);
//             storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        
//             //bilgilendirme mesajı
//             ui.Messages("Film başarıyla silindi.","success");
//         }
        
        
//     }

// }

// function clearAllfilms(){
//     let answer=confirm("Bütün filmleri temizlemek istediğinize emin misiniz?");
//         if(answer){
//             ui.clearAllFilmsFromUi();
//             storage.clearAllFilmsFromStorage();
//             ui.Messages("Bütün filmler silindi.","success");
//         }
// }


// //inputları temizleme
// // function clearInput(){
// //     titleElement.value="";
// //     directorElement.value="";
// //     urlElement.value="";
// //     genreElement.value="";
// // }


