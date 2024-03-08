// eger bizim promismiz isliyecekse biz resolve qaytarcaq
// firstcreatedelay bize 1saniyde sonra isliyecek
const firstCreateDelay= new Promise((resolve,reject)=> {
    setTimeout(()=>{
         resolve('Delay completed 1000ms')
    },1000)
    
})
// secondCreateDelay bize 500 millsaniyede sonra isliyecek
const secondCreateDelay= new Promise((resolve,reject)=> {
    setTimeout(()=>{
         resolve('Delay completed 500ms')
    },500)
    
})
// lastCreateDelay bize 1saniye yarim sonra isliyecek
const lastCreateDelay= new Promise((resolve,reject)=> {
    setTimeout(()=>{
         resolve('Delay completed 1500ms')
    },1500)
    
})
// eger ki bizim promismizde xeta varsa onda bize reject qaytarcaq 
const createDelay = new Promise((resolve,reject)=>{
    reject('Delay failed')
    
})
//biz resolve ekran yazirmaq istyirkse onda then istifade etmekle gore bilerki
firstCreateDelay.then(fulfilled=>console.log(fulfilled))
secondCreateDelay.then(fulfilled=>console.log(fulfilled))
lastCreateDelay.then(fulfilled=>console.log(fulfilled))
// biz xeta gormek istyirse  onda catch istifde ederke gorme bilerki
createDelay.catch(err=>console.log(err))
// burda iste promis all istifade ederke her bir promise bir array icin gosterik
Promise.all([firstCreateDelay,secondCreateDelay,lastCreateDelay,createDelay]).then(values=>console.log(values))