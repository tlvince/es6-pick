module.exports = (o, ...props) => (
  props.reduce((result, name) => { 
    result[name] = obj[name]; 
    return result;
  }, {});
)
