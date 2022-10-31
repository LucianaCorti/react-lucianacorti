import { createContext, useState, useEffect } from "react"
import Swal from "sweetalert2";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  }
)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
   }, [cart]) 

  useEffect(() => {
    const total = getTotal()
    setTotal(total)
  }, [cart]) 


  const addItem = (productToAdd, quantity) => {
    if(!isInCart(productToAdd.id)) {
      productToAdd.quantity = quantity
        setCart([...cart, productToAdd])
    } else {
      Swal.fire('Ya está en el carrito!')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutItem)
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Producto eliminado",
    });
  }

  const getQuantity = () => {
    let accu = 0
    cart.forEach(prod => {
      accu += prod.quantity
    })
    return accu
  }

const getTotal = () => {
    let accu = 0
    cart.forEach(prod => {
      accu += prod.quantity * prod.price
    })

    return accu
}


  const clear = () => {
    setCart([])
  }

  return(
    <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, total, totalQuantity, clear}}>
      {children}
    </CartContext.Provider>  
    )
}

export default CartProvider