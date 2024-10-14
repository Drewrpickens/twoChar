import React from 'react';
import styles from './Menu.module.css';

const MenuItem = ({ name, description, price, addon }) => (
  <div className={styles.menuItem}>
    <div className={styles.menuItemHeader}>
      <h3 className={styles.menuItemName}>{name}</h3>
      <span className={styles.menuItemPrice}>{price}</span>
    </div>
    <p className={styles.menuItemDescription}>{description}</p>
    {addon && <p className={styles.menuItemAddon}>{addon}</p>}
  </div>
);

const MenuSection = ({ title, items }) => (
  <section className={styles.menuSection}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.menuItems}>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </section>
);

const Menu = () => {
  const appetizers = [
    { name: "Chips and Salsa", description: "Our fresh, homemade salsa with warm tortilla chips", price: "$4.99", addon: "Add queso ... $5.99!" },
    { name: "Fried Appetizer Platter", description: "Choice of Mushrooms, Zucchini, Mozzarella Planks, or Spinach Artichoke Sticks. Served with ranch or marinara", price: "$8.99" },
    { name: "Bleu Cheese Chips", description: "Homemade potato chips topped with queso, fresh jalapeños, tomatoes and bleu cheese crumbles", price: "$8.99", addon: "Add chicken or carnitas for $9.99" },
    { name: "Cheese Fries", description: "Crispy fries covered in melted cheese, jalapeños and bacon, served with ranch", price: "$8.99", addon: "Sub tots for a buck!!!" },
    { name: "Nachos", description: "Warm tortilla chips, black beans, melted cheese, lettuce, tomato, onion, jalapeños and sour cream, with salsa", price: "$8.99", addon: "Add chicken or carnitas $9.99. Add crispy buffalo chicken $11.99. Add guac for a buck!" },
    { name: "Buffalo Wings", description: "10 bone-in or boneless wings with ranch or bleu cheese. Mild, Hot, Flamin' Hot, BBQ, Garlic Parmesan, Sweet and Spicy, Spicy Garlic or Lemon Pepper", price: "$13.99" },
    { name: "Elote", description: "Mexican style street corn topped with mayonnaise, sour creme and Valentina salsa", price: "$6.99" },
  ];

  const salads = [
    { name: "Grilled Chicken Salad", description: "Grilled chicken, romaine, tomatoes, red onion, mushrooms, bacon, shredded cheese, croutons and choice of dressing", price: "$8.99" },
    { name: "Chicken Caesar Salad", description: "Grilled chicken, romaine, parmesan and croutons tossed in Caesar dressing", price: "$8.99" },
    { name: "Chicken Tender Salad", description: "Crispy chicken tenders, romaine, tomatoes, mushrooms, red onion, bacon, shredded cheese and croutons", price: "$8.99" },
    { name: "Soup & Salad", description: "House salad or house Caesar with a bowl of the soup of the day", price: "$8.99" },
  ];

  const burgersAndSandwiches = [
    { name: "The 2 Chuck's Burger", description: "Plain and simple. Mayo, mustard, LTO and pickles on a toasted Kaiser", price: "$8.99" },
    { name: "The 2 Chuck's Cheeseburger", description: "Swiss, American or cheddar on toasted Kaiser, with mayo, mustard, LTO and pickles", price: "$9.49" },
    { name: "Bacon Cheeseburger", description: "Bacon and cheddar cheese on a toasted Kaiser, with mayo, mustard, LTO and pickles", price: "$9.99" },
    { name: "Black and Bleu Burger", description: "Blackened, topped with bacon and bleu cheese crumbles on a toasted Kaiser roll", price: "$9.99" },
    { name: "Jalapeño Burger", description: "With jalapeños and American cheese on a toasted Kaiser roll", price: "$9.99" },
    { name: "Mushroom Swiss Burger", description: "With sautéed mushrooms and melted Swiss on a toasted Kaiser roll", price: "$9.99" },
    { name: "Chicken Sandwich", description: "Grilled or blackened with Swiss, bacon, LTO, mayo on a toasted Kaiser with pickles", price: "$9.49" },
    { name: "Philly", description: "Rib-eye, carnitas or chicken, Swiss or mozzarella, bell pepper, onions, mushrooms and jalapeños on a toasted hoagie", price: "$9.99" },
    { name: "French Dip", description: "Roast beef and Swiss on a toasted hoagie, served with au jus", price: "$8.99" },
    { name: "2 Chuck's Grilled Cheese", description: "Crisp bacon and tomatoes, smothered with Swiss and American cheese on toasted white bread", price: "$8.99" },
  ];

  const pizzas = [
    { name: "Plain Cheese", price: "$7.99" },
    { name: "Pepperoni, Mushroom & Sausage", price: "$9.99" },
    { name: "Buffalo Chicken Pizza", price: "$10.99" },
    { name: "Philly Pizza", description: "Ribeye, mushrooms, onions and bell pepper", price: "$10.99" },
  ];

  const specialties = [
    { name: "Chicken Tenders", description: "Crispy chicken tenders, served with French fries and dipping sauce", price: "$9.49" },
    { name: "Fish n' Chips", description: "2 beer battered cod filets served with French fries and tartar sauce", price: "$11.99" },
    { name: "Veggie Quesadilla", description: "Black beans and melted cheese in a crispy tortilla with sour cream and salsa", price: "$8.99", addon: "Add chicken or carnitas ... $9.99" },
    { name: "2 Chuck's BLT", description: "Bacon, lettuce, tomato, mayo, American cheese and two fried eggs on a toasted hoagie", price: "$9.99" },
    { name: "Street Tacos", description: "3 corn tortillas with shaved rib eye, chicken or carnitas, red onion, cilantro and feta cheese. Served with black beans, chips and salsa", price: "$9.99" },
    { name: "Corn Dog Basket", description: "Served with French fries", price: "5 BUCKS!" },
  ];

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Our Menu</h1>
      <MenuSection title="Appetizers" items={appetizers} />
      <MenuSection title="Salads" items={salads} />
      <MenuSection title="Burgers & Sandwiches" items={burgersAndSandwiches} />
      <MenuSection title="Pizzas" items={pizzas} />
      <MenuSection title="Specialties" items={specialties} />
    </div>
  );
};

export default Menu;