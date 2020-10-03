var modalButtons =  document.querySelectorAll(".modalButton");

var organisations = [];

organisations["ENAR"] = 
{
    title: "European Network Against Racism",
    text: "The European Network Against Racism (ENAR) is a polemical EU-wide network of NGOs in all European Union Member States and Iceland. ENAR stands up against racism and discrimination and advocates for equality and solidarity for all in Europe. It connects local and national anti-racist NGOs throughout Europe and acts as an interface between its member organisations and the European institutions. It voices the concerns of ethnic and religious minorities in European and national policy debates"
};
organisations["NBFN"] = 
    {
        title: "National Bali Fund Network",
        text: "The National Bail Fund Network is made up of over eighty community bail and bond funds across the country. We regularly update this listing of community bail funds that are freeing people by paying bail/bond and are also fighting to abolish the money bail system and pretrial detention."
    };
organisations["United"] = 
    {
        title: "UNITED for Intercultural Action",
        text: "UNITED for Intercultural Action is the European network against nationalism, racism, fascism and in support of migrants, refugees and minorities. Together with over 560 supporter organisations all around Europe, ranging from local grassroots associations to national and international NGOs, UNITED coordinates campaigns, organises conferences, takes part in projects, produces publications and undertakes advocacy work to protest against discrimination and promote our shared vision for a diverse and inclusive society."
    }



modalButtons.forEach(button => 
    {
        button.addEventListener('click',()=>
        {
            console.log(document.getElementById("exampleModalCenterTitle"));
            document.getElementById("exampleModalCenterTitle").innerHTML = organisations[event.target.id].title;
            document.getElementById("modalBody").innerHTML = organisations[event.target.id].text;
            
        })
    })





