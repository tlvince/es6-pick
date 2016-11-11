module.exports = (o, ...props) => (
  Object.assign({}, ...props.map(prop => ({[prop]: o[prop]})))
)
