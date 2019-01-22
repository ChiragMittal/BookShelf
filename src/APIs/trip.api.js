import axios from 'axios';

// var FluxCartActions = require('../Actions/fluxcartActions');



// module.exports = {

//     add_fav: function (id, name, lat, lng, address) {
//         // axios.post('/api/private/destination/add/tofav',{
//         //   name : name,
//         //   lat :  lat ,
//         //   lng :  lng,
//         //   address : address
//         // })
//         //   .then(function(response){
//         //          if(response.success == true)
//         //          {
//         //          	FluxCartActions.addToCart(id,name);
//         //          }
//         //          else
//         //          {

//         //          }
//         //   })

//         //   .catch(function(){

//         //   });
//     },

//     remove_fav: function (id, name) {
//         // axios.post('/api/private/destination/remove/fromfav',{
//         //   name : name,
//         //   id : id
//         // })
//         //   .then(function(){
//         //        if(response.success == true)
//         //          {
//         //          	FluxCartActions.removeFromCart(name);
//         //          }
//         //          else
//         //          {

//         //          }
//         //   })

//         //   .catch(function(){

//         //   });
//     },

//     load_fav: function (username, token) {
//         // axios.post('/api/private/plan/favorite/get',{
//         //   username : username,
//         //   token : token
//         // })
//         //   .then(function(response){
//         //   	          	if(response.success == true){
//         //   	          		(response.favorites).forEach(function(value){
//         //         	FluxCartActions.addToCart(value.id,value.name);
//         //         })
//         //   	          	}

//         //   })

//         //   .catch(function(){

//         //   });
//     },

//     // search_bar: function (query, callback) {
//     //     // axios.get('http://localhost:3000/api/destination/search/hot',{
//     //     //   params:{
//     //     //     query : query
//     //     //   }
//     //     // })
//     //     //   .then(function(response){
//     //     //    // alert()
//     //     //   	if('destinations' in response){
//     //     //   		 callback(response.destinations);
//     //     //   	}

//     //     //   })

//     //     //   .catch(function  (error){
//     //     //     console.log(error);
//     //     //   });

//     //     var languages = [
//     //         {
//     //             name: 'Mumbai'
//     //             //year: 1972
//     //         },
//     //         {
//     //             name: 'Goa'
//     //             //year: 2012
//     //         }

//     //     ];

//     //     // FluxCartActions.hotsearch_fetch(languages);
//     //     callback(languages);
//     // },

//     fetch_data: function (query) {
//         //    axios.get('http://localhost:3000/api/destination/search',{
//         //      params :{
//         //        query : query
//         //      }
//         //    })
//         //      .then(function(response){
//         //      	var destinations = [];
//         //            if(response.success == true){
//         //                   if(response.searchType == "gPlace"){
//         //                   		(response.destinations).map(function(value,index){
//         // 			destinations.push({lat: value.geometry.location.lat, lng: value.geometry.location.lng, name: value.name, description: value.formatted_address, image: null, inventory: 1});
//         // 		});

//         //                   }
//         //                   else  if(response.searchType == "db")
//         //                   {
//         // 		             destinations = response.destinations;
//         //                   }
//         //            	//sending marker data to MapStore
//         // FluxCartActions.receiveMap(destinations);
//         // FluxCartActions.receiveProduct(destinations);
//         //            }
//         //      })

//         //      .catch(function(error){
//         //        alert(error);

//         //      });

//         var response = [];


//         if (query == "Mumbai")
//             response = [
//                 {
//                     id: 1234,
//                     lat: 18.9220,
//                     lng: 72.8347,
//                     name: 'Gateway of India',
//                     description: 'Apollo Bhandar Colaba Mumbai Maharahstra,400001,India',
//                     image: 'download(4).jpg',
//                     inventory: 1
//                 },

//                 {
//                     id: 1235,
//                     lat: 18.9633,
//                     lng: 72.9315,
//                     name: 'Elephanta Caves',
//                     description: 'Gharapuri Maharahstra,400094,India',
//                     image: 'download(5).jpg',
//                     inventory: 1
//                 },

//                 {
//                     id: 1234,
//                     lat: 19.0169,
//                     lng: 72.8304,
//                     name: 'Siddhivinayak Temple',
//                     description: 'SK Bole Marg Prabhadevi Mumbai Maharahstra,400028,India',
//                     image: 'download(3).jpg',
//                     inventory: 1
//                 }
//             ];
//         else if (query == "Goa")
//             response = [
//                 {
//                     id: 123,
//                     lat: 15.2993,
//                     lng: 74.1239,
//                     name: 'Aguada Beach',
//                     image: 'download(2).jpg',
//                     description: 'North Goa',
//                     inventory: 1
//                 },

//                 {
//                     id: 124,
//                     lat: 15.6061,
//                     lng: 73.7364,
//                     name: 'Chapora Fort',
//                     image: 'download.jpg',
//                     description: 'Adarsh Nagar,Goa',
//                     inventory: 1
//                 },

//                 {
//                     id: 125,
//                     lat: 15.3144,
//                     lng: 74.3143,
//                     name: 'Dudhsagar Falls',
//                     image: 'download(1).jpg',
//                     description: 'sonuaulim,Goa',
//                     inventory: 1
//                 }
//             ];

//         var markers = [];
//         response.map(function (value, index) {
//             markers.push({ lat: value.lat, lng: value.lng, name: value.name });
//         });

//         //sending marker data to MapStore
//         // FluxCartActions.receiveMap(markers);

//         // FluxCartActions.receiveProduct(response);



//         //sending destination data to TripStore


//     }
// }

export const search_bar = (query) => {
    return new Promise((resolve, reject) => {
        // axios.get('http://localhost:3000/api/destination/search/hot',{
        //   params:{
        //     query : query
        //   }
        // })
        //   .then(function(response){
        //    // alert()
        //   	if('destinations' in response){
        //   		 callback(response.destinations);
        //   	}

        //   })

        //   .catch(function  (error){
        //     console.log(error);
        //   });


        resolve({
            success: true,
            languages: [
                {
                    name: 'Mumbai'
                    //year: 1972
                },
                {
                    name: 'Goa'
                    //year: 2012
                }

            ]
        })
    })
}

export const fetch_data = (query) => {
    return new Promise((resolve, reject) => {
        //    axios.get('http://localhost:3000/api/destination/search',{
        //      params :{
        //        query : query
        //      }
        //    })
        //      .then(function(response){
        //      	var destinations = [];
        //            if(response.success == true){
        //                   if(response.searchType == "gPlace"){
        //                   		(response.destinations).map(function(value,index){
        // 			destinations.push({lat: value.geometry.location.lat, lng: value.geometry.location.lng, name: value.name, description: value.formatted_address, image: null, inventory: 1});
        // 		});

        //                   }
        //                   else  if(response.searchType == "db")
        //                   {
        // 		             destinations = response.destinations;
        //                   }
        //            	//sending marker data to MapStore
        // FluxCartActions.receiveMap(destinations);
        // FluxCartActions.receiveProduct(destinations);
        //            }
        //      })

        //      .catch(function(error){
        //        alert(error);

        //      });
        var response = [];
        if (query == "Mumbai")
            response = [
                {
                    id: 1234,
                    lat: 18.9220,
                    lng: 72.8347,
                    name: 'Gateway of India',
                    description: 'Apollo Bhandar Colaba Mumbai Maharahstra,400001,India',
                    image: '../../assets/img/delhi3.jpg',
                    inventory: 1
                },

                {
                    id: 1235,
                    lat: 18.9633,
                    lng: 72.9315,
                    name: 'Elephanta Caves',
                    description: 'Gharapuri Maharahstra,400094,India',
                    image: 'download(5).jpg',
                    inventory: 1
                },

                {
                    id: 1234,
                    lat: 19.0169,
                    lng: 72.8304,
                    name: 'Siddhivinayak Temple',
                    description: 'SK Bole Marg Prabhadevi Mumbai Maharahstra,400028,India',
                    image: 'download(3).jpg',
                    inventory: 1
                }
            ];
        else if (query == "Goa")
            response = [
                {
                    id: 123,
                    lat: 15.2993,
                    lng: 74.1239,
                    name: 'Aguada Beach',
                    image: 'download(2).jpg',
                    description: 'North Goa',
                    inventory: 1
                },

                {
                    id: 124,
                    lat: 15.6061,
                    lng: 73.7364,
                    name: 'Chapora Fort',
                    image: 'download.jpg',
                    description: 'Adarsh Nagar,Goa',
                    inventory: 1
                },

                {
                    id: 125,
                    lat: 15.3144,
                    lng: 74.3143,
                    name: 'Dudhsagar Falls',
                    image: 'download(1).jpg',
                    description: 'sonuaulim,Goa',
                    inventory: 1
                }
            ];

        var markers = [];
        response.map(function (value, index) {
            markers.push({ lat: value.lat, lng: value.lng, name: value.name });
        });

        resolve({
            success: true,
            response: response,
            markers: markers
        })
    })
}
