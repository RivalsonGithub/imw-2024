//local obj
let obj_local = {
    "header-text": "Welcome to Ex8"
}

//local obj array
let obj_local_2 = [
    {
        "description": "Local Object",
        "context": "Create either a functional or expressive page using data from a public API.",
    },
    {
        "description": "Description 2",
        "context": "To be comfortable reading JSON files and using public APIs."
    },
    {
        "description": "Description 3",
        "context": "March 5",
    },

];

//Using local obj array
$(`body`).append(`<h1>${obj_local["header-text"]}</h1>`);

for (let i =0; i < obj_local_2.length; i++){
    console.log(obj_local_2[i].description, obj_local_2[i].name)

    $('body').append(
        `<div>
            <h2>
                ${obj_local_2[i].description}
            </h2>
            <p>
                ${obj_local_2[i].context}
            </p>
        </div>`
    )
}

//Using local JSON
$(`body`).append(`<h1> Here are the contents from local JSON file</h1>`);
fetch("plants.json")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        data.forEach(element =>{
            $('body').append(
                `<div>
                    <h2>
                        ${element.name}
                    </h2>
                    <p>
                        ${element.description}
                    </p>
                </div>`
            )
        })

    })
    .catch(function(error){
        $('body').append("ERROR");
    })

//Using free public API (GHIBLI)
fetch("https://ghibliapi.vercel.app/people")
    .then(function(response){
        $(`body`).append(`<h1> Here are the list of Ghibli movies! (API) </h1>`);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        data.forEach(element => {
            console.log(element.name);
            $("body").append(element.name + "</br>");
        });
    })
    .catch(function(error){
        $("body").append("ERROR");
    })


    