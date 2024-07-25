//Factory Function
function CreateAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
console.log(CreateAddress("Jublie Hills", "hyderabad", 500097));

//Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let address = new Address("Indiranagar", "bengaluru", 523110);
console.log(address);
