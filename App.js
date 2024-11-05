import React from "react";
import ReactDOM from 'react-dom/client';

/**
 * -Header
 *  -logo
 *  -nav-items
 * -Body
 *  -Search
 *  -Reastuarant card container
 *  reastuarant card
 * -Footer
 *  -copyright
 *  -Address
 *  -links
 *  -Other details
 */

const ResuartCard= (props)=>{
    const {resData}= props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        cuisines,
        areaName} = resData?.info;
    return ( 
        <div className="card">
            <img className="card-image" 
            alt="card-image" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"  + 
             cloudinaryImageId 
            }/>
            <h3>{name}</h3>
            <p>{avgRating} stars</p>
            <p>{resData.info.sla.deliveryTime} minutes</p>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{areaName}</h5>
            
        </div>
    )
}

const resLists= [
    {
        type:"restaurant",
        "info": {
          "id": "315524",
          "name": "Hotel Chanus",
          "cloudinaryImageId": "ez2hw5boxmircsgrgzjk",
          "locality": "Pallimukku",
          "areaName": "Pallimukku",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kerala",
            "South Indian",
            "Indian",
            "Chinese",
            "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "98527",
          "avgRatingString": "4.2",
          "totalRatingsString": "7.6K+",
          "promoted": true,
          "adTrackingId": "cid=20662012~p=0~adgrpid=20662012#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=315524~eid=338320c9-d435-4085-b85c-1639e3079ffe~srvts=1730767441547~collid=45995",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "8.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.4",
              "ratingCount": "530"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "20662012"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=315524",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        type:"restaurant",
        "info": {
          "id": "447055",
          "name": "Sree Muruga Cafe",
          "cloudinaryImageId": "vdm0mf0nwe3st0zhz9ap",
          "locality": "Poonithura",
          "areaName": "Thripunithura",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian",
            "Biryani",
            "Kerala"
          ],
          "avgRating": 4.6,
          "parentId": "193175",
          "avgRatingString": "4.6",
          "totalRatingsString": "6.2K+",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 10.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "10.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 22:45:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=447055",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        type:"restaurant",
        "info": {
          "id": "974944",
          "name": "AFC Kochi",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/27/20e2e08d-d65a-4474-b948-41d5725c7c44_974944 (1).jpg",
          "locality": "Panampilly Nagar",
          "areaName": "Panampilly Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Burgers",
            "sandwich",
            "Rolls & Wraps",
            "American"
          ],
          "avgRating": 4.8,
          "parentId": "573875",
          "avgRatingString": "4.8",
          "totalRatingsString": "6",
          "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 8.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹150",
            "discountTag": "SAVE BIG"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=974944",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        type:"restaurant",
        "info": {
          "id": "306721",
          "name": "Cafe Durbar AFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/10/36dafcce-f6f0-43fc-b5ae-c1310855d43c_306721 (1).jpg",
          "locality": "Dh Road",
          "areaName": "Pallimuku",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "sandwich",
            "Continental",
            "Fast Food"
          ],
          "avgRating": 4.5,
          "parentId": "52993",
          "avgRatingString": "4.5",
          "totalRatingsString": "2.8K+",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 8.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 08:45:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹150",
            "discountTag": "SAVE BIG"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.7",
              "ratingCount": "268"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=306721",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        type:"restaurant",
        "info": {
          "id": "73531",
          "name": "Cafe Coffee Day",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/6beaba3a-2378-4480-91b7-c23c1fae215c_73531.jpg",
          "locality": "Elamakkara",
          "areaName": "Elamkulam",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Burgers",
            "Ice Cream",
            "Bakery",
            "Fast Food"
          ],
          "avgRating": 4.4,
          "parentId": "1",
          "avgRatingString": "4.4",
          "totalRatingsString": "4.0K+",
          "promoted": true,
          "adTrackingId": "cid=20710453~p=1~adgrpid=20710453#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=73531~eid=15042e34-d543-4648-80af-71afaa2c012d~srvts=1730767441547~collid=45995",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 11.9,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "11.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-12 00:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.0",
              "ratingCount": "1.5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "20710453"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=73531",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        type:"restaurant",
        "info": {
          "id": "717400",
          "name": "Chennai Thatte Idlli",
          "cloudinaryImageId": "de8b6847fff563ccc94d811167608608",
          "locality": "Sudhanivas Udayanagar",
          "areaName": "Kaloor",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4.5,
          "parentId": "427834",
          "avgRatingString": "4.5",
          "totalRatingsString": "406",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 11.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 21:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=717400",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "315524",
          "name": "Hotel Chanus",
          "cloudinaryImageId": "ez2hw5boxmircsgrgzjk",
          "locality": "Pallimukku",
          "areaName": "Pallimukku",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kerala",
            "South Indian",
            "Indian",
            "Chinese",
            "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "98527",
          "avgRatingString": "4.2",
          "totalRatingsString": "7.6K+",
          "promoted": true,
          "adTrackingId": "cid=20662012~p=1~adgrpid=20662012#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=315524~eid=80ad84ed-0c39-477c-804b-a7b553cabe91~srvts=1730768407999~collid=45995",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "8.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.4",
              "ratingCount": "530"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "20662012"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=315524",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "115412",
          "name": "Hotel lakshmi Nivas",
          "cloudinaryImageId": "a534131b1b22ec1f24d4122ffb6a2ac3",
          "locality": "Raja Park",
          "areaName": "Tripunithura",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chinese"
          ],
          "avgRating": 4.7,
          "parentId": "99900",
          "avgRatingString": "4.7",
          "totalRatingsString": "27K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 21:40:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "1.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=115412",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "921090",
          "name": "Chappathi Point",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/af3c8603-75a1-46f5-b41d-dcb41f96aa90_921090.JPG",
          "locality": "Gandhi Nagar",
          "areaName": "Kaloor",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kerala",
            "South Indian",
            "Fast Food"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "535350",
          "avgRatingString": "4.6",
          "totalRatingsString": "7",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 9.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "9.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 22:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=921090",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "61719",
          "name": "Sukumar Food Court",
          "cloudinaryImageId": "srdxda6dqqyzn6u5xkf7",
          "locality": "Tripunithura",
          "areaName": "Tripunithura",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "South Indian",
            "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "20875",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.6K+",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 13.8,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "13.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-11-05 22:30:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "5.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=61719",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      }
]

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://dynamic.brandcrowd.com/asset/logo/de2f1188-627e-4b67-a8c3-1a2fc17d783e/logo-search-grid-1x?logoTemplateVersion=1&v=637859534604530000" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body= () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-cardcontainer">
                {
                    resLists.map((restaurant=> <ResuartCard  key={restaurant.info.id} resData={restaurant}/>))
                } 
                
            </div>
        </div>
    )
}
const AppLayout= ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);