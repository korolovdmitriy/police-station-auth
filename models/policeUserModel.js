const client = require("./db-connect");

class policeUserModel {
  async findUserByEmail(email) {
    const query = `SELECT id FROM police.authorization WHERE email = '${email}' ALLOW FILTERING`;
    const result = await client.execute(query);
    return result.rows;
  }

  async createUser(email, password) {
    const query = `INSERT INTO police.authorization (id, email, password, role) VALUES (now(), '${email}', '${password}', 'user')`;
    return await client.execute(query);
  }
}

module.exports = new policeUserModel();
