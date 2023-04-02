function towns (array){

    let townInfo = {}

for(let i = 0; i < array.length; i ++){
    let line = array[i].split(' | ')
   townInfo.town = line[0]
   townInfo.latitude = Number(line[1]).toFixed(2)
   townInfo.longitude = Number(line[2]).toFixed(2)
   console.log(townInfo);
}

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)