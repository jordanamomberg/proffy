import React, { FormEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import Input from "../../components/Inputs";
import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";

import * as S from "./styles";
import Select from "../../components/Select";
import api from "../../services/api";
import Errors from "../../components/Errors";

const TeacherList: React.FC = () => {
  const history = useHistory();

  const initialValues = {
    name: "",
    avatar: "",
    whatsapp: "",
    bio: "",
    subject: "",
    cost: "",
    scheduleItems: [
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("campo obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
    avatar: Yup.string().required("campo obrigatório").url(),
    whatsapp: Yup.string()
      .required("campo obrigatório")
      .test("teste", "Digite um número válido", (value) => {
        if (value !== undefined && value !== null) {
          const { length } = value.replace(/[^\d]+/g, "");
          return !(length > 11 || length < 10);
        }
        return false;
      }),
    bio: Yup.string().max(600, "Limite excedido"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (): void => {
      const response = api
        .post("classes", {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        })
        .then(() => {
          alert("Cadastro efetuado com sucesso");
          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro");
        });
      console.log({
        response,
      });
    },
  });

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem(): void {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent): void {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro efetuado com sucesso");
        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro");
      });
    console.log({ name, avatar, whatsapp, bio, subject, cost, scheduleItems });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  return (
    <S.Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      >
        <S.Main>
          <S.Form onSubmit={formik.handleSubmit}>
            <S.Fieldset>
              <S.Legend>Seus dados</S.Legend>
              <Input
                name="name"
                label="Nome Completo"
                value={formik.values.name}
                onChange={formik.handleChange}
              />

              {formik.errors.name && formik.touched.name && (
                <Errors>{formik.errors.name}</Errors>
              )}

              <Input
                name="avatar"
                label="Avatar"
                value={formik.values.avatar}
                onChange={formik.handleChange}
              />

              {formik.errors.avatar && formik.touched.avatar && (
                <Errors>{formik.errors.avatar}</Errors>
              )}

              <InputMask
                mask="(99) 9 9999-9999"
                value={formik.values.whatsapp}
                onChange={formik.handleChange}
              >
                {() => <Input name="whatsapp" label="WhatsApp" />}
              </InputMask>

              {formik.errors.whatsapp && formik.touched.whatsapp && (
                <Errors>{formik.errors.whatsapp}</Errors>
              )}

              <Textarea
                name="bio"
                label="Biografia"
                value={formik.values.bio}
                onChange={formik.handleChange}
              />
            </S.Fieldset>

            <S.Fieldset>
              <S.Legend>Sobre a aula</S.Legend>
              <Select
                name="subject"
                label="Matéria"
                value={formik.values.subject}
                onChange={formik.handleChange}
                options={[
                  { value: "Artes", label: "Artes" },
                  { value: "Biologia", label: "Biologia" },
                  { value: "Ciências", label: "Ciências" },
                  { value: "Educação Física", label: "Educação Física" },
                  { value: "Física", label: "Física" },
                  { value: "Geografia", label: "Geografia" },
                  { value: "História", label: "História" },
                  { value: "Matématica", label: "Matématica" },
                  { value: "Português", label: "Português" },
                  { value: "Química", label: "Química" },
                ]}
              />
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={formik.values.cost}
                onChange={formik.handleChange}
              />
            </S.Fieldset>
            {formik.errors.cost && formik.touched.cost && (
              <Errors>{formik.errors.cost}</Errors>
            )}

            <S.Fieldset>
              <S.Legend>
                Horários disponíveis
                <S.ButtonNewSchedule type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </S.ButtonNewSchedule>
              </S.Legend>

              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <S.ScheduleItem key={scheduleItem.week_day}>
                    <Select
                      name="week-day"
                      label="Dia da semana"
                      value={formik.values.scheduleItems[0].week_day}
                      onChange={formik.handleChange}
                      options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda-feria" },
                        { value: "2", label: "Terça-feira" },
                        { value: "3", label: "Quarta-feira" },
                        { value: "4", label: "Quinta-feira" },
                        { value: "5", label: "Sexta-feira" },
                        { value: "6", label: "Sábado" },
                      ]}
                    />

                    <Input
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={(e) =>
                        setScheduleItemValue(index, "from", e.target.value)
                      }
                    />
                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={(e) =>
                        setScheduleItemValue(index, "to", e.target.value)
                      }
                    />
                  </S.ScheduleItem>
                );
              })}
            </S.Fieldset>

            <S.Footer>
              <S.P>
                <S.ImgInfo src={warningIcon} />
                Importante! <br />
                Preencha todos os dados
              </S.P>
              <S.Button type="submit">Salvar cadastro</S.Button>
            </S.Footer>
          </S.Form>
        </S.Main>
      </PageHeader>
    </S.Container>
  );
};

export default TeacherList;
