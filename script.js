/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    //prints developer names by profession developer with map() method
    let developer=arr.filter(a=>a.profession=="developer");
    let devname=developer.map(developer=>developer.name);
    console.log(devname);

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
 //prints developer names by profession developer with forEach() method
    arr.forEach(function(a){
        if(a.profession=="developer"){
            console.log(a.name);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    //add data
    let nextId={id: 4,name: "susan",age: "20",profession: "intern"}
    arr.push(nextId);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //remove admin from array
    arr=arr.filter(arr=>arr.profession!=="admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    // conccatenate another array
    let arr2 = [
        { id: 5, name: "Rina", age: "21", profession: "backend-developer" },
        { id: 6, name: "Mary", age: "18", profession: "frontend-developer" },
        { id: 7, name: "Johnson", age: "22", profession: "intern" },
      ];
      let concaenatearrs=arr.concat(arr2);
      console.log(concaenatearrs);
      
  }