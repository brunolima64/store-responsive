import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import * as C from './styles';
import { ProductType } from './type/ProductType';
import { ProductList } from './data/ProductsList';
import { Products } from './components/Products';
import { Categories } from './components/Categories';
import { CartModal } from './components/CartModal';
import { CategoryType } from './type/CategoryType';
import { ContextListCart } from './contexts/CartContext';
import { Step1 } from './components/Form/Step1';
import { Step2 } from './components/Form/Step2';
import { Step3 } from './components/Form/Step3';

export const App = () => {
    const cartCtx = useContext(ContextListCart);

    const [list, setList] = useState<ProductType[]>(ProductList);
    const [FilteredCat, setFilteredCat] = useState<ProductType[]>([]);

    const [showCart, setShowCart] = useState(false);
    const [category, setCategory] = useState<CategoryType>('phone');

    const [priceTotal, setPriceTotal] = useState(0);

    
    const [showForm, setShowForm] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(()=>{
        setList(list);//apenas para o vercel parar de reclamar;
        
        const filterCategories = () => {
            let filterCat = list.filter((item) => item.category === category);
            setFilteredCat(filterCat);
        }
        filterCategories();
    }, [category]);


    const handleAddItem = (item: ProductType) => {
        const verification = cartCtx?.listCart.find((it) => it.id === item.id);

        if(verification) return false;

        if(cartCtx?.listCart) {
            const newList = [...cartCtx?.listCart];
            newList.push(item);
            cartCtx?.setListCart(newList);
            setPriceTotal(priceTotal + item.price);
        }
    }

    const handleMinus = (item: ProductType) => {
        if(cartCtx?.listCart && item.qt === 1) {
            let newQt = cartCtx?.listCart.filter((it)=> it.id !== item.id );
            setPriceTotal(priceTotal - item.price);
            cartCtx?.setListCart(newQt);
        }

        if(cartCtx?.listCart && item.qt > 1) {
            let newQt = [...cartCtx?.listCart]
            newQt.map((it) => it.id === item.id ? it.qt -= 1 : false);
            setPriceTotal(priceTotal - item.price);
            cartCtx?.setListCart(newQt);
        }
    }

    const handlePlus = (item: ProductType) => {
            if(cartCtx?.listCart) {
                let newQt = [...cartCtx?.listCart];
                newQt.map((it)=> {
                    if(it.id === item.id) {
                        it.qt += 1;
                        setPriceTotal(priceTotal + item.price);
                    }
                });
                cartCtx?.setListCart(newQt);
            }
    }

    return (
        <C.PageContainer>
            <Header setShowCart={()=>setShowCart(!showCart)} />
            {showCart &&
                <CartModal 
                    setShowCart={()=>setShowCart(!showCart)} 
                    showCart={showCart}
                    priceTotal={priceTotal}
                    handleMinus={handleMinus}
                    handlePlus={handlePlus}
                    setShowForm={setShowForm}
                />
            }

            <C.Container>
                <C.Content>
                    <div className='categories'>
                        <Categories title="Smartphones" image="../assets/images/galaxy-z-fold5.webp" setCategory={()=>setCategory('phone')} />
                        <Categories title="Tablets" image="../assets/images/galaxy-capa-teclado.avif" setCategory={()=>setCategory('tablet')}/>
                        <Categories title="Notebooks" image="../assets/images/book2-windowns.avif" setCategory={()=>setCategory('notebook')}/>
                    </div>
                    {FilteredCat !== null &&
                        <div className='products'>
                            {FilteredCat.map((item) => (
                                <Products key={item.id} item={item} handleAddItem={() => handleAddItem(item)}/>
                            ))}
                        </div>
                    }

                {showForm &&
                    <>
                        <C.FormModal></C.FormModal>
                        
                        <C.FormModalArea>
                            {currentStep === 1 &&
                                <Step1 setCurrentStep={setCurrentStep}  setShowForm={setShowForm} />
                            }
                            {currentStep === 2 &&
                                <Step2 setCurrentStep={setCurrentStep}  setShowForm={setShowForm}/>
                            }
                            {currentStep === 3 &&
                                <Step3 setCurrentStep={setCurrentStep}  setShowForm={setShowForm}/>
                            }
                        </C.FormModalArea>
                    </>
                }
                
                </C.Content>
 
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}

export default App;