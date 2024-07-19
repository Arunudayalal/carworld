function store()
{
    car={
        brand:carbrand.value,
        price:price.value,
        keyv:key.value
    }

    if(car.brand==""||car.price==""||car.keyv=="")
    {
        alert("Enter full details")
    }
    else{
        localStorage.setItem(car.keyv,JSON.stringify(car))
        alert("stored successfully")
    }
}

function search()
{
    let v=kvalue.value
    let v1=JSON.parse(localStorage.getItem(v))
    alert(`Found Your Brand is ${v1.brand} and price is ${v1.price}`)
    
}

function remove(){
    let v=kvalue2.value
    let v1=localStorage.removeItem(v)
    alert("Removed Successfully")
}

function removeall(){
    localStorage.clear()
    alert("cleared successfully")
}