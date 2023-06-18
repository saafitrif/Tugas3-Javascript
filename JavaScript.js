//Soal No.1
function mySqrt(num){
    if (num <= 0){
        return "Tidak bisa input bilangan negatif"
    }else if (num % 2 == 0){
        return Math.sqrt(num)
    }else{
        return "Tidak bisa input bilangan ganjil"
    }
}
console.log("No 1a :", mySqrt(64)); // No 1a : 8
console.log("No 2b :", mySqrt(-2)); // No 2b : Tidak bisa input bilangan negatif
console.log("No 1c :", mySqrt(9)); // No 1c : Tidak bisa input bilangan ganjil

//Soal No.2
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }
let count = 0;
for(let i=0; i < productBin.data.length; i++){
    if(productBin.data[i].productCode == "FBR00040101"){
        count += productBin.data[i].quantity;
    }
}
console.log("Total Count :", count) // Total Count : 157