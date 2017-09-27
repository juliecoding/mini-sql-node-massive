module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, imageurl } = req.body;

    dbInstance.create_product([name, description, price, imageurl])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product([req.params.id])
      .then( product => res.status(200).send( product ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product([req.params.id, req.query.desc])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product([req.params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};


// module.exports = {
//   masterFunc: function(req, res, next, cb) {
//     const dbInstance = req.app.get('db');
//     dbInstance[cb]()
//       .then( result => res.status(200).send(result) )
//       .catch( error => res.status(500).send(error) );
//   },
//   create: this.masterFunc(req, res, next, )
// }
