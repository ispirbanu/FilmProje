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
//UI objesi
const ui= new UI();
//Storage objesi
const storage=new Storage();
addEventListeners();

function addEventListeners(){
    form.addEventListener("submit",addFilm); //Filmi ekleme
    //döküman yüklendiğinde local storage üzerinde bulunan filmleri sayfaya geri yükle
    document.addEventListener("DOMContentLoaded", function(){
        let films=storage.getStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Lütfen tüm alanları doldurun.","warning");
    }
    else{
        // yeni film oluşturma
        const newFilm=new Film(title,director,url,genre);
        storage.addToStorage(newFilm);
        ui.addFilmToUi(newFilm); //filmi arayüze ekleme
    }
    ui.clearAllInput(titleElement,directorElement,urlElement,genreElement);
    e.preventDefault();//sayfanın yenilenmesini engeller
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){
        //filmin ismine previousElementSibling üzerinden eriştim.
        let answer=confirm(`${e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent} 
        isimli filmi silmek istediğinize emin misiniz?`);
        if(answer){
            //arayüzden sil
             ui.deleteFilmFromUi(e.target);
            //bilgilendirme mesajı
            storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
             ui.displayMessages("Film başarıyla silindi.","success");
        }
    }
}
function clearAllfilms(){
    let answer=confirm("Bütün filmleri temizlemek istediğinize emin misiniz?");
        if(answer){
            ui.clearAllFilmsFromUi();
            storage.clearAllFilmsFromStorage();
            ui.displayMessages("Bütün filmler silindi.","success");
        }
}
