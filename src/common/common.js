export function handleData(data) {
  const tasksListArr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let dataBackup = localStorage.getItem("data") ? [] : data;

  dataBackup.forEach((e) => {
    tasksListArr.push(e);
  });

  localStorage.setItem("data", JSON.stringify(tasksListArr));
  return tasksListArr;
}
// export const make()=>{
//   let a="";
//   let e="qwertyuiopasdfghjklzxcvbnm,1234567890--";
  
// }
