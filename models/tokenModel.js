const client = require("./db-connect");

class TokenModel {
  async findTokenByUserId(id) {
    const query = `SELECT * FROM police.userTokens WHERE id = ${id}`;
    const result = await client.execute(query);
    return result.rows;
  }

  async saveUserToken(id, refreshToken) {
    const query = `INSERT INTO police.userTokens (id, refreshToken) VALUES (${id}, '${refreshToken}')`;
    return await client.execute(query);
  }

  async resaveUserToken(id, refreshToken) {
    const query = `UPDATE police.userToken SET refreshTokens = '${refreshToken}' WHERE id = ${id}`;
    return await client.execute(query);
  }
}

module.exports = new TokenModel();
