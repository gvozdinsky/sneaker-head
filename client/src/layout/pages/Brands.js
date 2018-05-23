import React, { Component } from 'react';

class Brands extends Component {
  renderBrands = () => {
    const brands = [
      {
        name: 'New Balance',
        examples: [
          {
            name: "new balance ML574 D",
            price: "99.95",
            photo: "https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML574_D-EGO_OLIVE-1.jpg"
          },
          {
            name: "new balance ML574",
            price: "94,95",
            photo: "https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML574-ESA_NIMBUS_CLOUD-1.jpg"
          },
          {
            name: "new balance ML840 D",
            price: "109,95",
            photo: "https://kickz.akamaized.net/en/media/images/p/600/new_balance-ML840_D-BD_STONE_GREY-1.jpg"
          },
          {
            name: "new balance MRL247",
            price: "83,99",
            photo: "https://kickz.akamaized.net/en/media/images/p/600/new_balance-MRL247-LN_NAVY-1.jpg"
          }
        ]
      },
      {
        name: 'Nike',
        examples: [
          {
            name: "nike AIR SPAN II",
            price: "118,77",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_SPAN_II-MIDNIGHT_NAVY_TOUR_YELLOW_BLACK-1.jpg"
          },
          {
            name: "nike AIR MORE MONEY",
            price: "201,95",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_MORE_MONEY-WHITE_BLACK_CORAL_CHALK_WHITE-1.jpg"
          },
          {
            name: "nike AIR MAX 98 SE",
            price: "219,78",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/nike-AIR_MAX_98_SE-TEAM_RED_HABANERO_RED_GYM_RED_WHITE-1.jpg"
          },
          {
            name: "nike LeBron XV Low",
            price: "178,19",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/nike-LeBron_XV_Low-MULTI_COLOR_UNIVERSITY_RED_BLACK_WHITE-1.jpg"
          }
        ]
      },
      {
        name: 'Asics',
        examples: [
          {
            name: "asics GEL-MAI",
            price: "108,12",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_MAI-MARZIPAN_MARZIPAN-1.jpg"
          },
          {
            name: "asics GEL-DS TRAINER OG",
            price: "116,44",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_DS_TRAINER_OG-SKYWAY_SKYWAY-1.jpg"
          },
          {
            name: "asics GEL KAYANO TRAINER KNIT LO Unisex",
            price: "116,44",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_KAYANO_TRAINER_KNIT_LO_Unisex-AGAVE_GREEN_AGAVE_GREEN-1.jpg"
          },
          {
            name: "asics GEL-KYN TRNR EV",
            price: "85,55",
            photo: "https://kickz.akamaized.net/us/media/images/p/600/asics-GEL_KYN_TRNR_EV-GECKO_GREEN_GUAVA-1.jpg"
          }
        ]
      }
    ];

    return brands.map(brand => {
      return (
        <div className="brand">
          <div className="header">
            <h2>{brand.name}</h2>
            <div className="more">
              show more
          </div>
          </div>
          <div className="examples">
            {brand.examples.map(example => {
              return (
                <div className="example">
                  <img src={example.photo} alt="" className="photo" />
                  <h3>{example.name}</h3>
                  <p className="price">{example.price}$</p>
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="page brands">
        {this.renderBrands()}
      </div>
    );
  }
}

export default Brands;