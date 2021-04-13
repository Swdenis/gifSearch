const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(
      `CREATE TABLE gifs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url text
            )`,
      (err) => {
        if (err) {
          // Table already created
        }
      },
    );
  }
});

module.exports = db;
