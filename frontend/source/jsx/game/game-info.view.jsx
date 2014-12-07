module.exports = function () {
  var type = this.getRoomName();
  var flags = this.getFlags().map(function (flag) {
    var className = flag + ' flag';
    return (<i className={className}></i>);
  });
  var tags = '[' + this.getTags().join(', ') + ']';

  return (
    <div>
      <p>Type: {type}</p>
      <p>Countries: {flags}</p>
      <p>Topic: {tags}</p>
    </div>
  );
};
