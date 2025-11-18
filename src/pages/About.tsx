import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-center italic">
              О НАС
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-light tracking-wide mb-6 italic">Цветы Души</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Мы создаем букеты, которые дарят радость и делают особенными самые важные моменты в жизни.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша команда флористов с многолетним опытом работает с лучшими цветами, 
                которые мы получаем напрямую от проверенных поставщиков. Каждый букет создается 
                с любовью и вниманием к деталям, чтобы подарить вам настоящее эстетическое удовольствие.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                    <Icon name="Award" size={32} className="text-foreground" />
                  </div>
                  <h3 className="font-medium mb-2 tracking-wide">ОПЫТ</h3>
                  <p className="text-sm text-muted-foreground">Более 10 лет создаем букеты для особых моментов</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                    <Icon name="Sparkles" size={32} className="text-foreground" />
                  </div>
                  <h3 className="font-medium mb-2 tracking-wide">КАЧЕСТВО</h3>
                  <p className="text-sm text-muted-foreground">Только свежие цветы от проверенных поставщиков</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/30 p-4 rounded-full inline-block mb-4">
                    <Icon name="Users" size={32} className="text-foreground" />
                  </div>
                  <h3 className="font-medium mb-2 tracking-wide">КОМАНДА</h3>
                  <p className="text-sm text-muted-foreground">Профессиональные флористы и дизайнеры</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-light tracking-wide mb-6 text-center">Наши ценности</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Check" size={20} className="text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Свежесть</h3>
                    <p className="text-sm text-muted-foreground">
                      Мы обновляем наш ассортимент каждый день и работаем только со свежими цветами
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Check" size={20} className="text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Индивидуальность</h3>
                    <p className="text-sm text-muted-foreground">
                      Каждый букет создается с учетом пожеланий клиента и особенности момента
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Check" size={20} className="text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Забота</h3>
                    <p className="text-sm text-muted-foreground">
                      Мы внимательно относимся к каждому заказу и стараемся превзойти ожидания
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Check" size={20} className="text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Креативность</h3>
                    <p className="text-sm text-muted-foreground">
                      Наши флористы постоянно следят за трендами и создают уникальные композиции
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-light tracking-wide mb-4">Присоединяйтесь к нам</h2>
              <p className="text-muted-foreground mb-6">
                Следите за нашими новинками и специальными предложениями в социальных сетях
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                  <Icon name="Instagram" size={24} />
                </button>
                <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                  <Icon name="Facebook" size={24} />
                </button>
                <button className="bg-muted hover:bg-accent/30 p-3 rounded-full transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
