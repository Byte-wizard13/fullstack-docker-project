const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/', (req, res) => {
  // कनेक्शन प्रत्येक वेळेस रिक्वेस्ट आल्यावर तयार करूया जेणेकरून क्रॅश होणार नाही
  const db = mysql.createConnection({
    host: 'db_container',
    user: 'root',
    password: 'maza_secret_password',
    database: 'mazi_test_db'
  });

  db.connect((err) => {
    if (err) {
      res.send(`<h1>❌ डेटाबेस अजून तयार होत आहे, कृपया ५ सेकंदांनी पेज रिफ्रेश करा!</h1><p>${err.message}</p>`);
    } else {
      res.send('<h1>🚀 प्रोजेक्ट ४: Node.js आणि MySQL डेटाबेस डॉकरद्वारे यशस्वीरित्या कनेक्ट झाले आहेत! 🎉</h1>');
      db.end(); // कनेक्शन बंद करा
    }
  });
});

app.listen(3000, () => console.log('App running on port 3000'));