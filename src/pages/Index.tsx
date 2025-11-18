import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'БУКЕТ СБОРНЫЙ',
      description: 'Соберем букет по вашим предпочтениям',
      price: '3 500',
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/dacfd75e-a6dd-4016-a712-a02524e0cffa.jpg',
    },
    {
      id: 2,
      name: 'ХИТЫ ВЕСНЫ',
      description: 'Свежие тюльпаны и ранункулюсы',
      price: '4 200',
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/97178c1b-d7c4-4730-b080-f47bcb4964b9.jpg',
    },
    {
      id: 3,
      name: 'ДИЗАЙНЕРСКИЙ',
      description: 'Топовый флорист соберет букет для вас',
      price: '5 800',
      image: 'https://cdn.poehali.dev/projects/e5fb2c95-8b68-4415-8d22-754451e6f980/files/4b1b6778-d3e8-4002-b4a0-3864e1366273.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section 
          className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/files/6354cb98-37f1-480e-b3f2-bf267ff2b5bf.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6 italic">ЦВЕТЫ,</h1>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
              КОТОРЫЕ ДЕЛАЮТ ВАС СЧАСТЛИВЕЕ
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white/90 text-foreground hover:bg-white rounded-full px-8 tracking-wide"
            >
              <Link to="/catalog">перейти в каталог</Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-center mb-12 italic">
            ХИТЫ ВЕСНЫ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Icon name="Heart" size={20} className="text-foreground" />
                  </button>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-medium tracking-wide mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{product.price} ₽</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Подробнее
                    </Button>
                  </div>
                  <Button className="w-full mt-3 rounded-full">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-accent/30 p-4 rounded-full mb-4">
                  <Icon name="Truck" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">ДОСТАВКА</h3>
                <p className="text-sm text-muted-foreground">Бесплатная доставка<br/>от 3000 ₽</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-accent/30 p-4 rounded-full mb-4">
                  <Icon name="Sparkles" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">СВЕЖЕСТЬ</h3>
                <p className="text-sm text-muted-foreground">Только свежие цветы<br/>каждый день</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-accent/30 p-4 rounded-full mb-4">
                  <Icon name="Heart" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">ЗАБОТА</h3>
                <p className="text-sm text-muted-foreground">Индивидуальный подход<br/>к каждому букету</p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://cdn.poehali.dev/files/6354cb98-37f1-480e-b3f2-bf267ff2b5bf.jpg)`,
            backgroundPosition: 'center 70%'
          }}
        >
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest mb-4 italic">КРЕАТИВЩИК</h2>
            <p className="text-lg mb-6 tracking-wide">Необычные букеты от наших флористов</p>
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground rounded-full px-8"
            >
              <Link to="/catalog?category=creative">Смотреть</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;