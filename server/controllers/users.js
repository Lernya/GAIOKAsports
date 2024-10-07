import pool from '../db/index.js';  // Dateiendung .js muss bei Express hinzugefügt werden, wenn nicht automatisch übertragen!

//ALLE DATEN VON DER DATENBANK (all data from users)
export const getAllUsers = async (req, res, next) => {
    try {
      const result = await pool.query('SELECT * FROM gaioka_users');
      res.json(result.rows);
    } catch (error) {
      // console.log("crud:", error.stack); //Diese Error-Function wird duch die errorHandler-MW ersetzt.
      // res.status(500).json({ message: "something broke" }); //Diese Error-Function wird durch die errorHandler-MW ersetzt.
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };


  export const getUserById = async (req, res, next) => {
    try {
      const {id} = req.params; 
      // const result = await pool.query(`SELECT * FROM gaioka_users WHERE user_id = ${id}`);
      // Syntax mit besserer Absicherung gegen SQL-Injection; $1 ist Platzhalter für das, was wir einfügen wollen
      const result = await pool.query(`SELECT * FROM gaioka_users WHERE user_id = $1, [id]`);
      res.json(result.rows[0]);
    } catch (error) {
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };


  export const addNewUser = async (req, res, next) => {
    try {
      const { user_displayname, loginname, password, user_note1} = req.body;
      const {id} = req.params; 
      const result = await pool.query(
        `INSERT INTO users (loginname, user_displayname, password, user_note1) 
        VALUES ($1, $2, $3, $4)
        RETURNING *`, [user_displayname, loginname, password, user_note1]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      next(error); // Hier wird die errorHandler-MW aufgerufen!
    }
  };
   