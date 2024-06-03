import * as yup from "yup";
export const errorEmail = yup.object().shape({
  nombre: yup.string().required("Campo nombre y apellido obligatorio"),
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  mensaje: yup.string().required("Campo mensaje obligatorio"),
});
