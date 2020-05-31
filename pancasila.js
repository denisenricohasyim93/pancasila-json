var pancasila_json = require('./pancasila.json');
pancasila_json.map((item, index) => {
    console.log(item.nomor+"."+item.bunyi)
    // nomor
    // bunyi
    // butir | array
    console.log("==========")
    item.butir.map((itm, idx) => {
        console.log(item.nomor+"."+Number(idx+1)+")"+itm)
    })
    console.log("\n")
})