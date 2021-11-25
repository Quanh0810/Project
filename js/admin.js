// var data = [
       
// ];


function add() {
    var xid = document.getElementById('brand').value;
    var xname = document.getElementById('name').value;
    var xorigin = document.getElementById('origin').value
    var xprice = document.getElementById('price').value
    var xpicture = document.getElementById('picture').value

    item = {
        brand: xbrand,
        name: xname,
        origin: xorigin,
        price: xprice,
        picture: xpicture
    }
  
    let index = data.findIndex((c) => c.id === xid)
    console.log(index)

    if (index >= 0) {
        data.splice(index, 1, item)
    }
    else {
        data.push(item);
    }
    clear()
    show();

}

function clear() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('origin').value = '';
    document.getElementById('price').value = '';
}

function show() {
    var table = `<tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Origin</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>`

    for (let i = 0; i < data.length; i++) {
        table += `<tr>
                     <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].origin}</td>
                    <td>${data[i].price}</td>
                    <th>
                        <button onclick="Delete(${data[i].id})">Delete</button>
                        <button onclick="Edit(${data[i].id})">Edit</button>
                        </th>
                </tr>`
    }
    document.getElementById("bang").innerHTML = table
}

function Delete(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id, confirm('Are you sure ?')) {
            data.splice(i, 1)
            show();
        }
    }
}

function Edit(id) {
    document.getElementById("ID");
    for (let i = 0; i <= data.length; i++) {
        if (data[i].id == id) {
            document.getElementById('id').value = data[i].id;
            document.getElementById('name').value = data[i].name;
            document.getElementById('origin').value = data[i].origin;
            document.getElementById('price').value = data[i].price;
        }

    }
}