//street
//city
//zipcode

const addressObj = {
  street: "Plot no 602, Road Number 11 ",
  city: "Hyderabad",
  zipcode: "500097",
};

function showAddress(address) {
  for (let keys in address) {
    console.log(keys, ":", address[keys]);
  }
}

showAddress(addressObj);
