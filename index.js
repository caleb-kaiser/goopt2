//require('dotenv').config()
const express = require('express');
const app = express();
//const URI = process.env.MONGO_URI;
//const {MongoClient} = require('mongodb');
//const client = new MongoClient(URI, { useUnifiedTopology: true});
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

const quotes = [
{
"text": "We asked a few talented healers to share their most effective ritual for removing pain: yoga.",
"ml": true
},
{
"text": "The auric fields decide what will or will not enter our chakras, body, and mind.",
"ml": false
},
{
"text": "Ask to receive all the energies from all the Gods and Goddesses and other beings.",
"ml": true
},
{
"text": "Anyone can learn to read the Akashic records because it is a history of our souls.",
"ml": false
},
{
"text": "Let’s look at the number seven, which is the most powerful mind-body energy.",
"ml": true
},
{
"text": "The ordered intelligence sends messages to the person based on the universal meaning of these numbers.",
"ml": false
},
{
"text": "The waning moon is a time of great energy and renewal.",
"ml": true
},
{
"text": "The full moon will cleanse and activate your crystals.",
"ml": false
},
{
"text": "Ancient civilizations used crystals as a medium to communicate with other living beings.",
"ml": true
},
{
"text": "Black tourmaline is like your personal energetic bodyguard",
"ml": false
},
{
"text": "Science supports the use of meditation and yoga to address the stress response and alleviate many chronic diseases.",
"ml": true
},
{
"text": "Astrology lends vivid description to what makes you, you.",
"ml": false
},
{
"text": "As a dual practitioner of psychology and meditation, I’ve found that the most effective way to remain consistent with my practice is to practice just two hours a day.",
"ml": true
},
{
"text": "And having tapped into the deep subconscious of so many cultures, her own mind is filled with meditations, chants, prayers, and symbols for any number of energetic maladies.",
"ml": false
},
{
"text": "It refers to the divine essence and intention (aka “Mystical Intentions”) that guides all of us.",
"ml": true
},
{
"text": "We all have spiritual guides, which can include angels, the deceased, power animals, the souls of plants, or fairy beings, among others.",
"ml": false
},
{
"text": "Mercury is the planetary ruler of all life’s origins, and many natural processes are maintained by this principle.",
"ml": true
},
{
"text": "Mercury in Scorpio is great for visualisation and using your mental energy to break through blockages.",
"ml": false
},
{
"text": "Traditional Chinese medicine (TCM) says that some people can detect the endocrine system (including adrenal, thyroid, and esophagus) and reproductive system (including the pancreas, the endometrium, and the uterus) through urine.",
"ml": true
},
{
"text": "You can think of herbs as a whole-foods version of the stuff we might take as medication.",
"ml": false
}
]

app.get('/api/pull', (req, res) => {
  res.json(quotes)
})

/*app.get('/api/pull', (req, res) => {
  client.connect().then(client => {
    const db = client.db('goopt2');
    db.collection('quotes').find({ }, {projection:{_id: 0}}).toArray().then(results => {
      res.json(results);
    });
  }).catch(err => {
    console.log(err);
  });
});*/

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
 });

app.listen(8080, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('api is running on 8080');
  }
});
