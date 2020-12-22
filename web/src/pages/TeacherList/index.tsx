import React from "react";
import Input from "../../components/Inputs";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import * as S from "./styles";

const TeacherList: React.FC = () => {
  return (
    <S.Container>
      <PageHeader title="Estes sãso os proffys disponíveis.">
        <S.SearchTeachers>
          <Select
            name="subject"
            label="Matéria"
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
          <Select
            name="wee-day"
            label="Dia da semana"
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
          <Input type="time" name="time" label="Hora" />
        </S.SearchTeachers>
      </PageHeader>

      <S.Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </S.Main>
    </S.Container>
  );
};

export default TeacherList;
