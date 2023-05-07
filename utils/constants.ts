export const headerLinks = [
  {
    id: 'products',
    name: 'The Play Kits',
    href: '/products',
  },
  {
    id: 'about',
    name: 'About Us',
    href: '/about',
  },
  {
    id: 'user',
    name: 'Sign In',
    href: '/',
  },
  {
    id: 'cart',
    name: 'Cart',
    href: '/cart',
  },
];

export const footerLinks = [
  {
    id: 'learn',
    header: 'Learn More',
    links: [
      { href: '/', text: 'Our Story' },
      { href: '/', text: 'Blog' },
      { href: '/', text: 'Sustainability' },
      { href: '/', text: 'Reviews' },
      { href: '/', text: 'Research' },
      { href: '/', text: 'Recent Press' },
      { href: '/', text: 'Careers' },
      { href: '/', text: 'Refer a Friend' },
      { href: '/', text: 'Affiliate Program' },
      { href: '/', text: 'Land Acknowledgement' },
      { href: '/', text: 'Patents' },
    ],
  },
  {
    id: 'products',
    header: 'Our Products',
    links: [
      { href: '/', text: 'The Play Kits' },
      { href: '/', text: 'The Play Gym' },
      { href: '/', text: 'The Block Set' },
      { href: '/', text: 'The Montessori Shelf' },
      { href: '/', text: 'Book Bundles' },
      { href: '/', text: 'Shop All' },
      { href: '/', text: 'Montessori-Inspired Toys' },
      { href: '/', text: 'Baby Developmental Toys' },
      { href: '/', text: 'Subscriber Shop' },
      { href: '/', text: 'Courses' },
    ],
  },
  {
    id: 'gifting',
    header: 'Gifting/Registry',
    links: [
      { href: '/', text: 'Gift Lovevery' },
      { href: '/', text: 'Find Lovevery Registry' },
      { href: '/', text: 'Babylist Registry' },
      { href: '/', text: 'Activate Babylist Gift' },
    ],
  },
  {
    id: 'help',
    header: 'Support',
    links: [
      { href: '/', text: 'Contact Us' },
      { href: '/', text: 'Help & FAQs' },
      { href: '/', text: 'Disability Support' },
      { href: '/', text: 'Returns & Exchanges' },
      { href: '/', text: 'Offers & Discounts' },
      { href: '/', text: 'Product Recalls' },
      { href: '/', text: 'Store Locator' },
      { href: '/', text: 'Press Inquiries' },
    ],
  },
  {
    id: 'podcast',
    header: 'My New Life™ Podcast',
    links: [
      {
        href: 'https://podcasts.apple.com/us/podcast/my-new-life/id1560530165',
        text: 'Apple Podcasts',
        isNewTab: true,
      },
      { href: 'https://open.spotify.com/show/2dn1n28UPjxSv4MzG1EYkl', text: 'Spotify', isNewTab: true },
      {
        href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80NjRiODcwNC9wb2RjYXN0L3Jzcw==',
        text: 'Google Podcasts',
        isNewTab: true,
      },
      {
        href: 'https://music.amazon.com/podcasts/4a4d18ec-4b4e-4a4e-af5c-cf99a83df5c5/my-new-life',
        text: 'Amazon Music',
        isNewTab: true,
      },
    ],
  },
  {
    id: 'app',
    header: 'Our App',
    links: [{ href: '/', text: 'The Lovevery App' }],
  },
];

export interface PlayKit {
  slug: string;
  name: string;
  age: string;
  description: {
    header: string;
    children: string[];
    footer: string;
  };
  price: number;
  productImage: string;
  images: string[];
  reviews: {
    rating: number;
    count: number;
  };
}

export const playKits: PlayKit[] = [
  {
    slug: 'the-looker',
    name: 'The Looker Play Kit',
    age: 'Weeks 0-12',
    description: {
      header: `Sensitive to light and sound, your newborn is already becoming aware of their new world. This Play Kit helps them build new brain connections with high-contrast images and black and white sensory mittens.`,
      children: ['Build new brain connections', 'Process new surroundings', 'Explore high-contrast images'],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/looker.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
  {
    slug: 'the-charmer',
    name: 'The Charmer Play Kit',
    age: 'Months 3-4',
    description: {
      header: `Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.`,
      children: [
        'Develop speech and oral motor strength',
        'Encourage social awareness',
        'Practice using both sides of the brain',
        'Make the most of tummy time',
      ],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/charmer.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
  {
    slug: 'the-senser',
    name: 'The Senser Play Kit',
    age: 'Months 5-6',
    description: {
      header: `Your baby may be tasting, mouthing, and feeling everything they can get their hands on right now. This Play Kit helps your baby investigate their world around them, while working on getting themself closer to what looks and sounds exciting to them.`,
      children: [
        'Develop language skills',
        'Strengthen coordination and dexterity',
        'Practice fine and gross motor skills',
        'Have fun with tummy time',
      ],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/senser.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
  {
    slug: 'the-inspector',
    name: 'The Inspector Play Kit',
    age: 'Months 7-8',
    description: {
      header: `Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.`,
      children: [
        'Develop speech and oral motor strength',
        'Encourage social awareness',
        'Practice using both sides of the brain',
        'Make the most of tummy time',
      ],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/inspector.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
  {
    slug: 'the-explorer',
    name: 'The Explorer Play Kit',
    age: 'Months 9-10',
    description: {
      header: `Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.`,
      children: [
        'Develop speech and oral motor strength',
        'Encourage social awareness',
        'Practice using both sides of the brain',
        'Make the most of tummy time',
      ],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/explorer.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
  {
    slug: 'the-thinker',
    name: 'The Thinker Play Kit',
    age: 'Months 11-12',
    description: {
      header: `Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.`,
      children: [
        'Develop speech and oral motor strength',
        'Encourage social awareness',
        'Practice using both sides of the brain',
        'Make the most of tummy time',
      ],
      footer: 'Ships every 2 months | $80 per Play Kit',
    },
    price: 80,
    productImage: '/products/thinker.jpeg',
    images: [
      '/products/carousel/1.jpeg',
      '/products/carousel/2.jpeg',
      '/products/carousel/3.jpeg',
      '/products/carousel/4.jpeg',
      '/products/carousel/5.jpeg',
    ],
    reviews: {
      rating: 5.0,
      count: 20,
    },
  },
];
