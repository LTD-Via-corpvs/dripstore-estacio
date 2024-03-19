import { FilterType, OrderType } from '@/components/ProductsStore/types'

export const footerIcons = [
  { src: 'facebook.svg', alt: 'Facebook' },
  { src: 'instagram.svg', alt: 'Instagram' },
  { src: 'twitter.svg', alt: 'Twitter' },
]

export const footerLinks = [
  {
    title: 'Informação',
    links: [
      { name: 'Sobre Drip Store', link: '' },
      { name: 'Segurança', link: '' },
      { name: 'Wishlist', link: '' },
      { name: 'Blog', link: '' },
      { name: 'Trabalhe conosco', link: '' },
      { name: 'Meus pedidos', link: '' },
    ],
  },
  {
    title: 'Categorias',
    links: [
      { name: 'Camisetas', link: '' },
      { name: 'Calças', link: '' },
      { name: 'Bonés', link: '' },
      { name: 'Headphones', link: '' },
      { name: 'Tênis', link: '' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { name: 'Endereço: CDT na Anhanguera', link: '' },
      { name: 'Telefone: 4002-8922', link: '' },
    ],
  },
]

export const filterProduct: FilterType[] = [
  {
    title: 'Marca',
    options: ['Adiddas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'],
    multipleOptions: true,
  },
  {
    title: 'Categoria',
    options: ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'],
    multipleOptions: true,
  },
  {
    title: 'Gênero',
    options: ['Masculino', 'Feminino', 'Unisex'],
    multipleOptions: false,
  },
  {
    title: 'Estado',
    options: ['Novo', 'Usado'],
    multipleOptions: false,
  },
]

export const OrderObject: OrderType = {
  m_r: 'Mais relevantes',
  p_c: 'Por categoria',
}
