import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'БУКЕТ СБОРНЫЙ',
      price: 3500,
      quantity: 1,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/dacfd75e-a6dd-4016-a712-a02524e0cffa.jpg',
    },
    {
      id: 2,
      name: 'ХИТЫ ВЕСНЫ',
      price: 4200,
      quantity: 1,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/97178c1b-d7c4-4730-b080-f47bcb4964b9.jpg',
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 3000 ? 0 : 500;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <Icon name="ShoppingBag" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-light mb-4">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте букеты из каталога</p>
            <Button asChild className="rounded-full">
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center italic">
              КОРЗИНА
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-medium mb-2">{item.name}</h3>
                        <p className="text-lg font-medium mb-3">{item.price.toLocaleString()} ₽</p>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Icon name="Trash2" size={16} className="mr-1" />
                            Удалить
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-medium text-lg">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">Итого</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                      <span>{subtotal.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                        {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                      </span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between text-lg font-medium mb-6">
                    <span>Всего</span>
                    <span>{total.toLocaleString()} ₽</span>
                  </div>

                  {deliveryFee > 0 && (
                    <div className="bg-accent/20 p-3 rounded-lg mb-4 text-sm text-center">
                      До бесплатной доставки осталось {(3000 - subtotal).toLocaleString()} ₽
                    </div>
                  )}

                  <div className="space-y-3 mb-4">
                    <div>
                      <Label htmlFor="promo">Промокод</Label>
                      <div className="flex gap-2 mt-2">
                        <Input id="promo" placeholder="Введите промокод" />
                        <Button variant="outline">OK</Button>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full rounded-full" size="lg">
                    Оформить заказ
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с условиями доставки и оплаты
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
