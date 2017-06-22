module.exports = (o, ...props) => (
  props.reduce((result, name) => ((result[name] = o[name]) && result), {})
)
