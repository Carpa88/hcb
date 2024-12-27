export const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
export const navigation = [
  { name: 'Пастухи Беларуси', href: '/' },
  { name: 'Гостиница для собак', href: '/hostel' },
  { name: 'Тренировки', href: '/practices' },
  { name: 'Соревнования', href: '/trial' },
  { name: 'Уроки', href: '/lessons' },
];
export const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export const initialState = (obj: Record<string, any[]>) => ({
  errors: obj,
  message: '',
});
