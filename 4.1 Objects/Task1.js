// https://javascript.info/object#hello-object

let user = new Object(); // or let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;