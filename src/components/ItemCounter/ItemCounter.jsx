import React from "react"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
export default function ItemCounter() {
  const [count, setCount] = React.useState(1)
  const stock = 5

  React.useEffect(() => {
    if(count !== 1) {
      toast.info(`${count} Items Selected`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  },[count])

  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  
    const onSubmit = () => {
    toast.success(`${count} Items were added to cart`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
    
  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="stock-button" onClick={() => handleOnClick()}>{text}</Button>;
  };

  const AddButton = ({handleOnSubmit}) => {
    return <Button className="btn add-button" onClick={() => handleOnSubmit()}>Añadir al carrito</Button>;
  };

  return (
    <div className="add-button-container">
      <StockButton text="-" handleOnClick={onDecrease}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
      <AddButton handleOnSubmit={onSubmit} />
    </div>
  );
}