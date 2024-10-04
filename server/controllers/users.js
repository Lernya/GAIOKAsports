import pool from "../db/index.js";  // Dateiendung .js muss bei Express hinzugefügt werden, wenn nicht automatisch übertragen!

//ALLE DATEN VON DER DATENBANK (all data from users)
export const getAllUsers = async (req, res, next) => {
    try {
      const result = await pool.query("SELECT * FROM gaioka_users");
      res.json(result.rows);
    } catch (error) {
      // console.log("crud:", error.stack); //Diese Error-Function wird duch die errorHandler-MW ersetzt.
      // res.status(500).json({ message: "something broke" }); //Diese Error-Function wird durch die errorHandler-MW ersetzt.
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };