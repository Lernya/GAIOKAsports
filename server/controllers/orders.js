import pool from '../db/index.js';  // Dateiendung .js muss bei Express hinzugefügt werden, wenn nicht automatisch übertragen!

//ALLE DATEN VON DER DATENBANK (all data from orders)
export const getAllOrders = async (req, res, next) => {
    try {
      const result = await pool.query(
        `SELECT * 
        FROM gaioka_orders 
        WHERE order_note1 NOT LIKE 'DBTest%'`
      
      );
      res.json(result.rows);
    } catch (error) {
      // console.log("crud:", error.stack); //Diese Error-Function wird duch die errorHandler-MW ersetzt.
      // res.status(500).json({ message: "something broke" }); //Diese Error-Function wird durch die errorHandler-MW ersetzt.
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };


  export const getOrderById = async (req, res, next) => {
    try {
      const {id} = req.params; 
      const result = await pool.query("SELECT * FROM gaioka_orders WHERE order_id = $1", [id]);
      res.json(result.rows[0]);
    } catch (error) {
      // console.log("crud:", error.stack); //Diese Error-Function wird duch die errorHandler-MW ersetzt.
      // res.status(500).json({ message: "something broke" }); //Diese Error-Function wird durch die errorHandler-MW ersetzt.
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };




  export const addNewOrder = async (req, res, next) => {
    const { order_note1, products, userid, total} = req.body;
    // const {id} = req.params; 
    try {
      const result = await pool.query(
        "INSERT INTO gaioka_orders (order_note1, products, userid, total) VALUES ($1, $2, $3, $4) RETURNING *", [order_note1, products, userid, total]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      next(error); 
    }
  };

  export const updateOrder = async (req, res, next) => {
    const { id } = req.params;
    const {
      order_note1, 
      products, 
      userid, 
      total
      } = req.body;
    try {
      const result = await pool.query(
        "UPDATE gaioka_orders SET order_note1 = $1, products = $2, userid = $3, total = $4 WHERE order_id = $5 RETURNING *",
        [
          order_note1, 
          products, 
          userid, 
          total,
          id
        ]
      );
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };


export const deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM gaioka_orders WHERE order_id = $1", [id]);
    res.json({ message: `Order with the Order ID ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};


   
  // 
  // controllers/users.js       SQL
  // routers/usersRouter.js     Unterrouten usersRouter.route('/').get(getAllUsers)...;
  // (server) index.js          Hauptroute app.use("/users", usersRouter);