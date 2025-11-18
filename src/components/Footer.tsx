import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flower2" size={20} className="text-foreground" />
              <span className="text-lg font-light tracking-wider">ЦВЕТЫ ДУШЫ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Цветы, которые делают вас счастливее
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 tracking-wide">КАТАЛОГ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">Все букеты</Link></li>
              <li><Link to="/catalog?category=seasonal" className="text-muted-foreground hover:text-foreground transition-colors">Сезонные</Link></li>
              <li><Link to="/catalog?category=designer" className="text-muted-foreground hover:text-foreground transition-colors">Дизайнерские</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 tracking-wide">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/delivery" className="text-muted-foreground hover:text-foreground transition-colors">Оплата и доставка</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 tracking-wide">КОНТАКТЫ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@flowers.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Цветочная, 10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Цветы Души. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
