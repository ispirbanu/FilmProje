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

addEventListeners();

function addEventListeners(){
    form.addEventListener("submit",addFilm); //Filmi ekleme
    //döküman yüklendiğinde local storage üzerinde bulunan filmleri sayfaya geri yükle
    document.addEventListener("DOMContentLoaded", function(){
        let films=Storage.getStorage();
        UI.loadAllFilms(films);
    });
    //film silmek
    cardbody.addEventListener("click",deleteFilm);
    //tüm filmleri silmek
    clear.addEventListener("click",clearAllfilms);
}
function addFilm(e){
    //girilen element değerlerini almak
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    const genre=genreElement.value;
    if(title==="" || director==="" || url==="" || genre===""){
        UI.displayMessages("Lütfen tüm alanları doldurun.","warning");
    }
    else{
        // yeni film oluşturma
        const newFilm=new Film(title,director,url,genre);
        Storage.addToStorage(newFilm);
        UI.addFilmToUi(newFilm); //filmi arayüze ekleme
    }
    UI.clearAllInput(titleElement,directorElement,urlElement,genreElement);
    e.preventDefault();//sayfanın yenilenmesini engeller
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){
        //filmin ismine previousElementSibling üzerinden eriştim.
        let answer=confirm(`${e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent} 
        isimli filmi silmek istediğinize emin misiniz?`);
        if(answer){
            //arayüzden sil
             UI.deleteFilmFromUi(e.target);
            //bilgilendirme mesajı
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
            UI.displayMessages("Film başarıyla silindi.","success");
        }
    }
}
function clearAllfilms(){
    let answer=confirm("Bütün filmleri temizlemek istediğinize emin misiniz?");
        if(answer){
            UI.clearAllFilmsFromUi();
            Storage.clearAllFilmsFromStorage();
            UI.displayMessages("Bütün filmler silindi.","success");
        }
}
