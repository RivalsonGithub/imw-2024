let obj = {
    "description":"testing description content",
    "name": "Jason",
    "color":"white"
}

let obj2 = [
    {
        "description": "des 1",
        "name": "zz plant",
    },
    {
        "description": "des 1",
        "name": "zzz plant 2"
    },
    {
        "description": "des 3",
        "name": "zzzz plant",
    },

];

$(`body`).append(`<p>${obj.name}</p>`)


for (let i =0; i < obj2.length; i++){
    $('body').append(`<p>${obj2[i].description}</p>`)
}

fetch("plants.json")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        $('body').append("ERROR");
    })


//Simple getting values from obj
console.log(obj.name);

//API
fetch("https://ghibliapi.vercel.app/people")
    .then(function(response){
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


    