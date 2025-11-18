import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const location = useLocation();
  const cartItemsCount = 0;

  const navLinks = [
    { to: '/catalog', label: 'КАТАЛОГ' },
    { to: '/delivery', label: 'ОПЛАТА И ДОСТАВКА' },
    { to: '/about', label: 'О НАС' },
    { to: '/contacts', label: 'КОНТАКТЫ' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Flower2" size={24} className="text-foreground" />
            <span className="text-xl font-light tracking-wider text-foreground">ЦВЕТЫ ДУШЫ</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <Icon name="ShoppingBag" size={22} className="text-foreground" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
