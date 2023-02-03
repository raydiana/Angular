import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Julissa',
    description: '',
    date: dateToday,
    author: 'Paul',
    major : 'Informatique'
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    author: 'Anakin',
    major : 'Maths'
  },
];
