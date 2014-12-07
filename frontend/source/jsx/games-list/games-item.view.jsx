module.exports = function () {
  return (
    <tr>
      <td>{this.getTitle()}</td>
      <td>{this.getStatus()}</td>
      <td>{this.getPlayers()}</td>
      <td>{this.getRoom()}</td>
      <td>{this.getTags()}</td>
      <td>{this.getFlags()}</td>
      <td>{this.getJoinButton()}</td>
    </tr>
  );
};
