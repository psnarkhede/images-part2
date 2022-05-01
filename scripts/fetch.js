let searchimages = async (value,sort,filter,API) => {
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sort}&orientation=${filter}&client_id=${API}`);

        let data = await res.json();

        return data;
    }catch(err){
        console.log(err);
    }
};


let append = (data,container) => {

    setTimeout(() => {
        data.map((el)=>{
            let appenddiv = document.createElement("div");
            appenddiv.setAttribute("class","appenddiv");
    
            let title = document.createElement("h3");
            title.setAttribute("class","title");
            title.innerText = el.alt_description
    
            let image = document.createElement("img");
            image.setAttribute("class","image");
            image.src = el.urls.small;
    
            appenddiv.append(image, title);
            container.append(appenddiv);
        });
    },2000);

};

export {searchimages,append};