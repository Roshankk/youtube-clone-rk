
// const options = {
  //   method: 'GET',
  //   BASE_URL: 'https://youtube-v2.p.rapidapi.com/video/details',
  //   params: {
//     video_id: 'PuQFESk0BrA'
//   },
//   headers: {
//     'X-RapidAPI-Key': '90ae83d875msh34a6bdb9b16964cp14bef8jsn821da6840f77',
//     'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
//   }
// };

// export const fetchDataFromApi = async (url) => {
  //   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  //   return data;
  // };
  
  
  
  // -----------------------------------------------------------------------------------
  
  import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
 
  params: {
   
    
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export const fetchDataFromApi = async(url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`,options)
  return data;
}
// -----------------------------------------------------------------------------
// import axios from 'axios';

// const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

// export const fetchDataFromApi = async (query) => {
//   const options = {
//     method: 'GET',
//     url: `${BASE_URL}/youtube-search/`,
//     params: { q: query },
//     headers: {
//       'X-RapidAPI-Key': '90ae83d875msh34a6bdb9b16964cp14bef8jsn821da6840f77',
//       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data from the API.');
//   }
// };

 

// import axios from 'axios';

// const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';

// const options = {
//   params: {id: 'dQw4w9WgXcQ'},
//   headers: {
//     'X-RapidAPI-Key': '90ae83d875msh34a6bdb9b16964cp14bef8jsn821da6840f77',
//     'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//   }
// };

// export const fetchDataFromApi = async () => {
//   try {
//     const response = await axios.get('/video/details', {
//       baseURL: BASE_URL,
//       ...options
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data from the API.');
//   }
// };
// import axios from 'axios';

// const BASE_URL = 'https://youtube138.p.rapidapi.com';

// export const fetchDataFromApi = async () => {
//   const options = {
//     method: 'GET',
//     url: `${BASE_URL}/video`,
//     params: {
//       q: 'desp',
//       hl: 'en',
//       gl: 'US'
//     },
//     headers: {
//       'x-rapidapi-key': process.env,REACT_APP_YOUTUBE_API_KEY,
//       'x-rapidapi-host': 'youtube138.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data from the API.');
//   }
// };


// params: {id: 'dQw4w9WgXcQ'},