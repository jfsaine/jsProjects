require('dotenv').config();
const fetch = require('node-fetch');
const nodemailer = require('nodemailer');

// Notification levels
const notificationLevels = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];

// Object to keep track of notification dates for each level
const lastNotificationDate = {};

// Variable to keep track of the last checked price
let lastCheckedPrice = null;

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: parseInt(process.env.MAILTRAP_PORT, 10),
  secure: false,  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Function to send email notifications
async function sendNotification(email, symbol, price) {
  let mailOptions = {
    from: '"Stock Alert" <from@example.com>',
    to: email,
    subject: `Stock Alert for ${symbol}`,
    text: `The stock price of ${symbol} has reached ${price}`,
    html: `<strong>The stock price of ${symbol} has reached ${price}</strong>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return;
    }
    console.log('Notification sent: %s', info.messageId);
  });
}

// Function to get the last two stock price data points from Alpha Vantage
async function getStockPrices(symbol) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    const timeSeries = data['Time Series (5min)'];
    const timeKeys = Object.keys(timeSeries);
    const latestTime = timeKeys[0];  // Most recent data point
    const previousTime = timeKeys[1]; // Second most recent data point
    const latestData = timeSeries[latestTime];
    const previousData = timeSeries[previousTime];
    const latestPrice = parseFloat(latestData['4. close']); // Parse the latest price to a number
    const previousPrice = parseFloat(previousData['4. close']); // Parse the previous price to a number
    
    return { current: latestPrice, previous: previousPrice };
  } catch (error) {
    console.error('Error fetching stock prices:', error);
  }
}

async function checkAndNotify(symbol, email) {
  const prices = await getStockPrices(symbol);  // Assume this function is modified to fetch the last two data points
  const currentPrice = prices.current;
  const previousPrice = prices.previous;
  const today = new Date().toISOString().slice(0, 10); // Format as 'YYYY-MM-DD'

  if (currentPrice !== undefined && previousPrice !== undefined) {
      let notificationSent = false;
      for (let level of notificationLevels) {
          // Check if the previous price was below the level and current is above
          if (previousPrice < level && currentPrice >= level && lastNotificationDate[level] !== today) {
              await sendNotification(email, symbol, currentPrice);
              lastNotificationDate[level] = today;
              notificationSent = true;
              break;  // Stop the loop after sending a notification for the crossed threshold
          }
      }

      // If a notification was sent, break out of the function
      if (notificationSent) return;
  }
}

// Invoke the checkAndNotify function with your stock symbol and email
checkAndNotify('TSLA', 'your_email@example.com');

