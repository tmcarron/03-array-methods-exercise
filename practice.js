"use strict";

let detroitWarehouse = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "iPhone XR",
    price: 499,
    fiveG: false,
  },
  {
    name: "iPhone 11",
    price: 599,
    fiveG: false,
  },
  {
    name: "iPhone 12 Mini",
    price: 729,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

let newYorkWarehouse = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
];
let chicagoWarehouse = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

const addPhone = (arr) => {
  arr.push({ name: "iTy", price: 1000000, fiveG: true });
};
addPhone(detroitWarehouse);
console.log(detroitWarehouse);

const deletePhoneByIndex = (arr, index) => {
  if (index !== -1) {
    arr.splice(index, 1);
  }
};

deletePhoneByIndex(detroitWarehouse, 9);
console.log(detroitWarehouse);

const deletePhoneByName = (arr, name) => {
  let index = arr.findIndex((phone) => {
    return phone.name === name;
  });
  if (index !== -1) {
    arr.splice(index, 1);
  }
};
deletePhoneByName(detroitWarehouse, "iPhone 11");
console.log(detroitWarehouse);

const filter5G = (arr, has5G) => {
  let eval5G = arr.filter((phone) => {
    return phone.fiveG === has5G;
  });
  return eval5G;
};
console.log(filter5G(detroitWarehouse, true));

const priceLessThan = (arr, price) => {
  let budjetOptions = arr.filter((phone) => {
    return phone.price <= price;
  });
  return budjetOptions;
};
console.log(priceLessThan(detroitWarehouse, 600));

const findPhoneByName = (arr, name) => {
  return arr.find((phone) => {
    return phone.name === name;
  });
};
console.log(findPhoneByName(detroitWarehouse, "iPhone 12"));

const calcAverageCost = (arr) => {
  let sum = 0;
  let average = 0;
  let counter = 0;
  arr.forEach((phone) => {
    sum += phone.price;
    counter++;
  });
  return sum / counter;
};

console.log(calcAverageCost(detroitWarehouse));

const doWeHaveA5GPhone = (arr) => {
  const index5G = arr.findIndex((phone) => {
    return phone.fiveG === true;
  });
  if (index5G != -1) {
    return true;
  } else {
    return false;
  }
};

console.log(doWeHaveA5GPhone(detroitWarehouse));

const phoneFlashSale = (arr, sale) => {
  let phonesWithSales = arr.map((phone) => {
    phone.discountPrice = phone.price * sale;
    return phone;
  });
  return phonesWithSales;
};
console.log(phoneFlashSale(detroitWarehouse, 0.75));

const phoneFlashSaleV2 = (arr, name, sale) => {
  let phoneNameWithSales = arr.filter((phone) => {
    phone.discountPrice = phone.price * sale;
    return phone.name === name;
  });
  return phoneNameWithSales;
};

console.log(phoneFlashSaleV2(detroitWarehouse, "iPhone SE", 0.75));
