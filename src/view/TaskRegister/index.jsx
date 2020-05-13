import React, { useState, useCallback } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import icons from "../../utils/typeIcons";
import * as S from "./styles";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "../../service/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Task() {
  const history = useHistory();
  const [type, setType] = useState(null);
  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      check: false,
    },

    validationSchema: yup.object({
      title: yup.string().required("Preenchimento do titulo e obrigatorio"),
      description: yup
        .string()
        .required("Preenchimento da descricao e obrigatorio"),
      date: yup.string().required("Preenchimento da data e obrigatorio"),
      time: yup.string().required("Preenchimento da hora e obrigatorio"),
    }),
    onSubmit: async (values) => {
      const data = {
        macaddress: "11:11:11:11:11:11",
        type: type,
        title: values.title,
        description: values.description,
        when: `${values.date}T${values.time}:00.000`,
        check: false,
      };

      try {
        await axios.post("/", data);
        alert("cadastro realizado");
        history.push("/");
      } catch (error) {
        toast.error("Falha ao realizar cadastro");
        console.log(error);
      }
    },
  });

  const validationFomr = useCallback(() => {
    if (errors.title) {
      return toast.error(errors.title);
    } else if (errors.description) {
      return toast.error(errors.description);
    } else if (errors.date) {
      return toast.error(errors.date);
    } else if (errors.time) {
      return toast.error(errors.time);
    } else if (type == null) {
      toast.error("Selecione a categoria da sua tarefa");
    }
  }, [errors, type]);

  return (
    <S.Container>
      <Header onListLate={() => history.push("/")} />
      <Footer />
      <S.FormContainer onSubmit={handleSubmit}>
        <S.DivIcons>
          {icons.map(
            (elemnt, index) =>
              index > 0 && (
                <button
                  key={index}
                  type="button"
                  onClick={() => setType(index)}
                >
                  <img
                    src={elemnt}
                    alt="icons"
                    className={type && type !== index && "inative"}
                  />
                </button>
              )
          )}
        </S.DivIcons>
        <S.divFomr>
          <S.divTitleInput>
            <h3>Titulo</h3>
            <input type="text" autoFocus {...getFieldProps("title")} />
          </S.divTitleInput>

          <S.divDescriptionInput>
            <h3>Descricao</h3>
            <textarea {...getFieldProps("description")} />
          </S.divDescriptionInput>

          <S.divDateTimeInput>
            <h3>Data</h3>

            <input type="date" {...getFieldProps("date")} />
          </S.divDateTimeInput>

          <S.divDateTimeInput>
            <h3>Hora</h3>

            <input type="time" {...getFieldProps("time")} />
          </S.divDateTimeInput>

          <S.divButtonsInput>
            <div>
              <input type="checkbox" {...getFieldProps("check")} />
              <h3>Concluido</h3>
            </div>
            <button type="button">Excluir</button>
          </S.divButtonsInput>
        </S.divFomr>
        <button className="button" type="submit" onClick={validationFomr}>
          Salvar
        </button>
      </S.FormContainer>
    </S.Container>
  );
}
