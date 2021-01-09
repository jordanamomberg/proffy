import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import * as S from "./styles";
import api from "../../services/api";

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection(): void {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <S.TeacherItem>
      <S.Header>
        <S.Avatar src={teacher.avatar} alt={teacher.name}></S.Avatar>
        <S.BlockInfo>
          <S.NameProffy>{teacher.name}</S.NameProffy>
          <S.Matter>{teacher.subject}</S.Matter>
        </S.BlockInfo>
      </S.Header>

      <S.Presentation>{teacher.bio}</S.Presentation>

      <S.Footer>
        <S.Price>
          Preço/hora
          <S.PriceValue>R$ {teacher.cost}</S.PriceValue>
        </S.Price>

        <S.Button
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          onClick={createNewConnection}
        >
          <S.IconImg src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </S.Button>
      </S.Footer>
    </S.TeacherItem>
  );
};

export default TeacherItem;
