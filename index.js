fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data="";
    completedata.map((value)=>{
        data+=
        `  <div id="container">
        <div class="spam">
            <div class="title"><h>${value.title}</h></div>
            <img src="${value.image}" alt="img">
            <p>${value.description}</p>
            <p class="category">${value.category}</p>
            <p class="price">${value.price}</p>

        </div>
    </div>`
    });
   document.getElementById("container").innerHTML=data;
}).catch((err)=>{
    console.log(err);
});
