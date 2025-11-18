import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center italic">
              КОНТАКТЫ
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-6">Свяжитесь с нами</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/30 p-3 rounded-full">
                        <Icon name="Phone" size={24} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Телефон</h3>
                        <p className="text-muted-foreground mb-1">+7 (999) 123-45-67</p>
                        <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/30 p-3 rounded-full">
                        <Icon name="Mail" size={24} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Email</h3>
                        <p className="text-muted-foreground mb-1">info@flowers.ru</p>
                        <p className="text-sm text-muted-foreground">Ответим в течение 1 часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/30 p-3 rounded-full">
                        <Icon name="MapPin" size={24} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Адрес</h3>
                        <p className="text-muted-foreground mb-1">г. Москва, ул. Цветочная, д. 10</p>
                        <p className="text-sm text-muted-foreground">Метро Кузнецкий Мост</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/30 p-3 rounded-full">
                        <Icon name="Clock" size={24} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Режим работы</h3>
                        <p className="text-muted-foreground mb-1">Понедельник - Воскресенье</p>
                        <p className="text-sm text-muted-foreground">9:00 - 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-medium mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                    <Icon name="Instagram" size={24} />
                  </button>
                  <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                    <Icon name="Facebook" size={24} />
                  </button>
                  <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                    <Icon name="MessageCircle" size={24} />
                  </button>
                  <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                    <Icon name="Send" size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-6">Напишите нам</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (___) ___-__-__" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your@email.com" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Расскажите, чем мы можем вам помочь..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full rounded-full">
                      Отправить сообщение
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
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

export default Contacts;
