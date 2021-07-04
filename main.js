var images =
["WhatsApp Image 2021-04-13 at 11.29.17 AM.jpeg",
"cvs.jpeg",
"WhatsApp Image 2021-04-13 at 11.25.39 AM.jpeg",
"WhatsApp Image 2021-04-13 at 11.24.17 AM.jpeg",
"me.jpg",
"WhatsApp Image 2021-04-13 at 11.23.25 AM.jpeg"
];

var names = ["Family book","Nimit Endlay(My Father)","Namita Endlay(My Mother)","Nimansh Endlay(My Brother)","Namish Endlay(Me)","Oreo Endlay(My Pet)"];

var i = 0;
function update()
{
    i++;
    var number_of_family_members_in_array = 6
    if(i > number_of_family_members_in_array )
    {
        i = 0;
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_member_name").innerHTML = updatedname;
}