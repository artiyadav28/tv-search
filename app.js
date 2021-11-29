const form =document.querySelector('form');
const container= document.querySelector('.container');

function insertCards(results){
    container.innerHTML="";
    for(let result of results){
        let html=
        `<div class="card item" style="width: 18rem;">
        <img src="${result.show.image.medium}" class="card-img-top" alt="${result.show.name}-poster">
        <div class="card-body">
          <h5 class="card-title">${result.show.name}</h5>
          <h6 class="card-title">Language- ${result.show.language}</h6>
          <h6 class="card-title">Genre- ${result.show.genres.join(',')}</h6>
          <h6 class="card-title">Rating- ${result.show.rating.average}</h6>
          <div class="card-text">${result.show.summary}</div>
        </div>
      </div>`;
      container.innerHTML+=html;
    }
}
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const searchTerm = form.search.value;
    form.reset();
    const config = {params:{q:searchTerm}};
    try{
        const response= await axios.get("https://api.tvmaze.com/search/shows",config);
        insertCards(response.data);
    }catch(e){
        console.log("oh no error!");
    }
})