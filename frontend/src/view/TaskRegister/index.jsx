import React, { useState, useCallback, useEffect } from "react";
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
import { format } from "date-fns";
import isConnetcted from "../../utils/isConnected";

export default function Task({ match }) {
  
  const history = useHistory();

  const [type, setType] = useState(null);
  
  const { getFieldProps, handleSubmit, errors, setValues } = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      done: false,
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
        done: values.done,
        macaddress: "11:11:11:11:11:11",
        type: type,
        title: values.title,
        description: values.description,
        when: `${values.date}T${values.time}:00.000`,
      };

      try {
        if (match.params.id) {
          await axios.put(`/${match.params.id}`, data);
          alert("Tarefa atualizada com sucesso");
          history.push("/");
        } else {
          await axios.post("/", data);
          alert("cadastro realizado");
          history.push("/");
        }
      } catch (error) {
        toast.error("Falha ao realizar cadastro");
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (!isConnetcted) {
      history.push("/qrcode")
    }
  }, [history]);

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

  const loadTaskDetails = useCallback(async () => {
    if (!match.params.id) {
      return null;
    }
    const daTa = await axios.get(`/${match.params.id}`);
    const date = format(new Date(daTa.data.when), "yyyy-MM-dd");
    const time = format(new Date(daTa.data.when), "HH:mm");
    
    setType(daTa.data.type);
    setValues({
      title: daTa.data.title,
      description: daTa.data.description,
      time: time,
      date: date,
      done: daTa.data.done,
    });
    
    
  }, [match, setValues]);

  useEffect(() => {
    loadTaskDetails();
  }, [loadTaskDetails]);
  
  
  const handleDelete = useCallback(async () => {
    try {
      if (window.confirm("Deseja deletar a tarefa")) {
        await axios.delete(`/${match.params.id}`);
        alert("Tarefa excluida");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("nao foi possivel excluir a tarefa");
    }
  }, [match, history]);
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
                    className={type && type !== index ? "inative" : null}
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
            {match.params.id && (
              <div>
                <input
                  type="checkbox"
                  {...getFieldProps("done")}
                  checked={getFieldProps("done").value}
                />
                <h3>Concluido</h3>
              </div>
            )}{" "}
            {match.params.id && (
              <button type="button" onClick={handleDelete}>
                Excluir
              </button>
            )}
          </S.divButtonsInput>
        </S.divFomr>
        <button className="button" type="submit" onClick={validationFomr}>
          Salvar
        </button>
      </S.FormContainer>
    </S.Container>
  );
}
