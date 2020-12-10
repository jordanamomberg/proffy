import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import * as S from "./styles";

const TeacherList: React.FC = () => {
  return (
    <S.Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <S.SearchTeachers>
          <S.InputBlock>
            <S.Label htmlFor="subject">Matéria</S.Label>
            <S.Input type="text" id="subject" />
          </S.InputBlock>
          <S.InputBlock>
            <S.Label htmlFor="week_day">Dia da semana</S.Label>
            <S.Input type="text" id="subject" />
          </S.InputBlock>
          <S.InputBlock>
            <S.Label htmlFor="time">Hora</S.Label>
            <S.Input type="text" id="subject" />
          </S.InputBlock>
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
