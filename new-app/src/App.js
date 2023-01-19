import { useState } from 'react';
import ProductList from './component/ProductList';
import mockupData from './data.json';


function App() {
  // 최신/best
  const [order,setOrder] = useState('date');
  // items정렬
  const [items,setItems] = useState(mockupData);

  const sortItems = items.sort((a,b)=> b[order]-a[order]);
  const NewClick = () => setOrder('date')
  const BestClick = () => setOrder('rating')
  const DeleteItem = (id) => {
  const NextItem = items.filter((item)=> item.id !== id);
  setItems(NextItem);
  }

  return (
    <div id="wrap">
      <div className="btn">
        <button type="button" onClick={NewClick}>최신순</button>
        <button type="button" onClick={BestClick}>베스트순</button>
      </div>
      <ProductList items={sortItems} onDelete={DeleteItem}/>
      
    </div>
  );
}

export default App;
