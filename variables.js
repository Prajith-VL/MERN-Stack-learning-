console.log(a); //hoisting variable
console.log(getname);//hoisting function

function getname (){ //fuction with normal declaration
    console.log('learning javascipt to MERN stack')
}

var getname2 = () =>{ //fuction declared as a variable {Arrow function}
        console.log('learning javascipt to MERN stack');
}

var getname3 =function(){//another way of declaring function
        console.log('learning javascipt to MERN stack');   
}

getname();// function call

getname2();// function call of arrow function
getname3();
var a = 100; //variable declaration
console.log(a);//printing

a= 'java learning';
console.log(a);

