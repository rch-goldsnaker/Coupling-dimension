var myArray =
          [
            {
                "from": 0.4375,
                "to": 1.5000,
                "Smin": -0.0005,
                "Smax": 0.0000,
                "CBmin": 0.0000,
                "CBmax": 0.0010,
                "CImin": 0.0000,
                "CImax": 0.0015,
                "IBmin": -0.0010,
                "IBmax": -0.0005,
                "IImin": -0.0010,
                "IImax": 0.0000,
            },
            {
                "from": 1.5000,
                "to": 2.0000,
                "Smin": -0.0010,
                "Smax": 0.0000,
                "CBmin": 0.0000,
                "CBmax": 0.0010,
                "CImin": 0.0000,
                "CImax": 0.0020,
                "IBmin": -0.0020,
                "IBmax": -0.0010,
                "IImin": -0.0020,
                "IImax": 0.0000,
            },
            {
                "from": 2.000,
                "to": 3.0000,
                "Smin": -0.0010,
                "Smax": 0.0000,
                "CBmin": 0.0000,
                "CBmax": 0.0015,
                "CImin": 0.0000,
                "CImax": 0.0025,
                "IBmin": -0.0020,
                "IBmax": -0.0010,
                "IImin": -0.0020,
                "IImax": 0.0000,
            }
          ]
          buildTable(myArray)


function buildTable(data){
    var table = document.getElementById('myTable')
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].from}</td>
                        <td>${data[i].to}</td>
                        <td>${data[i].Smin}</td>
                        <td>${data[i].Smax}</td>
                        <td>${data[i].CBmin}</td>
                        <td>${data[i].CBmax}</td>
                        <td>${data[i].CImin}</td>
                        <td>${data[i].CImax}</td>
                        <td>${data[i].IBmin}</td>
                        <td>${data[i].IBmax}</td>
                        <td>${data[i].IImin}</td>
                        <td>${data[i].IImax}</td>
                  </tr>`
        table.innerHTML += row
    }
}
        
document.querySelector('#calcular').addEventListener('click',calcular);

function calcular(){

    const diameter=document.getElementById("diameter").value

    const o = myArray.find(elemento =>{

        return elemento.to >= diameter;
    })
    console.log(diameter);
    console.log(o);
    console.log("el diametro esta entre", o.from, "y" , o.to)

    const from = o.from
    const to = o.to

    document.getElementById("resultado").innerHTML = "el diametro esta entre " + from + " y " + to;

}



