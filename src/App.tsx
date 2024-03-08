import './App.css';
import { addCollection, Icon, IconifyJSON } from '@iconify/react';
import cjetJson from './cjet.json';

addCollection(cjetJson);

const icons = Object.entries(cjetJson.cn).map(([key, value]) => {
  return {
    name: key,
    icon: value,
  };
});

function App() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen justify-center">
      <div className="overflow-auto p-10 text-3 text-orange-600 bg-light-800" contentEditable>
        <pre>
          <code>{JSON.stringify(cjetJson, null, 2)}</code>
        </pre>
      </div>
      <div className="bg-dark-100 text-white text-center">
        <h1 className="shadow shadow-b-light-800 p-2 m-0">{cjetJson.info.name}</h1>
        <div className="items-center justify-center text-12 pt-8 flex gap-4">
          {icons.map((icon) => {
            const iconKey = `${cjetJson.prefix}:${icon.icon}`;
            return (
              <div className="flex flex-col items-center justify-center gap-2 ring rounded p-4" title={iconKey}>
                <Icon key={iconKey} icon={iconKey} mode="style"/>
                {/* <div className="text-3"> {icon.icon} </div> */}
                {/* <div className="text-3"> {iconKey} </div> */}
                <div className="text-3"> {icon.name} </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
