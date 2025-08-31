//const AppUser =new Object();
const AppUser ={};
AppUser.name="user1"
AppUser.email ="user1@gmail.com"
AppUser.age = 18;
// console.log(AppUser);

const user= {
    email:"user2@google.com",
    name: {
        firstname:"user2",
        lastname:"users"
    }
}
// console.log(user.name.firstname);

const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

// const obj3=Object.assign({}, obj1,obj2); //{target,source} here target is new obj
const obj3 = {...obj1,...obj2}; //spread
// console.log(obj3);

// console.log(AppUser);

// console.log(Object.keys(AppUser));
// console.log(Object.values(AppUser));
// console.log(Object.entries(AppUser));

// console.log(AppUser.hasOwnProperty("name"));

const course = {
    coursename :"js-course",
    price:999,
}
// course.coursename
const {coursename:namee} = course;
// console.log(namee);


