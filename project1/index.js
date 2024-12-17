let form = document.getElementById('todoform')
let todolist = document.getElementById('listtodo');
let arrays = [];
console.log(form)
form.addEventListener('submit', function (ev){
    ev.preventDefault()
    //Methodes pour récuperer les elements du formulaire
    const inputs = document.forms['todof'].getElementsByTagName("input")
    const inputs1 = form.elements
    

    const title = inputs1.title.value
    const action = inputs1.action.value
    const date = inputs1.date.value
    const description = inputs1.description.value
    
    const obj = {
        "title":title,
        "date": date,
        "desc":description
    }
    arrays = JSON.parse(localStorage.getItem("todos")) 
    console.log("action", action)
    if (action == "") {
        arrays.push(obj)
        // let getel = localStorage.getItem()
        localStorage.setItem("todos", JSON.stringify(arrays))
    } else if (action == "edit") {
        
    } {
        arrays.forEach(element => {
            // console.log(obj.title)
            if (element.title ==  obj.title) {
                
                element.title = obj.title
                element.date = obj.date
                element.desc = obj.desc
            }
        });
        localStorage.setItem("todos", JSON.stringify(arrays))
    }
    
    // arrays.forEach((el)=>{
        // todolist.innerHTML += "<p> Titre: "+obj.title+"<p>";
    // })
    
    console.log(arrays)
    window.location.reload()
})

const getar = JSON.parse(localStorage.getItem("todos")) 
let html =""
if (getar != null) {
    getar.forEach(element => {
        html += `
            <tr>
                <td>Titre: ${element.title}</td>
                <td>Date: ${element.date}</td>
                <td>Description: ${element.desc}</td>
                <td>
                    <button class="bt" onclick="edit('${element.title}')">+</button>
                    <button class="bt" onclick="erase('${element.title}')">-</button>
                </td>
            </tr>
        `;
    });
    
    todolist.innerHTML = html;
}

function edit(id) {
    const filt = getar.filter((item) => item.title == id)[0]
    const inputs = form.elements
    inputs.action.value = 'edit'
    inputs.title.value = filt.title
    inputs.date.value = filt.date
    inputs.description.value = filt.desc
    console.log(filt)
}

function erase(id) {
    let array = JSON.parse(localStorage.getItem("todos")) 
    array = array.filter(element => element.title != id);
    localStorage.setItem("todos", JSON.stringify(array))
    window.location.reload()
}