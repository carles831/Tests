let storage01 =[["apples",23],["bananas",50],["peaches",46]];
let storage02 =[["papayas",16],["strawberrys",123],["bananas",3]];

let storages =[storage01,storage02];

storageTester();
storage01.push(["papayas",2]);
storageTester();
storageOrganizer();

function storageTester(i,j)  {
  for(let j =0;j<storages.length;j++){
    for(let i =0; i<storages[j].length;i++){
      let message = "There are " + storages[j][i][1] + " " +storages[j][i][0] + " in the storage number " + j;
      console.log(message);
      }
  }
  console.log("-------------------------------------------------");
}

function storageOrganizer(){
  for(let j = 0; j<storage01.length;j++){
    for(let i = 0; i<storage02.length;i++){
      if(storage01[j][0] == storage02[i][0]){
         console.log("Hay un pallete duplicado de " + storage02[i][0] );

         storage01[j][1] += storage02[i][1];
         storage02.splice([i],1);
      }
    }
  }
  console.log("............................................");
  storageTester();
}
