const seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
module.exports = function runSeeder() {

  seeder.connect('mongodb://localhost/shopper', function () {

    // Load Mongoose models
    seeder.loadModels([
      './models/product',
    ]);

    // Clear specified collections
    seeder.clearModels(['Product'], function () {

      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function () {
        seeder.disconnect();
      });

    });
  });

  // Data array containing seed data - documents organized by Model
  const products = [
    {
      id: 1,
      name: "new balance ML574 D",
      price: "99.95",
      brand: {
        name: 'New Balance',
        code: 'new-balance'
      },
      images: ["https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML574_D-EGO_OLIVE-1.jpg"],
      sizes: [50]
    },
    {
      id: 2,
      name: "new balance ML574",
      price: "94,95",
      brand: {
        name: 'New Balance',
        code: 'new-balance'
      },
      images: ["https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML574-ESA_NIMBUS_CLOUD-1.jpg"],
      sizes: [45]
    },
    {
      id: 3,
      name: "new balance ML840 D",
      price: "109,95",
      brand: {
        name: 'New Balance',
        code: 'new-balance'
      },
      images: ["https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML840_D-BD_STONE_GREY-1.jpg"],
      sizes: [47]
    },
    {
      id: 4,
      name: "new balance MRL247",
      price: "83,99",
      brand: {
        name: 'New Balance',
        code: 'new-balance'
      },
      images: ["https://kickz.akamaized.net/en/media/images/p/600/new_balance-MRL247-LN_NAVY-1.jpg"],
      sizes: [46]
    },
    {
      id: 5,
      name: "nike AIR SPAN II",
      price: "118,77",
      brand: {
        name: 'Nike',
        code: 'nike'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_SPAN_II-MIDNIGHT_NAVY_TOUR_YELLOW_BLACK-1.jpg"],
      sizes: []
    },
    {
      id: 6,
      name: "nike AIR MORE MONEY",
      price: "201,95",
      brand: {
        name: 'Nike',
        code: 'nike'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_MORE_MONEY-WHITE_BLACK_CORAL_CHALK_WHITE-1.jpg"],
      sizes: []
    },
    {
      id: 7,
      name: "nike AIR MAX 98 SE",
      price: "219,78",
      brand: {
        name: 'Nike',
        code: 'nike'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_MAX_98_SE-TEAM_RED_HABANERO_RED_GYM_RED_WHITE-1.jpg"],
      sizes: []
    },
    {
      id: 8,
      name: "nike LeBron XV Low",
      price: "178,19",
      brand: {
        name: 'Nike',
        code: 'nike'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/nike-LeBron_XV_Low-MULTI_COLOR_UNIVERSITY_RED_BLACK_WHITE-1.jpg"],
      sizes: []
    },
    {
      id: 9,
      name: "asics GEL-MAI",
      price: "108,12",
      brand: {
        name: 'Asics',
        code: 'asics'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_MAI-MARZIPAN_MARZIPAN-1.jpg"],
      sizes: []
    },
    {
      id: 10,
      name: "asics GEL-DS TRAINER OG",
      price: "116,44",
      brand: {
        name: 'Asics',
        code: 'asics'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_DS_TRAINER_OG-SKYWAY_SKYWAY-1.jpg"],
      sizes: []
    },
    {
      id: 11,
      name: "asics GEL KAYANO TRAINER KNIT LO Unisex",
      price: "116,44",
      brand: {
        name: 'Asics',
        code: 'asics'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_KAYANO_TRAINER_KNIT_LO_Unisex-AGAVE_GREEN_AGAVE_GREEN-1.jpg"],
      sizes: []
    },
    {
      id: 12,
      name: "asics GEL-KYN TRNR EV",
      price: "85,55",
      brand: {
        name: 'Asics',
        code: 'asics'
      },
      images: ["https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_KYN_TRNR_EV-GECKO_GREEN_GUAVA-1.jpg"],
      sizes: [45]
    }
  ]

  products.forEach(product => {
    delete product['id'];
    product.price = Number(product.price.replace(',', '.'))
  });

  var data = [{
    model: 'Product',
    documents: products
  }]
}