const root = document.getElementById('root');

//const element = React.createElement('div',{className:'text',children:'hello kk'});
export const Person = ({ firstName, lastName = 'kumar' }) => {
  return (
    <div>
      hello {firstName} {lastName}
    </div>
  );
};

// const PropTypes = {
//   string(props, propNames, componentName) {
//     if (typeof props[propNames] !== 'string') {
//       return new Error(
//         `Hey Component ${componentName} has ${propNames} which accept string value but you are passing  value ${props[propNames]} `
//       );
//     }
//   },
// };

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

console.log(Person.propTypes);

const element = <Person firstName={false} />;

ReactDOM.render(element, root);
