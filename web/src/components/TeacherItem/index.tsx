import React from "react";
import JordanaAvatar from "../../assets/images/jordana.jpg";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import * as S from "./styles";

const TeacherItem: React.FC = () => {
  return (
    <S.TeacherItem>
      <S.Header>
        <S.Avatar src={JordanaAvatar}></S.Avatar>
        <S.BlockInfo>
          <S.NameProffy>Jordana Momberg</S.NameProffy>
          <S.Matter>Engenharia de software</S.Matter>
        </S.BlockInfo>
      </S.Header>

      <S.Presentation>Louca por tecnologia.</S.Presentation>

      <S.Footer>
        <S.Price>
          Preço/hora
          <S.PriceValue>R$ 110,00</S.PriceValue>
        </S.Price>

        <S.Button type="button">
          <S.IconImg src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </S.Button>
      </S.Footer>
    </S.TeacherItem>
  );
};

export default TeacherItem;
