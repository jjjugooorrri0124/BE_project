const User = require("../models/User");

const axios = require("axios");

const resolvers = {
  getExchangeRate: async ({ src, tgt }) => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${src}`);
      const rate = response.data.rates[tgt]; 
      const date = response.data.date;
      
      return {  
        src: src,
        tgt: tgt,
        rate: rate,
        date: date
      };
    } catch (error) {
      console.error(`Error fetching exchange rate:`, error);
      return {
        src: src,
        tgt: tgt,
        rate: 0,
        date: 'Unknown'
      };
    }
  },

  postExchangeRate: ({ info }) => {
    return {
      src: info.src,
      tgt: info.tgt,
      rate: info.rate,
      date: info.date || '2024-12-01'  // 날짜 기본값 설정
    };
  },

  deleteExchangeRate: ({ info }) => {
    return {
      src: info.src,
      tgt: info.tgt,
      rate: 0,
      date: info.date
    };
  }
};

module.exports = resolvers;

      
