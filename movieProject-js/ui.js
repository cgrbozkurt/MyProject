function UI(){

}

UI.prototype.addFilmToUI=function(newFilm){
    // <tr>
    //                                         <td><img src="" class="img-fluid img-thumbnail"></td>
    //                                         <td></td>
    //                                         <td></td>
    //                                         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //                                       </tr> -->
    //                                       <!-- <tr>
    //                                         <td><img src="" class="img-fluid img-thumbnail"></td>
    //                                         <td></td>
    //                                         <td></td>
    //                                         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //                                       </tr>

    const filmList=document.getElementById("films")

    filmList.innerHTML += `
    <tr>
                                            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
    `
}


UI.prototype.displayMessages=function(message,type){

  const cardBody=document.querySelector(".card-body");

  const alertDiv=document.createElement("div");

  alertDiv.className=`alert alert-${type}`;

  alertDiv.textContent=message;

  cardBody.appendChild(alertDiv);


  setTimeout(function(){
alertDiv.remove();
  },2000);
}