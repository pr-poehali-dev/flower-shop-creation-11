import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Catalog = () => {
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: 'БУКЕТ СБОРНЫЙ',
      description: 'Соберем букет по вашим предпочтениям',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/dacfd75e-a6dd-4016-a712-a02524e0cffa.jpg',
      category: 'custom'
    },
    {
      id: 2,
      name: 'ХИТЫ ВЕСНЫ',
      description: 'Свежие тюльпаны и ранункулюсы',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/97178c1b-d7c4-4730-b080-f47bcb4964b9.jpg',
      category: 'seasonal'
    },
    {
      id: 3,
      name: 'ДИЗАЙНЕРСКИЙ',
      description: 'Топовый флорист соберет букет для вас',
      price: 5800,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/4b1b6778-d3e8-4002-b4a0-3864e1366273.jpg',
      category: 'designer'
    },
    {
      id: 4,
      name: 'НЕЖНОСТЬ',
      description: 'Пастельные розы и эвкалипт',
      price: 3900,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/dacfd75e-a6dd-4016-a712-a02524e0cffa.jpg',
      category: 'seasonal'
    },
    {
      id: 5,
      name: 'ВЕСЕННИЙ ДЕНЬ',
      description: 'Тюльпаны и гиацинты',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/97178c1b-d7c4-4730-b080-f47bcb4964b9.jpg',
      category: 'seasonal'
    },
    {
      id: 6,
      name: 'ЭКЗОТИКА',
      description: 'Орхидеи и протеи',
      price: 6500,
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/4b1b6778-d3e8-4002-b4a0-3864e1366273.jpg',
      category: 'designer'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center italic">
              КАТАЛОГ
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="rounded-full">Все</Button>
              <Button variant="ghost" size="sm" className="rounded-full">Сезонные</Button>
              <Button variant="ghost" size="sm" className="rounded-full">Дизайнерские</Button>
              <Button variant="ghost" size="sm" className="rounded-full">На заказ</Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Сортировка:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] rounded-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="new">Новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Icon name="Heart" size={18} className="text-foreground" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium tracking-wide mb-1 text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{product.price.toLocaleString()} ₽</span>
                  </div>
                  <Button className="w-full rounded-full" size="sm">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
