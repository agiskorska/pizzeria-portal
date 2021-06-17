// export let product = [], order = [], eve = [], booking = []; 

// const url = 'http://localhost:3131/api/db/';
// fetch(url)
//   .then((respo) => respo.json())
//   .then(function(data) {
//     product.push(...data.product);
//     order.push(...data.order);
//     eve.push(...data.event);
//     booking.push(...data.booking);
//   });

export const orders = [
  {
    "products": [
      {
        "id": "cake",
        "amount": 2,
        "price": 18,
        "priceSingle": 9,
        "name": "Zio Stefano's Doughnut",
      },
      {
        "id": "breakfast",
        "amount": 1,
        "price": 9,
        "priceSingle": 9,
        "name": "Zia Giulia's Breakfast",
        "params": {
          "coffee": {
            "label": "Coffee type",
            "options": {
              "espresso": "Espresso",
            },
          },
        },
      },
      {
        "id": "pizza",
        "amount": 1,
        "price": 22,
        "priceSingle": 22,
        "name": "Nonna Alba's Pizza",
        "params": {
          "sauce": {
            "label": "Sauce",
            "options": {
              "tomato": "Tomato",
            },
          },
          "toppings": {
            "label": "Toppings",
            "options": {
              "olives": "Olives",
              "redPeppers": "Red peppers",
              "greenPeppers": "Green peppers",
              "mushrooms": "Mushrooms",
              "basil": "Fresh basil",
            },
          },
          "crust": {
            "label": "pizza crust",
            "options": {
              "thin": "thin",
            },
          },
        },
      },
    ],
    "address": "Table1",
    "phone": "n/a",
    "totalPrice": 69,
    "deliveryFee": 20,
    "subtotalPrice": 49,
    "totalNumber": "4",
    "id": 1,
  },
  {
    "products": [
      {
        "id": "pizza",
        "amount": 2,
        "price": 50,
        "priceSingle": 25,
        "name": "Nonna Alba's Pizza",
        "params": {
          "sauce": {
            "label": "Sauce",
            "options": {
              "tomato": "Tomato",
            },
          },
          "toppings": {
            "label": "Toppings",
            "options": {
              "olives": "Olives",
              "redPeppers": "Red peppers",
              "greenPeppers": "Green peppers",
              "mushrooms": "Mushrooms",
              "basil": "Fresh basil",
              "salami": "Salami",
            },
          },
          "crust": {
            "label": "pizza crust",
            "options": {
              "thick": "thick",
            },
          },
        },
      },
    ],
    "address": "323 Oxford Road",
    "phone": "07537802102",
    "totalPrice": 70,
    "deliveryFee": 20,
    "subtotalPrice": 50,
    "totalNumber": "2",
    "id": 2,
  },

];

export const eve = [
  {
    "id": 1,
    "date": "2021-03-01",
    "hour": "12:30",
    "table": 1,
    "repeat": false,
    "duration": 4,
    "ppl": 3,
    "starters": [],
  },
  {
    "id": 2,
    "date": "2019-01-01",
    "hour": "16:00",
    "table": 3,
    "repeat": "daily",
    "duration": 2,
    "ppl": 3,
    "starters": ["bread", "lemonWater"],
  },
  {
    "id": 3,
    "date": "2021-01-01",
    "hour": "12:00",
    "table": 3,
    "repeat": "daily",
    "duration": 2,
    "ppl": 3,
    "starters": ["bread", "lemonWater"],
  },
  {
    "id": 4,
    "date": "2019-01-01",
    "hour": "13:00",
    "table": 2,
    "repeat": "daily",
    "duration": 4,
    "ppl": 3,
    "starters": [],
  },
  {
    "id": 5,
    "date": "2019-01-01",
    "hour": "18:00",
    "table": 2,
    "repeat": "daily",
    "duration": 2,
    "ppl": 3,
    "starters": ["lemonWater"],
  },
];

export const booking = [
  {
    "id" : 1,
    "date" : "2021-11-03",
    "hour" : "16:00",
    "table" : 1,
    "duration" : 3,
    "ppl" : 4,
    "starters" : ["water"],
  },
  {
    "id" : 2,
    "date" : "2021-08-03",
    "hour" : "14:00",
    "table" : 2,
    "duration" : 3,
    "ppl" : 2,
    "starters" : ["water"],
  },
];

const initialStoreData = {

  orders: orders, 
  events: eve, 
  booking: booking,
};

export default initialStoreData;

