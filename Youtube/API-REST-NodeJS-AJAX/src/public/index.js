function init(){
    document.querySelector("#getProducts").addEventListener("click", ()=> {
        this.request("/products", "GET", "", this.fnResultadoGET)
    });

    document.querySelector("#productForm").addEventListener("submit", (e)=> {
        e.preventDefault();
        let dataObject = this.getData();
        this.request("/products", "POST", dataObject, this.fnResultado)
    });
}

function initButtons(){
    let buttonsU = document.querySelectorAll("table .update"),
        buttonsD = document.querySelectorAll("table .delete");
    buttonsU.forEach(element => {
        element.addEventListener("click", (e)=> {
            let row = e.target.closest('tr'),
                dataObject = {},
                id = row.querySelector(".id").textContent;
            dataObject.nombre = row.querySelector(".nombre").value;
            this.request("/products/"+id, "PUT", dataObject, this.fnResultado)
        });
    });

    buttonsD.forEach(element => {
        element.addEventListener("click", (e)=> {
            let row = e.target.closest('tr'),
                dataObject = {},
                id = row.querySelector(".id").textContent;
            this.request("/products/"+id, "DELETE", dataObject, this.fnResultado)
        });
    });
}

function request(listener, request, object = {}, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) callback(this.responseText);}
    xhttp.open(request,listener,true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify(object));
}

function fnResultadoGET(r) {
    let data,
        tbody = document.querySelector('tbody'); 

    data = JSON.parse(r);
    tbody.innerHTML = "";
    data.forEach(element => {
        tbody.insertRow().innerHTML=`
            <tr>
                <td class="id">${element.ID}</td>
                <td><input type="text" class="nombre" value="${element.nombre}" /></td>
                <td>
                    <button class="update">Update</button>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `;
    });
    initButtons();
}

function fnResultado(r) {  
    console.log(JSON.parse(r));
    document.querySelector("#getProducts").click();
}

function getData(){
    let data = {},
        newProduct = document.querySelector("#newProduct");
    data.nombre = newProduct.value;
    return data;
}

window.onload = () => init();