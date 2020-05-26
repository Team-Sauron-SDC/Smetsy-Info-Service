const Cassandra = require('../../DB/Cassandra.js');

exports.getColors = ((req, res) => {
  Cassandra.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

exports.getProduct = ((req, res) => {
  Cassandra.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

exports.getShop = ((req, res) => {
  Cassandra.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data.rows);
    }
  });
});
