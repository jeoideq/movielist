function get_value(event)
{
   
    let name=document.getElementById("name").value;
    let person=document.getElementById("person").value;
    let year=document.getElementById("year").value;
    const row=document.createElement("tr");
    const col1=document.createElement("td");
    const col2=document.createElement("td");
    const col3=document.createElement("td");
    col1.textContent=name;
    col2.textContent=person;
    col3.textContent=year;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    let tablebody=document.getElementById("tablebody");
    tablebody.appendChild(row);

    document.getElementById("name").value="";
    document.getElementById("person").value="";
    document.getElementById("year").value="";
}


