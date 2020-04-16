let url='cats.json';

//Through DOM we are accessing the id=getCatss 
//Using addeventlistener we are invoking the getCatss function through a click
document.getElementById('getCats').addEventListener('click', getCats);

//Creating function getCatss using fetch API and promises
//This function fetches all the data from our json file,then displaying data in the web browser      
function getCats(){
  fetch(url)//the url of our required file
  .then((response) => response.json())  //
  .then((data) => {         //get data
    let display = '<h2 class="Cats">Cats</h2>';//created a display var that will display the data
    data.forEach(function(cats){
     
//Output the data of Catss.json file i.e. image,name,price and details
//Used card template from bootstrap to display data in Cards
      display +=`
      <div class="card" style="width: 18rem;">
  <div class="card-body">
  <img class="card-img-top" src=${cats.image} alt="Card image cap"> 
    <h5 class="card-title">Name: ${cats.name}</h5>
    <hr>
    <h5 class="card-subtitle mb-2 text-muted">Price: ${cats.species}</h6>
    <hr co>
    <h5 class="card-subtitle mb-2 text-muted">Details: ${cats.age}</h6>
  </div>
</div>
    `;
    });
    document.getElementById('display').innerHTML = display;//Using the DOM displaying all the data into the web browser
  })
}
