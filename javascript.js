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
                        <td>${data[i].from.toFixed(4)}</td>
                        <td>${data[i].to.toFixed(4)}</td>
                        <td>${data[i].Smin.toFixed(4)}</td>
                        <td>${data[i].Smax.toFixed(4)}</td>
                        <td>${data[i].CBmin.toFixed(4)}</td>
                        <td>${data[i].CBmax.toFixed(4)}</td>
                        <td>${data[i].CImin.toFixed(4)}</td>
                        <td>${data[i].CImax.toFixed(4)}</td>
                        <td>${data[i].IBmin.toFixed(4)}</td>
                        <td>${data[i].IBmax.toFixed(4)}</td>
                        <td>${data[i].IImin.toFixed(4)}</td>
                        <td>${data[i].IImax.toFixed(4)}</td>
                  </tr>`
        table.innerHTML += row
    }
}

document.querySelector('#diameter').addEventListener('keyup',calcular);

function calcular(){

    const diameter=document.getElementById("diameter").value

    const o = myArray.find(elemento =>{

        return elemento.to >= diameter;
    })

    var dia =Number(document.getElementById("diameter").value)
    //calculo para las tolerancias del eje
    const Shaft_Tol_Max= dia + o.Smax
    const Shaft_Tol_Min= dia + o.Smin

    document.getElementById("Shaft_Tolerance_Max").innerHTML =  "Smax=" + Shaft_Tol_Max.toFixed(4);
    document.getElementById("Shaft_Tolerance_Min").innerHTML =  "Smin=" + Shaft_Tol_Min.toFixed(4);

    //calculo para las tolerancias del agujero

    const Int_Bore_Max= dia + o.IBmax
    const Int_Bore_Min= dia + o.IBmin

    document.getElementById("Int_Bore_Max").innerHTML =  "IBmax=" + Int_Bore_Max.toFixed(4);
    document.getElementById("Int_Bore_Min").innerHTML =  "IBmin=" + Int_Bore_Min.toFixed(4);


}



