import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
export const formatDate = (date: Date) => {
  const formatedDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    /*@ts-expect-error import error*/
    locale: ptBR,
  });

  return formatedDate;
};
