function UI(){

}
UI.prototype.addFilmToUi=function(newFilm){
     //oluşturulacak tablo yapısı
    /*<tbody id = "films">
    { <!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> -->
    */
    const filmList= document.getElementById("films");
     //filmleri eklemek
        //1-filmin Resmi 
        //2-filmin adı 
        //3-filmin yönetmeni
        //4-filmin türü
    //+= kullanılacak önceki verilerin silinmemesi birbirinin ardına eklenmesi için
    filmList.innerHTML +=`
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td> ${newFilm.title} </td>
            <td> ${newFilm.director} </td>
            <td> ${newFilm.genre} </td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;
}
// İnputları temizleme
UI.prototype.clearAllInput= function(element1,element2,element3, element4){
    element1.value="";
    element2.value="";
    element3.value="";
    element4.value="";
}
UI.prototype.displayMessages =function(message,type){
    //mesaj elementini eklemek için
    const cardbody=document.querySelectorAll(".card-body")[0];
    //Alert divi oluşturma
    const div= document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;
    cardbody.appendChild(div);
    setTimeout(function(){
        div.remove();
    },1000);
}
UI.prototype.loadAllFilms=function(films){
    const filmList=document.getElementById("films");
    //filmlerin bulunduğu listede gezinerek hepsini arayüzde göster
    films.forEach(film => {
        filmList.innerHTML+=`
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td> ${film.title} </td>
        <td> ${film.director} </td>
        <td> ${film.genre} </td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
        `;
    });
}
UI.prototype.deleteFilmFromUi=function(target){
    target.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUi=function(){
    const filmList= document.getElementById("films");
    //filmList.innerHTML=""; //1.yöntem ancak bütük projeler için yavaş
   while(filmList.firstElementChild !==null){ //2. yöntem
       filmList.firstElementChild.remove();
   }
}