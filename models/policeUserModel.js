const client = require("./db-connect");

class policeUserModel {
  async findUserByEmail(email) {
    const query = `SELECT * FROM police.authorization WHERE email = '${email}'`;
    const result = await client.execute(query);
    return result.rows;
  }

  async createUser(email, password) {
    const query = `INSERT INTO police.authorization (email, password) VALUES ('${email}', '${password}', 'user')`;
    return await client.execute(query);
  }
}

module.exports = new policeUserModel();
