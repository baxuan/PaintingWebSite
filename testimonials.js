var testimonials_list = 
[
    {
        review: "Two jobs that were far too hard for me appear to have been easy for Ben! Ben understood the problems immediately, knew how to fix them, and made useful suggestions about what he could do to get the best long term result. Very happy.", 
        customer: "Simon", 
        time: "May, 2019"
    }, 
    {
        review: "We got one side of our house fully recladded, framing repaired, insulated, two windows replaced and everything painted. Ben did a great job, worked very efficiently and finished ahead of schedule. At each step of the way Ben was very clear about what our options were and what they would cost. Very happy with the finished job. Will definitely be using Ben for future jobs.", 
        customer: "Chris", 
        time: "April, 2019"
    }, 
    {
        review: "Ben and team did a great job replacing rotten weatherboards and painting the new ones, as well as repairing a rotten window frame and replacing flashings. Very fast and professional service.", 
        customer: "Emma", 
        time: "May, 2019"
    }, 
    {
        review: "Ben has worked for us a number of times and we have always found his work to be of a very high standard. He has always been able to offer alternative options and to very carefully explain their differences and related costs, something that others do not always do. He has been punctual and has completed the work on time and has tidied up after the job without being asked to. We have no hesitation in recommending him to other people.", 
        customer: "Mike", 
        time: "June, 2019"
    }, 
    {
        review: "Ben was a pleasure to deal with. Good communication and turns up when he says he will. Straight up and down about what need to be done and why and prices jobs well. Very happy with the work he did.", 
        customer: "John", 
        time: "August, 2019"
    }, 
    {
        review: "Great job painting the interior of our cottage. The work was done to a high standard in good time. Thanks.", 
        customer: "Jacquie", 
        time: "August, 2019"
    }, 
    {
        review: "Vh repaired a water damaged ceiling and repainted it. Ben was great to deal with, there was clear communication from start to finish and the job was completed quickly and to a very high standard.", 
        customer: "Jacquie", 
        time: "November, 2019"
    }
]; 

var testimonials_html = testimonials_list.reduce 
(
    (accumulator, {review, customer, time}, index)=>
    accumulator+ 
    `
        <div class="carousel-item ${index==0?"active": ""}">
            <div class="d-flex justify-content-center">
                <blockquote class="w-50">
                    <p>
                        <q>${review}</q>
                        <p>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </p>
                        <p>${customer}</p>
                        <p><i>${time}</i></p>
                    </p>
                </blockquote>
            </div>
        </div>
    `, ""
); 
document.getElementById("testimonials").querySelector(".carousel-inner").innerHTML+= testimonials_html