var a  = 1 ;
var b = a + 5;

console.log(b);

// number type
var a = 1;
var b = 2;




var  fullName = 'Anh Tuan';
console.log(fullName);

// booleanr : on /off
var isSuccess =true ; 
console.log(isSuccess);

// undefined type
var age;
console.log(age);

// null type
var isNull = null;
console.log(isNull);

// symbol type
var id = Symbol('id'); //unique 
console.log(id);


// 2 kieu du lieu phuc tap 
// function ( hien o thong bao )
// var Myfunction = function(){
//     alert('Hi. xin chao cac ban');

}
Myfunction();

// object type
 var myObject = {
    name: 'Anh Tuan',
    age: 20,
    address: {
        city: 'Ha Noi City',
        country: 'Vietnam'
    }
};

console.log(myObject);


//  dinh nghia 1 danh sach nao do 
var myArray =[
    'Javascript',
    'HTML',
    'CSS'
]
 console.log(myArray);

//    kiem tra type
//  vd kiem tra type cua c ( tra ve type cua c la NUMBER)
var c =10 ;
console.log(typeof c); 

// toán tử và lệnh if
var a = 1;
var b = 2;

var result = a < b && a < 0;
// if (a<b ){
//     console.log('A<B');
// } else {
//     console.log('A>=B');
// }

// hàm 
// chứa từ a-z A-Z 0-9 _$
// k đặt số ở chứ đầu tiên 
function showDialog() {
    alert('Hi cac ban')
}

// goi ham 

showDialog();

//  tham so trong ham
