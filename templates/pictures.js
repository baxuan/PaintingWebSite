var picture_list =
[
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Exterior-Before.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Exterior-During.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Interior-Painting-and-Varnishing.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Interior-Windows-Plaster.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Interior-Windows-Plastering.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Interior-Windows-After.jpg",
    "https://vhpainting.co.nz/wp-content/uploads/2019/12/Interior-Windows-Finished.jpg"
]; 

document.getElementById("pictures").querySelector(".carousel-inner").innerHTML = picture_list.reduce 
(
    (accumulator, current_value, index)=>
    accumulator + 
    `
        <div class="carousel-item ${index==0?"active": ""}">
            <img src="${current_value}" alt="${current_value}" />
        </div>
    `, ""
); 