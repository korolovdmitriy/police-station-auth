const client = require("./db-connect");

class TokenModel {
  async findTokenByUserId(userId) {
    const query = `SELECT * FROM police.userToken WHERE userId = '${userId}'`;
    const result = await client.execute(query);
    return result.rows;
  }

  async saveUserToken(userId, refreshToken) {
    const query = `INSERT INTO police.userToken (userId, refreshToken) VALUES ('${userId}', '${refreshToken}')`;
    return await client.execute(query);
  }

  async resaveUserToken(userId, refreshToken) {
    const query = `UPDATE police.userToken SET refreshToken = '${refreshToken}' WHERE userId = '${userId}'`;
    return await client.execute(query);
  }
}

module.exports = new TokenModel();
