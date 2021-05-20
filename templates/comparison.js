var comparison_list = 
[
    {
        before: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-Cladding-Removal.jpg", 
        after: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-After.jpg"
    }, 
    {
        before: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Exterior-House-Painting-Before.jpg", 
        after: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Exterior-House-Painting-After.jpg"
    }, 
    {
        before: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-Exterior-House-Painting-before.jpg", 
        after: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-Exterior-House-Painting-After.jpg"
    }, 
    {
        before: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-Garagedoor-Before.jpg", 
        after: "https://vhpainting.co.nz/wp-content/uploads/2019/11/VH-Painting-Services-Garagedoor-After.jpg"
    }, 
]; 

comparison_list.forEach
(
    ({before, after}, index)=>
    {
        var div = document.createElement("div"); 
        let id = `comparison-${index}`; 
        div.id = id; 
        div.className = "col"; 
        document.getElementById("comparison").append(div); 
        new juxtapose.JXSlider
        (
            `#${id}`,
            [
                {
                    src: before
                },
                {
                    src: after
                }
            ],
            {
                animate: true,
                startingPosition: "50%",
                makeResponsive: true
            }
        );
    }
); 