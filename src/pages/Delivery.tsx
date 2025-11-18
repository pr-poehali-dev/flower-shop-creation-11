import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center italic">
              ОПЛАТА И ДОСТАВКА
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                  <Icon name="Clock" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">БЫСТРАЯ ДОСТАВКА</h3>
                <p className="text-sm text-muted-foreground">Доставка в течение 1 часа по городу</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                  <Icon name="MapPin" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">ПО ВСЕМУ ГОРОДУ</h3>
                <p className="text-sm text-muted-foreground">Доставляем в любую точку г. Оренбурга</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                  <Icon name="Gift" size={32} className="text-foreground" />
                </div>
                <h3 className="font-medium mb-2 tracking-wide">БЕСПЛАТНО ОТ 3000₽</h3>
                <p className="text-sm text-muted-foreground">При заказе от 3000₽ доставка бесплатно</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light tracking-wide mb-6">Условия доставки</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="text-muted-foreground">В пределах МКАД</span>
                <span className="font-medium">500 ₽</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="text-muted-foreground">За МКАД (до 10 км)</span>
                <span className="font-medium">800 ₽</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="text-muted-foreground">За МКАД (более 10 км)</span>
                <span className="font-medium">50 ₽/км</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-accent/20 rounded-lg">
                <span className="font-medium">При заказе от 3000 ₽</span>
                <span className="font-medium text-green-600">Бесплатно</span>
              </div>
            </div>

            <h2 className="text-2xl font-light tracking-wide mb-6">Способы оплаты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="CreditCard" size={24} className="text-foreground mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Онлайн оплата</h3>
                      <p className="text-sm text-muted-foreground">Банковской картой на сайте</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Wallet" size={24} className="text-foreground mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">При получении</h3>
                      <p className="text-sm text-muted-foreground">Наличными или картой курьеру</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-light tracking-wide mb-6">Часто задаваемые вопросы</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как быстро вы доставите букет?</AccordionTrigger>
                <AccordionContent>
                  Стандартное время доставки составляет 2-3 часа с момента оформления заказа. 
                  Также доступна срочная доставка за дополнительную плату — в течение 1 часа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Можно ли заказать доставку на определенное время?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете указать желаемое время доставки при оформлении заказа. 
                  Мы постараемся доставить букет именно в указанное вами время.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Что делать, если получатель не на месте?</AccordionTrigger>
                <AccordionContent>
                  Наш курьер свяжется с получателем по указанному телефону. Если получатель 
                  не сможет принять заказ, мы согласуем с вами удобное время для повторной доставки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Можно ли отменить или изменить заказ?</AccordionTrigger>
                <AccordionContent>
                  Вы можете отменить или изменить заказ бесплатно, если букет еще не собран. 
                  Обычно это возможно в течение 1 часа после оформления заказа. 
                  Свяжитесь с нами по телефону для уточнения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;