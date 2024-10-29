
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export const usePayloadValidator = (instituicoes: Ref<string[] | undefined>) => {


  const { values, defineField, errors } = useForm({
    validationSchema: yup.object({
      nome: yup.string()
        .min(2, 'O nome deve ter pelo menos duas palavras')
        .matches(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, 'O nome deve seguir o formato Nome Sobrenome')
        .required('O nome deve ser informado')
        .default(undefined),
      email: yup.string()
        .email('o email deve ser válido')
        .required('O email deve ser informado')
        .default(undefined),
      telefone: yup.string()
        .required('O telefone é obrigatório')
        .default(undefined)
        .matches(
          /^\(?(?:\d{2})?\)?\s?(?:(9|1)?[0-9]{4}\-?[0-9]{4})$/,
          'Formato de telefone inválido. Exemplos: (XX) XXXXX-XXXX'
        ),
      instituicao: yup.string()
        .required('A instituição é obrigatória')
        .oneOf(instituicoes.value || [], 'A instituição deve existir.')
        .default('')
    }),
  });
  const [email] = defineField('email', { validateOnBlur: true });
  const [nome] = defineField('nome');
  const [telefone] = defineField('telefone');
  const [instituicao] = defineField('instituicao');

  return {
    email, nome, telefone, instituicao, values, errors
  }
}
