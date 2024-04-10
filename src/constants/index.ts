import { FooterIcon, FooterLink } from '@/components/FooterStore/types'
import { FilterObject } from '@/components/ProductsStore/types'

export const footerIcons: FooterIcon[] = [
  { src: 'facebook.svg', alt: 'Facebook' },
  { src: 'instagram.svg', alt: 'Instagram' },
  { src: 'twitter.svg', alt: 'Twitter' },
]

export const footerLinks: FooterLink[] = [
  {
    title: 'Informação',
    links: [
      { name: 'Sobre Drip Store', link: '#' },
      { name: 'Segurança', link: '#' },
      { name: 'Wishlist', link: '#' },
      { name: 'Blog', link: '#' },
      { name: 'Trabalhe conosco', link: '#' },
      { name: 'Meus pedidos', link: '#' },
    ],
  },
  {
    title: 'Categorias',
    links: [
      { name: 'Camisetas', link: '#' },
      { name: 'Calças', link: '#' },
      { name: 'Bonés', link: '#' },
      { name: 'Headphones', link: '#' },
      { name: 'Tênis', link: '#' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { name: 'Endereço: CDT na Anhanguera', link: '#' },
      { name: 'Telefone: 4002-8922', link: '#' },
    ],
  },
]

export const filterProduct: FilterObject[] = [
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
