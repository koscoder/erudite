module.exports = function (games) {
  return (
    <table className="ui sortable celled table">
      <thead>
        <tr>
          <th>Game</th>
          <th>Status</th>
          <th>Players #</th>
          <th>Type</th>
          <th>Topics</th>
          <th>Countries</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{games}</tbody>
    </table>
  );
};
