import React, {useState} from 'react';

const App = () =>{
  const [value, setValue] = useState('')

  const submit = () => {
    console.log('Ação para executar a mutation com o valor', value)
  }

  const onValueChange = e => setValue(e.target.value)

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onValueChange}
      />
      <button type="submit" onClick={submit}>eoasihe</button>
    </div>
  );
}

export default App;
