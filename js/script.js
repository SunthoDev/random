


// all data fetch 

    let lodAllData=(parameter,p) =>{

        let url="https://openapi.programming-hero.com/api/ai/tools"
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools.slice(0,6)))
      
    }

    lodAllData()

// all data call api
    let gatloadData=()=>{

        let url="https://openapi.programming-hero.com/api/ai/tools"
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools))
    }


    let displayData = (parameterTow)=>{
        console.log(parameterTow)

        // slice show all data 
        let parentDivBody=document.getElementById("parent_div_body")
        parentDivBody.innerHTML=""

        parameterTow.forEach(parameterThree => {
        let div=document.createElement("div")
        div.classList.add("col")

        div.innerHTML=`
        <div class="card p-3">
        <img class='img-fluid sho_All_img' src="${parameterThree.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title py-3 fw-bold fs-3"> features </h2>
          <p class="card-text">
            <ol>
                <li class="fw-bolder fs-5"><h6 class="fs-5">${parameterThree.features[0]}</h6></li>
                <li class="fw-bolder fs-5"><h6 class="fs-5">${parameterThree.features[1]}</h6></li>
                <li class="fw-bolder fs-5"><h6 class="fs-5">${parameterThree.features[2]}</h6></li>
            </ol>
          </p>
        </div>
        <div class="card-footer d-flex justify-content-between py-3">
            <div>
                <h5 class="card-title text-black mb-3 fw-bold fs-4">${parameterThree.name}</h5>
                <h5 class="card-title"><i class="fa fa-calendar pe-3" aria-hidden="true"></i>${parameterThree.published_in}</h5>
            </div>
            <button onclick="modalDetails('${parameterThree.id}')" class="btn bg-danger-subtle text-danger rounded-circle px-4 fs-5 text" data-bs-toggle="modal" data-bs-target="#DataModal"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            
        </div>

      </div>

        `;
     parentDivBody.appendChild(div)


        });

    }
// click button open modal for see data

 let modalDetails = (modalInfo) => {

    let url=` https://openapi.programming-hero.com/api/ai/tool/${modalInfo} `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalData(data.data))

 }
 

 let displayModalData = dataModal => {
    console.log(dataModal)

    // first col left site

    let modalFirst=document.getElementById("first_parent")
    modalFirst.innerHTML=`

        <div class="bg-danger-subtle px-5 py-5 rounded border border-danger mt-4 mb-4">

            <h4>${dataModal.description}</h4>

            <div class=" pt-5 row row-cols-1 row-cols-md-3 g-3">
                <div class="bg-white rounded p-3 text-success col">
                    <h6>${dataModal.pricing[0].price ? dataModal.pricing[0].price : "free of cost/"}</h6>
                    <h5>${dataModal.pricing[0].plan ? dataModal.pricing[0].plan  : "Basic"}<h5>
                </div>
                <div class="bg-white rounded p-3 text-danger col">
                    <h6>${dataModal.pricing[1].price ? dataModal.pricing[1].price : "free of cost/"}</h6>
                    <h5>${dataModal.pricing[1].plan ? dataModal.pricing[1].plan  : "pro"}<h5>
                </div>
                <div class="bg-white rounded p-3 text-info col">
                    <h6>${dataModal.pricing[2].price ? dataModal.pricing[2].price : "free of cost/"}</h6>
                    <h5>${dataModal.pricing[2].plan ? dataModal.pricing[2].plan  : "Enterprise"}<h5>
                </div>
            </div>


            <div class="d-flex justify-content-between pt-5">
                <div>
                    <h3>Feature</h3>
                    <ul class="pt-2">
                        <li>${dataModal.features[1].feature_name}</li>
                        <li>${dataModal.features[2].feature_name}</li>
                        <li>${dataModal.features[3].feature_name}</li>
                    </ul>
                </div>
                <div>
                    <h3>Integrations</h3>
                    <ul class="pt-2">
                        <li>${dataModal.integrations ? dataModal.integrations[0] : "No data Found" }</li>
                        <li>${dataModal.integrations ? dataModal.integrations[1] : "No data Found" }</li>
                        <li>${dataModal.integrations ? dataModal.integrations[2] : "No data Found" }</li>
                    </ul>
                </div>
            </div>

        </div>

    `;

    // second col right site

    let modalSecond=document.getElementById("second_parent")
    modalSecond.innerHTML=`
        <div class="position-relative border border-success p-4 rounded mt-4 mb-4">

            <img class="img-fluid rounded" src="${dataModal.image_link[0]}">
            <h4 class="accuracy position-absolute t-0">${dataModal.accuracy.score} accuracy</h4>

            <h3 class="text-center mt-4 fw-bold">${dataModal.input_output_examples[1].input}</h3>
            <p class="text-center mt-3">${dataModal.input_output_examples[1]? dataModal.input_output_examples[1].output : "No! Not Yet! Take a break!!!"}</p>
        </div>
    `;
 }

// apinner open data

 let toggleSpinner= isLoading => {
    let loadingSection=document.getElementById("loading_data")
    if (isLoading) {
        loadingSection.classList.remove("d-none")
    }
    else{
        loadingSection.classList.add("d-none")
    }

}








// const allCard=document.getElementsByClassName("card")
// console.log(allCard)


// for(let card of allCard){

//     console.log(card)
// }


const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.addEventListener("click", () => {
    // generate a random color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // set the background color of the clicked element
    card.style.backgroundColor = randomColor;
  });
}





























































